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
    description: "An automated AI recruitment screening system for candidate technical evaluations. Analyzes candidate CVs against job specifications using an agentic LLM workflow with LangGraph, structured schema validation, scoring, and an interactive interface.",
    keyPoints: [
      "Agentic workflow with automated candidate evaluation",
      "Structured schema validation with multi-criteria scoring",
      "Fast CV parsing & candidate profiling with actionable insights"
    ],
    techStack: ["FastAPI", "LangGraph", "LangChain", "Groq API", "Pydantic v2", "SQLAlchemy", "PyMuPDF"],
    image: "assets/images/recruitment.jpg",
    githubUrl: "https://github.com/hasnainmuavia123/AI_Recruitment_Screening_Automation_System",
    liveUrl: "https://github.com/hasnainmuavia123/AI_Recruitment_Screening_Automation_System"
  },
  {
    id: "advanced-rag",
    title: "Advanced Knowledge & RAG Retrieval Pipeline",
    category: "ai-rag",
    badge: "Hybrid Search & Rerank",
    featured: true,
    isConfidential: false,
    description: "An intelligent Retrieval-Augmented Generation (RAG) system built for accurate document search and question answering. Uses hybrid search combining keyword and semantic matching with neural reranking to deliver grounded, context-aware answers.",
    keyPoints: [
      "Hybrid search combining keyword matching and semantic vector search",
      "Neural reranking to prioritize the most relevant document segments",
      "Accurate, fact-based answers grounded in source material"
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
    description: "Algorithmic trading system analyzing 440+ Binance USDT pairs across multiple timeframes. Computes 8 technical confluence indicators to produce a unified opportunity score with WebSocket risk monitoring.",
    keyPoints: [
      "Real-time analysis of 440+ Binance trading pairs via WebSockets",
      "Multi-timeframe technical indicator confluence engine (RSI, MACD, Bollinger)",
      "Automated limit/OCO order execution with risk mitigation"
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
    description: "Privacy-first offline document intelligence pipeline running on local infrastructure. Ingests PDFs, docs, and tables using local embedding models and quantized LLMs with complete data privacy.",
    keyPoints: [
      "Local, air-gapped document ingestion and contextual QA",
      "Ollama & Hugging Face open-source LLM orchestration",
      "ChromaDB persistent vector indexing with fast retrieval"
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
    description: "A real-time facial recognition attendance system designed for automated check-ins. Detects faces with MTCNN, extracts facial embeddings via FaceNet, and performs rapid identity matching using FAISS similarity search.",
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
    badge: "Confidential",
    featured: true,
    isConfidential: true,
    confidentialNotice: "Proprietary Project (ByteBoom) — Architecture & data pipelines are confidential.",
    description: "Real-time cryptocurrency transaction tracking and intelligence system. Ingests market movements across 30+ exchanges from Telegram feeds, analyzing sentiment bias via NVIDIA Nemotron with high-speed dual-caching.",
    keyPoints: [
      "Async ingestion from Telegram market alert channels (30+ exchanges)",
      "AI bias classification (accumulate, distribute, neutral)",
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
    badge: "Confidential",
    featured: false,
    isConfidential: true,
    confidentialNotice: "Proprietary Project (ByteBoom) — Graph schema & Text-to-Cypher pipelines are confidential.",
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
