export type Status =
  | "In production"
  | "Production operations"
  | "Delivered for UAT"
  | "Resolved"
  | "Demo"
  | "Field work"
  | "Handed over"
  | "Built"
  | "In progress"
  | "Design stage"
  | "Cancelled prototype";

export type StatusTone = "live" | "done" | "progress" | "design" | "stopped";

export const statusTone: Record<Status, StatusTone> = {
  "In production": "live",
  "Production operations": "live",
  "Delivered for UAT": "done",
  Resolved: "done",
  Demo: "done",
  "Field work": "done",
  "Handed over": "done",
  Built: "done",
  "In progress": "progress",
  "Design stage": "design",
  "Cancelled prototype": "stopped",
};
