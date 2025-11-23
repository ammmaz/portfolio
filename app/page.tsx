// app/page.tsx - UPDATED WITH YOUR REAL DATA
'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Certifications from '../components/Certifications';
import AIProjects from '../components/AIProjects';
import EnterpriseProjects from '../components/EnterpriseProjects';
import Footer from '../components/Footer';
import { projects, skills } from '../data/portfolio-data';
import ScheduleInterview from '@/components/ScheduleInterview';

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <Hero />
      
       {/* Experience Section - Now at the top for HR focus */}
      <section id="experience" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </motion.div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Career Journey</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                3+ years of delivering impactful solutions for startups and enterprises. 
                Specialized in PHP/Laravel development with full-stack capabilities.
              </p>
            </motion.div>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* AI & Machine Learning Section */}
      <section id="ai-ml" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">AI Research</span>
                </div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI & Machine <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Learning</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                1.5 years of research and development in AI/ML, specializing in LLMs, RAG systems, 
                and intelligent assistants with real-world integrations.
              </p>
            </motion.div>
          </div>

          <AIProjects />
        </div>
      </section>

      {/* Enterprise & Microservices Section */}
      <section id="enterprise" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Enterprise Solutions</span>
                </div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Systems</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Scalable enterprise solutions built with Clean Architecture, microservices, 
                and modern .NET stack for finance, e-commerce, and business operations.
              </p>
            </motion.div>
          </div>

          <EnterpriseProjects />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
                </div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Building scalable, high-performance applications used by thousands of users. 
                Each project demonstrates expertise in modern tech stacks and best practices.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Additional Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center mt-20 mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Other Projects</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Additional projects showcasing diverse technical capabilities and problem-solving skills.
                    </p>
                  </div>
                </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wider">Technical Expertise</span>
                  </div>
                </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Tech <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Full-stack expertise across backend development, AI/ML, DevOps, cloud infrastructure, and modern frameworks. 
                Continuously learning and adapting to emerging technologies.
              </p>
            </motion.div>
          </div>

          {/* 6-Column Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            <SkillCard 
              category="Backend Development" 
              skills={skills.backend} 
              color="blue" 
              description="Building scalable APIs and robust server-side applications with PHP, .NET, and Node.js"
            />
            <SkillCard 
              category="Frontend Development" 
              skills={skills.frontend} 
              color="green" 
              description="Creating responsive, accessible, and performant user interfaces with modern frameworks"
            />
            <SkillCard 
              category="AI & Machine Learning" 
              skills={skills.ai_ml} 
              color="purple" 
              description="Developing intelligent systems with LLMs, RAG architectures, and deep learning frameworks"
            />
            <SkillCard 
              category="DevOps & Cloud" 
              skills={skills.devops} 
              color="cyan" 
              description="Automating infrastructure, containerization, and cloud deployment on AWS and Kubernetes"
            />
            <SkillCard 
              category="Databases & Storage" 
              skills={skills.databases} 
              color="orange" 
              description="Designing efficient data models and optimizing database performance across SQL and NoSQL"
            />
            <SkillCard 
              category="Tools & Platforms" 
              skills={skills.tools} 
              color="red" 
              description="Leveraging industry-standard tools for development, monitoring, and deployment"
            />
          </div>

          {/* Skills Summary */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Capabilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                      { number: '6+', label: 'Tech Domains' },
                      { number: '30+', label: 'Technologies' },
                      { number: '80%', label: 'Avg. Proficiency' },
                      { number: '4+', label: 'Years Experience' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Certifications</span>
                </div>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Credentials</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Validated expertise through industry-recognized certifications and continuous learning.
              </p>
            </motion.div>
          </div>

          <Certifications />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Collaborate</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Lets discuss how my backend expertise and full-stack capabilities can drive your next project to success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ScheduleInterview />
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded-2xl hover:border-accent/50 transition-all duration-300">
                    Download Resume
                  </button>
                </motion.div>
              </div>
            </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}