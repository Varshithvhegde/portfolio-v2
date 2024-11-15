import React, { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Mail } from 'lucide-react';

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

const HighlightedText = ({ children }) => (
  <span className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-2 py-1 rounded-md hover:from-blue-500/30 hover:to-purple-500/30 transition-colors duration-300 font-medium">
    {children}
  </span>
);

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl transform transition-transform duration-3000 animate-pulse" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transform transition-transform duration-3000 animate-pulse delay-1000" />
      </div>

      <div className="text-center space-y-4 relative z-5">
        {/* Main title with gradient and animation */}
        <AnimatedText delay={50}>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:scale-105 transition-transform duration-300 leading-relaxed">
            Varshith V Hegde
          </h1>
        </AnimatedText>

        {/* Location with icon - reduced spacing */}
        <AnimatedText delay={150}>
          <div className="flex items-center justify-center space-x-2 text-gray-400 -mt-2">
            <MapPin size={16} />
            <span>Karnataka, India</span>
          </div>
        </AnimatedText>

        {/* Professional title with fade-in animation */}
        <AnimatedText delay={250}>
          <p className="text-2xl text-gray-300 mt-4">
            Full Stack Developer & Android Engineer
          </p>
        </AnimatedText>

        {/* Enhanced description with fade-in animation */}
        <AnimatedText delay={600}>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mt-4">
            <p>
              Hi! I&apos;m a <HighlightedText>freelance full-stack developer</HighlightedText> who builds 
              web applications and a <br/><HighlightedText>self-taught Android developer</HighlightedText> focused on Kotlin.
            </p>
            <p className="mt-4">
              Currently working as a <HighlightedText>backend developer</HighlightedText> with{' '}
              <HighlightedText>1.5+ years</HighlightedText> of professional experience in 
              developing server-side applications.
            </p>
          </div>
        </AnimatedText>

        {/* Contact button */}
        <AnimatedText delay={800}>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Contact Me</span>
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