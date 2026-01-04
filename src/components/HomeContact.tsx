import { motion } from "framer-motion";
import { useState } from "react";

export const HomeContact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("05551510465");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full bg-white border-t border-stone-100 overflow-hidden py-20 px-6 text-center">

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 px-5 py-2 rounded-full shadow-sm">
                        <span className="animate-pulse text-green-400">🟢</span>
                        <span className="font-mono text-xs font-bold text-stone-600 tracking-widest uppercase">
                            7/24 İLETİŞİM HATTI
                        </span>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="group relative"
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-black text-stone-900 tracking-tighter leading-none hover:text-primary transition-colors duration-300">
                            0555 151 04 65
                        </h2>
                        <span className="absolute -top-5 right-0 font-mono text-[9px] bg-stone-900 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm">
                            {copied ? "✅ KOPYALANDI" : "👇 TIKLA KOPYALA"}
                        </span>
                    </button>

                    <p className="font-mono text-stone-500 max-w-lg text-sm md:text-base leading-relaxed">
                        🚧 Tadilat ve ya Tamirat mı lazım? Hiç dert etmeyin.<br />Hemen arayın, gelip keşif yapalım.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a href="tel:05551510465" className="flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold font-mono text-lg rounded-xl hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            <span>📞</span> HEMEN ARA
                        </a>
                        <a href="https://wa.me/9055551510465" className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold font-mono text-lg rounded-xl hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            WHATSAPP
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background Decoration - Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>
        </section>
    );
};
