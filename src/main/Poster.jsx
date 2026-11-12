import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaJava } from "react-icons/fa6";
import { SiJavascript, SiNextdotjs, SiPostgresql, SiReact, SiSpringboot } from "react-icons/si";
import { useQueuedImage } from "../imageHooks";

const Poster = (props) => {
    const background = useQueuedImage("/portfolioBg2-1.webp", 0);
    const portrait = useQueuedImage("/profile.webp", 1);
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out",
        });
    }, []);

    return (
        <div
            className="w-full bg-[#dedede] bg-cover bg-left px-10 py-30 md:py-50 relative"
            style={background ? { backgroundImage: `url("${background}")` } : undefined}
        >

            <div className="
                block md:hidden 
                absolute left-1/2 -translate-x-1/2 
                top-3 w-32 h-32
                rounded-full overflow-hidden 
                bg-white/40 backdrop-blur-xl border border-white/50 
                shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                z-30
            ">
                <img
                    src={portrait || undefined}
                    alt="Bilolbek Rayimov"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ visibility: portrait ? "visible" : "hidden" }}
                />
            </div>

            <div className="
                hidden md:block 
                absolute right-50 top-1/2 -translate-y-1/2
                w-60 h-60
                rounded-full overflow-hidden
                bg-white/40 backdrop-blur-xl border border-white/50 
                shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                z-30
            ">
                <img
                    src={portrait || undefined}
                    alt="Bilolbek Rayimov"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ visibility: portrait ? "visible" : "hidden" }}
                />
            </div>

            <div
                data-aos="zoom-in"
                className="max-w-2xl bg-black/5 backdrop-blur-sm border border-white/50 rounded-lg 
                    shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)]
                    p-6 md:p-8 text-white relative z-10
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
                    iOS engineer · Full-Stack Engineer · 3D Modeller
                </p>

                {/* TECH STACK ICONS */}
                <div className="flex md:w-[50%] items-center gap-4 mt-5 bg-black backdrop-blur-md px-3 py-2 rounded-xl shadow-inner">
                    <SiJavascript className="w-7 h-7 text-white" />
                    <SiReact className="w-7 h-7 text-white" />
                    <SiNextdotjs className="w-7 h-7 text-white" />
                    <FaJava className="w-7 h-7 text-white" />
                    <SiSpringboot className="w-7 h-7 text-white" />
                    <SiPostgresql className="w-7 h-7 text-white" />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 mt-8 md:flex-row md:gap-6">
                    <button
                        className="px-6 py-3 rounded-xl bg-[#3BB4FF] text-white 
                            backdrop-blur border border-[#00c8ff]/40 
                            hover:bg-[#00c8ff]/60 transition shadow-[0_0_20px_rgba(0,200,255,0.4)]
                            relative z-20 w-full md:w-auto"
                        onClick={() => props.refFunction()}
                    >
                        View Projects
                    </button>

                    <button
                        className="px-6 py-3 rounded-xl bg-white/10 text-[#4A4A4A] 
                            border border-[rgba(0,0,0,0.15)] 
                            hover:bg-white/20 transition
                            relative z-20 w-full md:w-auto"
                        onClick={() => props.handleViewContacts()}
                    >
                        Contact
                    </button>

                    <button
                        className="px-6 py-3 rounded-xl bg-white/10 text-[#4A4A4A] 
                            border border-[rgba(0,0,0,0.15)] 
                            hover:bg-white/20 transition
                            relative z-20 w-full md:w-auto"
                        onClick={() => props.handleViewExp()}
                    >
                        Experience
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Poster;
