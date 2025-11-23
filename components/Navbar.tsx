'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface FloatingDotProps {
  i: number;
}

const FloatingDot: React.FC<FloatingDotProps> = ({ i }) => {
  const [randomX] = useState(() => Math.random() * 100);
  const [randomY] = useState(() => Math.random() * 10);

  return (
    <motion.div
      key={i}
      initial={{ x: randomX, y: randomY, opacity: 0 }}
      animate={{ y: [null, -10, 0], opacity: [0, 0.5, 0] }}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        delay: i * 0.5,
      }}
      style={{
        left: `${20 + i * 15}%`,
        position: "absolute",
      }}
    >
      <div className="absolute w-2 h-2 bg-accent/30 rounded-full blur-sm" />
    </motion.div>
  );
};



// 🟢 Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'Skills', 'Experience'];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }}>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/5 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl shadow-primary/10'
          : 'bg-transparent py-5'
          }`}
      >
        {/* Animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <FloatingDot key={i} i={i} />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.5))',
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
                </motion.div>
                <div className="absolute inset-0 bg-accent rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                <motion.span
                  whileHover={{
                    scale: 1.05,
                  }}
                  style={{ display: 'inline-block' }}
                >
                  DevPortfolio
                </motion.span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item)}
                  onMouseLeave={() => setActiveItem('Home')}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 inline-block ${activeItem === item
                        ? 'text-white bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg border border-white/10'
                        : 'text-gray-300 hover:text-white'
                        }`}
                    >
                      {item}

                      {activeItem === item && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-md -z-10 animate-in fade-in duration-300" />
                      )}
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${activeItem === item ? 'w-full' : 'w-0'
                          }`}
                      />
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Hire Me Button */}
            <div className="hidden md:block relative overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative z-10 bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-accent/40">
                  Hire Me
                </button>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10 pointer-events-none" />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-xl hover:border-accent/50 transition-all duration-300">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                      <X className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors" />
                    )}
                  </button>
                  <div className="absolute inset-0 bg-accent/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
              >
                <div className="md:hidden mt-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="relative z-10 p-6 space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          x: 10,
                          backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        }}
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-300 hover:text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-transparent hover:border-accent/30 backdrop-blur-sm"
                        >
                          {item}
                        </a>
                      </motion.div>
                    ))}
                    <div className="w-full relative overflow-hidden group mt-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="w-full relative z-10 bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300">
                          Hire Me
                        </button>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl pointer-events-none" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
