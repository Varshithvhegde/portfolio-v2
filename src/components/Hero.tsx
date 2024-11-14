import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const AnimatedText = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  // const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform transition-transform duration-3000 animate-pulse" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform transition-transform duration-3000 animate-pulse delay-1000" />
      </div>

      <div className="text-center space-y-8 relative z-5">
        {/* Main title with gradient and animation */}
        <AnimatedText delay={50}>
          <h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:scale-105 transition-transform duration-300"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            Varshith V Hegde
          </h1>
        </AnimatedText>

        {/* Subtitle with fade-in animation */}
        <AnimatedText delay={100}>
          <p className="text-2xl text-gray-300">
            Backend Developer
          </p>
        </AnimatedText>

        {/* Description with fade-in animation */}
        <AnimatedText delay={600}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Software Developer with over 1.5 years of experience in building and 
            optimizing server-side applications.
          </p>
        </AnimatedText>

        {/* Social links with hover effects */}
        <AnimatedText delay={800}>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com/varshithvhegde"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/varshithvhegde/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"
            >
              LinkedIn
            </a>
          </div>
        </AnimatedText>
      </div>

      {/* Animated arrow with enhanced bounce effect */}
      <div className="absolute bottom-8 transition-transform duration-300 hover:translate-y-2">
        <div className="animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;