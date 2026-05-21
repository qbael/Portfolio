import type { Project, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Ho Quoc Bao',
  role: 'Software Developer',
  tagline: 'Building efficient solutions that matter.',
  bio: 'I am a software developer with a passion for creating meaningful technology products. I am always looking for creative and efficient solutions to complex problems.\n',
  philosophy: '"Code is not just a tool but also an art. Each line of code is a opportunity to make something beautiful, effective and sustainable."',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'baohoo10205@gmail.com',
  githubUrl: 'https://github.com/qbael',
  linkedinUrl: 'https://www.linkedin.com/in/ho-quoc-bao-76a759295/',
  resumeUrl: 'src/assets/QuocBao_s_Resume.pdf',
  facebookUrl: 'https://www.facebook.com/baohoo10205',
  avatarUrl: 'src/assets/avatar.jpeg',
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Instory - Social Media Platform",
    description: "A full-stack Instagram-like platform with real-time chat, story sharing, and social features built with ASP.NET Core and React.",
    longDescription: [
      "Full-stack social platform featuring posts, stories, highlights, hashtag trending, friend requests, and an admin dashboard",
      "Real-time direct and group chat plus live notifications powered by SignalR, with media uploads to AWS S3",
      "Google OAuth and OTP email verification with clean repository/service architecture and 60% unit & integration test coverage",
      "Automated CI/CD pipeline via GitHub Actions — builds Docker image, pushes to Amazon ECR, and deploys to AWS EC2",
      "Hybrid search for hashtags and posts, story highlights with archive, and role-based admin controls for user and report management"
    ],
    tags: ["ASP.NET", "React", "TailwindCSS", "PostgreSQL", "SignalR", "AWS S3", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/qbael/Instory",
    status: "completed",
    year: "2026",
    highlight: "Deployed on AWS EC2 with fully automated CI/CD and real-time SignalR communication"
  },
  {
    id: 2,
    title: "SmartDoc AI - Intelligent Document Q&A",
    description: "An intelligent document Q&A system combining Standard RAG and Corrective RAG (CoRAG) with a local LLM via Ollama, featuring hybrid search and real-time streaming responses.",
    longDescription: [
      "Running RAG and CoRAG in parallel — CoRAG evaluates context quality via CrossEncoder, rewrites queries, and falls back to web search when contexts are low",
      "FAISS semantic vector search and BM25 keyword search with Reciprocal Rank Fusion, supporting many file types with EasyOCR",
      "Local LLM inference using Ollama, Google Colab + ngrok integration for GPU-accelerated inference when local hardware is limited",
      "SSE streaming for both upload and query pipeline, conversational history stored in SQLite and a self-evaluation confidence"
    ],
    tags: ["FastAPI", "React", "LangChain", "FAISS", "BM25", "Ollama", "EasyOCR", "SQLite", "Tavily"],
    githubUrl: "https://github.com/your-username/smartdoc-rag",
    status: "completed",
    year: "2025",
    highlight: "CoRAG pipeline with automatic query rewriting and web search fallback, achieving grounded answers with self-evaluated confidence scores"
  },
  {
    id: 3,
    title: 'Medify - Medical Appointment Scheduling System',
    description: 'A full-stack application for booking medical appointments, with real-time availability and multi-provider support.',
    longDescription: [
      'Microservices architecture for high scalability and flexible deployment',
      'Integrated Spring Cloud API Gateway for centralized routing and load balancing',
      'Supports personal clinics and multi-provider appointment management',
      'Real-time availability updates and scheduling conflict prevention',
      'User-friendly interface for patients to book and manage appointments',
    ],
    tags: ['Next.js', 'TailwindCSS', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/qbael/Medify',
    status: 'completed',
    year: '2025',
    highlight: 'Can be deployed on-premises or cloud, with multi-tenancy support',
  },
  {
    id: 4,
    title: 'Phone Store Management System',
    description: 'A comprehensive system for managing inventory, sales, and customer relationships in a phone store.',
    longDescription: [
      'Monolithic architecture for simplicity and rapid development',
      'Inventory management with stock tracking and automated alerts',
      'Sales tracking with order processing and invoice generation',
      'Customer relationship management (CRM) with purchase history',
      'Reporting dashboard with sales analytics and performance metrics',
    ],
    tags: ['React', 'Tailwind', 'PHP', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/qbael/PhoneStore',
    status: 'completed',
    year: '2025',
    highlight: 'Have almost all features needed for a phone store, from inventory to sales and CRM',
  },
  {
    id: 5,
    title: 'School Bus Tracking System',
    description: 'A real-time bus tracking system for schools, providing live location updates and route information.',
    longDescription: [
      'Real-time bus location tracking with WebSocket for instant updates',
      'Interactive map with route visualization using Mapbox API',
      'Notification system for parents and school administrators',
      'Route management with pickup/drop-off point scheduling',
      'Enhances school transportation safety and parent-school communication',
    ],
    tags: ['Next.js', 'TailwindCSS', 'Node.js', 'Express', 'PostgreSQL', 'WebSocket', 'Mapbox API'],
    githubUrl: 'https://github.com/qbael/School-Bus-Management-System',
    status: 'completed',
    year: '2025',
    highlight: 'Real-time bus tracking with WebSocket, improving safety and communication for school transportation',
  },
  {
    id: 6,
    title: 'Sport Store Management System',
    description: 'A comprehensive system for managing inventory, sales, and customer relationships in a sport store.',
    longDescription: [
      'Monolithic architecture with Spring Boot for rapid development',
      'Inventory management with product categorization and stock alerts',
      'Sales tracking with order lifecycle management',
      'Customer relationship management with loyalty tracking',
      'Reporting and analytics for business insights',
    ],
    tags: ['React', 'Tailwind', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/qbael/SportStore',
    status: 'completed',
    year: '2024',
    highlight: 'Have almost all features needed for a sport store, from inventory to sales and CRM',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    key: 'languages',
    color: '#ff8800',
    skills: ['Java', 'C#', 'JavaScript', 'TypeScript', 'Python', 'PHP'],
  },
  {
    label: 'Frontend',
    key: 'frontend',
    color: '#00ff88',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    key: 'backend',
    color: '#00d4ff',
    skills: ['Spring Framework', '.NET', 'Node.js', 'Express.js', 'Fast API', 'REST API', 'WebSocket', 'SignalR', 'JWT', 'Kafka', 'Microservices'],
  },
  {
    label: 'DevOps & Cloud',
    key: 'devops',
    color: '#a855f7',
    skills: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Linux'],
  },
  {
    label: 'Tools & Databases',
    key: 'tools',
    color: '#ff006e',
    skills: ['PostgreSQL', 'MySQL', 'Git', 'Postman', 'VS Code', 'Jetbrains IDEA'],
  },
];
