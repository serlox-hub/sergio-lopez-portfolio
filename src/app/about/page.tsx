import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
} from "@once-ui-system/core";
import { Avatar } from "@/components/Avatar";
import { about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import { withBasePath } from "@/utils/utils";

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column
          className={styles.avatar}
          position="sticky"
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={withBasePath(person.avatar)} size="xl" unoptimized />

          <Column horizontal="start" gap="24">
            <Flex gap="8" vertical="center">
              <Icon name="location" onBackground="accent-weak" />
              <Text variant="body-default-m">{person.location}</Text>
            </Flex>
            {person.languages.length > 0 && (
              <Flex gap="8" vertical="start">
                <Icon name="language" onBackground="accent-weak" />
                <Column gap="4">
                  {person.languages.map((language) => (
                    <Text key={language.name} variant="body-default-m">
                      {language.name} - {language.level}
                    </Text>
                  ))}
                </Column>
              </Flex>
            )}
          </Column>

          <Flex
            height="1"
            marginTop="xs"
            width="160"
            background="neutral-strong"
            hide="s"
          ></Flex>
          {(about.technical.skillTags.length > 0 ||
            about.technical.softSkillTags.length > 0) && (
            <Flex
              className={styles.blockAlign}
              gap="8"
              wrap
              data-border="rounded"
              maxWidth="160"
              hide="s"
            >
              {about.technical.skillTags.map((tag) => (
                <Tag key={tag} variant="neutral">
                  {tag}
                </Tag>
              ))}
              {about.technical.softSkillTags.map((tag) => (
                <Tag key={tag} variant="info">
                  {tag}
                </Tag>
              ))}
            </Flex>
          )}
          {about.tableOfContent.display && (
            <Column paddingTop="l" hide="m">
              <TableOfContents structure={structure} about={about} />
            </Column>
          )}
        </Column>
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {about.displaySocial && social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-m"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="56">
                {about.work.experiences.map((experience, index) => (
                  <Column
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                  >
                    <Flex
                      fillWidth
                      vertical="center"
                      gap="16"
                      marginBottom="12"
                    >
                      <Avatar
                        src={withBasePath(experience.logo)}
                        size="m"
                        unoptimized
                      />
                      <Column>
                        <Text
                          id={experience.company}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Column>
                    </Flex>
                    <Column gap="16">
                      {experience.achievements.map((achievement) => (
                        <Column key={`${achievement.role}`} fillWidth gap="4" marginBottom="s">
                          <Column marginBottom="xs">
                            <Text
                              id={achievement.role}
                              variant="body-default-m"
                              onBackground="brand-weak"
                            >
                              {achievement.role}
                            </Text>
                            <Text
                              variant="body-default-xs"
                              onBackground="neutral-weak"
                              style={{ flex: 1 }}
                            >
                              {achievement.timeframe}
                            </Text>
                          </Column>
                          <Text
                            variant="body-default-m"
                            onBackground="neutral-weak"
                          >
                            {achievement.description}
                          </Text>
                        </Column>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}
          {about.studies.display && (
            <>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="56">
                {about.studies.institutions.map((institution, index) => (
                  <Flex
                    key={`${institution.name}-${index}`}
                    fillWidth
                    horizontal="space-between"
                    vertical="center"
                    marginBottom="4"
                    gap="16"
                  >
                    <Avatar
                      src={withBasePath(institution.logo)}
                      size="m"
                      unoptimized
                    />
                    <Column
                      key={`${institution.name}-${index}`}
                      fillWidth
                      gap="4"
                    >
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Column>
                  </Flex>
                ))}
              </Column>
            </>
          )}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              {about.technical.description && (
                <Text
                  variant="body-default-m"
                  marginBottom="l"
                  onBackground="neutral-weak"
                >
                  {about.technical.description}
                </Text>
              )}
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
