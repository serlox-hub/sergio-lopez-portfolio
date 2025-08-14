const person = {
  firstName: "Sergio",
  lastName: "López",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "sergiolopezolmo@gmail.com",
  location: "Europe/Madrid",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2" },
  ],
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/serlox-hub",
  },
  {
    name: "GitLab",
    icon: "gitlab",
    link: "https://gitlab.com/serlox",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sergiolopezolmo/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  image: "/images/projects/portfolio.png",
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: "Get in Touch",
  description:
    "I'm always open to new ideas, collaborations. Feel free to explore my social profiles and reach out!",
  footer: "You can find me on the following platforms:",
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  displaySocial: false,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m Sergio, a full stack engineer with nearly a decade of
        experience building scalable, clean, and long-lasting software
        solutions. I don&apos;t just code — I design systems, optimize
        processes, and remove friction at every stage of the development
        lifecycle.
        <br />
        <br />
        I&apos;ve led technical squads and understand what it takes to guide a
        team, set priorities, and make decisions. Still, my favorite place to
        make an impact is in the code — creating, improving, and building with
        intention.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Devo",
        timeframe: "2018 - Present",
        logo: "/images/about/work/devo.png",
        achievements: [
          {
            role: "Tech Lead",
            timeframe: "2024 - 2025",
            description: (
              <>
                After a company-wide downsizing led to the merging of teams, I
                took the opportunity to return to what I loved most: a hands-on
                technical role as an individual contributor.
                <br />
                <br />
                I remained actively involved across all areas of development,
                provided ongoing mentorship, and focused on driving cross-team
                efficiency and engineering excellence.
                <br />
                <br />
                One of my most impactful initiatives was leading a greenfield
                GitLab CI pipelines project, which significantly improved
                delivery speed and consistency. I built a robust automation
                framework that included versioning, changelog generation,
                reusable build/test/publish templates for various project types,
                and automated deployments to preview, staging, and production
                environments with integrated testing and vulnerability
                reporting.
                <br />
                <br />
                This initiative enabled teams across the company to adopt
                standardized, reliable, and scalable CI/CD practices.
              </>
            ),
          },
          {
            role: "Squad Lead",
            timeframe: "2022 - 2024",
            description: (
              <>
                As the team grew and I proved my value over time, I was promoted
                to Squad Lead after four years.
                <br />
                <br />
                I led a cross-functional team of 10 people, including frontend
                and backend developers, QA engineers, and designers.
                <br />
                <br />
                My responsibilities included managing priorities, facilitating
                agile ceremonies (daily stand-ups, sprint planning,
                retrospectives), and aligning technical execution with business
                goals.
                <br />
                <br />I also conducted performance evaluations, supported career
                development, and created a culture of accountability,
                collaboration, and continuous improvement.
              </>
            ),
          },
          {
            role: "Software Engineer",
            timeframe: "2018 - 2022",
            description: (
              <>
                Hired as a React developer with no prior experience, I quickly
                ramped up and became an active contributor to both the technical
                and functional design of new features.
                <br />
                <br />
                Worked on refactoring legacy code to improve maintainability and
                performance — including major transitions such as migrating
                views from JSP to React.
                <br />
                <br />
                Gained experience in automated testing and progressively adopted
                best practices in front-end architecture and component design.
              </>
            ),
          },
        ],
      },
      {
        company: "SISnet 360",
        timeframe: "2016 - 2018",
        role: "Full Stack Developer",
        logo: "/images/about/work/sisnet.png",
        achievements: [
          {
            role: "Full Stack Developer",
            timeframe: "2016 - 2018",
            description: (
              <>
                As my first job, I developed part of the architecture of SISnet,
                a web application for the insurance and financial sectors. Key
                responsibilities included back-end development and maintenance,
                API implementation, and research of emerging technologies.
                <br />
                <br />
                Technologies used: Java, JSP (back-end); HTML, CSS, jQuery
                (front-end); Oracle, SQL Server, DB2 (database layer).
              </>
            ),
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "GitLab University",
        description: (
          <>Nov 2024 - GitLab Certified CI/CD Associate</>
        ),
        logo: "/images/about/studies/gitlab.jpg",
      },
      {
        name: "El Cañaveral High School",
        description: (
          <>Sep 2014 - Mar 2016 - Higher Technician in Web Application Development</>
        ),
        logo: "/images/about/studies/canaveral.jpg",
      },
      {
        name: "ICT Training Centre of Getafe",
        description: <>Aug 2015 - Android develop course</>,
        logo: "/images/about/studies/cftic.png",
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    description:
      "Not finding a specific skill or technology listed? That's never been a blocker. I thrive on learning quickly, adapting to new contexts, and picking up whatever tools the job demands — because great engineering is about mindset, not just checklists.",
    skillTags: ["JavaScript", "React", "Java", "Spring", "MySQL", "GitLab CI"],
    softSkillTags: ["Agile", "Mentorship", "Collaboration", "Leadership"],
    skills: [
      {
        title: "Main Technical Skills",
        description: (
          <>
            - JavaScript & React (front-end development)
            <br />
            - Java with Spring Framework (back-end development)
            <br />
            - MySQL (database design and optimization)
            <br />- GitLab CI (CI/CD pipeline design and automation)
          </>
        ),
      },
      {
        title: "Soft Skills",
        description: (
          <>
            - Technical mentorship
            <br />
            - Team leadership
            <br />
            - Team builder & cross-team collaboration
            <br />- Performance reviews & career growth support
          </>
        ),
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /work routes
};

const reviews = {
  path: "/reviews",
  label: "Reviews",
  title: "Reviews",
  description: `People who worked with ${person.name}`,
  request: {
    title: "Did we work together?",
    description:
      "If you have collaborated with me in the past, I would love to hear your feedback! Your insights are invaluable and help me grow as a professional.",
    link: "https://www.linkedin.com/in/sergiolopezolmo/details/recommendations/",
    buttonText: "Write a LinkedIn review",
    footer:
      "*By leaving a review, you agree that it may be displayed on this site. If you prefer to keep it private, please let me know.",
  },
  bgTokens: {
    effects: {
      mask: {
        cursor: true,
        x: 50,
        y: 0,
        radius: 100,
      },
      gradient: {
        display: true,
        opacity: 90,
        x: 50,
        y: 0,
        width: 50,
        height: 50,
        tilt: 0,
        colorStart: "accent-background-strong",
        colorEnd: "static-transparent",
      },
      dots: {
        display: true,
        opacity: 20,
        size: "2",
        color: "brand-on-background-weak",
      },
      grid: {
        display: false,
        opacity: 100,
        color: "neutral-alpha-medium",
        width: "0.25rem",
        height: "0.25rem",
      },
      lines: {
        display: false,
        opacity: 100,
        color: "neutral-alpha-medium",
        size: "16",
        thickness: 1,
        angle: 90,
      },
    },
  },
  // Create new project pages by adding a new .mdx file to app/reviews/reviews
  // All projects will be listed on the /reviews routes
};

export { person, social, home, about, work, contact, reviews };
