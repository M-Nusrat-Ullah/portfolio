export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rag-document-qa",
    title: "RAG Document Q&A System",
    tagline: "Production-grade Retrieval-Augmented Generation platform",
    description:
      "A full-stack RAG system that ingests documents, performs semantic search via vector embeddings, and answers questions using multiple LLM backends. Built with production MLOps practices: containerization, K8s deployment, ML pipelines, and experiment tracking.",
    highlights: [
      "Multi-LLM support: Ollama (qwen2.5:3b), OpenAI, Gemini, DeepSeek",
      "Semantic search with ChromaDB + sentence-transformers embeddings",
      "MLflow experiment tracking & model registry",
      "Kubernetes deployment manifests + Kubeflow ML pipeline (KFP v2)",
      "Streamlit chat UI with document upload & history",
      "Fully Dockerized with docker-compose for local dev",
    ],
    tech: [
      "Python 3.12",
      "FastAPI",
      "ChromaDB",
      "Ollama",
      "MLflow",
      "Docker",
      "Kubernetes",
      "Kubeflow",
      "Streamlit",
    ],
    github: "https://github.com/M-Nusrat-Ullah/rag-document-qa",
    image: "/screenshots/webui_question_page.png",
    gallery: [
      "/screenshots/webui_upload_page.png",
      "/screenshots/webui_question_page.png",
      "/screenshots/mlflow_runs.png",
      "/screenshots/mlflow_run_details.png",
    ],
    featured: true,
  },
  {
    slug: "lstm-pso-ga",
    title: "LSTM Hyperparameter Optimization",
    tagline: "Undergraduate thesis — PSO & GA for neural network tuning",
    description:
      "Research project optimizing LSTM network hyperparameters using Particle Swarm Optimization and Genetic Algorithms. Improved model convergence and performance through automated metaheuristic tuning.",
    highlights: [
      "Designed PSO and GA optimizers for LSTM hyperparameter search",
      "Compared metaheuristic methods on time-series datasets",
      "Improved model performance via automated tuning",
      "Final-year thesis at Daffodil International University",
    ],
    tech: ["Python", "TensorFlow", "Keras", "PSO", "Genetic Algorithms", "NumPy"],
    github: "https://github.com/M-Nusrat-Ullah/Hyperparemeter-Optimization-of-LSTM-using-PSO-and-GA",
  },
  {
    slug: "cp-solutions",
    title: "Competitive Programming Archive",
    tagline: "1200+ algorithmic problem solutions across 4 platforms",
    description:
      "An organized archive of 1200+ competitive programming solutions and templates spanning Codeforces, LeetCode, Vjudge, and Beecrowd. Includes algorithmic templates, common patterns, and contest-tested implementations.",
    highlights: [
      "1200+ problems solved across multiple online judges",
      "Curated templates for graphs, DP, geometry, strings, etc.",
      "Used as a teaching resource while mentoring juniors",
      "Problem-setter contributions for university contests",
    ],
    tech: ["C++", "Python", "Algorithms", "Data Structures"],
    github: "https://github.com/M-Nusrat-Ullah/CP-Solutions-and-Templates",
  },
  {
    slug: "book-management",
    title: "Book Management System",
    tagline: "Full-stack CRUD application with auth",
    description:
      "A full-stack book management application built during my internship at Spring Rain. Implements user authentication, CRUD operations, and a clean REST API.",
    highlights: [
      "JWT-based authentication",
      "RESTful CRUD API",
      "Built collaboratively in an Agile team",
      "Practiced code reviews & version control",
    ],
    tech: ["JavaScript", "Node.js", "React.js", "MongoDB", "REST API"],
    github: "https://github.com/M-Nusrat-Ullah/Book-Management",
  },
];