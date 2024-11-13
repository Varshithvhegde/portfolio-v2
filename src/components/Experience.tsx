"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
const TimelineItem = ({ 
  company, 
  position, 
  duration, 
  location, 
  achievements,
  index 
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.2 
      }
    }}
    viewport={{ once: true, margin: "-100px" }}
    className="relative pl-8 mb-16"
  >
    {/* Timeline dot */}
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      style={{left : '-6px'}}
      className="absolute left-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full bg-blue-400"
      />
    </motion.div>

    {/* Content card */}
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold text-blue-400">{company}</h3>
      <p className="text-xl text-gray-300">{position}</p>
      <p className="text-gray-400">{duration}</p>
      <p className="text-gray-400 mb-4">{location}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {achievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const experiences = [
    {
      company: "KPIT Technologies",
      position: "Associate Software Engineer",
      duration: "June 2023 - Present",
      location: "Bengaluru",
      achievements: [
        "Led the D2 Cloud Infrastructure initiative, designing a secure and scalable architecture",
        "Developed full-stack web applications using React and Flask, improving productivity by 40%",
        "Created backend solutions with Python on AWS for optimized data processing",
        "Built utility tools reducing manual processing time by 50%",
      ]
    },
    {
      company: "Mobiezy Solutions",
      position: "React Developer",
      duration: "February 2023 — April 2023",
      location: "Bengaluru",
      achievements: [
        "Developed Progressive Web App (PWA) using React JS",
        "Built middleware components for robust data handling",
        "Utilized AWS services for hosting and deployment",
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
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>
        
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-700">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-blue-400 origin-top"
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: "height 0.1s ease-out"
              }}
            />
          </div>

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;