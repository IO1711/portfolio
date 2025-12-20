import PersonalInfo from "./main/PersonalInfo";
import Poster from "./main/Poster"
import ProjectCard from "./main/ProjectCard";

const AppLayout = () => {

    const projects = [
        {
            "id" : 1,
            "title" : "Consulting website",
            "images" : ["/consulting1.png", "/consulting2.png", "/consulting3.png"],
            "description" : "A secure, full-stack consulting management platform built with <b>JWT authentication</b>, cloud document storage via <b>Wasabi</b>, real-time <b>Telegram bot</b> notifications, and granular role/enrollment-based access control. Engineered for efficiency, automation, and scalability—showcasing strong expertise in modern backend architecture, frontend UX, and system integration.",
            "link" : "https://consultingozoda.netlify.app",
            "techStack" : ["JavaScript", "React", "Zustand", "React Router", "Java", "Spring Boot", "Spring Security", "PostgreSQL"]
        }
    ];

    return <>
        <Poster/>
        <div className="w-full flex justify-center text-6xl font-bold text-black/80 m-2">Projects</div>
        {projects.map( project => {
            return <ProjectCard key={project.id} title={project.title} images={project.images} description={project.description} link={project.link} techStack={project.techStack}/>
        })}
        <PersonalInfo/>
    </>
}

export default AppLayout;