"use client";
import React, { forwardRef } from "react";
import { Skeleton, Icon, Text, Flex, Media } from "@once-ui-system/core";
import styles from "./Avatar.module.scss";

const sizeMapping = {
  xs: 20,
  s: 24,
  m: 32,
  l: 48,
  xl: 160,
};

const statusIndicatorSizeMapping = {
  xs: "s",
  s: "s",
  m: "m",
  l: "m",
  xl: "l",
};

interface AvatarProps extends React.ComponentProps<typeof Flex> {
  size?: "xs" | "s" | "m" | "l" | "xl" | number;
  value?: string;
  src?: string;
  loading?: boolean;
  empty?: boolean;
  statusIndicator?: {
    color: "green" | "yellow" | "red" | "gray";
  };
  unoptimized?: boolean; // <-- Agregamos esta prop
  style?: React.CSSProperties;
  className?: string;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(({
  size = "m",
  value,
  src,
  loading,
  empty,
  statusIndicator,
  unoptimized = false, // por defecto falso para no romper nada
  className,
  style = {},
  ...rest
}, ref) => {

  const sizeInRem = typeof size === "number" ? `${size}rem` : undefined;
  const sizeStyle = sizeInRem
    ? {
        width: sizeInRem,
        height: sizeInRem,
        minWidth: sizeInRem,
        minHeight: sizeInRem,
        ...style,
      }
    : style;

  const isEmpty = empty || (!src && !value);

  if (value && src) {
    throw new Error("Avatar cannot have both 'value' and 'src' props.");
  }

  if (loading) {
    return (
      <Skeleton
        {...rest}
        border="neutral-medium"
        shape="circle"
        width={typeof size === "number" ? "m" : size}
        height={typeof size === "number" ? "m" : size}
        className={`${styles.avatar} ${className}`}
        aria-busy="true"
        aria-label="Loading avatar"
      />
    );
  }

  const renderContent = () => {
    if (isEmpty) {
      return (
        <Icon
          onBackground="neutral-medium"
          name="person"
          size="m"
          style={typeof size === "number" ? { fontSize: `${size / 3}rem` } : undefined}
          className={styles.icon}
          aria-label="Empty avatar"
        />
      );
    }

    if (src) {
      return (
        <Media
          radius="full"
          src={src}
          fill={true}
          alt="Avatar"
          unoptimized={unoptimized} // <-- Aquí pasamos la prop!
          sizes={typeof size === "string" ? `${sizeMapping[size]}px` : `${size * 16}px`}
          className={styles.image}
        />
      );
    }

    if (value) {
      return (
        <Text
          as="span"
          onBackground="neutral-weak"
          variant={`body-default-${typeof size === "string" ? size : "m"}`}
          className={styles.value}
          aria-label={`Avatar with initials ${value}`}
        >
          {value}
        </Text>
      );
    }

    return null;
  };

  return (
    <Flex
      ref={ref}
      role="img"
      horizontal="center"
      vertical="center"
      radius="full"
      border="neutral-strong"
      background="surface"
      style={sizeStyle}
      className={`${styles.avatar} ${typeof size === "string" ? styles[size] : ""} ${className || ""}`}
      {...rest}
    >
      {renderContent()}
    </Flex>
  );
});

Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarProps };
