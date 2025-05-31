
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 15, -15, 0],
      transition: { duration: 0.3, yoyo: Infinity }
    }
  };

  return (
    <motion.footer 
      className="py-8 px-6 md:px-12 bg-space-black/50 border-t border-glass-edge relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a href="https://github.com/sanjaysaini383" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" className="text-muted-foreground hover:text-neon-blue transition-colors">
            <Github size={24} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/sanjay-kumar-saini-999167299/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover" className="text-muted-foreground hover:text-neon-blue transition-colors">
            <Linkedin size={24} />
          </motion.a>
          
        </div>
        <p className="text-sm">
          &copy; {currentYear} Sanjay Saini. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Designed with <span className="text-neon-pink">&hearts;</span> and a touch of future.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
  