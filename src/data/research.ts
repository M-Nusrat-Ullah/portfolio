import type { Status } from "./status";

export type ResearchItem = {
  title: string;
  label: string;
  period: string;
  status: Status;
  question: string;
  data?: string;
  method: string[];
  progress: string;
  next: string;
};

export const research: ResearchItem[] = [
  {
    title: "PSO/GA-optimised LSTM autoencoder for cellular anomaly detection",
    label: "MSc thesis · Jahangirnagar University",
    period: "2026",
    status: "In progress",
    question:
      "Most anomaly-detection work for mobile networks relies on simulators. How well does a PSO/GA-optimised LSTM autoencoder find anomalies in real operator performance data at national scale?",
    data: "Real PM data from a national mobile operator: over a million daily records from tens of thousands of cell sectors, multi-RAT, about 50 KPI columns.",
    method: [
      "Exploratory analysis found 3G largely sunset and inf/NaN artefacts. I pivoted from forecasting to cross-sectional anomaly detection, because a 15-day window is too short for a forecasting paper.",
      "Locked 21 design decisions in a master plan: model, PSO/GA search, risk register and paper skeleton.",
      "Two validation tracks: operator weak labels from availability, outage and RAB columns, plus labelled fault injection on my own 4G LTE testbed.",
    ],
    progress: "Design complete; implementation is next.",
    next: "Model implementation and PSO/GA search on the operator data. Target venue: IEEE Access (IEEE WCNC / GLOBECOM workshops as fallback).",
  },
  {
    title: "Worth the Tokens? LLM-preference rewards vs classical exploration bonuses",
    label: "Independent research",
    period: "2026",
    status: "In progress",
    question:
      "LLM-derived intrinsic rewards (Motif-style) beat novelty bonuses on NetHack. Do they still win in a controlled, cost-normalised comparison on MiniGrid, where count-based, RND and E3B bonuses are strongest?",
    method: [
      "A literature check confirmed the gap: the closest prior work used one environment, A2C and no strong baselines.",
      "Pre-registered spec: 4 MiniGrid environments in fixed order, 6 conditions × 10 seeds (240 runs), CleanRL-anchored PPO, a Bradley–Terry reward model with pass/fail gates, rliable IQM statistics, and kill criteria and failure rules written in advance.",
      "Consolidated into a self-contained spec v3 (Nov 2026).",
    ],
    progress: "Concept phase complete; the PPO baseline implementation is next.",
    next: "A reference PPO implementation validated against an independent baseline. Target: a NeurIPS 2027 workshop.",
  },
];

export const futureDirections =
  "World models as neural game engines: measuring a generative model's state consistency against emulator RAM, which serves as ground truth. Parked because of hardware limits, and kept as a possible PhD direction.";
