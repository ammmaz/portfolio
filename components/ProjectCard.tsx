// components/ProjectCard.tsx - UPDATED WITH IMAGES
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Star } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics: string[];
  imageUrl: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Project images mapping - using Unsplash for realistic project screenshots
const projectImages = {
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
  food: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=250&fit=crop",
  ride: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop",
  recruitment: "https://images.unsplash.com/photo-1551836026-d5c8acd86963?w=400&h=250&fit=crop",
  analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  wordpress: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
  erp: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
  finance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Get appropriate image based on project category
  const getProjectImage = (project: Project) => {
    if (project.title.toLowerCase().includes('ecommerce') || project.title.includes('Big Bear'))
      return projectImages.ecommerce;
    if (project.title.toLowerCase().includes('food') || project.title.includes('Indolj'))
      return projectImages.food;
    if (project.title.toLowerCase().includes('ride') || project.title.includes('Quick Ride'))
      return projectImages.ride;
    if (project.title.toLowerCase().includes('recruitment') || project.title.includes('Engyl'))
      return projectImages.recruitment;
    if (project.title.toLowerCase().includes('analytics') || project.title.includes('Sabahytics'))
      return projectImages.analytics;
    if (project.title.toLowerCase().includes('wordpress'))
      return projectImages.wordpress;
    return projectImages.ecommerce; // default
  };

  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-accent/30 transition-all duration-500 shadow-2xl shadow-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </div>
          </div>
        )}

        {/* Project Image with Overlay */}
        <div className="relative h-48 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={getProjectImage(project)}
              alt={project.title}
              fill
              className={`object-cover transition-all duration-700 ${imageLoaded ? 'opacity-40' : 'opacity-0'
                } ${isHovered ? 'scale-110' : 'scale-100'}`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse" />
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 mix-blend-overlay" />

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse" />
          </div>

          {/* Play Button Animation */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/20 backdrop-blur-md shadow-2xl group-hover:bg-accent/30 group-hover:border-accent/50 transition-all duration-300">
                {/* <Play className="w-8 h-8 text-white fill-current group-hover:scale-110 transition-transform duration-300" /> */}
              </div>
            </motion.div>
          </div>

          {/* Technology Badges */}
          <div className="absolute bottom-4 left-4 flex gap-2 z-10">
            {project.technologies.slice(0, 3).map((tech) => (
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300">
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-gray-300 text-xs font-medium rounded-full border border-white/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Metrics Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/20 transition-all duration-300">
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {metric}
                </motion.span>
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* All Technologies (Collapsible) */}
          <div className="mb-4">
            <motion.div
              animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              <div className="flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={project.liveUrl} className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </motion.div>
              </div>

              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 px-4 py-2 rounded-xl hover:bg-white/20 hover:text-white hover:border-accent/30 transition-all duration-300 font-medium">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={project.githubUrl} className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </motion.div>
    </div>
  );
}