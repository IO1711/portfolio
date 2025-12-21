const PersonalInfo = () => {
    return (
        <>
            <div className="w-full flex justify-center bg-cover md:bg-auto bg-left bg-[url(/portfolioBg_2.webp)] px-6 md:px-10 py-20 md:py-20">

                {/* LIQUID GLASS CARD */}
                <div
                    className="max-w-3xl w-full bg-black/5 backdrop-blur-sm border border-white/50 rounded-2xl
                               shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_12px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.18)]
                               p-8 md:p-10 text-white relative
                               before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
                               before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 
                               before:pointer-events-none
                               after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tl 
                               after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 
                               after:pointer-events-none"
                >

                    {/* DESCRIPTION */}
                    <p className="text-lg md:text-xl text-black/90 leading-relaxed">
                        I create fast, elegant websites with full end-to-end functionality — clean UI, solid back-end, and everything in between. 
                        I love turning ideas into polished, high-performance digital experiences.
                    </p>
                    <p className="text-lg md:text-xl text-black/90 leading-relaxed mt-10">
                        I’m currently at the <span className="font-semibold text-black">The Apple Developer Academy</span>, learning iOS engineering along with marketing, interface design, and cybersecurity. 
                        This helps me build products that look great, feel great, and are secure at their core.
                    </p>

                    {/* EDUCATION */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-black mb-4">Education</h2>

                        <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl p-5 
                                        shadow-[inset_0_1px_0px_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.12)]">
                            <p className="text-black font-semibold text-lg">
                                Apple Developer Academy · Naples, Italy
                            </p>
                            <p className="text-black/60 font-semibold text-sm">
                                    October, 2025 - present
                                </p>
                            <p className="text-black/70 mt-1">
                                iOS Engineering · Human Interface Design · Project-based learning
                            </p>
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-black mb-4">Experience</h2>

                        <div className="space-y-5">

                            {/* Experience Item 1 */}
                            <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl p-5 
                                            shadow-[inset_0_1px_0px_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.12)]">
                                <p className="text-black font-semibold text-lg">
                                    Full-Stack Engineering
                                </p>
                                <p className="text-black/60 font-semibold text-sm">
                                    2024 - present
                                </p>
                                <p className="text-black/70 mt-1">
                                    Building scalable applications using Spring Boot, React, JWT auth, PostgreSQL,
                                    cloud storage systems, and automation tools such as Telegram Bots.
                                </p>
                            </div>

                            {/* Experience Item 2 */}
                            <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-xl p-5 
                                            shadow-[inset_0_1px_0px_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.12)]">
                                <p className="text-black font-semibold text-lg">
                                    Data specialist at Nurlikum Mining Uzbek-French JV
                                </p>
                                <p className="text-black/60 font-semibold text-sm">
                                    October, 2024 - October, 2025
                                </p>
                                <div className="text-black/70 mt-1">
                                <ul>
                                    <li>- maintain and update existing Geological and Geophysical Databases and GIS solutions</li>
                                    <li>- develop and maintain links between various databases</li>
                                    <li>- ensure the good upload of data in the Databases and to develop tools for import from different formats (XLS spreadsheets, SQL server, etc.)</li>
                                    <li>and more.</li>
                                </ul>   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PersonalInfo;


/* bg-cover bg-left bg-[url(/portfolioBg_2.webp)] */