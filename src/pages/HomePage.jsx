
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap } from 'lucide-react';

const HomePage = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center section-padding relative overflow-hidden bg-hero-pattern"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 via-space-black/50 to-space-black/80 z-0"></div>
      
      <div className="relative z-10 p-4 md:p-8 glassmorphism max-w-3xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          variants={itemVariants}
        >
          <span className="block holographic-text">Hello, I'm Sanjay Kumar Saini</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-light-purple mb-8"
          variants={itemVariants}
        >
          A Passionate <span className="font-semibold text-neon-blue">Full-Stack Developer</span> & <span className="font-semibold text-neon-pink">AI/ML Enthusiasts</span>
        </motion.p>
        <motion.div variants={itemVariants} className="space-x-4">
          <Button
            size="lg"
            className="bg-neon-blue text-space-black hover:bg-neon-blue/80 hover:shadow-neon-glow-blue transition-all duration-300 transform hover:scale-105 group"
            onClick={() => scrollToSection('projects')}
          >
            View My Work <Zap size={20} className="ml-2 group-hover:animate-ping" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-space-black hover:shadow-neon-glow-pink transition-all duration-300 transform hover:scale-105 group"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch <ArrowDown size={20} className="ml-2 group-hover:animate-bounce" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={32} className="text-neon-blue animate-pulse" />
      </motion.div>
    </motion.section>
  );
};

export default HomePage;
  