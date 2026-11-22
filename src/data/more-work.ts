import type { Status } from "./status";

export type WorkItem = {
  title: string;
  subtitle: string;
  period: string;
  status: Status;
  body: string[];
  result?: string;
  note?: string;
  tags: string[];
};

export const moreWork: WorkItem[] = [
  {
    title: "Kairos + TACACS+",
    subtitle: "No-shell, centrally authenticated access",
    period: "Oct – Nov 2026",
    status: "Delivered for UAT",
    body: [
      "Turned an access mandate into testable requirements with a gap matrix, and set industry-standard fallback: a TACACS+ FAIL is final, and only an ERROR falls back to break-glass.",
      "Found that pam_exec collapses FAIL and ERROR, so a native PAM module is needed.",
      "Built a host-level Kairos CLI so Grameenphone operators can view and control AAA and CA (status, version, IMSI lookup, logs, vSIM add, certificate creation) without SSH access to the nodes.",
    ],
    result:
      "Delivered for Grameenphone UAT on 18 Nov 2026, with client-facing output scrubbed of internal host and platform names.",
    tags: ["TACACS+", "PAM", "CLI", "Access control"],
  },
  {
    title: "AegisCA",
    subtitle: "Radio LDevID certificate issuance",
    period: "Oct – Nov 2026",
    status: "Production operations",
    body: [
      "Issued CMPv2 LDevID certificates for NanoLink radios on the production CA, in batches for the field operator.",
      "Built a production-replica lab CA and matched its command syntax to production with a universal IDevID fallback.",
    ],
    result:
      "Zero duplicate issuances. Every production write was gated, read-only checks ran first, and rollback was documented.",
    tags: ["PKI", "CMPv2", "IDevID / LDevID"],
  },
  {
    title: "gNB ↔ 5G core integration",
    subtitle: "Bring-up and fault isolation",
    period: "Sep – Oct 2026",
    status: "Resolved",
    body: [
      "Fixed an NG Setup rejection caused by the gNB broadcasting a foreign PLMN.",
      "Traced a persistent Cell State Error to an L1 cell-setup failure, ruled out the antenna path, and escalated to the vendor with full log dumps.",
      "Wrote a repeatable bring-up sequence for the second unit.",
    ],
    result:
      "The vendor confirmed a firmware defect and shipped new firmware, which resolved it. My log evidence and escalation drove the fix.",
    tags: ["5G NR", "NG Setup", "Open5GS", "Log analysis"],
  },
  {
    title: "IoT over private 5G",
    subtitle: "End-to-end demo on Athena Core",
    period: "Mar 2026",
    status: "Demo",
    body: [
      "An IoT dashboard fed through a CPE attached to the Athena Core 5G radio, using a SIM I programmed with PySim.",
    ],
    tags: ["5G SA", "PySim", "IoT"],
  },
  {
    title: "Core, IMS and RAN field work",
    subtitle: "Two years of hands-on delivery before product ownership",
    period: "2023 – 2025",
    status: "Field work",
    body: [
      "4G EPC and IMS: built IMS from source and integrated it with Open5GS and PyHSS; VoLTE call testing; SMS and APN via OsmoMSC.",
      "Cloud cores: Open5GS + IMS on GCP, and an all-in-one core on Azure with radios for South Africa.",
      "5G RAN: three-gNB SON setup, IPsec on the base station, decentralised RAN with multiple cores, PySim 5G SIMs, CPE testing, firmware upgrades, throughput and coverage tests.",
      "O-RAN and NETCONF/YANG studies, srsRAN gNB simulation, DPDK, PTP sync. Linked SDR software and hardware for an O-RAN testbed (the hardware lacked O-RAN support, so O-RAN features could not be tested). Also tested Free5GC as an alternative core and dockerised a reusable 4G + IMS core.",
      "Femto controller and NMS integration, fault generation and live-alarm tests.",
      "Field and demos: Band 3 radio install in Bangladesh; core deployment and LMR noise reduction in Malaysia; live demo with Lanner at MWC 2025; defence private LTE (manpack); a university EPC lab; Grameenphone LLD RAN parameters and RAN training prep.",
      "Supporting role on the Aegis Security Gateway: IPsec dynamic-IP pool tests and an XDP firewall stress test with DPDK pktgen.",
    ],
    note: "Evidence for this period is field delivery: code and configs I produced were committed by a senior engineer.",
    tags: ["Open5GS", "IMS / VoLTE", "PyHSS", "srsRAN", "O-RAN", "IPsec"],
  },
  {
    title: "Smart water metering",
    subtitle: "Maintenance to stability",
    period: "Field / maintenance",
    status: "Handed over",
    body: [
      "Maintained the water-meter software for several months and fixed bugs until it was stable, then handed it over to a junior engineer.",
    ],
    tags: ["Maintenance", "IoT"],
  },
];
