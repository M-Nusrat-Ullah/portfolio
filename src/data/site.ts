export const SITE_URL = "https://nusrat-ullah.vercel.app";

export const profile = {
  name: "M Nusrat Ullah",
  headline: "5G Core & Telecom Platform Engineer",
  oneLiner:
    "Product lead for a carrier-grade AAA server in production at Grameenphone (Telenor).",
  intro:
    "Over three years at Nybsys building and running 5G standalone cores, RAN integrations and network-management data pipelines, alongside an MSc in CSE (AI/ML) at Jahangirnagar University.",
  location: "Dhaka, Bangladesh",
  description:
    "M Nusrat Ullah: 5G core and telecom platform engineer. Product lead for Aegis AAA, a carrier-grade EAP-AKA RADIUS server in production at Grameenphone (Telenor). MSc CSE (AI/ML) researcher at Jahangirnagar University.",
};

export const links = {
  email: "nusrat.ullah.tahmid@gmail.com",
  github: "https://github.com/M-Nusrat-Ullah",
  linkedin: "https://www.linkedin.com/in/nusrat-ullah-tahmid",
  codeforces: "https://codeforces.com/profile/demonlord",
  leetcode: "https://leetcode.com/u/nusrat_ullah/",
};

/** CV buttons render only when the matching PDF exists in /public. */
export const cvFiles = [
  { label: "Industry CV", file: "M_Nusrat_Ullah_Industry_CV.pdf" },
  { label: "Academic CV", file: "M_Nusrat_Ullah_Academic_CV.pdf" },
] as const;

export const navLinks = [
  { href: "/#featured", label: "Work" },
  { href: "/#research", label: "Research" },
  { href: "/#personal", label: "Personal" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];
