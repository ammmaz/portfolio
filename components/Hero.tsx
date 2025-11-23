// components/Hero.tsx - UPDATED WITH FUNCTIONALITY
'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Mail, Phone, MapPin, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

// Dynamically import the fixed ThreeScene
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse" />
    </div>
  )
});

export default function Hero() {
  const projectsSectionRef = useRef<HTMLElement>(null);
  const contactInfo = [
    {
      icon: Mail,
      text: "ammazrafi786@gmail.com",
      href: "mailto:ammazrafi786@gmail.com"
    },
    {
      icon: Phone,
      text: "+92 347 2577830",
      href: "tel:+923472577830"
    },
    {
      icon: MapPin,
      text: "Karachi, Pakistan",
      href: "#"
    }
  ];

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Download resume function
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');

    // For now, we'll use a placeholder. Replace with your actual resume URL
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf to public folder
    link.download = 'Ammaz_Rafi_Resume.pdf';

    // Append to the page, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // If you don't have the PDF yet, you can use this fallback:
    // window.open('/Resume_Ammaz (1).pdf', '_blank');
  };

  // View work function (scroll to projects)
  const viewMyWork = () => {
    scrollToProjects();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* CSS-based 3D Background Element */}
      <div className="absolute right-10 top-20 w-64 h-64 opacity-40">
        <ThreeScene />
      </div>

      <div className="container mx-auto px-4 pt-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contact Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-gray-300 hover:text-accent hover:border-accent/30 transition-all duration-300 group"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Senior Backend & Full Stack Developer</span>
              <Zap className="w-4 h-4 text-accent" />
            </div>
          </motion.div>

          {/* Main Heading with Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Ammaz <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rafi</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Backend Specialist & Full Stack Developer
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Senior <span className="text-accent font-semibold">Backend & Full Stack Developer</span> with
              <span className="text-primary font-semibold"> 3+ years</span> of experience building
              <span className="text-accent font-semibold"> scalable web applications</span> using
              <span className="text-primary font-semibold"> PHP/Laravel</span>,
              <span className="text-accent font-semibold"> modern frameworks</span>, and
              <span className="text-primary font-semibold"> cloud technologies</span>
            </p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex justify-center gap-8 mb-8">
              {[
                { number: '3+', text: 'Years Experience' },
                { number: '25+', text: 'Projects Delivered' },
                { number: '15+', text: 'Tech Stacks' },
                { number: '5K+', text: 'Users Served' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-center group">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={viewMyWork}
                  className="relative overflow-hidden bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={downloadResume}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-bold hover:border-accent/50 transition-all duration-300 group"
                >
                  <Download className="w-4 h-4" />
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    Download Resume
                  </span>
                </button>
              </motion.div>

              {/* Quick Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:ammazrafi786@gmail.com"
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl font-bold text-gray-300 hover:text-accent hover:border-accent/30 transition-all duration-300 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Specialization Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "PHP/Laravel Expert",
                "Backend Architecture",
                "RESTful APIs",
                "Database Design",
                "Cloud Deployment",
                "System Optimization"
              ].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-accent/20 hover:border-accent/30 hover:text-white transition-all duration-300">
                    {tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Now Clickable */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToProjects}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full group hover:border-accent/30 transition-all duration-300">
                <ChevronDown className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}