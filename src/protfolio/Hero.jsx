import React, { useEffect, useState } from 'react';
import sandy from "../assets/sandy.jpeg";
import Sandeep_Anand_Resume from "../assets/Sandeep_Anand_Resume.pdf";

const Hero = ({ profile }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10 order-2 lg:order-1 transform translate-y-0" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-400">{profile.name}</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
                        {profile.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg">
                        {profile.bio}
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        <button
                            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            View Work
                        </button>
                        <button
                            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                            className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105">
                            Contact Me
                        </button>
                        <a
                            href={Sandeep_Anand_Resume}
                            download
                            className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:block">
                    <div className="relative h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 mx-auto transform rotate-3 hover:rotate-6 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform -rotate-6 scale-95 opacity-25"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-700 rounded-2xl shadow-xl transform -rotate-3 scale-97 opacity-50"></div>
                        <div className="relative h-full w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                            <img src={sandy} alt="Profile" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;