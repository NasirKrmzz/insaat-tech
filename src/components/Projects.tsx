import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import kitchenImg from '../assets/images/modern_kitchen_design_1767553435104.png';
import bathroomImg from '../assets/images/modern_bathroom_renovation_1767553422367.png';
import livingImg from '../assets/images/modern_living_room_design_1767553449969.png';

const projects = [
    {
        id: 1,
        title: "Modern Mutfak",
        category: "İç Mimari",
        image: kitchenImg.src,
        link: "/projects/kitchen"
    },
    {
        id: 2,
        title: "Spa Banyo",
        category: "Yenileme",
        image: bathroomImg.src,
        link: "/projects/bathroom"
    },
    {
        id: 3,
        title: "Yaşam Alanı",
        category: "Dekorasyon",
        image: livingImg.src,
        link: "/projects/living"
    },
    {
        id: 4,
        title: "Komple Tadilat",
        category: "Anahtar Teslim",
        image: kitchenImg.src, // Reusing for demo
        link: "/projects/full"
    }
];

export const Projects = () => {
    const containerRef = useRef(null);

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Background Grid Pattern - Architectural Feel */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Houzz-style Header */}
            <div className="relative z-10 text-center mb-16 px-4">
                <h2 className="text-4xl md:text-6xl font-display text-stone-900 tracking-tight leading-tight">
                    <span className="font-bold">Örnek İşlerimiz:</span> <span className="font-serif italic font-light text-5xl md:text-7xl block md:inline my-2 md:my-0">Yenileme &</span>
                    <br className="md:hidden" />
                    <span className="font-bold">Tadilat Çözümleri</span>
                </h2>
                <p className="mt-6 text-stone-500 text-lg font-light max-w-2xl mx-auto border-t border-stone-200 pt-6">
                    Mevcut alanlarınızı en verimli şekilde yeniliyor, arızaları profesyonelce gideriyoruz.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative z-10 pl-0">
                {/* Mobile: Snap Scroll with visible next item. Desktop: Grid or Scroll */}
                <div className="flex overflow-x-auto pb-12 gap-6 px-6 scrollbar-hide snap-x snap-mandatory">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex-none w-[85vw] md:w-[450px] h-[550px] relative rounded-3xl overflow-hidden group cursor-pointer snap-center shadow-xl border border-stone-100"
                        >
                            {/* Card Background (Dark Aesthetic like Houzz Pro cards) */}
                            <div className="absolute inset-0 bg-stone-900 transition-transform duration-700 group-hover:scale-105">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-white/90 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">{project.category}</span>
                                    </div>
                                    <h3 className="text-4xl font-display font-bold text-white leading-[0.9] drop-shadow-lg">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Simplified Action Area */}
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <a href="/projects" className="w-full py-4 bg-white hover:bg-stone-100 text-stone-900 font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-xl">
                                        <span>İncele</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Visual spacer for the end of the scroll */}
                    <div className="w-6 flex-none"></div>
                </div>
            </div>

            {/* Pagination Dots (Visual only for now) */}
            <div className="flex justify-center gap-2 mt-12">
                {projects.map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-stone-800' : 'bg-stone-300'}`}></div>
                ))}
            </div>
        </section>
    );
};
