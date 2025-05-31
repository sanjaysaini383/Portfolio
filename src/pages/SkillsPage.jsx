
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Palette, Smartphone, Cloud, Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { name: 'React & Next.js', level: 90, icon: <Code className="text-neon-blue" />, category: 'Frontend' },
  { name: 'JavaScript & TypeScript', level: 95, icon: <Code className="text-neon-blue" />, category: 'Frontend' },
  { name: 'HTML5 & CSS3/Tailwind', level: 95, icon: <Palette className="text-neon-blue" />, category: 'Frontend' },
  { name: 'Responsive Design', level: 90, icon: <Smartphone className="text-light-purple" />, category: 'Frontend' },
  { name: 'Node.js & Express', level: 80, icon: <Server className="text-neon-pink" />, category: 'Backend' },
  { name: 'Python & Rest API', level: 75, icon: <Server className="text-neon-pink" />, category: 'Backend' },
  { name: 'SQL & MONGODB Databases', level: 85, icon: <Database className="text-neon-pink" />, category: 'Backend' },
  { name: 'API Design & Integration', level: 85, icon: <Cloud className="text-light-purple" />, category: 'Backend' },
  { name: 'Machine Learning', level: 70, icon: <Star className="text-neon-pink" />, category: 'AI/ML' },
  { name: 'Data Analysis', level: 65, icon: <Database className="text-neon-pink" />, category: 'AI/ML' },
  { name: 'Deep Learning', level: 60, icon: <Star className="text-neon-pink" />, category: 'AI/ML' },
  { name: 'Time Series Analysis', level: 65, icon: <Database className="text-light-purple" />, category: 'AI/ML' },

];

const SkillCategory = ({ title, skills, iconColor }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 100, damping: 12 },
    }),
  };

  return (
    <motion.div
      className="glassmorphism p-6 md:p-8 rounded-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className={`text-2xl font-semibold mb-6 text-${iconColor} flex items-center`}>
        {title === 'Frontend' && <Code size={28} className="mr-3" />}
        {title === 'Backend' && <Server size={28} className="mr-3" />}
        {title === 'AI/ML Skills' && <Star size={28} className="mr-3" />}
        {title}
      </h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <motion.div key={skill.name} custom={index} variants={itemVariants} className="group">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center text-foreground">
                <span className="mr-2 group-hover:animate-pulse">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
              <span className={`text-sm font-medium text-${iconColor}`}>{skill.level}%</span>
            </div>
            <Progress value={skill.level} className={`h-3 bg-opacity-30 [&>div]:bg-${iconColor}`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


const SkillsPage = () => {
  const frontendSkills = skillsData.filter(s => s.category === 'Frontend');
  const backendSkills = skillsData.filter(s => s.category === 'Backend');
  const otherSkills = skillsData.filter(s => s.category === 'AI/ML');

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <motion.section
      id="skills"
      className="section-padding bg-space-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center holographic-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Arsenal of Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={frontendSkills} iconColor="neon-blue" />
          <SkillCategory title="Backend" skills={backendSkills} iconColor="neon-pink" />
          <SkillCategory title="AI/ML Skills" skills={otherSkills} iconColor="light-purple" />
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsPage;
