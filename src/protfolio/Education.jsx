import React from 'react';

const Education = () => {
    const education = [
        {
            degree: "B.Tech/Computer Science and Engineering",
            institution: "Rajasthan Institute of Engineering and Technology, Jaipur",
            year: "2019-2023",
            cgpa: "CGPA-8.02",
            description: "Specialized in software development with Java, focusing on OOP, data structures, backend development, and API integration. Built projects using Spring Boot, React.js, and MySQL, optimizing performance and scalability."
        },
    ];

    const certifications = [
        {
            title: "Java Full-Stack Developer",
            institution: "Jspider's, Bengaluru",
            date: "Issued May 2024",
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <section id="education" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-5xl mx-auto px-6 relative">
                {/* Section Header with animated underline */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-3 relative">
                        Academic <span className="text-blue-400">Background</span>
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-blue-500 rounded transition-all duration-700 group-hover:w-full"></span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></div>
                </div>

                {/* Timeline Education with enhanced effects */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="relative pl-10 pr-6 py-6 border-l-4 border-blue-600 bg-gray-800/90 backdrop-blur-lg rounded-r-xl hover:bg-gray-800/95 transition-all duration-300 shadow-lg hover:shadow-blue-900/20 group"
                        >
                            {/* Animated timeline dot */}
                            <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                            
                            {/* Content with better spacing and animations */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</h3>
                                    <h4 className="text-lg text-blue-400 font-semibold mt-1">{edu.institution}</h4>
                                    <p className="text-gray-300 mt-4 leading-relaxed">{edu.description}</p>
                                </div>
                                <div className="flex flex-col items-start md:items-end gap-3 md:min-w-32">
                                    <span className="text-white font-medium whitespace-nowrap bg-blue-900/70 px-4 py-2 rounded-full text-sm shadow-inner">{edu.cgpa}</span>
                                    <span className="text-white font-medium whitespace-nowrap bg-gray-700/70 px-4 py-2 rounded-full text-sm shadow-inner">{edu.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications with improved card design - Centered */}
                <div className="mt-16">
                    <div className="flex flex-col items-center mb-10">
                        <h3 className="text-3xl font-bold text-white mb-2">Certifications & Additional Training</h3>
                        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    </div>
                    
                    <div className="flex justify-center">
                        {certifications.map((cert, index) => (
                            <div 
                                key={index}
                                className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg transform hover:-translate-y-1 group max-w-md w-full"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                                        {cert.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{cert.title}</h4>
                                </div>
                                <p className="text-gray-300 mb-2 pl-12">{cert.institution}</p>
                                <p className="text-gray-400 text-sm pl-12">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;