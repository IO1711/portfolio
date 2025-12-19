import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaJava } from "react-icons/fa6";

const Poster = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,     // prevents hiding again
            easing: "ease-out",
        });
    }, []);
    return (
        <>
            <div className="w-full bg-cover bg-left bg-[url(/portfolioBg2-1.webp)] px-10 py-30 md:py-50">

                <div
                    data-aos="zoom-in"
                    className="max-w-2xl bg-black/5 backdrop-blur-sm border border-white/50 rounded-lg 
                            shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
                            p-6 md:p-8 text-white relative 
                            before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br 
                            before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 
                            before:pointer-events-none
                            after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl 
                            after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 
                            after:pointer-events-none"
                >
                    {/* NAME */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A]">
                        Bilolbek Rayimov
                    </h1>

                    {/* SUBTITLE */}
                    <p className="text-lg text-[#4A4A4A] mt-4">
                        Full-Stack Engineer · 3D Enthusiast · iOS engineer (becoming)
                    </p>

                    {/* TECH STACK ICONS */}
                    <div className="flex md:w-[50%] items-center gap-4 mt-5 bg-black backdrop-blur-md px-3 py-2 rounded-xl shadow-inner">

                        {/* JavaScript */}
                        <img 
                        src="https://cdn.simpleicons.org/javascript/FFFFFF" 
                        className="w-7 h-7"
                        />

                        {/* React */}
                        <img 
                        src="https://cdn.simpleicons.org/react/FFFFFF" 
                        className="w-7 h-7"
                        />

                        {/* Next.js */}
                        <img 
                        src="https://cdn.simpleicons.org/nextdotjs/FFFFFF" 
                        className="w-7 h-7"
                        />

                        {/* Java (react-icons, because SimpleIcons lacks Java slug) */}
                        <FaJava className="w-7 h-7 text-[#FFFFFF]" />

                        {/* Spring Boot */}
                        <img 
                        src="https://cdn.simpleicons.org/springboot/FFFFFF" 
                        className="w-7 h-7"
                        />

                        {/* PostgreSQL */}
                        <img 
                        src="https://cdn.simpleicons.org/postgresql/FFFFFF" 
                        className="w-7 h-7"
                        />
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-6 mt-8">
                        <button className="px-6 py-3 rounded-xl bg-[#3BB4FF] text-white 
                                        backdrop-blur border border-[#00c8ff]/40 
                                        hover:bg-[#00c8ff]/60 transition shadow-[0_0_20px_rgba(0,200,255,0.4)]">
                            View Projects
                        </button>

                        <button className="px-6 py-3 rounded-xl bg-white/10 text-[#4A4A4A] 
                                        border border-[rgba(0,0,0,0.15)] 
                                        hover:bg-white/20 transition">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Poster;