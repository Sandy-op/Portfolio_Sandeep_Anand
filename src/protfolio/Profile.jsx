import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

const Profile = () => {

    const [activeSection, setActiveSection] = useState("home");

    const profile = {
        name: "Sandeep Anand",
        title: "Full-Stack Developer",
        location: "Vaishali, Bihar",
        email: "sandeep.cnct404@gmail.com",
        github: "https://github.com/Sandy-op",
        linkedin: "https://www.linkedin.com/in/sandeep-anand-0204891a7",
        twitter: "https://x.com/SanCnct404",
        phone: "+91 8340154769",
        bio: "Innovative & Driven | Code, Create, Conquer. A passionate software developer eager to craft seamless, high-performance applications. With a knack for problem-solving and a hunger for learning, I turn ideas into reality through clean, efficient, and impactful code"
    };

    return (
        <div className="flex flex-col min-h-screen mt-auto bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans overflow-x-hidden">
            <div className="fixed inset-0 ">
                <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-10 -top-10 -left-10 animate-pulse"></div>
                <div className="absolute w-96 h-96 rounded-full bg-purple-500 opacity-10 top-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-64 h-64 rounded-full bg-teal-500 opacity-10 bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            <Navbar profile={profile} activeSection={activeSection} setActiveSection={setActiveSection} />
            <section id="home"><Hero profile={profile} /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="education"><Education /></section>
            <section id="contact"><Contact profile={profile} /></section>
            <Footer profile={profile} activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
    );
}
export default Profile;