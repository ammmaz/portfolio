// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Lets Work Together</h3>
              <p className="text-gray-300">Building amazing web experiences</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex space-x-4">
              {[
                { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={social.href}
                    className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Senior Web Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}