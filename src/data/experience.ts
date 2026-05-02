export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Nybsys (Pvt) Ltd.",
    companyUrl: "https://nybsys.com/",
    location: "Dhaka, Bangladesh",
    period: "Jul 2023 — Present",
    current: true,
    description:
      "Working at the intersection of telecom infrastructure, system integration, and AI/ML deployment. Building production-grade Python tooling for large-scale network systems.",
    achievements: [
      "Designed & deployed 5G solutions on Kubernetes for Grameenphone POC",
      "Led Femto-Cell ↔ Macro-Cell integration for Grameenphone (Telenor) POC",
      "Deployed Private LTE for the Bangladesh Army, integrating PABX with cellular networks",
      "Configured Open5GS / Free5GC core networks (AMF, MME, SMF, UPF, SGWU)",
      "Built Python CLI tools to automate large-scale network operations",
      "Deployed OpenVINO AI models for text-to-speech inference",
    ],
    tech: ["Python", "Docker", "Kubernetes", "Linux", "5G/LTE", "Open5GS", "Free5GC", "Git"],
  },
  {
    role: "Web Development Trainee (Intern)",
    company: "Spring Rain Pvt. Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Jun 2022 — Aug 2022",
    description:
      "Three-month internship building full-stack applications with a senior team. Focused on modern JavaScript, REST APIs, and Agile delivery.",
    achievements: [
      "Built a full-stack book management app using Node.js, React, and MongoDB",
      "Worked in an Agile team using Git, code reviews, and Jira workflows",
      "Practiced clean code, debugging, and component-based design",
    ],
    tech: ["Node.js", "React.js", "MongoDB", "Koa.js", "Redux", "Git"],
  },
];

export type Education = {
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  details: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    degree: "MSc in Computer Science & Engineering — AI/ML Specialization",
    institution: "Jahangirnagar University",
    institutionUrl: "https://juniv.edu/",
    period: "2025 — Ongoing",
    details:
      "Specializing in Artificial Intelligence & Machine Learning. Research interests: generative AI, RAG, reinforcement learning.",
    current: true,
  },
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    institutionUrl: "https://daffodilvarsity.edu.bd/",
    period: "2018 — 2022",
    details:
      "Final CGPA: 3.40/4.00. Coursework: AI, Algorithms (A+), Data Structures (A+), OOP (A+), Robotics, Simulation. ACM-affiliated CPC member.",
  },
];