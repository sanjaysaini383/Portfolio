
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    role: 'Mern Stack Developer',
    company: 'Spring Fest IIT Kharagpur',
    period: 'Sep 2024 - Present',
    location: 'Kharagpur,West Bengal,India',
    description: [
      'Built and integrated front-end and back-end APIs for the Spring Fest apps event registration system, supporting solo, group, and mixed-format events with real-time validation and user feedback. Enabled post-registration team updates,member-specific deregistration, and full team removal for enhanced flexibility and user control.',
      'Developed APIs for contingent management, allowing users to create contingents, join using name-code pairs, and handle exits. Simplified group payments and accommodation by introducing a unified transaction and allotment system',
      'Integrated CA leaderboard APIs and designed interactive components for the Idea Sharing and Complaints pages with issue history tracking. These features improved user engagement and helped the app surpass 1,000+ downloads.',
      'Implemented secure authentication and payment systems on the Spring Fest website, including Google login and transaction APIs. Onboarded 2,200+ users, handled 1 lakh+ registrations, and processed 43+ lakh in payments. Also designed a merchandise page with conditional workflows for delivery options.',
    ],
    icon: <Briefcase className="text-neon-blue" />,
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'Acmegrade Private Limited',
    period: 'Jun 2024 - July 2024',
    location: 'Remote',
    description: [
      'Designed and developed a machine learning system to recognize emotions from speech signals by extracting audio features such as MFCCs, pitch, energy, formant frequencies, and speech rate.',
      'Applied end-to-end data preprocessing including noise reduction, normalization, segmentation, and feature extraction to enhance audio quality, ensure data consistency, and improve overall model performance.',
      'Trained and fine-tuned classification models including Support Vector Machines (SVM), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN), evaluating performance using accuracy and F1-score, and successfully deployed the model for real-time emotion detection in speech-based applications.',
    ],
    icon: <Briefcase className="text-neon-pink" />,
  },
  {
    id: 3,
    role: 'Web Development Intern',
    company: 'Octanet Services Private Limited',
    period: 'July 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Designing and implementing user interfaces and make more creative using HTML, CSS, and JavaScript.',
      'Working with front-end frameworks and designed many projects like To-Do list app , responsive landing page of company.',
      'Developed unit tests to ensure code reliability and functionality.',
    ],
    icon: <Briefcase className="text-light-purple" />,
  },
];

const ExperienceItem = ({ item, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15, delay: index * 0.2 }
    },
  };

  return (
    <motion.div
      className="relative pl-12 pb-10 group"
      variants={itemVariants}
    >
      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-card/80 glassmorphism border-glass-edge flex items-center justify-center shadow-lg group-hover:shadow-neon-glow-blue transition-shadow duration-300">
        {item.icon}
      </div>
      <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-pink to-light-purple group-hover:animate-pulse"></div>

      <div className="ml-4 p-6 glassmorphism rounded-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-neon-blue mb-1">{item.role}</h3>
        <p className="text-lg font-medium text-light-purple mb-1">{item.company}</p>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-neon-pink" /> {item.period}</span>
          <span className="flex items-center"><MapPin size={14} className="mr-1.5 text-neon-pink" /> {item.location}</span>
        </div>
        <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-sm">
          {item.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }
    },
  };

  return (
    <motion.section
      id="experience"
      className="section-padding bg-space-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center holographic-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Professional Journey
        </motion.h2>

        <div className="relative">
          {experienceData.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperiencePage;
