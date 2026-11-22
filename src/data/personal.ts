import type { Status } from "./status";

export type PersonalProject = {
  title: string;
  subtitle: string;
  period: string;
  status: Status;
  body: string;
  progress: string;
  tags: string[];
  repo?: string;
  /** Set to false to hide the repository link while keeping the URL here. */
  showRepo?: boolean;
  image?: { src: string; alt: string };
};

export const personal: PersonalProject[] = [
  {
    title: "k8s-baremetal-platform",
    subtitle: "Production-grade bare-metal Kubernetes for telco and edge",
    period: "2025 – 2026",
    status: "In progress",
    body: "A solo build with a layered L0 → L6 design: kubeadm 1.34 and containerd 2.x; Cilium 1.19 with kube-proxy replacement, Hubble, BGP, LB-IPAM and Gateway API; Kyverno, Flux, GHCR and cosign; three deploy shapes (lab single-node, edge site, HA bare metal); opt-in Multus; secretbox encryption at rest. Ansible roles are tested with Molecule behind pre-commit gates.",
    progress:
      "L0–L1.2 done (OS prep including a CIS module blacklist, containerd, kubeadm bootstrap). L2 Cilium is designed and the install is next. 86 commits and 30+ ADRs so far.",
    tags: ["Kubernetes", "Cilium", "Flux", "Kyverno", "Ansible", "Molecule"],
    repo: "https://github.com/M-Nusrat-Ullah/k8s-baremetal-platform",
    showRepo: true, // set to false to hide the repository link
  },
  {
    title: "Protection relay test set",
    subtitle: "Multi-year instrument targeting the Omicron CMC 356 class",
    period: "2026",
    status: "Design stage",
    body: "I lead the architecture: 4V/6I outputs, a 0.025% accuracy target, Zynq UltraScale+ on Yocto, gRPC/TLS 1.3 control, IEC 61850 GOOSE/SV, PTPv2/IRIG-B timing, and a cloud-native server (FastAPI, React, Postgres, MinIO, Keycloak). I locked 26 decisions (AXI register map, 64-bit TAI timebase, 48-bit NCO, Ed25519-signed calibration, RAUC A/B updates), kept 5 hardware-dependent choices open as frameworks, and wrote phase briefs for phases 1–12.",
    progress:
      "Design phase done; Phase 1 implementation is next, and a buyer has committed. I own software and firmware (including FPGA); two hardware partners own the hardware design.",
    tags: ["Zynq", "Yocto", "IEC 61850", "PTPv2", "gRPC"],
  },
  {
    title: "Smart switchboard",
    subtitle: "Owned-stack IoT product for Bangladesh",
    period: "2026",
    status: "Design stage",
    body: "I chose a fully owned stack over a white-label platform, for trust and data locality. The design has three layers (device, local LAN fallback, optional self-hosted cloud): ESP32 with secure boot and flash encryption, MQTT over mTLS with per-device certificates and ACLs, signed OTA with anti-rollback, a device shadow, and EMQX on Kubernetes. A physical-safety rule set means the board never switches locks or vaults, and fails safe to lights on.",
    progress:
      "Architecture and roadmap defined; no build milestones yet. A hardware partner owns the PCB; I own the software and deployment.",
    tags: ["ESP32", "MQTT / mTLS", "OTA", "EMQX"],
  },
  {
    title: "ProxyACS",
    subtitle: "TR-069 reverse proxy on Kubernetes",
    period: "Jun – Oct 2026",
    status: "Cancelled prototype",
    body: "A company prototype I deployed and operated: HAProxy with an SPOE agent and SQLite in front of a TR-069 ACS, so CPE and radio sessions are checked against RADIUS first. I fixed a SQLite read-only crashloop caused by Docker creating a bind-mount parent as root, validated the RADIUS auth chain, built a three-path kubectl deploy kit (k3s + Cilium, an existing Flannel cluster, Multus/macvlan) plus a Flux GitOps path, and analysed the Digest-auth vs RADIUS blocker.",
    progress:
      "Cancelled before production. The SPOE agent is not my code, and the repository is not public.",
    tags: ["HAProxy", "TR-069", "k3s", "Flux", "RADIUS"],
  },
  {
    title: "RAG document Q&A",
    subtitle: "Retrieval-augmented question answering with citations",
    period: "Personal",
    status: "Built",
    body: "FastAPI, ChromaDB and sentence-transformers with source citation, and multiple LLM backends (Ollama, OpenAI, Gemini, DeepSeek). Packaged with Docker Compose and Kubernetes manifests, with Kubeflow Pipelines v2, MLflow tracking and a Streamlit UI.",
    progress: "Built and published on GitHub.",
    tags: ["FastAPI", "ChromaDB", "Kubeflow", "MLflow"],
    repo: "https://github.com/M-Nusrat-Ullah/rag-document-qa",
    image: {
      src: "/screenshots/webui_question_page.png",
      alt: "RAG document Q&A web UI answering a question with cited sources",
    },
  },
  {
    title: "RL Snake bot",
    subtitle: "Deep Q-Network agent for Snake",
    period: "Personal",
    status: "Built",
    body: "A DQN agent built with PyTorch and Gymnasium, Dockerised.",
    progress: "Built and published on GitHub.",
    tags: ["PyTorch", "Gymnasium", "DQN", "Docker"],
    repo: "https://github.com/M-Nusrat-Ullah/rl-snake-bot",
    image: {
      src: "/screenshots/training_progress.png",
      alt: "DQN Snake training charts: score rising over 1,000 episodes while the exploration rate decays",
    },
  },
];
