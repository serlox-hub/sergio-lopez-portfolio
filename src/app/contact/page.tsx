import {
  Column,
  Flex,
  Heading,
  Text,
  IconButton,
} from "@once-ui-system/core";
import { baseURL, person, social, contact } from "@/resources";

export default function Contact() {
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Column maxWidth="xs" gap="16">
        <Heading variant="display-strong-s">{contact.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {contact.description}
        </Text>

        <Text variant="body-default-m" marginTop="m">
          You can find me on the following platforms:
        </Text>
        <Flex gap="m" wrap>
          {social.map((item) => (
            item.link && (
              <IconButton
                key={item.name}
                href={item.link}
                icon={item.icon}
                variant="secondary"
                size="l"
                aria-label={item.name}
              />
            )
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
