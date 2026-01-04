import { motion } from "framer-motion";
import videoBg from '../assets/video/Tadilat1.webm';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-stone-950 flex items-center">

            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={videoBg} type="video/webm" />
                </video>
                {/* Cinematic Overlay - Darkened for text legibility */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-screen-xl mx-auto relative z-10 px-4 w-full pt-32">

                {/* Headline */}
                <div className="relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tight leading-[1.2] mb-8"
                    >
                        ŞEFFAF<span className="text-primary">.</span><br />
                        DÜRÜST<span className="text-primary">.</span><br />
                        SAĞLAM<span className="text-primary">.</span>
                    </motion.h1>

                    {/* Stamped Badge */}
                    <motion.div
                        initial={{ scale: 2, opacity: 0, rotate: -20 }}
                        animate={{ scale: 1, opacity: 1, rotate: -5 }}
                        transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                        className="absolute top-1/4 right-0 md:right-20 border-4 border-white text-white px-6 py-2 rounded-sm font-display font-bold text-xl md:text-3xl uppercase tracking-widest hidden md:block mix-blend-overlay"
                    >
                        SABİT FİYAT
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 text-xl md:text-2xl text-stone-200 font-mono max-w-2xl leading-relaxed border-l-2 border-primary pl-6"
                >
                    Bursa'da A'dan Z'ye <span className="text-white font-bold">profesyonel tadilat</span> ve <span className="text-white font-bold">tamirat hizmetleri</span>. Sözleşmeli fiyat, teknik şeffaflık ve zamanında teslim garantisi.
                </motion.p>

                {/* Industrial Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-0 mt-12"
                >
                    <a href="/contact" className="group relative px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-display font-bold text-lg uppercase tracking-wide overflow-hidden hover:bg-white hover:text-black transition-colors">
                        <span className="relative z-10 flex items-center gap-2">
                            HEMEN FİYAT AL
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </span>
                    </a>
                    <a href="/calculator" className="group px-8 py-5 bg-transparent border-t border-b border-r border-white/20 text-white font-mono font-bold uppercase tracking-wide hover:bg-white/10 transition-all">
                        MALİYET HESAPLA
                    </a>
                </motion.div>

            </div>
        </section>
    );
};
