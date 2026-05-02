export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Go", "Java", "Bash", "SQL"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LSTM",
      "Reinforcement Learning",
      "PSO / GA Optimization",
      "RAG Systems",
      "LLMs (Ollama, OpenAI, Gemini)",
      "Sentence Transformers",
    ],
  },
  {
    title: "MLOps & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Kubeflow",
      "MLflow",
      "GitHub Actions",
      "CI/CD",
      "Linux Admin",
      "GCP",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "ChromaDB",
      "Vector DBs",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Streamlit", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Telecom & Networking",
    skills: ["5G EPC", "4G LTE", "RAN", "Open5GS", "Free5GC", "IPSec", "Private LTE"],
  },
];