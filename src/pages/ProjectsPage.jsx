
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Shelfie App',
    description: 'Designed and developed a cross-platform mobile app for book lovers to maintain their personal digital library',
    longDescription: 'Designed and developed a cross-platform mobile app for book lovers to maintain their personal digital library. Implemented secure user authentication (register/login) using modern authentication practices. Enabled users to add, update, and manage books along with descriptions stored in a centralized database. Ensured seamless data flow between frontend and backend using RESTful APIs. Focused on clean UI/UX design for an intuitive user experience and smooth navigation. Technologies used: React Native, Firebase (or your backend), React Navigation, and secure storage libraries.',
    tags: ['React Native', 'ReactJS', 'Node.js', 'CSS'],
    imageUrl: 'shelfie', // Place shelfie.jpg in public/images/
    githubLink: 'https://github.com/sanjaysaini383/SHELFIE_APP',
  },
  {
    id: 2,
    title: 'Real Time Chat App',
    description: 'Developed a full-stack real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) withTailwind CSS . The app enables users to create accounts, log in, and engage in one-on-one conversations with livemessage updates, responsive UI/UX across devices, and smooth real-time interactions for a seamless user experience.',
    longDescription: '◦ Developed a full-stack real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) withTailwind CSS .The app enables users to create accounts, log in, and engage in one- on - one conversations with livemessage updates, responsive UI / UX across devices, and smooth real - time interactions for a seamless user experience.Integrated Socket.IO for real - time communication, enabling instant message delivery, online / offline status, and typingindicators.Managed WebSocket connections to provide a smooth chatting experience without manual refresh.Implemented Cloudinary for media upload and storage, enabling users to share images in chats with secure handling,dynamic preview rendering, and efficient cloud - based optimization for performance during high - volume usage',
    tags: ['ReactJS', 'ExpressJS', 'NodeJS', 'Tailwind CSS', 'MongoDB', 'Socket.io', 'Cloudinary'],
    imageUrl: 'chat', // Place ecoleta.jpg in public/images/
    githubLink: 'https://github.com/sanjaysaini383/Chat-App-Mern-Stack-',
  },
  {
    id: 3, 
    title: 'Traffic Flow Prediction',
    description: 'Worked under the guidance of Prof. Bhargab Maitra to develop a traffic flow prediction model that predicts the congestion level (low, moderate, high) based on time, location, and past data.',
    longDescription: 'Worked under the guidance of Prof. Bhargab Maitra to develop a traffic flow prediction model that predicts the congestion level (low, moderate, high) based on time, location, and past data. Utilized time-series forecasting and regression techniques in real-world traffic data sets. Analysis of seasonality, trend,and dependencies of our prediction on the weather, holiday and special days data set.Applied feature engineering on temporal and spatial data; trained models using Random Forest and XGBoost, achieving 99.329 percent accuracy. Visualized traffic trends to identify peak congestion patterns, improved data interpretability, and evaluated model performance using confusion matrices, ROC curves, and precision recall metrics.',
    tags: ['Machine Learning', 'Random Forest', 'XGBoost', 'Time Series Analysis', 'Data Visualization'],
    imageUrl: 'traffic', // Place cybersynth.jpg in public/images/
    githubLink: 'https://github.com/sanjaysaini383/Machine-Learning-Projects/blob/main/Traffic.ipynb',
  },
  {
    id: 4,
    title: 'House Price Prediction Model',
    description: 'A futuristic CRM system with advanced analytics and automation features for businesses.',
    longDescription: 'QuantumLeap CRM is designed to redefine customer relationship management. It offers predictive analytics, AI-driven lead scoring, and automated workflows. The tech stack includes Angular for the frontend, Python (Django) for the backend, and a microservices architecture. The UI features glassmorphism and neon accents for a modern feel.',
    tags: ['Machine Learning','Data Visualization', 'Ridge Regression', 'Random Forest', 'EDA','Feature Engineering'],
    imageUrl: 'house', // Place quantumleap.jpg in public/images/
    githubLink: 'https://github.com/sanjaysaini383/Machine-Learning-Projects/blob/main/Advance_house_price.ipynb',
  },
];

const ProjectCard = ({ project, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  const tiltVariants = {
    rest: { rotateX: 0, rotateY: 0, scale: 1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" },
    hover: {
      rotateX: isHovered ? (Math.random() - 0.5) * 10 : 0, // Random small tilt on X
      rotateY: isHovered ? (Math.random() - 0.5) * 15 : 0, // Random small tilt on Y
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 240, 255, 0.3)" // Neon blue glow
    }
  };

  return (
    <motion.div
      className="perspective"
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="preserve-3d h-full"
        variants={tiltVariants}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="h-full flex flex-col bg-card/80 glassmorphism border-glass-edge overflow-hidden group">
          <CardHeader className="relative p-0">
            <div className="aspect-video overflow-hidden">
              <img
                src={`images/${project.imageUrl}.png`}  //src\images\shelfie.png
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow pt-4">
            <CardDescription className="text-muted-foreground mb-3 line-clamp-3">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full">{tag}</span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center pt-4 border-t border-glass-edge">
            <Button variant="link" className="text-neon-pink p-0 h-auto hover:text-neon-pink/80" onClick={() => onOpenModal(project)}>
              <Eye size={18} className="mr-2" /> Learn More
            </Button>
            <div className="flex space-x-2">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  <Github size={20} />
                </a>
              )}
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};


const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section
      id="projects"
      className="section-padding bg-space-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center holographic-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Creations
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={handleOpenModal} />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={handleCloseModal}>
          <DialogContent className="sm:max-w-[625px] glassmorphism border-glass-edge text-foreground">
            <DialogHeader>
              <DialogTitle className="text-3xl text-neon-blue">{selectedProject.title}</DialogTitle>
              <div className="aspect-video rounded-md overflow-hidden my-4">
                <img
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1681511346076-da60ca823409" />
              </div>
              <DialogDescription className="text-muted-foreground text-base">
                {selectedProject.longDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="font-semibold text-neon-pink mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-sm bg-light-purple/20 text-light-purple rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex space-x-4 mt-6">
                {selectedProject.liveLink && (
                  <Button asChild className="bg-neon-blue text-space-black hover:bg-neon-blue/80">
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.githubLink && (
                  <Button variant="outline" asChild className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-space-black">
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="mr-2" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.section>
  );
};

export default ProjectsPage;
