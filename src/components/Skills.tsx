// src/components/Skills.tsx
import { FC } from 'react';

const Skills: FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "SQL", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "Flask", "React.js", "Angular", "Next.js"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Jenkins", "GitLab CI/CD"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
