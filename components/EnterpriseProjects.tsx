// components/EnterpriseProjects.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, ShoppingCart, LineChart, Database, Cpu } from 'lucide-react';

const enterpriseProjects = [
  {
    id: 1,
    title: "ERP System - Clean Architecture",
    description: "Enterprise Resource Planning system built with ASP.NET Core Clean Architecture, featuring modular design and domain-driven development",
    technologies: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Redis", "Docker"],
    architecture: ["Clean Architecture", "CQRS", "Mediator Pattern", "Domain-Driven Design"],
    features: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Real-time reporting",
      "Inventory management",
      "Financial modules"
    ],
    metrics: ["10+ modules", "1000+ concurrent users", "99.5% uptime"],
    category: "enterprise",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "E-Commerce Microservices",
    description: "Scalable microservices-based e-commerce platform with separate services for products, orders, payments, and inventory",
    technologies: ["ASP.NET Core", "Docker", "Kubernetes", "Redis", "RabbitMQ", "PostgreSQL"],
    architecture: ["Microservices", "Event-Driven", "API Gateway", "Service Discovery"],
    features: [
      "Distributed transaction handling",
      "Event sourcing",
      "Circuit breaker pattern",
      "Auto-scaling",
      "Centralized logging"
    ],
    metrics: ["10K+ orders/day", "50ms response time", "Auto-scaling"],
    category: "microservices",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "Finance & Trading Platform",
    description: "Advanced financial platform with real-time trading, bank integrations, and scenario analysis using clean architecture principles",
    technologies: [".NET 8", "SignalR", "Quartz.NET", "Hangfire", "SQL Server", "Redis"],
    architecture: ["Clean Architecture", "Event Sourcing", "CQRS", "Caching Layer"],
    features: [
      "Real-time market data",
      "Bank API integrations",
      "Risk analysis scenarios",
      "Portfolio management",
      "Automated trading"
    ],
    metrics: ["Real-time processing", "Multiple bank APIs", "Risk analysis"],
    category: "finance",
    demoUrl: "#",
    codeUrl: "#"
  }
];

export default function EnterpriseProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'enterprise': return Building;
      case 'microservices': return Cpu;
      case 'finance': return LineChart;
      default: return Database;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'enterprise': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'microservices': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'finance': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {enterpriseProjects.map((project, index) => {
          const CategoryIcon = getCategoryIcon(project.category);
          return (
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
                        <CategoryIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${getCategoryColor(project.category)}`}>
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
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
                    <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
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

                  {/* Architecture */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-accent mb-2">Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.architecture.map((arch) => (
                        <span
                          key={arch}
                          className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                        >
                          {arch}
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
          );
        })}
      </div>
    </div>
  );
}