import React from 'react';
import { motion } from 'framer-motion';
import { Command, ChevronRight, Circle, Terminal } from 'lucide-react';
import {
  FaPython, FaJava, FaJs,
  FaReact, FaAngular, FaAws,
  FaGitlab, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiSpring, SiFlask,
  SiNextdotjs, SiMysql, SiMongodb, SiKotlin,
  SiAndroid,
  SiPostgresql
} from 'react-icons/si';
import {
  TbBrandFramerMotion
} from 'react-icons/tb';

const skillsData = {
  categories: [
    {
      title: "./languages",
      icon: TbBrandFramerMotion,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Java", icon: FaJava },
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Kotlin", icon: SiKotlin }
      ]
    },
    {
      title: "./frameworks",
      icon: TbBrandFramerMotion,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Flask", icon: SiFlask },
        { name: "Android", icon: SiAndroid },
        { name: "React.js", icon: FaReact },
        { name: "Spring Boot", icon: SiSpring },
        { name: "Angular", icon: FaAngular },
        { name: "Next.js", icon: SiNextdotjs },
      ]
    },
    {
      title: "./devops",
      icon: TbBrandFramerMotion,
      color: "from-violet-500 to-purple-500",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: FaDocker },
        { name: "GitLab CI/CD", icon: FaGitlab }
      ]
    },
    {
      title: "./databases",
      icon: TbBrandFramerMotion,
      color: "from-rose-500 to-pink-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Postgresql" , icon: SiPostgresql}
      ]
    }
  ]
};

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 shadow-lg hover:border-gray-700 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4 text-blue-400">
        <ChevronRight className="w-4 h-4" />
        <span className="font-mono text-sm">{category.title}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {category.skills.map((skill, idx) => {
          const SkillIcon = skill.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className={`p-1.5 rounded-md bg-gradient-to-br ${category.color} opacity-80 
                group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                <SkillIcon className="w-4 h-4 text-gray-900" />
              </div>
              <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Command className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>

          {/* Terminal Window */}
          <div className="bg-gray-800 rounded-t-lg p-3 border border-gray-700">
            <div className="flex items-center gap-2">
              <Circle className="w-2.5 h-2.5 text-red-500 fill-current" />
              <Circle className="w-2.5 h-2.5 text-yellow-500 fill-current" />
              <Circle className="w-2.5 h-2.5 text-green-500 fill-current" />
              <span className="ml-3 font-mono text-xs text-gray-400">skills.terminal</span>
            </div>
          </div>

          <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-b-lg border-x border-b border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <h3 className="font-mono text-xl text-blue-400">
                ~/tech-expertise
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-sm text-gray-500">
              <span className="text-blue-400">$</span>
              <span className="typing-animation">ls -la ./skills/* --detailed</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.categories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .typing-animation {
          overflow: hidden;
          border-right: 2px solid #4ade80;
          white-space: nowrap;
          animation: typing 2.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4ade80 }
        }
      `}</style>
    </section>
  );
};

export default Skills;