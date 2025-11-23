// components/AIProjects.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, MessageSquare, Bot, Database, Zap } from 'lucide-react';

const aiProjects = [
  {
    id: 1,
    title: "AI Customer Support Assistant",
    description: "Intelligent customer support system with RAG architecture, integrating with HubSpot, Stripe, Slack, and Twilio for seamless customer interactions",
    technologies: ["Python", "PyTorch", "LLM", "RAG", "FastAPI", "Redis"],
    integrations: ["HubSpot CRM", "Stripe Payments", "Slack", "Twilio SMS", "Email"],
    features: [
      "Context-aware responses using RAG",
      "Multi-platform integration",
      "Real-time customer data access",
      "Automated ticket resolution",
      "Sentiment analysis"
    ],
    metrics: ["85% auto-resolution", "24/7 support", "5+ platform integrations"],
    status: "completed",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "LLM Research Assistant",
    description: "Advanced research assistant with document processing, semantic search, and citation generation using fine-tuned language models",
    technologies: ["Transformers", "Hugging Face", "LangChain", "Pinecone", "Streamlit"],
    integrations: ["PDF Processing", "Web Scraping", "Academic Databases", "Citation APIs"],
    features: [
      "Document chunking and embedding",
      "Semantic search across research papers",
      "Automatic citation generation",
      "Multi-document analysis",
      "Research summarization"
    ],
    metrics: ["1000+ papers processed", "90% accuracy", "5x research speed"],
    status: "completed",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Enterprise RAG Chat System",
    description: "Scalable Retrieval-Augmented Generation system for enterprise knowledge bases with real-time data synchronization",
    technologies: ["PyTorch", "FAISS", "LangChain", "Docker", "Kubernetes"],
    integrations: ["Confluence", "SharePoint", "Slack", "Microsoft Teams", "Jira"],
    features: [
      "Real-time knowledge base updates",
      "Multi-source data integration",
      "Access control and security",
      "Conversation history",
      "Performance analytics"
    ],
    metrics: ["50K+ documents", "200ms response time", "99.9% uptime"],
    status: "in-progress",
    demoUrl: "#",
    codeUrl: "#"
  }
];

export default function AIProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'planned': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return status;
    }
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {aiProjects.map((project, index) => (
         <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    {project.title.includes('Customer') ? <MessageSquare className="w-5 h-5 text-primary" /> :
                    project.title.includes('Research') ? <Brain className="w-5 h-5 text-primary" /> :
                    <Bot className="w-5 h-5 text-primary" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={project.demoUrl}
                    className="flex-1 bg-primary/20 text-primary text-center py-2 rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors duration-300 block"
                  >
                    Live Demo
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={project.codeUrl}
                    className="flex-1 bg-white/10 text-gray-300 text-center py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors duration-300 block"
                  >
                    View Code
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}