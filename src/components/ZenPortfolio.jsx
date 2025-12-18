import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ZenPortfolio() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="w-full bg-[#fafafa] text-[#111] tracking-tight selection:bg-[#111] selection:text-white">

      {/* ========================== */}
      {/* HEADER — ULTRA MINIMAL     */}
      {/* ========================== */}

      <header className="py-8 px-8 flex justify-between items-center border-b border-[#e6e6e6]">
        <div className="text-lg font-light">BR</div>
        <nav className="hidden md:flex gap-8 text-sm text-[#555]">
          <a className="hover:text-black transition">Projects</a>
          <a className="hover:text-black transition">About</a>
          <a className="hover:text-black transition">Contact</a>
        </nav>
      </header>


      {/* ========================== */}
      {/* SECTION 1 — INTRO          */}
      {/* ========================== */}

      <section className="px-8 pt-32 pb-24">
        <h1
          data-aos="fade-up"
          className="text-[2.5rem] md:text-[4rem] font-light leading-tight"
        >
          Creating calm,  
          <br /> elegant digital experiences.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl text-[#555] mt-6 text-lg font-light"
        >
          iOS developer · Full-Stack engineer · Designer of thoughtful interfaces.
        </p>
      </section>


      {/* ========================== */}
      {/* SECTION 2 — FEATURE IMAGE  */}
      {/* ========================== */}

      <section className="px-8 mb-32">
        <div
          data-aos="fade-in"
          className="h-[350px] md:h-[450px] w-full bg-[#eaeaea] rounded-xl"
        ></div>
      </section>


      {/* ========================== */}
      {/* SECTION 3 — PROJECTS LIST  */}
      {/* ========================== */}

      <section className="px-8 pb-32">
        <h2 data-aos="fade-up" className="text-xl font-light mb-10">
          Featured Projects
        </h2>

        <div className="space-y-16">

          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border-b border-[#e6e6e6] pb-10"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-light">Project {n}</h3>
              <p className="text-[#555] max-w-lg text-sm mt-3 leading-relaxed">
                A clean, minimal application designed with focus and clarity.
              </p>

              <div className="mt-6 h-56 w-full rounded-xl bg-[#eaeaea]"></div>
            </div>
          ))}

        </div>
      </section>


      {/* ========================== */}
      {/* SECTION 4 — ABOUT          */}
      {/* ========================== */}

      <section className="px-8 py-32 bg-[#f5f5f5] border-y border-[#e6e6e6]">
        <h2 data-aos="fade-up" className="text-xl font-light mb-8">
          About Me
        </h2>

        <p
          data-aos="fade-up"
          className="max-w-3xl text-[#555] font-light leading-relaxed text-lg"
        >
          My approach to engineering is rooted in simplicity and clarity.  
          I build interfaces that feel natural, quiet, and intuitive — reducing visual noise 
          and focusing on essential interactions.
          <br /><br />
          I work across iOS development, full-stack systems, and modern design workflows.
        </p>
      </section>


      {/* ========================== */}
      {/* SECTION 5 — CONTACT CTA    */}
      {/* ========================== */}

      <section className="px-8 py-24 text-center">
        <h2
          data-aos="fade-up"
          className="text-[2rem] md:text-[3rem] font-light mb-10"
        >
          Let’s create something meaningful.
        </h2>

        <button
          data-aos="fade-up"
          data-aos-delay="100"
          className="px-10 py-3 border border-[#111] text-[#111] font-light rounded-full 
                     hover:bg-[#111] hover:text-white transition-all"
        >
          Contact Me
        </button>
      </section>

    </div>
  );
}
