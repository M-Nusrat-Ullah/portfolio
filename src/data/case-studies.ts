import type { Status } from "./status";

export type CaseStudy = {
  slug: "aegis-aaa" | "athena-core" | "hermes-nms";
  title: string;
  subtitle: string;
  period: string;
  role: string;
  client?: string;
  status: Status;
  summary: string;
  highlights: string[];
  problem: string;
  did: string[];
  result: string[];
  stack: string[];
  incident: {
    title: string;
    when: string;
    cause: string;
    fix: string;
  };
  evidence: string;
  diagram: {
    title: string;
    description: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aegis-aaa",
    title: "Aegis AAA",
    subtitle: "EAP-AKA / AKA′ RADIUS server with high availability",
    period: "2026",
    role: "Product lead",
    client: "Grameenphone (Telenor)",
    status: "In production",
    summary:
      "Carrier-grade authentication for Grameenphone's Femto-over-Internet base stations. I lead the product and built the Go backend, the HA design and the signed release pipeline.",
    highlights: [
      "Live in Grameenphone production",
      "Go backend: Milenage AuC, EAP-AKA / AKA′, RADIUS",
      "keepalived + Postgres HA with fence-the-loser recovery",
    ],
    problem:
      "Grameenphone's Femto-over-Internet base stations carry vSIM credentials and need 3GPP-grade authentication before they reach the network.",
    did: [
      "Built the Go backend: a local Milenage AuC, EAP-AKA (RFC 4187) and EAP-AKA′ (RFC 5448), RADIUS, HTTP Digest and CWMP device authentication.",
      "Designed high availability on keepalived and Postgres replication, with a root-level HA control helper.",
      "Built SNMP fault management with a 171-code alarm catalogue, sent northbound to Hermes NMS.",
      "Set up a signed release pipeline (Ed25519 key of record), offline .deb packaging, a setup wizard and an operator console.",
      "Shipped the v2.0.1 release: packaged the HA helper, fixed seven defects, ran the rollback path live for the first time, and validated the release on two lab platforms.",
      "Ran repo-wide audits that fed 116 tracked tickets, from the split-brain root cause to Go CVE bumps.",
    ],
    result: [
      "Live in Grameenphone production.",
      "Production upgrades are rehearsed on a lab HA pair before rollout.",
      "The split-brain root cause was found and fixed in the lab.",
    ],
    stack: [
      "Go",
      "RADIUS",
      "EAP-AKA / AKA′",
      "Milenage",
      "keepalived",
      "PostgreSQL replication",
      "SNMP",
      "Ed25519 signing",
      ".deb packaging",
      "govulncheck",
    ],
    incident: {
      title: "Split brain in the lab HA pair",
      when: "Nov 2026",
      cause:
        "keepalived's notify-master hook promoted a node as soon as it saw itself as master, and an asynchronous hook raced that promotion, so both nodes could end up acting as primary. An earlier silent RADIUS drop on the HA virtual IP, traced to a failed Postgres promotion, had been the first sign.",
      fix: "Fixed the race and moved to a fence-the-loser HA design: keepalived is disabled at boot, and a node rejoins only through a written manual runbook.",
    },
    evidence: "92 commits to the AAA server and 11 to its companion codebase (Sep 2025 – Nov 2026).",
    diagram: {
      title: "Aegis AAA authentication and HA flow",
      description:
        "A femto base station holding vSIM credentials authenticates with EAP-AKA′ over RADIUS to a keepalived virtual IP. Behind it, an active node runs the Milenage AuC, EAP-AKA and RADIUS, and replicates Postgres to a standby node that stays fenced until a manual rejoin. The active node sends SNMP alarms to Hermes NMS and is managed from an operator console. Releases arrive as signed .deb packages.",
    },
  },
  {
    slug: "athena-core",
    title: "Athena Core",
    subtitle: "Production 5G standalone core on Kubernetes",
    period: "Dec 2025 – 2026",
    role: "Built end to end",
    status: "In production",
    summary:
      "A full Open5GS standalone core running on Kubernetes, which I built end to end. It serves a live NanoLink n78 gNB and carried an end-to-end IoT demo.",
    highlights: [
      "Production SA core with a live n78 gNB and UE",
      "Per-interface network segmentation, FRR routing sidecar",
      "Helm chart with CI/CD testing",
    ],
    problem:
      "Run a complete 5G standalone core as a production service on Kubernetes, with each 3GPP interface on its own network and proper routing for the user plane.",
    did: [
      "Deployed the full Open5GS SA network-function set on Kubernetes: indirect SBI through an SCP, a CUPS-split UPF, and multi-gNB support.",
      "Segmented each interface onto its own network with Flannel, OVS and MACVLAN.",
      "Added an FRR sidecar for UPF routing.",
      "Packaged the core as a Helm chart with CI/CD testing, rebranded it as Athena, and load-tested it with UERANSIM.",
      "Remediated the CIS Docker Benchmark (4.1, 4.8, 4.9) across the core, DNS-ACL, OVS-CNI and FRR images, with documented risk acceptances where root is required.",
      "Evaluated open5gs-nms: verified all 17 network functions on a test VM, including a GUI-driven AMF restart, and designed an adapter for Kubernetes.",
    ],
    result: [
      "Production SA core serving a live NanoLink n78 gNB and UE.",
      "Used for an end-to-end IoT demo: a dashboard fed through a CPE on the 5G radio, using a SIM I programmed myself.",
      "N6 internet path verified without NAT.",
      "Uplink loss traced away from the core: UPF → UE packet generation sustained 250+ Mbps. The suspected cause is on the radio side; a UE → UPF test is still open to fully clear the core for the uplink.",
    ],
    stack: [
      "Open5GS",
      "Kubernetes",
      "Helm",
      "Flannel",
      "OVS",
      "MACVLAN",
      "FRR",
      "UERANSIM",
      "Docker",
      "CIS Benchmark",
    ],
    incident: {
      title: "Production UPF running a pruned image",
      when: "May 2026",
      cause:
        "Stale-image cleanup during CIS hardening pruned the image version the production UPF was running from the node's container cache, so the UPF would not have survived a restart.",
      fix: "Recovered the image from the lab, then moved the UPF to the hardened version in a maintenance window. BGP re-established in under 45 seconds and PFCP was verified.",
    },
    evidence: "32 commits to the Athena Core codebase.",
    diagram: {
      title: "Athena Core on Kubernetes",
      description:
        "A UE or CPE connects over 5G NR to a NanoLink n78 gNB. The gNB reaches the control plane on Kubernetes over N2: AMF, SMF, NRF, AUSF, UDM and PCF, talking through an SCP. It sends user traffic over N3 to a CUPS-split UPF with an FRR routing sidecar, which reaches the internet over N6 without NAT. Each interface has its own network, using Flannel, OVS and MACVLAN.",
    },
  },
  {
    slug: "hermes-nms",
    title: "Hermes NMS",
    subtitle: "PM/KPI ingestion and dashboards for LTE radios",
    period: "2026",
    role: "KPI owner",
    client: "Grameenphone (Telenor)",
    status: "In production",
    summary:
      "Fixed the performance-data pipeline behind Grameenphone's LTE KPI dashboards: unit errors, lost multi-cell data and InfluxDB crashes.",
    highlights: [
      "Critical multi-cell data-loss bug fixed",
      "1000× and 100× unit errors corrected",
      "InfluxDB no longer OOM-killed under load",
    ],
    problem:
      "KPI dashboards for Grameenphone's LTE radios showed wrong values (1000× and 100× unit errors, 498% availability), lost data from dual-cell radios, and crashed InfluxDB.",
    did: [
      "Fixed the multi-cell PM parser, which merged cells last-wins and silently dropped data. The fix landed with 24 tests.",
      "Corrected counter units and gauge-vs-sum semantics, including a unit fix across seven call sites.",
      "Moved to two-stage aggregation and batched per-cell writes.",
      "Added an ingest ledger so status reads cost O(limit) instead of scanning everything.",
      "Built the KPI Graph grid and Table views.",
      "Ran a test week with a findings register that also records four of my own claims I later retracted.",
      "Ended a month-long ingest stall with one file-ownership fix, and traced blank KPI tiles to the RAN side rather than Hermes.",
    ],
    result: [
      "Critical data-loss bug fixed.",
      "Dashboards scale toward the design target instead of InfluxDB being OOM-killed.",
    ],
    stack: ["TypeScript", "NestJS", "React", "InfluxDB", "ClickHouse", "FTP ingest"],
    incident: {
      title: "18 hours of silent PM data loss",
      when: "Aug 2026",
      cause:
        "vsftpd log growth filled the ingest host's disk, and 1,139 collection windows were lost without anyone noticing.",
      fix: "Fixed the disk-full cause, and changed the pipeline so a full disk is no longer reported as a device fault.",
    },
    evidence: "103 commits to the Hermes NMS codebase (Sep 2025 – Nov 2026).",
    diagram: {
      title: "Hermes NMS performance-data pipeline",
      description:
        "LTE radios upload PM files over FTP. A multi-cell parser merges per-cell data and records each file in an ingest ledger for cheap status reads. Two-stage aggregation follows, then batched per-cell writes to InfluxDB, which feed the KPI Graph grid and Table views.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
