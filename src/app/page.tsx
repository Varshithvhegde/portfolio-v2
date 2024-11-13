"use client"
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Project';

// Custom cursor component
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




export default function Home() {
  return (
    <>
      <Cursor />
      {/* <ParticleField /> */}
      {/* <InteractiveBackground /> */}
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