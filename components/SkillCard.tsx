// components/SkillCard.tsx - UPDATED
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
  color: 'blue' | 'green' | 'purple' | 'cyan' | 'orange' | 'red';
  description: string;
}

const colorConfig = {
  blue: {
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/25',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400'
  },
  green: {
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/25',
    bg: 'bg-green-500/10',
    text: 'text-green-400'
  },
  purple: {
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/25',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400'
  },
  cyan: {
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/25',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400'
  },
  orange: {
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/25',
    bg: 'bg-orange-500/10',
    text: 'text-orange-400'
  },
  red: {
    gradient: 'from-red-500 to-pink-500',
    glow: 'shadow-red-500/25',
    bg: 'bg-red-500/10',
    text: 'text-red-400'
  }
};

export default function SkillCard({ category, skills, color, description }: SkillCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const config = colorConfig[color];

  return (
   <div 
      ref={ref}
      className={`glass rounded-3xl p-6 hover:shadow-2xl ${config.glow} transition-all duration-500 group h-full flex flex-col`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
      {/* Category Header */}
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold ${config.text} mb-3 group-hover:scale-105 transition-transform duration-300`}>
          {category}
        </h3>
        <div className={`w-16 h-1 bg-gradient-to-r ${config.gradient} mx-auto rounded-full mb-3`} />
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Skills List */}
      <div className="space-y-4 flex-1">
        {skills.map((skill, index) => (
           <div 
            key={skill.name}
            className="space-y-2 group-hover:scale-105 transition-transform duration-300"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
            {/* Skill Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${config.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg">{skill.icon}</span>
                </div>
                <span className="font-semibold text-white text-sm">{skill.name}</span>
              </div>
             <span className={`text-sm font-bold ${config.text}`}>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {skill.level}%
              </motion.span>
            </span>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
             <div className={`h-2 rounded-full relative overflow-hidden bg-gradient-to-r ${config.gradient}`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Avg. Proficiency</span>
          <span className="font-semibold text-white">
            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
          </span>
        </div>
      </div>
    </motion.div>
    </div>
  );
}