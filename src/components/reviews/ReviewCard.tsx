"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ReviewCardProps {
  title: string;
  publishedAt: string;
  relationship: string;
  content: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  publishedAt,
  relationship,
  content,
}) => {
  return (
    <Column gap="xs">
      <Heading as="h2" wrap="balance" variant="heading-strong-xl">
        {title}
      </Heading>
      <Text wrap="balance" variant="body-default-s">
        Published at:{" "}
        <Text onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
          {publishedAt}
        </Text>
      </Text>
      <Text wrap="balance" variant="body-default-s">
        Relationship:{" "}
        <Text onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
          {relationship}
        </Text>
      </Text>
      <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
        {content}
      </Text>
    </Column>
  );
};
