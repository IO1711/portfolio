import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollingStory() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="w-full bg-[#0b0f1a] text-white overflow-hidden">

      {/* ===================== */}
      {/* SECTION 1 — INTRO    */}
      {/* ===================== */}

      <section className="min-h-screen flex flex-col justify-center px-8">
        <h1
          data-aos="fade-up"
          className="text-6xl md:text-7xl font-extrabold leading-tight max-w-4xl"
        >
          I build <span className="text-purple-400">beautiful</span>,  
          <br /> modern digital experiences.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl text-white/70 mt-6 max-w-2xl"
        >
          iOS developer · full-stack engineer · 3D creator — passionate about crafting
          immersive, sleek, high-quality interfaces.
        </p>
      </section>



      {/* ===================== */}
      {/* SECTION 2 — SKILLS   */}
      {/* ===================== */}

      <section className="py-28 px-8">
        <h2 data-aos="fade-right" className="text-4xl font-bold mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "iOS Development",
              text: "SwiftUI, SpriteKit, SceneKit, RealityKit.",
            },
            {
              title: "Full-Stack Engineering",
              text: "Spring Boot, PostgreSQL, React, Tailwind.",
            },
            {
              title: "3D & Interaction",
              text: "Blender, Spline, interactive design.",
            },
          ].map((card, i) => (
            <div
              key={i}
              data-aos={i === 0 ? "fade-up-right" : i === 1 ? "fade-up" : "fade-up-left"}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl 
                         hover:bg-white/10 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-white/60">{card.text}</p>
            </div>
          ))}
        </div>
      </section>



      {/* ============================== */}
      {/* SECTION 3 — PROJECTS CHAPTERS */}
      {/* ============================== */}

      <section className="py-28 px-8">
        <h2 data-aos="fade-left" className="text-4xl font-bold mb-20">
          Projects
        </h2>

        {[1, 2, 3].map((n, i) => (
          <div
            key={n}
            className="flex flex-col md:flex-row items-center gap-10 mb-32"
          >
            <div
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className="h-64 w-full md:w-1/2 rounded-3xl bg-gradient-to-br from-purple-500/50 to-blue-500/50 
                         shadow-xl"
            ></div>

            <div
              data-aos="fade-up"
              className="md:w-1/2"
            >
              <h3 className="text-3xl font-semibold mb-4">Project {n}</h3>
              <p className="text-white/60 text-lg">
                A high-quality, modern application showcasing elegant UI, strong
                architecture, and smooth user experience.
              </p>
            </div>
          </div>
        ))}
      </section>



      {/* ===================== */}
      {/* SECTION 4 — ABOUT    */}
      {/* ===================== */}

      <section className="py-28 px-8 bg-white/5 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">My Journey</h2>
            <p className="text-white/70 leading-relaxed text-lg">
              I specialize in designing and developing clean, modern interfaces—
              combining technical depth with aesthetic clarity.  
              <br /><br />
              My work spans mobile, full-stack systems, and 3D experiences.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="h-72 rounded-3xl bg-gradient-to-br from-blue-500/40 to-purple-500/40"
          ></div>
        </div>
      </section>



      {/* ===================== */}
      {/* SECTION 5 — CTA      */}
      {/* ===================== */}

      <section className="py-32 px-8 text-center">
        <h2 data-aos="zoom-in" className="text-5xl font-bold mb-6">
          Let’s Build Something Great
        </h2>

        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-6 px-10 py-4 bg-purple-600 rounded-2xl text-lg font-semibold 
                     hover:bg-purple-700 transition"
        >
          Contact Me
        </button>
      </section>

    </div>
  );
}
