export type Project = {
  name: string;
  title?: string;
  period?: string;
  summary: string;
  stack: { name: string; icon: string }[];
  link?: string;
  details: string[];
};

export const projects: Project[] = [
  {
    name: "Internal LMS @ Antra, Inc.",
    title: "Full Stack Developer",
    period: "Jun 2024 – Jul 2025",
    summary:
      "Learning management platform used internally for onboarding, training, and assignment tracking.",
    stack: [
      { name: "Angular", icon: "/icons/Angular.svg" },
      { name: "Typescript", icon: "/icons/Typescript.svg" },
      { name: "Spring Boot", icon: "/icons/Spring.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    ],
    details: [
      "Built dynamic forms, charts, and real-time search filters using Angular 15 and RxJS.",
      "Implemented secure login, JWT-based authentication, and role-based access control.",
      "Used Reactive Forms and Validators for multi-step onboarding and assignments.",
      "Built reusable components and state-managed UI with signal-based architecture.",
      "Handled file uploads with drag-and-drop, progress indicators, and AWS S3 integration.",
      "Created RESTful endpoints with Spring Boot and PostgreSQL for user, file, and progress data.",
      "Built unit and integration tests with Jasmine, Karma, and JUnit.",
      "Created CI/CD pipelines using GitHub Actions with linting, testing, and AWS deployment.",
    ],
  },
  {
    name: "AI Fitness Assistant @ ORA Co.",
    title: "Full Stack Developer",
    period: "Nov 2023 – Jun 2024",
    summary:
      "AI-powered fitness assistant that delivers personalized workout and recovery guidance using real-time feedback.",
    stack: [
      { name: "Next.js", icon: "/icons/Next.js.svg" },
      { name: "Typescript", icon: "/icons/Typescript.svg" },
      { name: "Python", icon: "/icons/Python.svg" },
      { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
    ],
    link: "https://www.orafitness.ai",
    details: [
      "Built responsive frontend using Next.js 13 App Router and Tailwind CSS.",
      "Integrated Hugging Face API for real-time posture feedback with webcam feed.",
      "Developed user dashboard for profile, history, and goal tracking.",
      "Implemented Supabase Auth and PostgreSQL for secure user management.",
      "Set up vector search and embeddings for personalized recommendations.",
      "Deployed application using Vercel and monitored performance using Lighthouse.",
    ],
  },
  {
    name: "Official Website @ KSEA",
    title: "Webmaster",
    period: "Jul 2022 – Jun 2024",
    summary:
      "Created and maintained the official website for the Southern Virginia Chapter of KSEA using WordPress, deployed using Virginia Tech's cloud through Gitlab",
    stack: [
      { name: "WordPress", icon: "/icons/WordPress.svg" },
      { name: "HTM5L", icon: "/icons/HTML5.svg" },
      { name: "CSS3", icon: "/icons/CSS3.svg" },
    ],
    details: [
      "Created and managed the official KSEA SVA website using WordPress CMS.",
      "Deployed site on Virginia Tech’s internal server for secure hosting.",
      "Maintained and updated site content for professional and social activities.",
    ],
    link: "https://ksea.vt.domains",
  },
  {
    name: "BraveSouls Project Management System @ Virginia Tech",
    title: "Project Manager & Lead Developer",
    period: "Jan 2024 – May 2024",
    summary:
      "Full-stack web app to support senior project management for CS faculty at Virginia Tech, deployed onto Virginia Tech's cloud through Gitlab",
    stack: [
      { name: "React.js", icon: "/icons/React.svg" },
      { name: "Node.js", icon: "/icons/Node.js.svg" },
      { name: "Docker", icon: "/icons/Docker.svg" },
      { name: "MySQL", icon: "/icons/MySQL.svg" },
    ],
    details: [
      "Led UI/UX design and frontend development using React.js.",
      "Designed and implemented the database schema.",
      "Built backend RESTful APIs and integrated authentication.",
      "Ensured secure data handling and cloud deployment with Docker.",
      "Managed Agile workflows and team communication.",
    ],
  },
];
