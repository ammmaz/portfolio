// components/Experience.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Tech Startup Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Lead development of scalable web applications serving 50K+ users. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40% through code optimization",
      "Reduced page load time from 3.2s to 1.1s",
      "Led a team of 4 developers on major product launches"
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Node.js", "PostgreSQL"],
    type: "fulltime",
    link: "#"
  },
  {
    id: 2,
    company: "Digital Agency Co.",
    position: "Frontend Developer",
    period: "2021 - 2022",
    location: "Remote",
    description: "Developed responsive web applications for clients in e-commerce and SaaS industries.",
    achievements: [
      "Built 15+ client websites with 99% client satisfaction",
      "Implemented design systems used across 30+ projects",
      "Improved development workflow efficiency by 25%"
    ],
    technologies: ["React", "Vue.js", "Tailwind CSS", "Firebase"],
    type: "fulltime",
    link: "#"
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    period: "2020 - 2021",
    location: "Remote",
    description: "Worked with startups and small businesses to build their online presence and web applications.",
    achievements: [
      "Delivered 25+ projects on time and within budget",
      "Maintained 100% client retention rate",
      "Built custom solutions for various industries"
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    type: "contract",
    link: "#"
  },
  {
    id: 4,
    company: "University Tech Lab",
    position: "Web Development Intern",
    period: "2019 - 2020",
    location: "Boston, MA",
    description: "Assisted in developing university web platforms and learning management systems.",
    achievements: [
      "Contributed to campus-wide LMS used by 10K+ students",
      "Implemented accessibility features reaching WCAG 2.1 AA",
      "Reduced bug reports by 60% through improved testing"
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    type: "internship",
    link: "#"
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      {/* Timeline */}
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
                      {exp.link && (
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                        >
                          <a
                            href={exp.link}
                            className="text-gray-400 hover:text-accent transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </motion.div>
                      )}
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
                  <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Key Achievements</h4>
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

                {/* Employment type badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'fulltime' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : exp.type === 'contract'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}