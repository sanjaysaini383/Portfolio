
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, User, Briefcase, MessageSquare, Star } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: <Code size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Star size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { id: 'contact', label: 'Contact', icon: <MessageSquare size={18} /> },
];

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24, delay: 0.1 } },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-40 py-4 px-6 md:px-12 glassmorphism"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold holographic-text cursor-pointer"
          onClick={() => handleLinkClick('home')}
          whileHover={{ scale: 1.05, textShadow: "0 0 8px hsl(var(--primary))" }}
        >
          MyPortfolio
        </motion.div>

        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="text-foreground hover:text-neon-blue hover:bg-transparent transition-all duration-300 group"
              onClick={() => handleLinkClick(item.id)}
            >
              <span className="mr-2 group-hover:text-neon-blue transition-colors duration-300">{item.icon}</span>
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neon-blue mt-0.5"></span>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:text-neon-blue">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="md:hidden absolute top-full left-0 right-0 bg-space-black/90 backdrop-blur-sm shadow-lg p-4"
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <Button
                variant="ghost"
                className="w-full justify-start text-lg text-foreground hover:text-neon-blue hover:bg-transparent"
                onClick={() => handleLinkClick(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
  