export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  scope: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior RAN Integration and Solution Engineer",
    company: "Nybsys (Pvt.) Ltd.",
    companyUrl: "https://nybsys.com/",
    location: "Dhaka, Bangladesh",
    period: "Jul 2023 – Present",
    scope:
      "Scope: product lead for Aegis AAA in production at Grameenphone (Telenor), plus 5G SA core, RAN integration and NMS data-pipeline work for clients in Bangladesh, Malaysia and South Africa.",
    points: [
      "2026: product lead for Aegis AAA, live in Grameenphone production; KPI owner for the Hermes NMS PM pipeline; Kairos access CLI delivered for Grameenphone UAT; AegisCA radio certificate batches.",
      "Dec 2025 – 2026: built Athena Core, a production 5G SA core on Kubernetes.",
      "Jul 2026: prepared a 5G NSA client meeting for Banglalink (VEON) in one hour, separating tested from assumed claims (EN-DC gap).",
      "2025: live demo with Lanner at MWC 2025; core deployment and LMR noise reduction in Malaysia; defence private LTE (manpack); Grameenphone server hardening; Security Gateway test support.",
      "2023 – 2024: IMS and Open5GS integration from source, cloud cores on GCP and Azure, 5G base-station testing, O-RAN and NETCONF/YANG study.",
    ],
  },
  {
    role: "Web Development Trainee",
    company: "Spring Rain Pvt. Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Jun – Aug 2022",
    scope: "Full-stack web development with Node.js, Koa.js, React and MongoDB.",
    points: [],
  },
];
