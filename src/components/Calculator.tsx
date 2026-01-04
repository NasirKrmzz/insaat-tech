import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bathroomImg from '../assets/images/modern_bathroom_renovation_1767553422367.png';
import kitchenImg from '../assets/images/modern_kitchen_design_1767553435104.png';
import livingImg from '../assets/images/modern_living_room_design_1767553449969.png';
import repairImg from '../assets/images/professional_repairman_background_1767554423867.png';

const ROOM_TYPES = [
    { id: 'bathroom', label: 'Banyo Yenileme', basePrice: 24000, desc: 'Tesisat, Seramik, Dolap', image: bathroomImg.src },
    { id: 'kitchen', label: 'Mutfak Tadilatı', basePrice: 48000, desc: 'Dolap, Tezgah, Tesisat', image: kitchenImg.src },
    { id: 'living', label: 'Salon / Oda', basePrice: 14000, desc: 'Boya, Parke, Alçıpan', image: livingImg.src },
    { id: 'full', label: 'Komple Daire', basePrice: 420000, desc: 'Anahtar Teslim A\'dan Z\'ye', image: null },
];

const QUALITY_LEVELS = [
    { id: 'classic', label: 'Ekonomik', multiplier: 1, desc: 'Fiyat/Performans · Temiz' },
    { id: 'plus', label: 'Konfor', multiplier: 1.3, desc: 'Kaliteli Malzeme · Şık' },
    { id: 'luxury', label: 'Lüks', multiplier: 1.6, desc: 'Premium · Özel Tasarım' },
];

export const Calculator = () => {
    const [mode, setMode] = useState<'renovation' | 'repair'>('repair');
    const [room, setRoom] = useState(ROOM_TYPES[0]);
    const [quality, setQuality] = useState(QUALITY_LEVELS[1]); // Default to middle option
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let calculated = room.basePrice;
        const baseSize = room.id === 'full' ? 80 : 6;
        const sizeFactor = Math.max(0.8, size / baseSize);
        calculated = calculated * sizeFactor * quality.multiplier;
        setTotal(Math.round(calculated / 500) * 500);
    }, [room, quality, size]);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden relative">

            {/* Soft Header */}
            <div className="bg-stone-50 px-6 py-4 md:px-8 md:py-6 border-b border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-bold font-display text-stone-800 tracking-tight">Hızlı Maliyet Hesapla</span>
                </div>

                {/* Mode Toggles */}
                <div className="flex p-1 bg-stone-200/50 rounded-lg">
                    <button
                        onClick={() => setMode('renovation')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === 'renovation' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                    >
                        🏠 Tadilat Hesaplama
                    </button>
                    <button
                        onClick={() => setMode('repair')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === 'repair' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
                    >
                        🛠️ Tamirat Hesaplama
                    </button>
                </div>
            </div>

            <div className="p-0">
                <AnimatePresence mode="wait">
                    {mode === 'repair' ? (
                        <motion.div
                            key="repair"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative min-h-[500px] flex items-center justify-center p-8 md:p-12 text-center"
                        >
                            <img src={repairImg.src} className="absolute inset-0 w-full h-full object-cover" alt="Tamirat Ustası" />
                            <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"></div>

                            <div className="relative z-10 max-w-lg mx-auto text-white">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                                    <span className="text-4xl shadow-black drop-shadow-lg">🛠️</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-sans font-black mb-4 tracking-tight drop-shadow-md">
                                    TAMİRAT İŞLERİNİZ İÇİN BURADAYIZ
                                </h3>
                                <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed mb-8 drop-shadow">
                                    Tamirat, montaj veya parça değişimi gibi işlemlerin fiyatı işin durumuna göre değişir.<br />
                                    <span className="text-white font-bold block mt-2">En net fiyatı almak için:</span>
                                </p>
                                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                                    <a href="tel:05551510465" className="group relative overflow-hidden rounded-xl bg-white p-4 transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                                        <div className="relative z-10 flex items-center justify-center gap-4">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-900 transition-colors group-hover:bg-primary group-hover:text-white">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                            <div className="text-left">
                                                <span className="block text-xs font-bold text-stone-500 uppercase tracking-wider group-hover:text-stone-800">Hemen Ara & Fiyat Al</span>
                                                <span className="block text-xl font-black text-stone-900">0555 151 04 65</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/905551510465" className="group relative overflow-hidden rounded-xl bg-[#25D366] p-4 transition-all hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:bg-[#20bd5a]">
                                        <div className="relative z-10 flex items-center justify-center gap-4 text-white">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                            <div className="text-left">
                                                <span className="block text-xs font-bold opacity-80 uppercase tracking-wider">7/24 Mesaj Atın</span>
                                                <span className="block text-xl font-black">WhatsApp Destek</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="calculator"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-12 p-6 md:p-10"
                        >
                            {/* 1. Room Selection */}
                            <div>
                                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                                    01. Yenilenmesi Gereken Alan
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {ROOM_TYPES.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => {
                                                setRoom(type);
                                                if (type.id === 'full' && size < 60) setSize(80);
                                                if (type.id !== 'full' && size > 40) setSize(10);
                                            }}
                                            className={`relative overflow-hidden rounded-xl text-left border-2 transition-all duration-300 group h-32 md:h-40 ${room.id === type.id
                                                ? 'border-primary shadow-lg ring-1 ring-primary/20'
                                                : 'border-stone-100 hover:border-stone-200'
                                                }`}
                                        >
                                            {type.image ? (
                                                <>
                                                    <img src={type.image} alt={type.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                    <div className={`absolute inset-0 bg-gradient-to-t ${room.id === type.id ? 'from-stone-900/90 via-stone-900/40 to-stone-900/10' : 'from-stone-900/80 to-transparent'}`}></div>
                                                </>
                                            ) : (
                                                <div className={`absolute inset-0 ${room.id === type.id ? 'bg-stone-800' : 'bg-stone-100'} transition-colors`}>
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                                        <span className="text-4xl">🏠</span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                                                <span className={`block font-bold text-sm md:text-base leading-tight mb-1 ${!type.image && room.id !== type.id ? 'text-stone-700' : 'text-white'}`}>
                                                    {type.label}
                                                </span>
                                                <span className={`text-[9px] md:text-[10px] uppercase tracking-wide opacity-80 ${!type.image && room.id !== type.id ? 'text-stone-500' : 'text-stone-300'}`}>
                                                    {type.desc}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 2. Size Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest">
                                        02. Alan Büyüklüğü (m²)
                                    </label>
                                    <span className="text-2xl font-black font-display text-stone-800">
                                        {size} <span className="text-sm font-normal text-stone-400">m²</span>
                                    </span>
                                </div>
                                <div className="relative h-12 flex items-center select-none touch-none">
                                    <input
                                        type="range"
                                        min={room.id === 'full' ? 50 : 2}
                                        max={room.id === 'full' ? 250 : 50}
                                        step={1}
                                        value={size}
                                        onChange={(e) => setSize(Number(e.target.value))}
                                        className="w-full absolute z-20 cursor-pointer opacity-0 h-full"
                                    />
                                    <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden relative">
                                        <motion.div
                                            className="h-full bg-primary"
                                            initial={false}
                                            animate={{ width: `${((size - (room.id === 'full' ? 50 : 2)) / ((room.id === 'full' ? 250 : 50) - (room.id === 'full' ? 50 : 2))) * 100}%` }}
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute w-6 h-6 bg-white border-2 border-primary rounded-full shadow-lg z-10 pointer-events-none"
                                        initial={false}
                                        animate={{ left: `${((size - (room.id === 'full' ? 50 : 2)) / ((room.id === 'full' ? 250 : 50) - (room.id === 'full' ? 50 : 2))) * 100}%` }}
                                        style={{ x: '-50%' }}
                                    />
                                </div>
                            </div>

                            {/* 3. Quality Selection */}
                            <div>
                                <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                                    03. Malzeme & İşçilik
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {QUALITY_LEVELS.map((q) => (
                                        <button
                                            key={q.id}
                                            onClick={() => setQuality(q)}
                                            className={`relative overflow-hidden p-6 rounded-xl border-2 transition-all group text-left ${quality.id === q.id
                                                ? 'border-primary bg-primary/5 shadow-md'
                                                : 'border-stone-100 hover:border-stone-200'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`block font-bold text-lg ${quality.id === q.id ? 'text-primary' : 'text-stone-700'}`}>
                                                    {q.label}
                                                </span>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${quality.id === q.id ? 'border-primary' : 'border-stone-300'
                                                    }`}>
                                                    {quality.id === q.id && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                                                </div>
                                            </div>
                                            <span className="text-xs text-stone-500 font-medium opacity-80">{q.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Result Section */}
                            <div className="bg-stone-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-100">
                                <div className="text-center md:text-left">
                                    <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                                        Ortalama Başlangıç Fiyatı
                                    </span>
                                    <div className="flex items-start justify-center md:justify-start gap-1">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={total}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-4xl md:text-5xl font-black text-stone-800 tracking-tighter"
                                            >
                                                {total.toLocaleString('tr-TR')}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span className="text-lg text-primary font-bold mt-1">₺</span>
                                    </div>
                                    <p className="text-[10px] text-stone-400 mt-2 max-w-[200px]">
                                        *Yaklaşık maliyettir. Kesin tutar ücretsiz keşif ile verilir.
                                    </p>
                                </div>

                                <a href="/contact" className="w-full md:w-auto px-10 py-5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
                                    <span>🚀</span>
                                    Net Fiyat Alın
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
