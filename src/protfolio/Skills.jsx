import React from 'react';

const Skills = () => {
  const skills = [
    { name: "Java", level: 75 },
    { name: "Spring Boot", level: 75 },
    { name: "Hibernate", level: 85 },
    { name: "SQL", level: 70 },
    { name: "React.js", level: 70 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 60 },
    { name: "Docker", level: 65 },
    { name: "OOP", level: 70 },
    { name: "Data Structures and Algorithms", level: 75 }
  ];

  return (
    <section id="skills" className="relative py-16 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        {/* Primary Skills with compact bars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold">{skill.name}</h3>
                <span className="text-blue-400 text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Language</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-purple-300 border border-purple-700 text-sm">Java</span>
              <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-purple-300 border border-purple-700 text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-purple-300 border border-purple-700 text-sm">SQL</span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Web Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-300 border border-blue-700 text-sm">React.js</span>
              <span className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-300 border border-blue-700 text-sm">HTML</span>
              <span className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-300 border border-blue-700 text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-blue-900 bg-opacity-50 rounded-full text-blue-300 border border-blue-700 text-sm">JavaScript</span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Tools & DevOps</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">Git</span>
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">GitHub</span>
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">Docker</span>
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">Maven</span>
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">Eclipse</span>
              <span className="px-3 py-1 bg-teal-900 bg-opacity-50 rounded-full text-teal-300 border border-teal-700 text-sm">Vs Code</span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-orange-900 bg-opacity-50 rounded-full text-orange-300 border border-orange-700 text-sm">Spring Boot</span>
              <span className="px-3 py-1 bg-orange-900 bg-opacity-50 rounded-full text-orange-300 border border-orange-700 text-sm">Hibernate</span>
              <span className="px-3 py-1 bg-orange-900 bg-opacity-50 rounded-full text-orange-300 border border-orange-700 text-sm">Java Collections</span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Libraries</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-fuchsia-900 bg-opacity-50 rounded-full text-fuchsia-300 border border-fuchsia-700 text-sm">React.js</span>
              <span className="px-3 py-1 bg-fuchsia-900 bg-opacity-50 rounded-full text-fuchsia-300 border border-fuchsia-700 text-sm">Java Collection Framework</span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg">
            <h3 className="text-lg font-bold mb-3 text-center">Key Concepts</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-sky-900 bg-opacity-50 rounded-full text-sky-300 border border-slate-700 text-sm">DSA</span>
              <span className="px-3 py-1 bg-sky-900 bg-opacity-50 rounded-full text-sky-300 border border-slate-700 text-sm">OOP</span>
              <span className="px-3 py-1 bg-sky-900 bg-opacity-50 rounded-full text-sky-300 border border-slate-700 text-sm">DB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;