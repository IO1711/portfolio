import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NeonGlassPortfolio() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#05050a] text-white overflow-hidden relative">

      {/* GLOBAL GRADIENT BACKGLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,153,255,0.15),transparent_60%)] pointer-events-none"></div>


      {/* ================================= */}
      {/* SECTION 1 — HERO PANEL             */}
      {/* ================================= */}

      <section className="min-h-screen flex flex-col justify-center px-10 relative">

        {/* Background glowing blob */}
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[#00d4ff]/20 blur-[160px] rounded-full"></div>

        {/* Hero Glass Card */}
        <div
          data-aos="zoom-in"
          className="relative max-w-3xl p-12 rounded-3xl backdrop-blur-2xl 
                     bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(0,150,255,0.25)]"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Bilolbek<br/>Rayimov
          </h1>

          <p className="text-lg text-white/60 mt-4">
            iOS Developer · Full-Stack Engineer · 3D Creator
          </p>

          <div className="flex gap-6 mt-8">
            <button className="px-6 py-3 rounded-xl bg-[#00aaff]/40 backdrop-blur
                               border border-[#00c8ff]/40 hover:bg-[#00c8ff]/60 transition
                               shadow-[0_0_20px_rgba(0,200,255,0.4)]">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 
                                hover:bg-white/20 transition">
              Contact
            </button>
          </div>
        </div>
      </section>



      {/* ================================= */}
      {/* SECTION 2 — SKILL PANELS           */}
      {/* ================================= */}

      <section className="py-32 px-10">
        <h2 className="text-4xl font-bold mb-16" data-aos="fade-right">
          Futuristic Skillset
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "iOS Development", color: "from-[#00d2ff] to-[#3a7bd5]" },
            { title: "Full-Stack Engineering", color: "from-[#ff00e0] to-[#9900ff]" },
            { title: "3D + Interactive UI", color: "from-[#00ffbf] to-[#0099ff]" },
          ].map((card, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl relative overflow-hidden
                         hover:scale-[1.03] transition duration-500"
            >
              {/* Neon gradient edge */}
              <div
                className={`absolute inset-0 opacity-40 bg-gradient-to-br ${card.color} blur-xl`}
              ></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-white/60 mt-3 text-sm">
                  Fast, polished, futuristic solutions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ================================= */}
      {/* SECTION 3 — PROJECT SHOWCASE       */}
      {/* ================================= */}

      <section className="py-32 px-10">
        <h2 data-aos="fade-left" className="text-4xl font-bold mb-16">
          Projects
        </h2>

        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="mb-32 flex flex-col md:flex-row items-center gap-10"
          >
            {/* Image Panel */}
            <div
              data-aos="fade-right"
              className="relative w-full md:w-1/2 h-72 rounded-3xl bg-white/5 border border-white/10
                         backdrop-blur-2xl shadow-[0_0_30px_rgba(0,200,255,0.25)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,200,255,0.25),transparent)]"></div>
            </div>

            {/* Text */}
            <div data-aos="fade-up" className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Project {n}</h3>
              <p className="text-white/60 text-lg max-w-lg">
                A futuristic, high-performance digital experience designed with neon cyber-visuals and glassmorphism.
              </p>
            </div>
          </div>
        ))}
      </section>



      {/* ================================= */}
      {/* SECTION 4 — CONTACT CTA            */}
      {/* ================================= */}

      <section className="py-40 px-10 text-center">
        <h2 data-aos="zoom-in" className="text-5xl font-extrabold mb-10">
          Let’s Build the Future.
        </h2>

        <button
          data-aos="zoom-in"
          data-aos-delay="100"
          className="px-12 py-4 rounded-2xl bg-[#00c8ff]/50 border border-[#00e1ff]
                     backdrop-blur-xl hover:bg-[#00e1ff]/70 transition
                     shadow-[0_0_25px_rgba(0,225,255,0.45)] text-xl font-semibold"
        >
          Contact Me
        </button>
      </section>

    </div>
  );
}
