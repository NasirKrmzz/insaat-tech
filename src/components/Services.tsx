import { motion } from "framer-motion";
import bathroomImg from '../assets/images/services/bathroom.jpg';
import kitchenImg from '../assets/images/services/kitchen.jpg';
import paintingImg from '../assets/images/services/painting.jpg';
import flooringImg from '../assets/images/services/flooring.jpg';
import electricImg from '../assets/images/services/electric.jpg';
import roofImg from '../assets/images/services/roof.jpg';

const services = [
    {
        id: "s1",
        title: "Banyo Yenileme & Tesisat",
        description: "Eskiyen banyonuzu kırmadan dökmeden ya da komple yenileyerek modern bir görünüme kavuşturuyoruz; su tesisatı, fayans ve vitrifiye montajı dahil.",
        image: bathroomImg.src
    },
    {
        id: "s2",
        title: "Mutfak Tadilatı & Montaj",
        description: "Fonksiyonel mutfak dolapları, tezgah değişimi ve zemin seramik uygulamalarıyla mutfağınızı baştan yaratıyoruz.",
        image: kitchenImg.src
    },
    {
        id: "s3",
        title: "Boya, Badana & Alçı",
        description: "Profesyonel ekipmanlarla duvar tamiratı, alçı çekimi ve silinebilir boya uygulamaları yapıyoruz.",
        image: paintingImg.src
    },
    {
        id: "s4",
        title: "Zemin Döşeme & Parke",
        description: "Laminat parke, seramik kaplama ve süpürgelik montajı ile zeminlerinizi yeniliyoruz.",
        image: flooringImg.src
    },
    {
        id: "s5",
        title: "Elektrik & Aydınlatma",
        description: "Eskiyen elektrik hatlarının değişimi, led aydınlatma sistemleri ve anahtar priz montajı.",
        image: electricImg.src
    },
    {
        id: "s6",
        title: "Çatı Tamiri & İzolasyon",
        description: "Akıtan çatılar için kiremit değişimi, su yalıtımı ve yağmur oluğu onarım hizmetleri.",
        image: roofImg.src
    }
];

export const Services = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* SEO Header */}


                {/* Service List */}
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 p-4 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100 group"
                        >
                            {/* Small Image Thumbnail */}
                            <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-stone-200">
                                <img
                                    src={service.image}
                                    alt={`${service.title} - Bursa İnşaat Hizmetleri`}
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-display font-bold text-stone-900 mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Arrow Icon (Desktop) */}
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
