import { motion } from "framer-motion";

const UPDATES = [
    {
        date: "BUGÜN, 09:45",
        id: "LOG_8821",
        title: "SERAMİK DÖŞEME PROTOKOLÜ",
        desc: "Banyo zemin seramikleri (Vitra 60x120) döşenmeye başlandı. Lazer terazi ile kot kontrolü sağlandı.",
        image: "https://images.unsplash.com/photo-1620626012053-93f2bc72338d?auto=format&fit=crop&q=80&w=800",
        status: "DEVAM_EDİYOR",
        color: "text-primary"
    },
    {
        date: "DÜN, 16:30",
        id: "LOG_8820",
        title: "SU TESİSATI BASINÇ TESTİ",
        desc: "Tüm boru bağlantıları kontrol edildi. 8 bar basınç testi başarıyla tamamlandı. Sızdırmazlık onayı verildi.",
        status: "TAMAMLANDI",
        color: "text-green-600"
    },
    {
        date: "20 EKİM, 08:30",
        id: "LOG_8819",
        title: "YIKIM & HAFRİYAT",
        desc: "Eski fayansların sökümü tamamlandı. Molozlar çuvallanıp şantiye dışına çıkarıldı.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
        status: "TAMAMLANDI",
        color: "text-green-600"
    }
];

export const LiveDemo = () => {
    return (
        <div className="max-w-3xl mx-auto">
            {/* Site Status Control Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-8 font-mono text-[10px] text-stone-500 text-center tracking-widest">
                <div className="bg-white p-3">
                    <span className="block text-stone-300 mb-1">HAVA_DURUMU</span>
                    <span className="text-stone-900 font-bold">AÇIK 24°C</span>
                </div>
                <div className="bg-white p-3">
                    <span className="block text-stone-300 mb-1">RÜZGAR</span>
                    <span className="text-stone-900 font-bold">KB 12 KM/S</span>
                </div>
                <div className="bg-white p-3">
                    <span className="block text-stone-300 mb-1">NEM_ORANI</span>
                    <span className="text-stone-900 font-bold">%42</span>
                </div>
                <div className="bg-white p-3">
                    <span className="block text-stone-300 mb-1">SON_SENK.</span>
                    <span className="text-primary font-bold animate-pulse">ŞİMDİ</span>
                </div>
            </div>

            {/* Project Header Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 md:p-12 mb-16 relative overflow-hidden group border-2 border-stone-900"
            >
                {/* Technical Decals */}
                <div className="absolute top-0 left-0 bg-stone-900 text-white text-[10px] font-mono px-3 py-1 font-bold">
                    CANLI_AKIS_BASLATILDI
                </div>
                <div className="absolute top-4 right-4 text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono font-bold text-red-500 tracking-widest">LIVE</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-stone-900 uppercase tracking-tighter leading-none mb-4">
                            NİLÜFER<br />
                            <span className="text-stone-300">ŞANTİYE_04</span>
                        </h2>
                        <div className="flex items-center gap-4 text-xs font-mono">
                            <span className="px-2 py-1 border border-stone-200 text-stone-500">ID: #83921</span>
                            <span className="px-2 py-1 border border-stone-200 text-stone-500">BALKAN MH.</span>
                        </div>
                    </div>

                    <div className="w-full md:w-64">
                        <div className="flex justify-between text-xs font-mono font-bold tracking-widest text-stone-900 mb-2">
                            <span>ILERLEME</span>
                            <span>65%</span>
                        </div>
                        <div className="h-4 w-full bg-stone-100 border border-stone-200 p-0.5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-8 md:pl-16 border-l-2 border-stone-200 border-dashed space-y-16 pb-12">
                {UPDATES.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * index + 0.3 }}
                        className="relative group"
                    >
                        {/* Timeline Node */}
                        <div className={`absolute -left-[41px] md:-left-[73px] top-6 w-5 h-5 rounded-full border-4 border-white ${index === 0 ? 'bg-primary ring-2 ring-primary ring-offset-2' : 'bg-stone-300'}`}></div>

                        <div className="bg-white border-l-4 border-stone-200 pl-6 md:pl-8 py-2 group-hover:border-primary transition-colors duration-300">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                                <span className={`font-mono text-xs font-bold px-2 py-1 ${index === 0 ? 'bg-primary text-white' : 'bg-stone-100 text-stone-500'}`}>
                                    {item.date}
                                </span>
                                <span className="font-mono text-[10px] text-stone-400 tracking-widest uppercase">LOG_ID: {item.id}</span>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 uppercase leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-stone-500 font-mono text-sm leading-relaxed max-w-2xl">
                                    {item.desc}
                                </p>
                            </div>

                            {item.image && (
                                <div className="relative w-full aspect-video border border-stone-900 bg-stone-900 overflow-hidden group/img">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 transition-opacity duration-500" />

                                    {/* Camera UI Overlay */}
                                    <div className="absolute inset-0 pointer-events-none border-[20px] border-transparent group-hover/img:border-white/10 transition-all duration-300"></div>
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 animate-pulse">
                                        REC
                                    </div>
                                    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/80 font-bold">
                                        CAM_01 // 1080p
                                    </div>
                                    <div className="absolute bottom-4 right-4 font-mono text-[10px] text-white/50 tracking-widest">
                                        {item.id}
                                    </div>

                                    {/* Center Crosshair */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/30"></div>
                                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5 bg-white/30"></div>
                                    </div>
                                </div>
                            )}

                            {index === 0 && (
                                <div className="mt-6 flex items-center gap-3 font-mono text-[10px] text-stone-400 border-t border-stone-100 pt-4">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    <span>VERİ DOĞRULANDI: HASAN_USTA (192.168.1.42)</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
