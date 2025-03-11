import React from 'react';
import Gbus from '../assets/Gbus.mp4';
import Roomer from '../assets/roomer.webp';
import Gymer from '../assets/Gym.png';
import Printico from '../assets/Printico.png';

const Projects = () => {
    const projects = [
        {
            title: "G-Bus (Bus-Reservation-System)",
            description: "A Full-Stack cutting-edge bus reservation system that streamlines ticket booking with real-time seat visualization, secure transactions, and an AI-driven user experience—making travel planning effortless and efficient.",
            tech: ["Java + Spring Boot + Hibernate + JWT","RESTfull", "React.js", "MySQL", "Docker"],
            link: "https://sandebyte.tech",
            video: Gbus,
            isFeatured: true
        },
        {
            title: "Room-Rental-System",
            description: "Roomer, A Smart Room Rental System, An intuitive platform for seamless room rentals, offering real-time availability, secure bookings, automated payments, and AI-driven recommendations—making renting effortless for tenants and landlords.",
            tech: [" Core Java", "JDBC", "MySQL"],
            link: "https://github.com/Sandy-op/Room-Rental-Service_Project-Java",
            image: Roomer
        },
        {
            title: "Fit-Club (Gym App)",
            description: "A modern gym web app that helps users plan workouts, track progress, manage memberships, and connect with trainers. Featuring scheduling, real-time tracking, exercise guides, secure payments, and community challenges, Fit-Club makes fitness simple, engaging, and effective.",
            tech: ["React.js"],
            link: "https://fitclubjaipur.pages.dev/",
            image: Gymer,
        },
        {
          title: "Printico API",
          description: "A print management system that automates layout optimization, error detection, and resource allocation, ensuring high-efficiency and cost-effective printing.",
          tech: ["Java","Spring Boot", "RESTful API", "Hibernate","MySQL"],
          link: "https://api.printico.in",
          image: Printico,
      }
    ];

    const featuredProject = projects.find(project => project.isFeatured);
    const regularProjects = projects.filter(project => !project.isFeatured);

    return (
        <section id="projects" className="relative py-16 bg-gradient-to-b from-gray-900 to-blue-900">
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="text-4xl font-bold text-white">
                        Featured <span className="text-blue-400">Projects</span>
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500 rounded"></div>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <div className="mb-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-800/50 shadow-xl backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <div>
                                <div className="px-3 py-1 bg-blue-600 rounded-full text-sm font-bold inline-block mb-4 shadow-md">Featured Project</div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{featuredProject.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm md:text-base">
                                    A smart and efficient platform for seamless bus ticket booking, featuring real-time seat availability, secure transactions, and an intuitive user experience for both passengers and administrators.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {featuredProject.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-xs md:text-sm shadow-inner">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a 
                                        href={featuredProject.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm md:text-base font-medium transition-all duration-300 shadow-md"
                                    >
                                        Live Demo
                                    </a>
                                    <a 
                                        href="https://github.com/Sandy-op/Bus-Reservation-App/tree/main/Bus-Reservation-App-Master" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded text-sm md:text-base font-medium transition-all duration-300"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-2 bg-blue-500 bg-opacity-20 rounded-xl transform rotate-2 scale-105 blur-sm"></div>
                                <div className="relative overflow-hidden rounded-lg border border-blue-700 shadow-lg">
                                    {featuredProject.video ? (
                                        <video 
                                            src={featuredProject.video} 
                                            className="w-full h-auto" 
                                            autoPlay 
                                            loop 
                                            muted 
                                            controls
                                            playsInline
                          
                                        />
                                    ) : (
                                        <img 
                                            src={featuredProject.image || "/api/placeholder/800/500"} 
                                            alt={featuredProject.title} 
                                            className="w-full h-auto"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Regular Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {regularProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1"
                        >
                            <div className="relative h-40 overflow-hidden">
                                {project.video ? (
                                    <video 
                                        src={project.video} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                        autoPlay 
                                        loop 
                                        muted 
                                        controls
                                        playsInline
                                    />
                                ) : (
                                    <img 
                                        src={project.image || "/api/placeholder/600/400"} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-3 text-sm line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs px-2 py-0.5 bg-blue-900/50 rounded text-blue-300">{tech}</span>
                                    ))}
                                </div>
                                <a
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 shadow-sm"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;