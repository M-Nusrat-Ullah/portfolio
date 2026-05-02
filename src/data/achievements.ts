export type Achievement = {
  title: string;
  detail: string;
  rank?: string;
};

export const achievements: Achievement[] = [
  {
    title: "DIU Take-Off Programming Contest",
    detail: "Inter-batch programming contest at Daffodil International University",
    rank: "Rank 5",
  },
  {
    title: "DIU Intra University Programming Contest",
    detail: "University-wide competitive programming contest",
    rank: "Rank 6",
  },
  {
    title: "ICPC Dhaka Regional 2020 (Online Preliminary)",
    detail: "International Collegiate Programming Contest — regional round",
    rank: "Top 7%",
  },
  {
    title: "NCPC MIST 2020",
    detail: "National Collegiate Programming Contest hosted by MIST",
    rank: "Top 35%",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "1300+", label: "Problems Solved" },
  { value: "4", label: "Online Judges" },
  { value: "5+", label: "Contest Awards" },
  { value: "3+", label: "Years Engineering" },
];