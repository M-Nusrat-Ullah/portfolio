/** Depth is rated by what shipped, not by exposure. */
export type Depth = "production" | "field" | "built" | "working" | "research" | "designed" | "familiar";

export type Skill = {
  name: string;
  depth: Depth;
  depthLabel: string;
  proof: string;
};

export type SkillGroup = { title: string; skills: Skill[] };

export const depthLegend: { depth: Depth; label: string }[] = [
  { depth: "production", label: "Shipped to production" },
  { depth: "field", label: "Field delivery" },
  { depth: "built", label: "Built / working" },
  { depth: "research", label: "Research in progress" },
  { depth: "designed", label: "Designed, not built" },
  { depth: "familiar", label: "Familiar" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Telecom",
    skills: [
      { name: "5G SA / 4G EPC / IMS cores (Open5GS, Kamailio, PyHSS, Osmocom)", depth: "production", depthLabel: "Production", proof: "Athena Core, VoLTE lab, 2023 IMS work" },
      { name: "AAA / RADIUS / EAP-AKA / Milenage", depth: "production", depthLabel: "Production, product lead", proof: "Aegis AAA" },
      { name: "PKI (CMPv2, IDevID / LDevID)", depth: "production", depthLabel: "Production operations", proof: "AegisCA certificate batches" },
      { name: "RAN integration (gNB, femto, SON, PTP, O-RAN)", depth: "field", depthLabel: "Field", proof: "gNB integration, 5G RAN testing, O-RAN study" },
    ],
  },
  {
    title: "Platform and operations",
    skills: [
      { name: "Kubernetes (kubeadm, k3s, Cilium, Multus, Flux, Helm)", depth: "production", depthLabel: "Production", proof: "Athena Core, NMS cluster, ProxyACS; k8s-baremetal-platform" },
      { name: "High availability (keepalived, Postgres replication, fencing)", depth: "production", depthLabel: "Production design", proof: "Aegis AAA HA" },
      { name: "Time-series / PM data (InfluxDB, ClickHouse)", depth: "production", depthLabel: "Production", proof: "Hermes PM pipeline" },
      { name: "Monitoring and fault management (SNMP, Prometheus, Grafana, Netdata)", depth: "production", depthLabel: "Production", proof: "Aegis AAA fault management, observability stack" },
      { name: "Release engineering (signed releases, .deb, CI gates, govulncheck)", depth: "production", depthLabel: "Production", proof: "Aegis AAA release pipeline" },
      { name: "Security (TACACS+, PAM, EDR, hardening)", depth: "production", depthLabel: "Delivered to client", proof: "Kairos / TACACS+, Grameenphone server hardening" },
      { name: "Networking (IPsec / strongSwan, XDP, DPDK, VLAN / VRF, routing)", depth: "built", depthLabel: "Working", proof: "Athena Core routing (FRR, VLANs), Security Gateway test support" },
      { name: "Infrastructure as code (Ansible, Molecule, pre-commit, Kyverno, cosign)", depth: "built", depthLabel: "Built, personal", proof: "k8s-baremetal-platform" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Go", depth: "production", depthLabel: "Production", proof: "Aegis AAA and its HA helper" },
      { name: "TypeScript / NestJS / React", depth: "production", depthLabel: "Production", proof: "Hermes NMS, Aegis AAA console" },
      { name: "Python, Bash", depth: "built", depthLabel: "Working", proof: "Automation scripts, RAG Q&A, RL projects" },
      { name: "C++", depth: "built", depthLabel: "Strong", proof: "Competitive programming, 1300+ problems" },
      { name: "C, Java, C#", depth: "familiar", depthLabel: "Familiar", proof: "Coursework" },
    ],
  },
  {
    title: "AI / ML and research",
    skills: [
      { name: "Machine learning (LSTM, autoencoders, PSO / GA, PyTorch)", depth: "research", depthLabel: "Research, in progress", proof: "Undergraduate thesis, MSc thesis" },
      { name: "Reinforcement learning (DQN, PPO, intrinsic rewards, rliable stats)", depth: "research", depthLabel: "Built (DQN); designed (PPO study)", proof: "RL Snake bot, Worth the Tokens?" },
      { name: "LLM / applied AI (RAG, LangChain, Ollama)", depth: "built", depthLabel: "Built, personal", proof: "RAG document Q&A" },
      { name: "MLOps (Kubeflow, MLflow)", depth: "built", depthLabel: "Built, personal", proof: "RAG document Q&A" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Embedded / IoT design (ESP32, MQTT / mTLS, OTA, Zynq, FPGA, IEC 61850)", depth: "designed", depthLabel: "Architecture only", proof: "Smart switchboard, relay test set" },
      { name: "Algorithms / competitive programming", depth: "built", depthLabel: "Strong", proof: "1300+ problems, ICPC Dhaka Regional 2020" },
    ],
  },
];
