import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [previousSection, setPreviousSection] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 64;
    
    if (element) {
      setPreviousSection(activeSection);
      setActiveSection(sectionId);
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY;
      
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setPreviousSection(activeSection);
        setActiveSection('contact');
        return;
      }

      let found = false;
      sections.forEach((section) => {
        if (section && !found) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setPreviousSection(activeSection);
            setActiveSection(section.id);
            found = true;
          }
        }
      });
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, [activeSection]);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  // Calculate the direction of the animation
  const getAnimationDirection = (itemId: string) => {
    const currentIndex = navItems.findIndex(item => item.id === activeSection);
    const itemIndex = navItems.findIndex(item => item.id === itemId);
    return itemIndex > currentIndex ? 1 : -1;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            className="text-xl font-bold text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Varshith V Hegde
          </motion.span>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-gray-300 hover:text-white transition-colors ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="activeSection"
                    initial={{ 
                      x: getAnimationDirection(item.id) * 50,
                      opacity: 0 
                    }}
                    animate={{ 
                      x: 0,
                      opacity: 1 
                    }}
                    exit={{ 
                      x: -getAnimationDirection(item.id) * 50,
                      opacity: 0 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;