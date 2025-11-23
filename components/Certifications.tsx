// components/Certifications.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    name: "AWS Solution Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "🏅",
    description: "Cloud architecture and solutions design",
    skills: ["Cloud Computing", "AWS Services", "Architecture Design", "Scalability"]
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {certifications.map((cert, index) => (
         <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.badge}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mt-1 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                    <Award className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}