import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroPreview() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0b0f1a] text-white overflow-hidden">

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}

      <section className="relative h-screen flex items-center justify-center px-6">
        
        {/* Background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse"></div>

        {/* Card */}
        <div
          data-aos="fade-up"
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-xl 
                     hover:shadow-2xl transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 max-w-xl"
        >
          <h1 className="text-5xl font-bold">Bilolbek Rayimov</h1>
          <p className="text-white/70 mt-3 text-lg leading-relaxed">
            iOS Developer · Full-Stack Engineer · 3D Creator
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/30 bg-white/10 text-white hover:bg-white/20 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/* PROJECTS PREVIEW */}
      {/* ========================= */}

      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-right">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="group bg-white/5 p-6 rounded-2xl border border-white/10 
                         hover:scale-[1.03] hover:bg-white/10 transition-all duration-500 cursor-pointer"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-70 
                              group-hover:opacity-100 transition"></div>

              <h3 className="text-xl font-semibold mt-4">Project Title {index + 1}</h3>
              <p className="text-white/60 mt-2">
                A short description about this project. Clean and modern.
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* ========================= */}
      {/* ABOUT PREVIEW */}
      {/* ========================= */}

      <section className="px-6 py-20 bg-white/5 border-t border-white/10">
        <h2 data-aos="fade-left" className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p
          data-aos="fade-up"
          className="max-w-3xl text-white/70 leading-relaxed text-lg"
        >
          I am a software engineer specializing in iOS development, full-stack
          web development, and 3D/interactive experiences.  
          My goal is to build clean, elegant, visually memorable digital products.
        </p>
      </section>

    </div>
  );
}
