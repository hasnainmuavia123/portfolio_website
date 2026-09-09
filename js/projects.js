/**
 * Hasnain Muavia - Portfolio Projects Configuration
 * 
 * Edit this file to add, remove, or modify projects displayed on the portfolio.
 * Categories: 'all' | 'ai-rag' | 'agents' | 'vision' | 'trading'
 */

const projectsData = [
  {
    id: "ai-recruitment",
    title: "AI Recruitment Screening Automation System",
    category: "agents",
    badge: "LangGraph & Groq",
    featured: true,
    isConfidential: false,
    description: "A production-grade, demo-ready AI-Powered Recruitment Screening System for HR technical evaluations. Analyzes candidate CVs against job descriptions using an agentic LLM workflow with LangGraph, structured evaluation schemas, deterministic fit scoring, and an interactive modern interface.",
    keyPoints: [
      "Agentic single-agent workflow with automated candidate evaluation",
      "Structured schema validation with deterministic multi-criteria scoring",
      "Fast CV parsing & candidate profiling with actionable HR insights"
    ],
    techStack: ["FastAPI", "LangGraph", "LangChain", "Groq API", "Pydantic v2", "SQLAlchemy", "PyMuPDF"],
    image: "assets/images/recruitment.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/AI_Recruitment_Screening_Automation_System",
    liveUrl: "https://github.com/hasnainmuavia123/AI_Recruitment_Screening_Automation_System"
  },
  {
    id: "advanced-rag",
    title: "Advanced Production-Grade RAG Pipeline",
    category: "ai-rag",
    badge: "Hybrid RAG & Rerank",
    featured: true,
    isConfidential: false,
    description: "A production-ready Retrieval-Augmented Generation (RAG) system designed for smart document search and question answering. It uses hybrid search with keyword and semantic matching, along with smart reranking to provide accurate, context-aware answers without hallucinations.",
    keyPoints: [
      "Hybrid search combining keyword matching and semantic vector search",
      "Smart neural reranking to select the most relevant document chunks",
      "Accurate, fact-based answers with source grounding"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "ChromaDB", "Hugging Face"],
    image: "assets/images/rag.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/Advanced-RAG",
    liveUrl: "https://github.com/hasnainmuavia123/Advanced-RAG"
  },
  {
    id: "trading-bot",
    title: "Algorithmic Crypto Trading & Market Intelligence Bot",
    category: "trading",
    badge: "FinTech & AI",
    featured: true,
    isConfidential: false,
    description: "High-frequency algorithmic trading system analyzing 440+ Binance USDT pairs across multiple timeframes. Computes 8 confluence indicators to produce a unified 0–100 opportunity score with WebSocket risk monitoring.",
    keyPoints: [
      "Real-time analysis of 440+ Binance trading pairs via WebSockets",
      "Multi-timeframe technical indicator confluence engine (RSI, MACD, Bollinger)",
      "Automated limit/OCO order execution with smart risk mitigation"
    ],
    techStack: ["Python", "FastAPI", "Binance API", "WebSockets", "Pandas", "TA-Lib"],
    image: "assets/images/trading.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/Trading_Bot",
    liveUrl: "https://github.com/hasnainmuavia123/Trading_Bot"
  },
  {
    id: "local-ai-doc-pipeline",
    title: "Local AI Document Pipeline & Offline QA",
    category: "ai-rag",
    badge: "Privacy AI",
    featured: true,
    isConfidential: false,
    description: "Privacy-first offline document intelligence pipeline running entirely on local infrastructure. Ingests complex PDFs, docs, and tables using local embedding models and quantized LLMs with zero data leakage.",
    keyPoints: [
      "100% local, air-gapped document ingestion and contextual QA",
      "Ollama & Hugging Face local open-source LLM orchestration",
      "ChromaDB persistent vector indexing with sub-second retrieval"
    ],
    techStack: ["Python", "Ollama", "LangChain", "ChromaDB", "Hugging Face", "FastAPI"],
    image: "assets/images/rag.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/Local_AI_Document_Pipeline",
    liveUrl: "https://github.com/hasnainmuavia123/Local_AI_Document_Pipeline"
  },
  {
    id: "facial-recognition-attendance",
    title: "Facial Recognition Smart Attendance System",
    category: "vision",
    badge: "FaceNet & FAISS",
    featured: true,
    isConfidential: false,
    description: "A production-ready facial recognition attendance system designed for automated, real-time check-ins. It detects faces with MTCNN, extracts facial embeddings using FaceNet, and performs ultra-fast identity matching using FAISS similarity search.",
    keyPoints: [
      "Accurate face detection using MTCNN & deep feature extraction via FaceNet",
      "High-speed identity matching with FAISS vector similarity search",
      "Automated attendance logging with a high-performance FastAPI backend"
    ],
    techStack: ["Python", "FastAPI", "MTCNN", "FaceNet", "FAISS", "OpenCV"],
    image: "assets/images/vision.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/Facial-_Recognition_Attendence_system",
    liveUrl: "https://github.com/hasnainmuavia123/Facial-_Recognition_Attendence_system"
  },
  {
    id: "whale-tracker-api",
    title: "Whale Tracker API & Market Intelligence Dashboard",
    category: "trading",
    badge: "Enterprise NDA",
    featured: true,
    isConfidential: true,
    confidentialNotice: "Company Confidential (ByteBoom) — Proprietary architecture & algorithms protected under NDA. Codebase is private.",
    description: "Real-time cryptocurrency whale movement tracking and intelligence system. Ingests large transactions across 30+ exchanges from Telegram feeds, analyzing accumulation/distribution bias via NVIDIA Nemotron-3-Nano (OpenRouter) with high-speed dual-caching.",
    keyPoints: [
      "Telethon async ingestion from Telegram whale alert channels (30+ exchanges)",
      "NVIDIA Nemotron-3-Nano AI bias classification (accumulate, distribute, neutral)",
      "Multi-layer thread-safe dual caching (in-memory TTL + persistent SQLite)",
      "Interactive Plotly.js market intelligence dashboard visualizing inflows/outflows"
    ],
    techStack: ["Python", "Flask", "Telethon", "OpenRouter (Nemotron)", "SQLite3", "Plotly.js", "Docker"],
    image: "assets/images/trading.jpg",
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "crypto-knowledge-graph",
    title: "Neo4j Knowledge Graph Crypto Intelligence Chatbot",
    category: "agents",
    badge: "Enterprise NDA",
    featured: false,
    isConfidential: true,
    confidentialNotice: "Company Confidential (ByteBoom) — Graph schema & Text-to-Cypher pipelines protected under NDA. Codebase is private.",
    description: "LLM-powered conversational agent for a Neo4j knowledge graph that converts natural language questions into Cypher queries, analyzes whale transactions, and discovers hidden capital flows across on-chain entities.",
    keyPoints: [
      "Natural Language to Cypher query translation with schema awareness",
      "Telegram whale tracking & transaction entity extraction",
      "Graph-based relationship mapping for wallet clusters"
    ],
    techStack: ["Python", "Neo4j", "Cypher", "LangChain", "FastAPI", "SQLite"],
    image: "assets/images/rag.jpg",
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "fake-currency-detection",
    title: "Deep Learning Fake Currency Detection",
    category: "vision",
    badge: "Deep Learning",
    featured: false,
    isConfidential: false,
    description: "Final Year Capstone Project implementing transfer learning models (VGG16 & MobileNetV2) to accurately classify authentic vs counterfeit banknotes in real-time on edge devices and Android.",
    keyPoints: [
      "Trained transfer learning architecture with >97% classification accuracy",
      "Optimized for real-time inference on mobile/edge environments",
      "Robust to variable lighting, angles, and physical note degradation"
    ],
    techStack: ["PyTorch", "TensorFlow", "MobileNetV2", "VGG16", "OpenCV", "Android"],
    image: "assets/images/vision.jpg",
    githubUrl: "https://github.com/hasnainmuavia123",
    liveUrl: "https://github.com/hasnainmuavia123"
  },
  {
    id: "youtube-qa-rag",
    title: "YouTube Video RAG Semantic Search & QA Bot",
    category: "ai-rag",
    badge: "Conversational QA",
    featured: false,
    isConfidential: false,
    description: "Conversational QA application that transcribes and indexes YouTube videos on-demand, allowing users to ask natural language questions and receive precise timestamp-cited answers via a Gradio UI.",
    keyPoints: [
      "Automated transcript fetching and semantic chunking",
      "Chroma vector indexing for precise segment localization",
      "Interactive Gradio dark-mode conversational interface"
    ],
    techStack: ["Python", "LangChain", "ChromaDB", "YouTubeTranscriptAPI", "Gradio"],
    image: "assets/images/rag.jpg",
    githubUrl: "https://github.com/hasnainmuavia123",
    liveUrl: "https://github.com/hasnainmuavia123"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
