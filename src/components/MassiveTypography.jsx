import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MassiveTypography() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full bg-white text-black overflow-hidden leading-tight selection:bg-black selection:text-white">

      {/* ========================= */}
      {/* SECTION 1 — HERO          */}
      {/* ========================= */}

      <section className="min-h-screen flex flex-col justify-center px-10 pt-20">
        <h1
          data-aos="fade-up"
          className="text-[4rem] md:text-[8rem] font-extrabold tracking-tight"
        >
          BILOLBEK <br /> RAYIMOV
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl md:text-3xl text-neutral-600 mt-6 max-w-2xl"
        >
          iOS Developer. Full-Stack Engineer.  
          Creator of sleek, immersive digital products.
        </p>
      </section>


      {/* ========================= */}
      {/* SECTION 2 — BIG STATEMENT */}
      {/* ========================= */}

      <section className="py-40 px-10 border-t border-neutral-200">
        <h2
          data-aos="fade-left"
          className="text-[3.5rem] md:text-[7rem] font-bold tracking-tight leading-[0.95]"
        >
          I BUILD <span className="text-neutral-400">MODERN</span>  
          <br /> APPS & EXPERIENCES.
        </h2>
      </section>


      {/* ========================= */}
      {/* SECTION 3 — PROJECT TITLES */}
      {/* ========================= */}

      <section className="py-40 px-10 border-t border-neutral-200">
        <h3 data-aos="fade-up" className="text-2xl text-neutral-500 mb-10">
          Selected Work
        </h3>

        <div className="space-y-24">

          {[1, 2, 3].map((n) => (
            <div
              key={n}
              data-aos="fade-up"
              className="w-full group cursor-pointer"
            >
              <h1 className="text-[3.5rem] md:text-[6rem] font-extrabold group-hover:text-neutral-400 transition-colors">
                PROJECT {n}
              </h1>

              <p className="text-xl text-neutral-500 max-w-2xl mt-4">
                A clean, modern, high-quality app with smooth experience
                and attention to detail.
              </p>

              <div className="mt-8 h-64 w-full bg-neutral-200 rounded-3xl group-hover:bg-neutral-300 transition"></div>
            </div>
          ))}

        </div>
      </section>


      {/* ========================= */}
      {/* SECTION 4 — ABOUT          */}
      {/* ========================= */}

      <section className="py-40 px-10 border-t border-neutral-200 bg-neutral-50">
        <h2
          data-aos="fade-right"
          className="text-[3rem] md:text-[6rem] font-bold tracking-tight leading-[0.95] mb-12"
        >
          WHO I AM
        </h2>

        <p
          data-aos="fade-up"
          className="max-w-3xl text-xl md:text-2xl text-neutral-600 leading-relaxed"
        >
          I'm a software engineer passionate about creating polished digital
          products.  
          My work spans iOS development, full-stack engineering, 3D workflows,
          and modern interface design.  
          <br /><br />
          I believe in clarity, elegance, and impactful design.
        </p>
      </section>


      {/* ========================= */}
      {/* SECTION 5 — CTA             */}
      {/* ========================= */}

      <section className="py-40 px-10 text-center border-t border-neutral-200">
        <h2
          data-aos="zoom-in"
          className="text-[3rem] md:text-[6rem] font-bold mb-10"
        >
          LET’S BUILD.
        </h2>

        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          className="px-12 py-5 text-xl font-semibold bg-black text-white 
                     rounded-full hover:bg-neutral-800 transition"
        >
          Contact Me
        </button>
      </section>

    </div>
  );
}
