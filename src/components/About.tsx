import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [-5, 5],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Pre-calculate positions for background elements to ensure consistency
  const backgroundElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 5) % 100}%`,
    top: `${(i * 7) % 100}%`,
    duration: 3 + (i % 2) * 2,
    delay: (i % 4) * 0.5,
  }));

  return (
    <section id="about" className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              left: element.left,
              top: element.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-4xl mx-auto px-4 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.div
            animate={floatAnimation}
            className="mt-4"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-blue-400" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-8 text-lg text-gray-300"
          variants={containerVariants}
        >
          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              I&apos;m a <span className="text-blue-400 font-semibold">Backend Developer</span> with over 
              <span className="text-purple-400 font-semibold"> 1.5 years </span> 
              of experience in building and optimizing server-side applications. 
              My expertise lies in <span className="text-blue-400 font-semibold">Java, Spring Boot, Python, Flask, and AWS Cloud Services</span>, complemented by strong 
              front-end development skills in ReactJS.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              I graduated from <span className="text-blue-400 font-semibold">Mangalore Institute of Technology & Engineering</span> with a B.E in Computer Science and 
              Engineering, maintaining an impressive <span className="text-purple-400 font-semibold">CGPA of 8.75</span>.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-lg shadow-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              I&apos;m passionate about <span className="text-blue-400 font-semibold">writing clean, maintainable code</span> and delivering 
              <span className="text-purple-400 font-semibold"> high-quality, scalable software solutions</span>. 
              My experience includes <span className="text-blue-400 font-semibold">leading cloud infrastructure initiatives</span>, developing full-stack applications, and 
              implementing efficient data processing systems.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;