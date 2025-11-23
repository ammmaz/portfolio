// components/ExperienceTimeline.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Star } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Symits",
    position: "Full Stack Developer (PHP Laravel, Nodejs, React, Next.js)",
    period: "Dec 2023 - Present",
    location: "Karachi, Pakistan",
    description: "Leading development of scalable web applications with modern tech stacks and best practices.",
    achievements: [
      "Developed Indolj - Food Order eCommerce platform serving 5K+ users",
      "Built Engyl Recruitment System with advanced candidate matching",
      "Implemented Sabahytics with Google Analytics integration using Redis caching",
      "Optimized application performance by 40% through code optimization"
    ],
    technologies: ["Laravel", "Node.js", "React", "Next.js", "Redis", "MySQL"],
    type: "fulltime"
  },
  {
    id: 2,
    company: "Crystallite Private Limited",
    position: "PHP Developer",
    period: "Oct 2022 - Nov 2023",
    location: "Karachi, Pakistan",
    description: "Developed and maintained CRM systems and custom WordPress solutions for various brands.",
    achievements: [
      "Built Brand & Lead Management CRM handling 10K+ leads",
      "Developed scalable web applications with Laravel framework",
      "Customized WordPress websites for Bitwits and other brands",
      "Implemented secure payment integrations and user management"
    ],
    technologies: ["PHP", "Laravel", "WordPress", "MySQL", "JavaScript"],
    type: "fulltime"
  },
  {
    id: 3,
    company: "In Technologies",
    position: "Jr. PHP Laravel Developer",
    period: "Jan 2022 - Sept 2022",
    location: "Karachi, Pakistan",
    description: "Built web applications and APIs with third-party integrations for mobile development.",
    achievements: [
      "Developed eCommerce platforms with secure payment integration",
      "Built real-time ride-sharing system with GPS tracking",
      "Implemented third-party API integrations in Laravel and Codeigniter",
      "Created scalable and high-performance web solutions"
    ],
    technologies: ["PHP", "Laravel", "Codeigniter", "MySQL", "APIs"],
    type: "fulltime"
  }
];

export default function ExperienceTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-accent/30"></div>
        
        {experiences.map((exp, index) => (
          <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-slate-900 -translate-x-1/2 z-10"></div>
                
                {/* Experience card */}
                <div className="ml-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-semibold text-primary">{exp.company}</span>
                      </div>
                    </div>
                    
                    {/* Period and location */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 lg:mt-0 lg:text-right">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                        >
                          <li className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        </motion.div>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.05 }}
                      >
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-accent/20 hover:border-accent/30 hover:text-white transition-all duration-300">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
    </div>
  );
}