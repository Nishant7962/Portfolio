export interface WhatIDoItem {
  title: string;
  description: string;
  tags: string[];
}

export interface CareerItem {
  role: string;
  organization: string;
  period: string;
  meta?: string;
  points: string[];
}

export interface Project {
  title: string;
  category: string;
  stack: string[];
  features: string[];
  image?: string;
  link?: string;
}

export const profile = {
  firstName: "Nishant",
  lastName: "Ghadge",
  initials: "NG",
  title: "Fullstack Developer",
  email: "nishant7962@gmail.com",
  linkedin: "https://www.linkedin.com/in/nishantghadge",
  location: "Pune, Maharashtra, India",
  resumeUrl: "/Nishant_Ghadge_Resume.pdf",
};

export const about =
  "Fullstack Developer with 2+ years of experience building and shipping production web applications with React.js, Next.js, Angular, TypeScript, Node.js, Express.js, and MongoDB. Strong in responsive UI development, REST API design and integration, secure authentication, and Agile delivery across the full SDLC through production deployment. Comfortable working independently in remote teams.";

export const whatIDo: WhatIDoItem[] = [
  {
    title: "FRONTEND",
    description:
      "Responsive, production-ready UIs with React.js, Next.js, and Angular.",
    tags: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "SCSS",
      "RxJS / NgRx",
      "Jasmine / Karma",
    ],
  },
  {
    title: "BACKEND & CLOUD",
    description:
      "Secure, scalable APIs with Node.js and Express.js.",
    tags: [
      "Node.js",
      "Express.js",
      "WebSocket",
      "MongoDB",
      "MySQL",
      "Prisma",
      "JWT / OAuth 2.0 / RBAC",
      "Docker",
      "AWS",
      "CI/CD",
      "OpenAI / Claude APIs",
    ],
  },
];

export const career: CareerItem[] = [
  {
    role: "B.Tech, Computer Science & Engineering",
    organization: "Kolhapur, Maharashtra",
    period: "2023",
    meta: "Score: 80%",
    points: [
      "Full Stack Development Certification — Seed Infotech, Pune (Grade: A+).",
    ],
  },
  {
    role: "Software Engineer — Fullstack",
    organization: "Zimetrics Technology",
    period: "NOW",
    meta: "Aug 2024 – Present · Pune",
    points: [
      "Built and shipped production features with React.js and Next.js, delivering responsive UIs with HTML5, CSS3 (Flexbox/Grid), and Tailwind CSS.",
      "Built scalable enterprise applications with Angular, TypeScript, Node.js, Express.js, and MongoDB using reusable components, directives, pipes, and services.",
      "Designed and integrated RESTful APIs with Node.js/Express.js and Prisma/Mongoose, applying RxJS/NgRx for reliable async data and complex UI flows.",
      "Implemented secure authentication and authorization with JWT, OAuth 2.0, and RBAC.",
      "Automated production deployments with Docker, AWS, and CI/CD pipelines, improving performance and release reliability.",
      "Maintained quality through Jasmine/Karma unit tests, code reviews, and documentation in Agile sprints with a remote team.",
      "Used Claude Code for systematic feature delivery, refactoring, and test coverage while maintaining coding standards.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI-Powered LLM Conversational Assistant",
    category: "AI · Real-time Platform",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB", "WebSocket", "AWS"],
    features: [
      "Real-time conversational platform with WebSocket streaming and reusable chat, history, search, and pagination components.",
      "Express.js + MongoDB services for prompts, responses, and feedback, secured with JWT and RBAC.",
      "Integrated OpenAI services for contextual AI responses.",
    ],
  },
  {
    title: "Model Review & Governance Dashboard",
    category: "Enterprise Dashboard",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "AWS"],
    features: [
      "Responsive Angular dashboard for model governance, audit tracking, and validation workflows with advanced filtering.",
      "REST APIs on Node.js/Express.js over MongoDB and MySQL with RBAC approval workflows.",
      "Excel export reporting and optimized API response time and reliability.",
    ],
  },
];
