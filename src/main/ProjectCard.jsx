import { useState, useEffect } from "react";

const ProjectCard = (props) => {
  const images = props.images/*["/image1.png", "/image2.png", "/image3.png"]*/;
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((i) => (i + 1) % images.length);
  const prevImage = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // auto slide
  /*useEffect(() => {
    const t = setInterval(nextImage, 5000);
    return () => clearInterval(t);
  }, []);*/

  /*

        {
            "title" : "",
            "images" : [""],
            "description" : "",
            "link" : "",
            "techStack" : [""]
        }

  */

  return (
    <div className="
      w-full max-w-[1200px] mx-auto mt-10 mb-10
      rounded-[32px] p-10
      bg-white/20 backdrop-blur-2xl border border-white/30
      shadow-[0_20px_50px_rgba(0,0,0,0.1)]
    ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — CLEAN TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-black/80 mb-4">
            {props.title}
          </h2>

          <p className="text-black/60 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: props.description }}>
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {props.techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-black/5 text-black/60 border border-black/10"
              >
                {t}
              </span>
            ))}
          </div>

          {props.link !== "" && <a
            href={`${props.link}`}
            target="_blank"
            className="
              inline-block px-6 py-3 mt-2 rounded-xl
              bg-[#00aaff]/30 text-[#0077aa] font-semibold
              backdrop-blur border border-[#00c8ff]/40 
              hover:bg-[#00c8ff]/50 hover:text-white 
              transition-all shadow-[0_0_20px_rgba(0,200,255,0.3)]
            "
          >
            Visit Project Website →
          </a>}
          {/*00aaff*/
            props.link === "" && <p className="inline-block px-6 py-3 mt-2 rounded-xl
              bg-[#ced3db]/30 text-[#0077aa] font-semibold
              backdrop-blur border border-[#898c91]/40 
              transition-all shadow-[0_0_20px_rgba(206,211,219,0.3)]">
                {props.linkDesc}
            </p>
          }
        </div>

        {/* RIGHT SIDE — NEW MODERN IMAGE SLIDER */}
        <div className="relative w-full">

        {/* MAIN IMAGE */}
        <div className={`
        relative overflow-hidden shadow-xl flex items-center justify-center
        ${props.platform === "mobile" 
            ? "rounded-[32px] h-[500px] bg-black/5" 
            : "rounded-[24px] h-72"}
        `}>
        <img
            src={images[index]}
            className={`
            transition-all duration-500
            ${props.platform === "mobile"
                ? "max-h-full max-w-full object-contain"
                : "w-full h-full object-cover"}
            `}
        />

        {/* Arrows */}
        <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2
                    bg-white/30 backdrop-blur-md border border-white/40
                    w-10 h-10 rounded-full flex items-center justify-center
                    hover:bg-white/50 transition"
        >
            ←
        </button>

        <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2
                    bg-white/30 backdrop-blur-md border border-white/40
                    w-10 h-10 rounded-full flex items-center justify-center
                    hover:bg-white/50 transition"
        >
            →
        </button>
        </div>


        {/* THUMBNAILS BELOW */}
        <div className="flex gap-3 mt-4 justify-center">
            {images.map((src, i) => (
            <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                overflow-hidden rounded-lg border transition
                ${
                    i === index
                    ? "border-[#00c8ff] shadow-[0_0_10px_rgba(0,200,255,0.5)]"
                    : "border-white/30 opacity-60 hover:opacity-100"
                }
                ${props.platform === "mobile"
                    ? "w-16 h-28"        // tall thumbnails for mobile
                    : "w-20 h-14"}       // wide thumbnails for web
                `}
            >
                <img 
                src={src} 
                className={`
                    w-full h-full object-cover
                    ${props.platform === "mobile" ? "object-contain bg-black/10" : ""}
                `} 
                />
            </button>
            ))}
        </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
