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
            "id" : 2,
            "platform" : "web",
            "title" : "Consulting website",
            "images" : ["/consulting1.png", "/consulting2.png", "/consulting3.png"],
            "description" : "A secure, full-stack consulting management platform built with <b>JWT authentication</b>, cloud document storage via <b>Wasabi</b>, real-time <b>Telegram bot</b> notifications, and granular role/enrollment-based access control. Engineered for efficiency, automation, and scalability—showcasing strong expertise in modern backend architecture, frontend UX, and system integration.",
            "link" : "https://consultingozoda.netlify.app",
            "linkDesc" : "",
            "techStack" : ["JavaScript", "React", "Zustand", "React Router", "Java", "Spring Boot", "Spring Security", "PostgreSQL"]
        },
        {
            "id" : 6,
            "platform" : "web",
            "title" : "SuperMarket",
            "images" : ["/superm_01.png", "/superm_02.png", "/superm_03.png", "/superm_04.png"],
            "description" : "Supermarket website that utilizes Stripe for payment",
            "link" : "https://supermapp.netlify.app/",
            "linkDesc" : "",
            "techStack" : ["JavaScript", "Vite", "React", "CSS", "Stripe"]
        },
        {
            "id" : 5,
            "platform" : "web",
            "title" : "Tool to fix AI generated tables",
            "images" : ["/table_editor.png"],
            "description" : "Since the times when AI started being able to create docx documents, I have received so many requests from my friends to check and fix their documents with tables. In order to remove the repeated work, I created this easy to use tool. Now they can just open their AI generated documents and fix all the tables with one click.",
            "link" : "https://docxtablefixer.netlify.app/",
            "linkDesc" : "",
            "techStack" : ["JavaScript", "Vite", "HTML", "CSS"]
        },
        {
            "id" : 4,
            "platform" : "web",
            "title" : "Modernization Navigator",
            "images" : ["/bob_placeholder.png"],
            "description" : "Modernization Navigator is a tool for Bob IDE that scans a code repository, figures out what technologies it uses, checks what could break during an upgrade, and recommends the safest way to modernize it. It also creates a report you can review in a local browser viewer.",
            "link" : "https://github.com/IO1711/ModernizationNavigator",
            "linkDesc" : "",
            "techStack" : ["TypeScript", "Node.js", "MCP", "Zod"]
        },
        {
            "id" : 1,
            "platform" : "web",
            "title" : "IAmRich3D",
            "images" : ["/i_am_rich.png"],
            "description" : "A simple three.js webpage that utilizes 3D text and materials in Three.js",
            "link" : "https://iamrich3d.netlify.app/",
            "linkDesc" : "",
            "techStack" : ["JavaScript", "Three.js"]
        },
        {
            "id" : 3,
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