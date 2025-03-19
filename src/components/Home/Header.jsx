import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'ABOUT', id: 'about' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'SKILLS', id: 'skills' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-50">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header; 