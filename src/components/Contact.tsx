import { motion } from "framer-motion";
import { useState } from "react";
import videoBg from '../assets/video/Tadilat1.webm';

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("05551510465");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-stone-950 flex flex-col justify-center items-center">

            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={videoBg} type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-lg px-6 flex flex-col gap-12 text-center text-white pt-48 md:pt-64">

                {/* Main Phone Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={handleCopy}
                        className="group relative"
                    >
                        <span className="block font-mono text-xs font-bold text-primary tracking-[0.2em] mb-4 uppercase">
                            7/24 İLETİŞİM HATTI
                        </span>
                        <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter group-hover:text-primary transition-colors leading-none">
                            0555<br />151 04 65
                        </h1>
                        <span className="absolute -right-8 top-0 font-mono text-[10px] bg-white text-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm">
                            {copied ? "KOPYALANDI" : "KOPYALA"}
                        </span>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6"
                    >
                        <a href="tel:05551510465" className="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-white px-8 py-3 font-bold font-mono text-sm transition-all rounded-sm uppercase tracking-wider">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            HEMEN ARAMA BAŞLAT
                        </a>
                    </motion.div>
                </motion.div>

                {/* Secondary Channels */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10"
                >
                    <a href="https://wa.me/905551510465" target="_blank" className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <span className="font-bold font-display uppercase tracking-wider">WHATSAPP</span>
                    </a>

                    <div className="flex flex-col items-center gap-3 p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-white border border-white/10">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <span className="block font-bold font-display uppercase tracking-wider mb-1">BURSA / NİLÜFER</span>
                            <span className="block font-mono text-xs text-stone-400">Özlüce Mah. Ahmet Taner Kışlalı Blv.</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
