import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full
                       bg-white/30 text-black/80 backdrop-blur-xl border border-white/60
                       shadow-[inset_0_1px_0px_rgba(255,255,255,0.7),0_4px_14px_rgba(0,0,0,0.18)]
                       transition duration-200 hover:-translate-y-1 hover:bg-white/50 hover:text-black
                       focus:outline-none focus:ring-2 focus:ring-[#3BB4FF] focus:ring-offset-2 md:bottom-8 md:right-8"
        >
            <FaArrowUp aria-hidden="true" />
        </button>
    );
};

export default BackToTop;
