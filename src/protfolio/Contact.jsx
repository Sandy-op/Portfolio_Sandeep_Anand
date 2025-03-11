import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = ({ profile }) => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-r from-gray-900 to-blue-900">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Get In <span className="text-blue-400 relative">
            Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 rounded-full opacity-70"></span>
          </span>
        </h2>
        
        <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-700">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-6 text-white">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
              </p>
              
              {/* Improved contact details section */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 text-blue-400 shadow-md group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <a href={`mailto:${profile.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 text-blue-400 shadow-md group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <a href={`tel:${profile.phone}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 text-blue-400 shadow-md group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto md:min-w-[300px] bg-gray-900 bg-opacity-30 rounded-xl p-8 shadow-lg border border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Connect With Me</h4>
              
              <div className="space-y-4">
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 px-4 bg-gray-800 hover:bg-blue-900 rounded-lg transition-all duration-300 group w-full"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} className="mr-3 text-gray-400 group-hover:text-blue-400" />
                  <span className="font-medium">GitHub</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
                
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 px-4 bg-gray-800 hover:bg-blue-900 rounded-lg transition-all duration-300 group w-full"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} className="mr-3 text-gray-400 group-hover:text-blue-400" />
                  <span className="font-medium">LinkedIn</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
                
                <a 
                  href={profile.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 px-4 bg-gray-800 hover:bg-blue-900 rounded-lg transition-all duration-300 group w-full"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={22} className="mr-3 text-gray-400 group-hover:text-blue-400" />
                  <span className="font-medium">Twitter</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">Open to new opportunities</p>
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;