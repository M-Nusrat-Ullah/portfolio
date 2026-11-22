import { links } from "./site";

export type Credential = {
  title: string;
  institution?: string;
  period: string;
  details: string[];
  links?: { label: string; href: string }[];
};

export const education: Credential[] = [
  {
    title: "MSc in Computer Science & Engineering, major in AI/ML",
    institution: "Jahangirnagar University",
    period: "2025 – ongoing",
    details: [
      "Thesis on anomaly detection in real operator data (in progress, see Research).",
      "Cloud computing coursework: AWS and OpenStack, theory plus DevStack practicals.",
    ],
  },
  {
    title: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "2018 – 2022",
    details: [
      "CGPA 3.40 / 4.00.",
      "Undergraduate thesis: LSTM hyperparameter optimisation with PSO and genetic algorithms on time-series benchmarks.",
    ],
  },
];

export const credentials: Credential[] = [
  {
    title: "IELTS Academic: 7.0 overall (C1)",
    period: "Nov 2026",
    details: [],
  },
  {
    title: "ICPC Dhaka Regional 2020",
    institution: "Competitive programming",
    period: "2018 – 2022",
    details: [
      "Participant; top 7% in the online preliminary.",
      "1300+ problems solved across Codeforces, LeetCode, VJudge and Beecrowd.",
      "DIU CPC member, contest problem-setter and mentor.",
    ],
    links: [
      { label: "Codeforces", href: links.codeforces },
      { label: "LeetCode", href: links.leetcode },
    ],
  },
];
