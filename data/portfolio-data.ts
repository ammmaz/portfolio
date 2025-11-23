// data/portfolio-data.ts
export const projects = [
  {
    id: 1,
    title: "Big Bear Recovery - eCommerce Platform",
    description: "Full-stack eCommerce solution with Printful integration, SMS notifications, and Stripe subscriptions for recurring payments. Built with Laravel and modern PHP practices.",
    technologies: ["Laravel", "PHP", "Stripe", "Printful", "Vonage SMS", "MySQL", "Redis", "Bootstrap"],
    videoUrl: "/videos/ecommerce-demo.mp4",
    liveUrl: "https://service.demowebstielinks.com/big-bear-recovery/public/",
    githubUrl: "#",
    featured: true,
    metrics: ["Recurring payments", "SMS notifications", "Printful integration"],
    imageUrl: "ecommerce",
    category: "ecommerce"
  },
  {
    id: 2,
    title: "Indolj - Food Ordering System",
    description: "Scalable online food ordering platform with real-time order tracking, restaurant management, and multi-vendor support. Serves 5K+ users with Redis caching.",
    technologies: ["Laravel", "React", "Node.js", "MySQL", "Redis", "WebSocket", "Google Maps"],
    videoUrl: "/videos/food-order-demo.mp4",
    liveUrl: "https://indolj.pk/",
    githubUrl: "#",
    featured: true,
    metrics: ["5K+ users", "Real-time tracking", "Multi-restaurant"],
    imageUrl: "food",
    category: "food"
  },
  {
    id: 3,
    title: "Quick Ride - Ride Sharing App",
    description: "Real-time ride-sharing application with GPS tracking, fare estimation, driver matching, and admin dashboard. Integrated with Google Maps API.",
    technologies: ["Laravel", "Google Maps API", "Geolocation", "MySQL", "JavaScript", "jQuery", "WebSocket"],
    videoUrl: "/videos/ride-sharing-demo.mp4",
    liveUrl: "https://service.demowebstielinks.com/quckride/ride",
    githubUrl: "#",
    featured: true,
    metrics: ["GPS tracking", "Fare estimation", "Real-time matching"],
    imageUrl: "ride",
    category: "transportation"
  },
  {
    id: 4,
    title: "AI Customer Support Assistant",
    description: "Intelligent customer support system with RAG architecture, integrating with HubSpot, Stripe, Slack, and Twilio for seamless customer interactions.",
    technologies: ["Python", "PyTorch", "LLM", "RAG", "FastAPI", "Redis", "HubSpot", "Stripe"],
    videoUrl: "/videos/ai-support-demo.mp4",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    metrics: ["85% auto-resolution", "24/7 support", "5+ integrations"],
    imageUrl: "ai",
    category: "ai-ml"
  },
  {
    id: 5,
    title: "Enterprise ERP System",
    description: "Comprehensive ERP system built with ASP.NET Core Clean Architecture, featuring modular design and domain-driven development for large enterprises.",
    technologies: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Redis", "Docker", "React"],
    videoUrl: "/videos/erp-demo.mp4",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    metrics: ["10+ modules", "1000+ users", "99.5% uptime"],
    imageUrl: "erp",
    category: "enterprise"
  },
  {
    id: 6,
    title: "Finance Trading Platform",
    description: "Advanced financial platform with real-time trading, bank integrations, scenario analysis, and portfolio management using clean architecture principles.",
    technologies: [".NET 8", "SignalR", "SQL Server", "Redis", "Docker", "React", "TypeScript"],
    videoUrl: "/videos/finance-demo.mp4",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    metrics: ["Real-time data", "Bank APIs", "Risk analysis"],
    imageUrl: "finance",
    category: "finance"
  }
];
// export const projects = [
//   {
//     id: 1,
//     title: "Big Bear Recovery - eCommerce Platform",
//     description: "Full-stack eCommerce solution with Printful integration, SMS notifications, and Stripe subscriptions for recurring payments",
//     technologies: ["Laravel", "PHP", "Stripe", "Printful", "Vonage SMS", "MySQL"],
//     videoUrl: "/videos/ecommerce-demo.mp4",
//     liveUrl: "https://service.demowebstielinks.com/big-bear-recovery/public/",
//     githubUrl: "#",
//     featured: true,
//     metrics: ["Recurring payments", "SMS notifications", "Printful integration"]
//   },
//   {
//     id: 2,
//     title: "Indolj - Food Ordering System",
//     description: "Scalable online food ordering platform with real-time order tracking and restaurant management",
//     technologies: ["Laravel", "React", "Node.js", "MySQL", "Redis"],
//     videoUrl: "/videos/food-order-demo.mp4",
//     liveUrl: "https://indolj.pk/",
//     githubUrl: "#",
//     featured: true,
//     metrics: ["5K+ users", "Real-time tracking", "Multi-restaurant support"]
//   },
//   {
//     id: 3,
//     title: "Quick Ride - Ride Sharing App",
//     description: "Real-time ride-sharing application with GPS tracking, fare estimation, and admin dashboard",
//     technologies: ["Laravel", "Google Maps API", "Geolocation", "MySQL", "JavaScript"],
//     videoUrl: "/videos/ride-sharing-demo.mp4",
//     liveUrl: "https://service.demowebstielinks.com/quckride/ride",
//     githubUrl: "#",
//     featured: true,
//     metrics: ["GPS tracking", "Fare estimation", "Real-time matching"]
//   },
//   {
//     id: 4,
//     title: "Engyl - Recruitment System",
//     description: "Advanced recruitment platform with candidate matching and analytics",
//     technologies: ["Laravel", "React", "MySQL", "Algorithms", "Redis"],
//     videoUrl: "/videos/recruitment-demo.mp4",
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false,
//     metrics: ["Smart matching", "Candidate analytics", "Performance tracking"]
//   },
//   {
//     id: 5,
//     title: "Sabahytics - Analytics Integration",
//     description: "Google Analytics integration platform with Redis caching and Singleton architecture",
//     technologies: ["Laravel", "Google Analytics API", "Redis", "Singleton Pattern", "Caching"],
//     videoUrl: "/videos/analytics-demo.mp4",
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false,
//     metrics: ["Real-time analytics", "Redis caching", "High performance"]
//   },
//   {
//     id: 6,
//     title: "WordPress Event System",
//     description: "Custom WordPress plugin and theme for event management with advanced features",
//     technologies: ["WordPress", "PHP", "JavaScript", "Custom Themes", "Plugin Development"],
//     videoUrl: "/videos/wordpress-demo.mp4",
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false,
//     metrics: ["Custom plugin", "Theme development", "Event management"]
//   }
// ];

export const skills = {
  backend: [
    { name: "PHP", level: 90, icon: "🐘" },
    { name: "Laravel", level: 88, icon: "⚡" },
    { name: "ASP.NET Core", level: 85, icon: "🌐" },
    { name: "C#", level: 80, icon: "🔷" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "Python", level: 78, icon: "🐍" }
  ],
  frontend: [
    { name: "React", level: 80, icon: "⚛️" },
    { name: "Next.js", level: 75, icon: "▲" },
    { name: "TypeScript", level: 78, icon: "📘" },
    { name: "JavaScript", level: 85, icon: "📜" },
    { name: "Tailwind CSS", level: 75, icon: "🎨" },
    { name: "jQuery", level: 80, icon: "💎" }
  ],
  ai_ml: [
    { name: "PyTorch", level: 75, icon: "🔥" },
    { name: "TensorFlow", level: 70, icon: "🧠" },
    { name: "LLMs", level: 72, icon: "🤖" },
    { name: "RAG Systems", level: 75, icon: "🔍" },
    { name: "LangChain", level: 73, icon: "⛓️" },
    { name: "Hugging Face", level: 70, icon: "🤗" }
  ],
  devops: [
    { name: "AWS", level: 78, icon: "☁️" },
    { name: "Docker", level: 82, icon: "🐳" },
    { name: "Kubernetes", level: 75, icon: "⚓" },
    { name: "Terraform", level: 72, icon: "🏗️" },
    { name: "Jenkins", level: 70, icon: "⚙️" },
    { name: "GitHub Actions", level: 76, icon: "🔧" }
  ],
  databases: [
    { name: "MySQL", level: 85, icon: "🗄️" },
    { name: "PostgreSQL", level: 78, icon: "🐘" },
    { name: "Redis", level: 80, icon: "🔴" },
    { name: "MongoDB", level: 72, icon: "🍃" },
    { name: "SQL Server", level: 75, icon: "💾" },
    { name: "Elasticsearch", level: 68, icon: "🔎" }
  ],
  tools: [
    { name: "Git", level: 88, icon: "📚" },
    { name: "Linux", level: 82, icon: "🐧" },
    { name: "Nginx", level: 75, icon: "🌐" },
    { name: "WordPress", level: 80, icon: "🔧" },
    { name: "SonarQube", level: 70, icon: "📊" },
    { name: "Prometheus", level: 68, icon: "📈" }
  ]
};

export const certifications = [
  {
    name: "AWS Solution Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "🏅",
    description: "Cloud architecture and solutions design"
  }
];