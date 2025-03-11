import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 bg-opacity-30 rounded-xl transform -rotate-2 scale-105 transition-transform group-hover:rotate-1"></div>
            <div className="relative bg-gray-800 bg-opacity-80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                A passionate software developer with a love for creating intuitive, efficient, and beautiful digital experiences. I combine technical expertise with creative problem-solving to build solutions that make a difference.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:translate-y-1 hover:shadow-blue-500/20">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">My Approach</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                I believe in code that's clean, maintainable, and scalable. My development process focuses on user-centered design principles and agile methodologies to deliver exceptional results.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:translate-y-1 hover:shadow-blue-500/20">
              <div className="flex items-center mb-3">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">My Vision</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                To leverage technology in creating innovative solutions that enhance people's lives and contribute to a more connected, efficient digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;