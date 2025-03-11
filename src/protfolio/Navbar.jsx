import React from 'react';
import Sandeep_Anand_Resume from "../assets/Sandeep_Anand_Resume.pdf";

const Navbar = ({ profile, activeSection, setActiveSection }) => {
  const handleScroll = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">{profile.name}</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href={Sandeep_Anand_Resume}
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300 flex items-center text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;