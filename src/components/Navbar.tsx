// import { FC, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Code2, Menu, X, Terminal, ChevronRight } from "lucide-react";

// const Navbar: FC = () => {
//   const [activeSection, setActiveSection] = useState<string>("");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: "About", id: "about", icon: Terminal },
//     { label: "Experience", id: "experience", icon: Code2 },
//     { label: "Skills", id: "skills", icon: ChevronRight },
//     { label: "Projects", id: "projects", icon: Terminal },
//     { label: "Contact", id: "contact", icon: Code2 }
//   ];

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       setActiveSection(sectionId);
//       setIsMobileMenuOpen(false);
//       const offsetPosition = element.offsetTop - 80;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//       const sections = navItems.map(item => document.getElementById(item.id));
//       const scrollPosition = window.scrollY + 100;
      
//       let found = false;
//       sections.forEach((section) => {
//         if (section && !found) {
//           const sectionTop = section.offsetTop;
//           const sectionBottom = sectionTop + section.offsetHeight;
          
//           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             setActiveSection(section.id);
//             found = true;
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? "bg-gray-900/95 backdrop-blur-md shadow-lg" 
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.div 
//             className="flex items-center space-x-2 cursor-pointer group"
//             whileHover={{ scale: 1.05 }}
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             <span className="text-xl font-mono font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
//               {"<"}Varshith{" />"}
//             </span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`relative px-4 py-2 rounded-lg font-mono text-sm
//                     ${activeSection === item.id 
//                       ? "text-white" 
//                       : "text-gray-400 hover:text-white"
//                     }
//                     transition-colors group flex items-center space-x-2`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{item.label}</span>
//                   {activeSection === item.id && (
//                     <motion.div
//                       layoutId="activeSection"
//                       className="absolute inset-0 bg-gray-800 rounded-lg -z-10"
//                       transition={{
//                         type: "spring",
//                         stiffness: 380,
//                         damping: 30
//                       }}
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             className="md:hidden p-2 text-gray-400 hover:text-white"
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
//           >
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <motion.button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`w-full px-4 py-3 flex items-center space-x-2 font-mono text-sm
//                     ${activeSection === item.id 
//                       ? "bg-gray-800 text-white" 
//                       : "text-gray-400"
//                     }`}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Icon className="w-4 h-4" />
//                   <span>{item.label}</span>
//                 </motion.button>
//               );
//             })}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Terminal } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '< About />', id: 'about', icon: Code },
    { label: '{ Experience }', id: 'experience-education', icon: Terminal },
    { label: '[Skills]', id: 'skills', icon: Code },
    { label: '_projects()', id: 'projects', icon: Terminal },
    { label: './contact', id: 'contact', icon: Code }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 80;
    
    if (element) {
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
      
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
      
      setIsScrolled(scrollPosition > 50);
      
      const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[10] transition-all duration-100 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-xl">&lt;/&gt;</span>
            </div>
            <span 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Varshith
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-mono text-sm rounded-md transition-colors
                  ${activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-md"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors
                      ${activeSection === item.id 
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white' 
                        : 'text-gray-400 hover:text-white'
                      }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="font-mono text-sm">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;