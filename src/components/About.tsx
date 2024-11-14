import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Pen, Code2, BookOpen, Laptop } from 'lucide-react';

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

  // Background elements animation
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
        className="max-w-5xl mx-auto px-6 relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-6xl font-bold text-blue-400 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-200 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Building websites and solving problems with code
          </motion.p>
          <motion.div
            animate={floatAnimation}
            className="mt-6"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-blue-400" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Code2 className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold text-blue-400">Developer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build websites and applications that work well and look great. 
              I enjoy working on both the front-end and back-end, making sure 
              everything runs smoothly from start to finish.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Laptop className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-purple-400">Problem Solver</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I enjoy tackling complex problems and finding simple solutions. 
              Learning new technologies and tools helps me build better software 
              and create useful features for users.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-green-400">Writer</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I write articles on Dev.to to share what I&apos;ve learned along the way. 
              Teaching others helps me understand things better, and I enjoy helping 
              fellow developers learn and grow.
            </p>
          </motion.div>

          <motion.div 
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Pen className="w-8 h-8 text-pink-400 mr-4" />
              <h3 className="text-2xl font-bold text-pink-400">Poet</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              When I&apos;m not coding, I write poetry in Kannada. Having both technical 
              and creative interests helps me think differently about problems and 
              come up with unique ideas.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.blockquote 
            className="text-xl italic text-gray-300 max-w-3xl mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            &quot;Mixing code with creativity to build useful things for the web.&quot;
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;