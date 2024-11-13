import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Maximize2, MinusCircle } from 'lucide-react';

// Project data in JSON format
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform with Spring Boot and React. Implemented secure payment processing, real-time inventory management, and user authentication.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "AWS", "Stripe"],
    highlights: [
      "Reduced page load time by 40% through optimization",
      "Implemented elastic search for better product discovery",
      "Integrated CI/CD pipeline using Jenkins"
    ],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.com",
    image: "/api/placeholder/600/400",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "Developed a collaborative task management system with real-time updates using WebSocket. Features include task assignment, progress tracking, and automated notifications.",
    techStack: ["Java", "Spring WebSocket", "MongoDB", "Docker", "React"],
    highlights: [
      "Implemented real-time collaboration features",
      "Reduced system latency by 60%",
      "Containerized application using Docker"
    ],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://task-manager-demo.com",
    image: "/api/placeholder/600/400",
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Created a data analytics dashboard with AI-driven insights. Implemented predictive analytics and automated report generation using Python and Flask.",
    techStack: ["Python", "Flask", "TensorFlow", "React", "D3.js"],
    highlights: [
      "Integrated machine learning models for predictions",
      "Automated report generation saving 10 hours/week",
      "Real-time data visualization with D3.js"
    ],
    githubLink: "https://github.com/yourusername/analytics-dashboard",
    liveLink: "https://analytics-demo.com",
    image: "/api/placeholder/600/400",
    color: "from-orange-600 to-red-600"
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  // Floating animation for background elements
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 7) % 100,
    y: (i * 5) % 100,
    size: 4 + (i % 3) * 2,
    duration: 3 + (i % 2) * 2
  }));

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 overflow-hidden" id="projects">
      {/* Animated background */}
      <div className="absolute inset-0">
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className="absolute rounded-full opacity-20"
            style={{
              background: `linear-gradient(45deg, #60A5FA, #7C3AED)`,
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-16">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <div className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 line-clamp-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4" // Updated z-index
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
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <motion.button
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setSelectedId(null)}
                      >
                        <MinusCircle size={24} />
                      </motion.button>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                              <motion.li
                                key={index}
                                className="text-gray-300 flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="text-blue-400">•</span>
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <motion.span
                                key={tech}
                                className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}
                                whileHover={{ scale: 1.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Github size={20} />
                            View Code
                          </motion.a>
                          <motion.a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500"
                            whileHover={{ scale: 1.05 }}
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>
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