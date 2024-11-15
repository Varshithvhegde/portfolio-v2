import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ExternalLink, Github, MinusCircle, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { projectsData } from '@/data/projectData';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEasterEggFound, setIsEasterEggFound] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const controls = useAnimation();
  
  const projectsPerView = 3;
  const totalProjects = projectsData.length;
  const maxIndex = totalProjects - projectsPerView;

  // Easter egg sequence
  useEffect(() => {
    if (clickCount === 5) {
      setIsEasterEggFound(true);
      controls.start({
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 360],
        transition: { duration: 1 }
      });
    }
  }, [clickCount, controls]);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const expandedCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  // Enhanced floating elements with more variety
  const floatingElements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: (i * 7) % 100,
    y: (i * 5) % 100,
    size: 3 + (i % 4) * 2,
    duration: 2 + (i % 3) * 2,
    delay: i * 0.1,
    rotate: i % 2 === 0
  }));

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-0 overflow-hidden" id="projects">
      {/* Enhanced Animated background */}
      <div className="absolute inset-0">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: `linear-gradient(${45 + el.id * 30}deg, #60A5FA, #7C3AED)`,
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, 30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
              rotate: el.rotate ? [0, 360] : [0, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative pt-16">
        {/* Enhanced title with hover effect */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text cursor-pointer"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgb(96, 165, 250, 0.5)"
          }}
          onClick={() => setClickCount(prev => prev + 1)}
        >
          {isEasterEggFound ? (
            <motion.div className="flex items-center justify-center gap-2" animate={controls}>
              <Sparkles className="text-blue-400" />
              Featured Projects
              <Sparkles className="text-purple-400" />
            </motion.div>
          ) : (
            "Featured Projects"
          )}
        </motion.h2>

        <div className="relative px-16">
          {/* Enhanced Navigation Buttons */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 flex items-center"
            whileHover={{ x: 5 }}
          >
            <motion.button
              className={`group relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg text-white 
                ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ transform: 'none' }}
            >
              <ChevronLeft size={24} />
              <motion.span
                className="absolute inset-0 rounded-full bg-white/5"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-0 bottom-0 flex items-center"
            whileHover={{ x: -5 }}
          >
            <motion.button
              className={`group relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-lg text-white
                ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ transform: 'none' }}
            >
              <ChevronRight size={24} />
              <motion.span
                className="absolute inset-0 rounded-full bg-white/5"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Carousel Container */}
          <motion.div
            className="overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex gap-8"
              animate={{
                x: `-${currentIndex * (100 / projectsPerView)}%`
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20
              }}
            >
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="cursor-pointer min-w-[calc(33.333%-1.333rem)]"
                >
                  <motion.div 
                    className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden shadow-xl h-full"
                    whileHover={{
                      boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)"
                    }}
                  >
                    <motion.div className="relative overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.3 }
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 line-clamp-2">{project.description}</p>
                      <motion.div 
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <motion.span 
                            key={tech}
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full ${
                  index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 17 }}
              >
                <motion.div
                  className="w-full h-full rounded-full bg-blue-400/50"
                  initial={false}
                  animate={index === currentIndex ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Project Details Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[20] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`project-${selectedId}`}
                variants={expandedCardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projectsData.find(p => p.id === selectedId);
                  return (
                    <div className="relative">
                      <motion.div className="relative">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover"
                         
                        />
                      </motion.div>
                      <motion.button
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedId(null)}
                      >
                        <MinusCircle size={24} />
                      </motion.button>
                      <motion.div 
                        className="p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-300 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                              <motion.li
                                key={index}
                                className="text-gray-300 flex items-start gap-2 group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                              >
                                <motion.span 
                                  className="text-blue-400 transform-gpu"
                                  initial={{ scale: 1 }}
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  •
                                </motion.span>
                                <span className="group-hover:text-blue-400 transition-colors">
                                  {highlight}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <motion.span
                                key={tech}
                                className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white relative overflow-hidden group`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                <motion.span
                                  className="absolute inset-0 bg-white/20"
                                  initial={{ x: '-100%' }}
                                  whileHover={{ x: '100%' }}
                                  transition={{ duration: 0.5 }}
                                />
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.5 }}
                            />
                            <Github className="group-hover:rotate-12 transition-transform" size={20} />
                            <span className="relative z-10">View Code</span>
                          </motion.a>
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.5 }}
                            />
                            <ExternalLink className="group-hover:rotate-12 transition-transform" size={20} />
                            <span className="relative z-10">Live Demo</span>
                          </motion.a>
                        </motion.div>

                        {/* Easter egg animated corner decoration */}
                        {isEasterEggFound && (
                          <motion.div
                            className="absolute bottom-4 right-4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.div
                              className="text-blue-400"
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            >
                              <Sparkles size={24} />
                            </motion.div>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;