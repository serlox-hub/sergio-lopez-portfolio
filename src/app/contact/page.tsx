import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
} from "@once-ui-system/core";
import { contact, social } from "@/resources";

export default function Contact() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Column
        style={{
          padding: "4rem 2rem",
          borderRadius: "0 0 2rem 2rem",
          color: "white",
          textAlign: "center",
        }}
        horizontal="center"
        gap="16"
      >
        <Heading variant="display-strong-xl" style={{ color: "white" }}>
          {contact.title}
        </Heading>
        <Text variant="body-default-l" style={{ color: "white", opacity: 0.9 }}>
          {contact.description}
        </Text>
      </Column>

      <Column maxWidth="xs" gap="24" paddingTop="xl" horizontal="center">
        <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "center" }}>
          {contact.footer}
        </Text>
        <Flex gap="m" wrap horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <Button
                  key={item.name}
                  href={item.link}
                  prefixIcon={item.icon}
                  size="m"
                  data-border="rounded"
                  style={{
                    transition: "transform 0.2s",
                  }}
                >
                  {item.name}
                </Button>
              )
          )}
        </Flex>
      </Column>
    </Column>
  );
}
