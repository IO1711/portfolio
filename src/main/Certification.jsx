import { useState } from "react";

const Certification = () => {

  // Local certificates data (NOT in state)
  const certificates = [
    {
      title: "React framework certificate",
      image: "/react_certificate.webp",
      pdf: "/react_certificate.pdf",
      issuer: ""
    },
    {
      title: "JavaScript certificate",
      image: "/js_certificate.webp",
      pdf: "/js_certificate.pdf",
      issuer: ""
    },
    {
      title: "Spring Boot certificate",
      image: "/spring_certificate.webp",
      pdf: "/spring_certificate.pdf",
      issuer: "Amigoscode"
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % certificates.length);
  const prev = () => setIndex((i) => (i - 1 + certificates.length) % certificates.length);

  return (
    <div id="certification" className="w-full py-20 bg-white">
      <h2 className="text-5xl font-bold text-center text-black mb-12">
        Certifications
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6">

        {/* MAIN CERTIFICATE */}
        <div className="relative rounded-[20px] overflow-hidden shadow-lg flex justify-center items-center h-[500px] bg-gray-50">
          <img
            src={certificates[index].image}
            alt={certificates[index].title}
            className="max-h-full max-w-full object-contain"
          />

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2
                       bg-black/10 backdrop-blur-md border border-black/10
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:bg-black/20 transition"
          >
            ←
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2
                       bg-black/10 backdrop-blur-md border border-black/10
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:bg-black/20 transition"
          >
            →
          </button>
        </div>

        {/* TITLE + PDF DOWNLOAD */}
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-semibold text-black">
            {certificates[index].title}
          </h3>
          <p className="text-black/60 mt-1">{certificates[index].issuer}</p>

          {certificates[index].pdf && (
            <a
              href={certificates[index].pdf}
              target="_blank"
              className="inline-block mt-4 px-6 py-2 rounded-xl
                         bg-[#00aaff]/20 text-[#0077aa] font-medium
                         border border-[#00aaff]/40
                         hover:bg-[#00aaff]/40 hover:text-white
                         transition-all"
            >
              Download PDF →
            </a>
          )}
        </div>

        {/* THUMBNAILS */}
        <div className="flex justify-center gap-3 mt-6">
          {certificates.map((c, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                w-20 h-16 rounded-lg overflow-hidden border transition
                ${i === index 
                    ? "border-[#00aaff] shadow-[0_0_8px_rgba(0,200,255,0.6)]"
                    : "border-black/20 opacity-60 hover:opacity-100"
                }
              `}
            >
              <img
                src={c.image}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certification;
