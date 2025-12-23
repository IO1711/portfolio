import { useRef } from "react";
import Certification from "./main/Certification";
import PersonalInfo from "./main/PersonalInfo";
import Poster from "./main/Poster"
import ProjectCard from "./main/ProjectCard";
import Contact from "./main/Contact";

const AppLayout = () => {

    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const handleViewProjects = () => {
        projectRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const handleViewContacts = () => {
        contactRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const projects = [
        {
            "id" : 1,
            "platform" : "web",
            "title" : "Consulting website",
            "images" : ["/consulting1.png", "/consulting2.png", "/consulting3.png"],
            "description" : "A secure, full-stack consulting management platform built with <b>JWT authentication</b>, cloud document storage via <b>Wasabi</b>, real-time <b>Telegram bot</b> notifications, and granular role/enrollment-based access control. Engineered for efficiency, automation, and scalability—showcasing strong expertise in modern backend architecture, frontend UX, and system integration.",
            "link" : "https://consultingozoda.netlify.app",
            "linkDesc" : "",
            "techStack" : ["JavaScript", "React", "Zustand", "React Router", "Java", "Spring Boot", "Spring Security", "PostgreSQL"]
        },
        {
            "id" : 2,
            "platform" : "mobile",
            "title" : "Pick2Plot",
            "images" : ["/Pick2Plot_1.PNG", "/Pick2Plot_2.PNG", "/Pick2Plot_3.PNG"],
            "description" : "A fun game to engage people in groups. Game gives 2 scenarios where people discuss which one would they prefer.",
            "link" : "",
            "linkDesc" : "The app is currently on TestFlight",
            "techStack" : ["Swift", "SwiftUI", "Lottie"]
        }
    ];

    return <>
        <Poster refFunction={handleViewProjects} handleViewContacts={handleViewContacts}/>
        <div ref={projectRef} id="projects" className="w-full flex justify-center text-6xl font-bold text-black/80 m-2">Projects</div>
        {projects.map( project => {
            return <ProjectCard key={project.id} platform={project.platform} title={project.title} images={project.images} description={project.description} link={project.link} linkDesc={project.linkDesc} techStack={project.techStack}/>
        })}
        <PersonalInfo/>
        <Certification/>
        <Contact contactRef={contactRef} handleViewContacts={handleViewContacts}/>
    </>
}

export default AppLayout;