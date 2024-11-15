"use client"
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Project';
import { Switch } from "@/components/ui/switch"
import { MousePointerIcon as CursorIcon } from 'lucide-react';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number; }) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      {/* Cursor trail */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'all 0.1s ease-out'
        }}
      />
    </>
  );
};

const CursorToggle = ({ isEnabled, onToggle }: { isEnabled: boolean; onToggle: (checked: boolean) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full"
    >
      <motion.div
        layout
        className={`flex items-center gap-3 px-3 py-2 rounded-full backdrop-blur-md ${
          isEnabled ? 'bg-blue-500/20' : 'bg-gray-800/20'
        }`}
      >
        <motion.div 
          className="flex items-center"
          initial={false}
          animate={{
            width: isHovered ? 'auto' : 0,
            marginRight: isHovered ? 8 : 0
          }}
          style={{ overflow: 'hidden' }}
        >
          <span className={`text-sm whitespace-nowrap ${
            isEnabled ? 'text-blue-400' : 'text-gray-300'
          }`}>
            Glow Effect
          </span>
        </motion.div>
        
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              scale: isEnabled ? 1.1 : 1,
              rotate: isEnabled ? 360 : 0
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <CursorIcon 
              className={`w-4 h-4 ${isEnabled ? 'text-blue-400' : 'text-gray-400'}`}
            />
          </motion.div>
          <Switch
            checked={isEnabled}
            onCheckedChange={onToggle}
            className={`${isEnabled ? 'bg-blue-600' : 'bg-gray-600'} transition-colors duration-200`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true);

  useEffect(() => {
    const savedPreference = localStorage.getItem('customCursorEnabled');
    if (savedPreference !== null) {
      setIsCursorEnabled(savedPreference === 'true');
    }
  }, []);

  const handleToggleCursor = (checked: boolean) => {
    setIsCursorEnabled(checked);
    localStorage.setItem('customCursorEnabled', checked.toString());
  };

  return (
    <>
      {isCursorEnabled && <Cursor />}
      <CursorToggle isEnabled={isCursorEnabled} onToggle={handleToggleCursor} />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="relative z-40">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects/>
          <Contact /> 
        </div>
      </main>
    </>
  );
}