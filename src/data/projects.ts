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
    slug: "book-management",
    title: "BookShelf — AI-Powered Book Management System",
    tagline: "Polyglot microservice platform with AI search & recommendations",

    description:
      "A modern full-stack book management platform built with a polyglot microservice architecture. Features AI-powered natural language search, personalized recommendations, JWT authentication, and containerized deployment using React, Node.js, FastAPI, and MongoDB.",

    highlights: [
      "AI-powered natural language search using Ollama & Gemini",
      "Personalized recommendation engine with LLM integration",
      "Polyglot microservice architecture (React + Node.js + FastAPI)",
      "JWT authentication with protected CRUD operations",
      "Dockerized multi-service deployment workflow",
      "Type-safe frontend/backend development with TypeScript",
    ],

    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Ollama",
      "Gemini API",
      "TailwindCSS",
      "Zustand",
    ],

    github: "https://github.com/M-Nusrat-Ullah/Book-Management",

    image: "/screenshots/bm-booklist.png",

    gallery: [
      "/screenshots/bm-login.png",
      "/screenshots/bm-register.png",
      "/screenshots/bm-booklist.png",
      "/screenshots/bm-addBook.png",
      "/screenshots/bm-aiSearch.png",
      "/screenshots/bm-aiRecommendation.png",
    ],

    featured: false,
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
  }
];