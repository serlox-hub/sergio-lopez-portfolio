"use client";

import {
  Button,
  Heading,
  Text,
  Background,
  Column,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { reviews } from "@/resources";

const { bgTokens } = reviews;

export const ReviewRequest = () => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: bgTokens.effects.mask.x,
          y: bgTokens.effects.mask.y,
          radius: bgTokens.effects.mask.radius,
          cursor: bgTokens.effects.mask.cursor,
        }}
        gradient={{
          display: bgTokens.effects.gradient.display,
          opacity: bgTokens.effects.gradient.opacity as opacity,
          x: bgTokens.effects.gradient.x,
          y: bgTokens.effects.gradient.y,
          width: bgTokens.effects.gradient.width,
          height: bgTokens.effects.gradient.height,
          tilt: bgTokens.effects.gradient.tilt,
          colorStart: bgTokens.effects.gradient.colorStart,
          colorEnd: bgTokens.effects.gradient.colorEnd,
        }}
        dots={{
          display: bgTokens.effects.dots.display,
          opacity: bgTokens.effects.dots.opacity as opacity,
          size: bgTokens.effects.dots.size as SpacingToken,
          color: bgTokens.effects.dots.color,
        }}
        grid={{
          display: bgTokens.effects.grid.display,
          opacity: bgTokens.effects.grid.opacity as opacity,
          color: bgTokens.effects.grid.color,
          width: bgTokens.effects.grid.width,
          height: bgTokens.effects.grid.height,
        }}
        lines={{
          display: bgTokens.effects.lines.display,
          opacity: bgTokens.effects.lines.opacity as opacity,
          size: bgTokens.effects.lines.size as SpacingToken,
          thickness: bgTokens.effects.lines.thickness,
          angle: bgTokens.effects.lines.angle,
          color: bgTokens.effects.lines.color,
        }}
        border="neutral-alpha-medium"
      />
      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {reviews.request.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {reviews.request.description}
      </Text>
      <Button
        id="mc-embedded-subscribe"
        value="Subscribe"
        size="m"
        href={reviews.request.link}
        target="_blank"
      >
        {reviews.request.buttonText}
      </Button>
    </Column>
  );
};
