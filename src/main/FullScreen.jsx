import { useEffect } from "react";
import { createPortal } from "react-dom";

const FullScreen = ({
  images,
  index,
  isOpen,
  title,
  isMobileProject,
  onClose,
  onNext,
  onPrev,
  onSelect
}) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (images.length > 1 && event.key === "ArrowRight") {
        onNext();
      }

      if (images.length > 1 && event.key === "ArrowLeft") {
        onPrev();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isOpen, onClose, onNext, onPrev]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[200] bg-black/95">
      <div className="relative flex h-full w-full flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition hover:bg-white/25 md:right-6 md:top-6"
          aria-label="Close fullscreen image viewer"
        >
          ×
        </button>

        <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 pt-20 md:px-20 md:pb-8 md:pt-24">
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/25 md:left-6 md:h-14 md:w-14"
              aria-label="Show previous fullscreen image"
            >
              ←
            </button>
          )}

          <img
            src={images[index]}
            alt={`${title} fullscreen screenshot ${index + 1}`}
            className={`block max-h-full max-w-full rounded-2xl object-contain shadow-2xl ${
              isMobileProject ? "w-auto" : "w-auto"
            }`}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/25 md:right-6 md:h-14 md:w-14"
              aria-label="Show next fullscreen image"
            >
              →
            </button>
          )}
        </div>

        <div className="border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-md md:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
            {images.map((src, imageIndex) => (
              <button
                key={`${src}-${imageIndex}`}
                type="button"
                onClick={() => onSelect(imageIndex)}
                className={`overflow-hidden rounded-xl border transition ${
                  imageIndex === index
                    ? "border-[#00c8ff] shadow-[0_0_16px_rgba(0,200,255,0.55)]"
                    : "border-white/20 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show fullscreen image ${imageIndex + 1}`}
              >
                <img
                  src={src}
                  alt={`${title} fullscreen thumbnail ${imageIndex + 1}`}
                  className="h-16 w-24 object-cover md:h-20 md:w-32"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FullScreen;
