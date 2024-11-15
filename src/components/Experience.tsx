"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ 
  title, 
  subtitle, 
  duration, 
  location, 
  details,
  index 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.2,  // Reduced from 0.3
        delay: index * 0.05,  // Reduced from 0.08
        type: "tween"  // Changed from spring to tween for faster animation
      }
    }}
    exit={{ opacity: 0, y: 5 }}  // Reduced exit distance
    className="relative pl-8 mb-16 group"
  >
    {/* Timeline dot with faster ripple effect */}
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}  // Added quick animation
      style={{left: '-6px'}}
      className="absolute left-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full -translate-x-1/2"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],  // Reduced scale range
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 1,  // Reduced from 1.5
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-blue-400/50"
      />
    </motion.div>

    {/* Content card with simplified hover effect */}
    <motion.div 
      whileHover={{ y: -2 }}  // Simplified hover effect
      transition={{ duration: 0.2 }}  // Quick transition
      className="backdrop-blur-lg bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-700/50
                 transform transition-all duration-200 hover:shadow-blue-500/20 hover:border-blue-500/50"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-xl text-gray-300 font-medium">{subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-blue-400 font-medium">{duration}</p>
          <p className="text-gray-400">{location}</p>
        </div>
      </div>
      
      <ul className="space-y-3 text-gray-300">
        {details.map((detail, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -5 }}  // Reduced initial offset
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 + (idx * 0.03) }}  // Reduced delays
            className="flex items-start"
          >
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"/>
            <span>{detail}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  // Experience and Education data remains the same
  const experiences = [
    {
      title: "KPIT Technologies",
      subtitle: "Associate Software Engineer",
      duration: "June 2023 - Present",
      location: "Bengaluru",
      details: [
        "Led the D2 Cloud Infrastructure initiative, designing a secure and scalable architecture",
        "Developed full-stack web applications of utility tools using React and Flask, improving productivity by 40%",
        "Created backend solutions with Python on AWS for optimized data processing",
        "Built utility tools reducing manual processing time by 50%",
      ]
    },
    {
      title: "Mobiezy Solutions",
      subtitle: "React Developer",
      duration: "February 2023 — April 2023",
      location: "Bengaluru",
      details: [
        "Developed Progressive Web App (PWA) using React JS",
        "Built middleware components for robust data handling",
        "Utilized AWS services for hosting and deployment",
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Engineering",
      subtitle: "Computer Science",
      duration: "2019 - 2023",
      location: "Mangalore Institute of Technology & Engineering",
      details: [
        "CGPA: 8.75/10",
        "Specialized Android and Web Development",
        "Led a government funded startup project 'TouchReno'"
      ]
    },
    {
      title: "Higher Secondary Education",
      subtitle: "Science Stream",
      duration: "2017 - 2019",
      location: "Excellent PU College, Moodbidri",
      details: [
        "Percentage: 94.86%",
        "Physics, Chemistry, Mathematics"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const element = timelineRef.current;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        
        let progress = 0;
        if (elementTop < windowHeight) {
          progress = Math.min(1, Math.max(0, 
            (windowHeight - elementTop) / (elementHeight + windowHeight)
          ));
        }
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience-education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}  // Reduced from 0.3
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          My Journey
        </motion.h2>

        {/* Enhanced Tab Switcher with faster animations */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/50 p-1.5 rounded-xl inline-flex backdrop-blur-lg border border-gray-700/50">
            <motion.button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-100 flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.01 }}  // Reduced scale
              whileTap={{ scale: 0.99 }}  // Reduced scale
            >
              <Briefcase size={18} />
              Work Experience
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.01 }}  // Reduced scale
              whileTap={{ scale: 0.99 }}  // Reduced scale
            >
              <GraduationCap size={18} />
              Education
            </motion.button>
          </div>
        </div>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line with faster animation */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-blue-600 origin-top
                         shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: "height 0.05s linear"  // Faster transition
              }}
            />
          </div>

          {/* Timeline items with faster transitions */}
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}  // Reduced from 0.2
              >
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} {...exp} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}  // Reduced from 0.2
              >
                {education.map((edu, index) => (
                  <TimelineItem key={index} {...edu} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;