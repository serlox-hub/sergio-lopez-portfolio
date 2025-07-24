import { Logo } from "@once-ui-system/core";

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
  languages: ["Spanish", "English"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Sergio López Portfolio</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
          I'm Sergio, a full stack engineer with nearly a decade of experience building scalable, clean, 
          and long-lasting software solutions. I don’t just code — I design systems, optimize processes, 
          and remove friction at every stage of the development lifecycle.
          <br /><br />
          I’ve led technical squads and understand what it takes to guide a team, set priorities, and make 
          decisions. Still, my favorite place to make an impact is in the code — creating, improving, and 
          building with intention.
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
        role: "Senior Lead Software Engineer",
        achievements: [
          <>
            2018 - 2022: Hired as a React developer with no prior experience, I quickly ramped up and became 
            an active contributor to both the technical and functional design of new features.<br />
            Worked on refactoring legacy code to improve maintainability and performance — including major 
            transitions such as migrating views from JSP to React.<br />
            Gained experience in automated testing and progressively adopted best practices in front-end 
            architecture and component design.
          </>,
          <>
            2022 - 2024: As the team grew and I proved my value over time, I was promoted to Squad Lead after 
            four years.<br />
            I led a cross-functional team of 10 people, including frontend and backend developers, QA engineers, 
            and designers.<br />
            My responsibilities included managing priorities, facilitating agile ceremonies (daily stand-ups, 
            sprint planning, retrospectives), and aligning technical execution with business goals.<br />
            I also conducted performance evaluations, supported career development, and created a culture of 
            accountability, collaboration, and continuous improvement.
          </>,
          <>
            2024 - 2025: After a company-wide downsizing led to the merging of teams, I took the opportunity to 
            return to what I loved most: a hands-on technical role as an individual contributor.<br />
            I remained actively involved across all areas of development, provided ongoing mentorship, and focused 
            on driving cross-team efficiency and engineering excellence.<br /><br />

            One of my most impactful initiatives was leading a greenfield GitLab CI pipelines project, which 
            significantly improved delivery speed and consistency.<br />
            I built a robust automation framework that included versioning, changelog generation, reusable 
            build/test/publish templates for various project types, and automated deployments to preview, 
            staging, and production environments with integrated testing and vulnerability reporting.<br />
            This initiative enabled teams across the company to adopt standardized, reliable, and scalable CI/CD 
            practices.
          </>
        ],
        images: [],
      },
      {
        company: "SISnet 360",
        timeframe: "2016 - 2018",
        role: "Full Stack Developer",
        achievements: [
          <>
            As my first job, I developed part of the architecture of SISnet, a web application for the insurance 
            and financial sectors.
            Key responsibilities included back-end development and maintenance, API implementation, and research 
            of emerging technologies.
            <br /><br />
            Technologies used:
            Java, JSP (back-end); HTML, CSS, jQuery (front-end); Oracle, SQL Server, DB2 (database layer).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "I.E.S. El cañaveral",
        description: <>2016 - Higher Technician in Web Application Development</>,
      },
      {
        name: "CFTIC Getafe",
        description: <>2015 - Android develop course</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Main Technical Skills",
        description: <>
          - JavaScript & React (front-end development)<br />
          - Java with Spring Framework (back-end development)<br />
          - MySQL (database design and optimization)<br />
          - GitLab CI (CI/CD pipeline design and automation)</>,
        images: [],
      },
      {
        title: "Soft Skills",
        description: <>
          - Technical mentorship<br />
          - Team leadership<br />
          - Cross-team collaboration<br />
          - Agile ceremonies facilitation<br />
          - Performance reviews & career growth support</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
