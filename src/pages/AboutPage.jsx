
import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Zap, Code, Brain } from 'lucide-react';

const AboutPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 } },
  };

  return (
    <motion.section
      id="about"
      className="section-padding bg-space-black/70 backdrop-blur-sm"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-center holographic-text" variants={itemVariants}>
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="perspective" variants={imageVariants}>
            <motion.div
              className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-xl preserve-3d group"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
                alt="A creative portrait or 3D avatar of the developer"
                src="src\images\enhance image.png" />
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 p-2 bg-black/50 rounded-md text-xs text-neon-blue">
                Sanjay Kumar Saini
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
              I am a third-year undergraduate engineering student at IIT Kharagpur with a strong foundation in machine learning and full-stack web development. My technical expertise includes supervised and unsupervised learning, model evaluation, feature engineering, and data preprocessing, with proficiency in tools such as scikit-learn, XGBoost, and convolutional and recurrent neural networks.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>

              On the development side, I specialize in building scalable, responsive web applications using React.js, Node.js, Express, Tailwind CSS, MongoDB, and MySQL. I have experience working with RESTful APIs, secure payment integrations, and system design principles that support high user concurrency and performance.

            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>

              I am also proficient in Python and C++, with a solid grasp of data structures and algorithms, including trees, graphs, dynamic programming, and greedy techniques. My leadership experience in tech-driven roles has further strengthened my skills in collaborative development and deployment of user-centric digital platforms.

            </motion.p>
            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>

Driven by curiosity and a commitment to innovation, I am always looking to expand my technical skill set and contribute to impactful solutions in the fields of AI, software development, and scalable system architecture.
            </motion.p>
            <motion.div className="grid grid-cols-2 gap-4 pt-4" variants={itemVariants}>
              <div className="flex items-center space-x-3 p-3 glassmorphism rounded-lg">
                <Zap size={24} className="text-neon-blue" />
                <span className="text-foreground">Dynamic Solutions</span>
              </div>
              <div className="flex items-center space-x-3 p-3 glassmorphism rounded-lg">
                <Code size={24} className="text-neon-pink" />
                <span className="text-foreground">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3 p-3 glassmorphism rounded-lg">
                <Brain size={24} className="text-light-purple" />
                <span className="text-foreground">Creative Thinking</span>
              </div>
              <div className="flex items-center space-x-3 p-3 glassmorphism rounded-lg">
                <UserCircle size={24} className="text-neon-blue" />
                <span className="text-foreground">User-Focused</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
