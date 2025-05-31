
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SkillsPage from '@/pages/SkillsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import AnimatedBackground from '@/components/AnimatedBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-space-black text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-neon-blue origin-left z-50" 
        style={{ scaleX }} 
      />
      <Header scrollToSection={scrollToSection} />
      <main className="relative z-10">
        <div ref={homeRef}><HomePage scrollToSection={scrollToSection} /></div>
        <div ref={aboutRef}><AboutPage /></div>
        <div ref={skillsRef}><SkillsPage /></div>
        <div ref={projectsRef}><ProjectsPage /></div>
        <div ref={experienceRef}><ExperiencePage /></div>
        <div ref={contactRef}><ContactPage /></div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
  