import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const features = [
    {
        id: "01",
        title: "Sabit Fiyat Garantisi",
        subtitle: "BÜTÇE GÜVENLİĞİ",
        desc: "Sürpriz maliyetler ve gizli giderler yok. Başta ne konuştuysak, bitişte ödeyeceğiniz rakam odur.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        stat: "100%",
        statLabel: "Fiyat Uyumu"
    },
    {
        id: "02",
        title: "Zamanında Teslim",
        subtitle: "TAKVİM DİSİPLİNİ",
        desc: "İşinizi uzatmadan, söz verdiğimiz tarihte teslim ediyoruz. Evinizde süren tadilat stresini minimuma indiriyoruz.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        stat: "0",
        statLabel: "Gecikme Günü"
    },
    {
        id: "03",
        title: "Tecrübeli Ustalar",
        subtitle: "UZMAN KADRO",
        desc: "İşin ehli, yıllarını bu sektöre vermiş ustalarla çalışıyoruz. Deneme yanılma yok, temiz işçilik var.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
        stat: "15+",
        statLabel: "Yıllık Tecrübe"
    }
];

export const Features = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="pt-20 pb-32 px-4 md:px-8 bg-stone-50 overflow-hidden relative">
            {/* Background Grid Pattern - Architectural Feel */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 border-b border-stone-200 pb-8"
                >
                    <div className="flex items-end gap-4 md:gap-6">
                        <h2 className="text-5xl md:text-7xl font-display font-black text-stone-900 tracking-tighter leading-tight">
                            NEDEN<br />
                            <span className="text-stone-300">BİZ?</span>
                            <span className="text-primary">.</span>
                        </h2>
                        <div className="flex flex-col justify-end pb-2 md:pb-4 space-y-0 md:space-y-1 border-l-2 md:border-l-4 border-stone-200 pl-4 md:pl-6 mb-1">
                            <span className="text-lg md:text-2xl font-display font-bold text-stone-800 tracking-wide leading-none">TADİLAT</span>
                            <span className="text-lg md:text-2xl font-display font-bold text-stone-400 tracking-wide leading-none">TAMİRAT DA</span>
                        </div>
                    </div>
                    <div className="hidden md:block max-w-xs text-right">
                        <p className="text-stone-500 text-sm font-medium leading-relaxed">
                            Modern yapı teknikleri, şeffaf süreçler ve kusursuz işçilik. İnşaat sektörüne yeni bir soluk getiriyoruz.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface FeatureProps {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: React.ReactNode;
    stat: string;
    statLabel: string;
}

const FeatureCard = ({ feature, index }: { feature: FeatureProps; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group relative cursor-default"
        >
            {/* Top Border Line with Animation */}
            <div className="absolute top-0 left-0 w-full h-px bg-stone-200 overflow-hidden">
                <motion.div
                    className="w-full h-full bg-stone-900 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                />
            </div>

            <div className="pt-8 md:pt-12">
                <div className="flex justify-between items-start mb-8">
                    <span className="font-mono text-4xl text-stone-200 group-hover:text-primary transition-colors duration-500 font-light">
                        {feature.id}
                    </span>
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                    </div>
                </div>

                <div className="mb-4">
                    <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">
                        {feature.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-stone-900 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                        {feature.title}
                    </h3>
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-8 border-l-2 border-transparent group-hover:border-stone-200 group-hover:pl-4 transition-all duration-300">
                    {feature.desc}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-stone-100 group-hover:border-stone-200 transition-colors">
                    <span className="text-3xl font-display font-black text-stone-900">
                        {feature.stat}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 uppercase leading-tight max-w-[60px]">
                        {feature.statLabel}
                    </span>
                </div>
            </div>

            {/* Hover Background Effect */}
            <div className="absolute -inset-4 bg-white opacity-0 group-hover:opacity-100 -z-10 rounded-2xl shadow-xl transition-opacity duration-300 border border-stone-100" />
        </motion.div>
    );
};
