import { FaLinkedin } from "react-icons/fa";

const Contact = (props) => {
    return (
        <div ref={props.contactRef} className="w-full bg-[#F2F3F5] py-20"> 
            {/* Gray full-width background */}

            <div className="max-w-xl mx-auto px-6">
                {/* Glass Card */}
                <div className="
                    bg-white/20 backdrop-blur-xl 
                    border border-white/40 rounded-3xl 
                    shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                    p-10 relative
                ">
                    
                    <h2 className="text-4xl font-bold text-black text-center mb-8">
                        Contact Me
                    </h2>

                    {/* CONTACT LIST */}
                    <div className="space-y-6">
                        
                        {/* EMAIL */}
                        <div className="flex items-center gap-4">
                            <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                                <img src="https://cdn.simpleicons.org/gmail/FFFFFF" className="w-6 h-6" />
                            </div>
                            <a 
                                href="mailto:rayimovbilolbek@gmail.com"
                                className="text-black/80 hover:text-black font-medium text-lg transition"
                            >
                                rayimovbilolbek@gmail.com
                            </a>
                        </div>

                        {/* GITHUB */}
                        <div className="flex items-center gap-4">
                            <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                                <img src="https://cdn.simpleicons.org/github/FFFFFF" className="w-6 h-6" />
                            </div>
                            <a 
                                href="https://github.com/io1711"
                                target="_blank"
                                className="text-black/80 hover:text-black font-medium text-lg transition"
                            >
                                github.com/io1711
                            </a>
                        </div>

                        {/* LINKEDIN */}
                        <div className="flex items-center gap-4">
                            <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                                <FaLinkedin className="w-6 h-6 text-[#FFFFFF]"/>
                            </div>
                            <a 
                                href="https://linkedin.com/in/bilolbek-rayimov-a1b637202"
                                target="_blank"
                                className="text-black/80 hover:text-black font-medium text-lg transition"
                            >
                                linkedin.com/in/bilolbekrayimov
                            </a>
                        </div>

                        {/* TELEGRAM */}
                        <div className="flex items-center gap-4">
                            <div className="bg-black rounded-lg p-2 flex items-center justify-center">
                                <img src="https://cdn.simpleicons.org/telegram/FFFFFF" className="w-6 h-6" />
                            </div>
                            <a 
                                href="https://t.me/Bilolbek17"
                                target="_blank"
                                className="text-black/80 hover:text-black font-medium text-lg transition"
                            >
                                @Bilolbek17
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
