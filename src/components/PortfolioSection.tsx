"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";

// --- PORTFOLIO DATA ---
const categories = ["Sistem & Web", "Design", "Manajemen Data", "Lainnya"];

const allPortfolios = [
  // Sistem & Web
  {
    id: 1,
    title: "Sistem Informasi Terpadu Desa Cenrana",
    desc: "Sistem Informasi Desa Terpadu (desacenrana.id) yang dikembangkan end-to-end (SDLC) dengan 3 modul utama: transparansi anggaran real-time, e-Surat (10 jenis dokumen), dan manajemen data kependudukan. Skor aksesibilitas Google Lighthouse 94%.",
    category: "Sistem & Web",
    image: "/desacenrana1 (1).png",
    link: "https://desacenrana.id/",
    gallery: [
      "/desacenrana1 (2).png",
      "/desacenrana1 (3).png",
      "/desacenrana1 (4).png"
    ]
  },
  {
    id: 2,
    title: "Sistem Prediksi Kelulusan Mahasiswa",
    desc: "Model machine learning berbasis Python untuk memprediksi ketepatan waktu kelulusan mahasiswa — menganalisis data historis akademik multi-variabel dengan akurasi 93% pada data uji.",
    category: "Sistem & Web",
    image: "/prediksi (1).png",
    gallery: [
      "/prediksi (1).png",
      "/prediksi (2).png",
      "/prediksi (3).png"
    ]
  },
  {
    id: 3,
    title: "Sistem Prediksi Menggunakan Metode TOPSIS",
    desc: "Sistem Pendukung Keputusan berbasis TOPSIS (makassarauto.my.id) untuk optimasi pemilihan motor bekas — mengolah data dari 3 dealer di Kota Makassar dengan 7 kriteria penilaian. Sistem live dan dapat diakses publik.",
    category: "Sistem & Web",
    image: "https://s0.wp.com/mshots/v1/https://makassarauto.my.id/?w=1200&h=800",
    link: "https://makassarauto.my.id/",
    gallery: [
      "https://s0.wp.com/mshots/v1/https://makassarauto.my.id/?w=1200&h=800",
      "/topsis (1).png",
      "/topsis (2).png"
    ]
  },
  {
    id: 4,
    title: "Landing Page",
    desc: "Halaman promosi atau personal branding yang dirancang untuk menyampaikan informasi secara ringkas, jelas, dan menarik.",
    category: "Sistem & Web",
    image: "/asyn (3).png",
    gallery: [
      "/asyn (3).png",
      "/asyn (1).png",
      "/asyn (2).png"
    ]
  },
  // Design
  {
    id: 5,
    title: "Desain Feed Instagram UKM Pencinta Pasar Modal",
    desc: "Kumpulan desain media sosial yang mendukung branding organisasi dan komunikasi publikasi digital untuk kepengurusan periode 2024-2025.",
    category: "Design",
    image: "/ppm (1).png",
    link: "https://www.instagram.com/ppm.nobel/",
    gallery: [
      "/ppm (1).png",
      "/ppm (2).png",
      "/ppm (3).png",
      "/ppm (4).png",
      "/ppm (5).png"
    ]
  },
  {
    id: 12,
    title: "Desain Media Sosial POSKO KKN Desa Cenrana",
    desc: "Kumpulan desain konten media sosial yang mendukung publikasi kegiatan dan program kerja Posko KKN selama periode pengabdian di Desa Cenrana.",
    category: "Design",
    image: "/cenranice (1).png",
    link: "https://www.instagram.com/cenranice.genk/",
    gallery: [
      "/cenranice (1).png",
      "/cenranice (2).png",
      "/cenranice (3).png",
      "/cenranice (4).png",
      "/cenranice (5).png"
    ]
  },
  // Manajemen Data
  {
    id: 6,
    title: "Optimasi Template Rekapitulasi & Validasi Data",
    desc: "Pembuatan template spreadsheet terstruktur untuk merekapitulasi 200+ dokumen harian. Sistem sederhana ini berhasil mempercepat proses pembuatan laporan operasional dari 3 jam menjadi 1 jam, serta memudahkan validasi data dengan sistem CEISA (Studi Kasus: DJBC Sulbagsel).",
    category: "Manajemen Data",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Manajemen Arsip Digital Kepesertaan (SIPP)",
    desc: "Proses verifikasi dan validasi data kepesertaan secara presisi, dilanjutkan dengan pengarsipan dokumen digital yang terstruktur. Fokus pada akurasi pencocokan data fisik dengan database pada Sistem Informasi Pelayanan Peserta (Studi Kasus: BPJS Kesehatan).",
    category: "Manajemen Data",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568225367159-0dbed2769de6?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Visualisasi Data",
    desc: "Penyajian data dalam bentuk visual yang membantu pembaca memahami informasi dengan lebih cepat.",
    category: "Manajemen Data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  // Lainnya
  {
    id: 9,
    title: "Technical Support & Troubleshooting Aplikasi",
    desc: "Penanganan keluhan dan penyelesaian masalah teknis secara langsung bagi pengguna aplikasi layanan masyarakat. Mengelola 50-70 antrean per hari, memastikan kendala penggunaan aplikasi Mobile JKN dapat diselesaikan dengan cepat dan tepat.",
    category: "Lainnya",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    title: "Kolaborasi Freelance & Project-Based",
    desc: "Berbagai bentuk kerja sama dengan individu dan kebutuhan proyek digital secara fleksibel.",
    category: "Lainnya",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Eksplorasi Solusi Digital Lainnya",
    desc: "Ruang untuk karya tambahan dan pengembangan baru yang akan terus bertambah.",
    category: "Lainnya",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Sistem & Web");
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  // Filter items based on selected category
  const filteredItems = allPortfolios.filter(item => item.category === activeCategory);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveItemIndex(0); // Reset active item to first when changing category
  };

  return (
    <motion.section 
      id="proyek" 
      className="py-10 md:py-24 bg-white relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center text-center mb-10"
          variants={fadeUpBlur}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Portofolio / Karya Terbaik</span>
          <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-black font-serif mb-6 text-text-main">
            Karya{" "}
            {isHeadingInView ? (
              <Typewriter 
                text={["Terbaik."]} 
                speed={70} 
                waitTime={15000}
                cursorChar="_" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400"
              />
            ) : (
              <span className="invisible">Terbaik.</span>
            )}
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Kumpulan proyek dan hasil kerja yang saya bangun, mulai dari sistem dan website, desain visual, pengelolaan data, hingga kebutuhan digital lainnya.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12 relative z-20"
          variants={fadeUpBlur}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`shrink-0 px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105' 
                  : 'bg-white border-gray-200 text-text-muted hover:text-text-main hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Interactive Album Showcase */}
        <motion.div 
          className="relative z-10 w-full"
          variants={fadeUpBlur}
        >
          {/* We use an AnimatePresence wrapper for category changes, but internally we map the filtered items to avoid remounting issues if we want layout animations */}
          <div className="h-[600px] md:h-[500px] lg:h-[600px] w-full flex flex-col md:flex-row gap-4 p-2">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => {
                const isActive = activeItemIndex === index;
                
                return (
                  <motion.div
                    layout
                    key={item.id}
                    onClick={() => setActiveItemIndex(index)}
                    initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: -30, rotateY: index % 2 === 0 ? -20 : 20, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, rotateY: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.5, y: 100, rotateX: 30, filter: "blur(20px)" }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 200, damping: 25 },
                      opacity: { duration: 0.6, delay: index * 0.1 },
                      scale: { duration: 0.6, delay: index * 0.1 },
                      rotateX: { type: "spring", stiffness: 150, damping: 20, delay: index * 0.1 },
                      rotateY: { type: "spring", stiffness: 150, damping: 20, delay: index * 0.1 },
                      y: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 },
                      filter: { duration: 0.6, delay: index * 0.1 }
                    }}
                    className={`relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow ${
                      isActive ? 'flex-[10] md:flex-[8] shadow-2xl' : 'flex-1 md:flex-[1] min-h-[70px] md:min-h-0 min-w-0 md:min-w-[80px]'
                    }`}
                  >
                    {/* Background Image Wrapper */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* Image element placeholder, you can swap with Next Image later */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-110 group-hover:scale-105'} filter ${isActive ? 'brightness-[0.4]' : 'brightness-[0.6] grayscale-[0.3] group-hover:grayscale-0 group-hover:brightness-[0.5]'}`}
                      />
                      {/* Optional Overlay Gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 w-full h-full flex items-end">
                      {/* Inactive State Content (Vertical/Narrow text) */}
                      {!isActive && (
                        <div className="w-full h-full flex md:flex-col items-center justify-center md:justify-end md:pb-8">
                          {/* Desktop: rotate text */}
                          <div className="hidden md:flex h-full flex-col items-center justify-end pb-10">
                            <h3 className="text-white font-bold whitespace-nowrap -rotate-90 origin-bottom pb-4 tracking-wider text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                              {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
                            </h3>
                          </div>
                          {/* Mobile: horizontal text */}
                          <div className="md:hidden flex items-center justify-center w-full h-full px-4">
                            <h3 className="text-white font-bold text-sm text-center drop-shadow-md">
                              {item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}
                            </h3>
                          </div>
                        </div>
                      )}

                      {/* Active State Content (Full Detail) */}
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="p-6 md:p-10 lg:p-12 w-full max-w-4xl"
                        >
                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="flex-1">
                              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-medium text-[10px] md:text-sm mb-2 md:mb-4">
                                {item.category}
                              </span>
                              <h3 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4 font-serif leading-tight line-clamp-2 md:line-clamp-none">
                                {item.title}
                              </h3>
                              <p className="text-white/80 text-xs md:text-base leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-none">
                                {item.desc}
                              </p>
                            </div>
                            
                            <div className="shrink-0 flex items-center gap-3 mt-2 md:mt-0">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProject(item);
                                }}
                                className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-colors group/btn text-xs md:text-base"
                              >
                                <span>Lihat Detail</span>
                                <span className="material-symbols-outlined text-[16px] md:text-[20px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                style={{ scrollbarWidth: 'none' }}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-10 shadow-sm"
                >
                  <span className="material-symbols-outlined text-white">close</span>
                </button>

                {/* Gallery Grid Dynamic Layout */}
                <div className={`grid grid-cols-2 ${selectedProject.gallery?.length >= 5 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-2 md:gap-3 p-2`}>
                  {selectedProject.gallery ? (
                    selectedProject.gallery.map((img: string, idx: number) => (
                      <div 
                        key={idx} 
                        className={`${
                          idx === 0 
                            ? 'col-span-2 md:col-span-2 row-span-2' 
                            : 'col-span-1 md:col-span-1'
                        } overflow-hidden rounded-2xl group shadow-sm`}
                      >
                        <img 
                          src={img} 
                          alt={`Gallery ${idx}`} 
                          className={`w-full ${idx === 0 ? 'h-[250px] md:h-[408px]' : 'h-[120px] md:h-[200px]'} object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110`} 
                        />
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="col-span-2 md:col-span-2 row-span-2 overflow-hidden rounded-2xl group shadow-sm">
                        <img src={selectedProject.image} alt="Main" className="w-full h-[250px] md:h-[408px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="hidden md:block overflow-hidden rounded-2xl group shadow-sm">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Gallery 1" className="w-full h-[200px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="hidden md:block overflow-hidden rounded-2xl group shadow-sm">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Gallery 2" className="w-full h-[200px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </>
                  )}
                </div>

                {/* Detail Content */}
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 font-serif">{selectedProject.title}</h2>
                      <p className="text-text-muted text-lg leading-relaxed">{selectedProject.desc}</p>
                    </div>
                    
                    <div className="shrink-0 flex gap-3">
                      {selectedProject.link ? (
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-text-main rounded-full font-medium transition-colors">
                          <span className="material-symbols-outlined text-[20px]">link</span>
                          <span>Kunjungi</span>
                        </a>
                      ) : (
                        <a href="#" className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-text-main rounded-full font-medium transition-colors">
                          <span className="material-symbols-outlined text-[20px]">link</span>
                          <span>Kunjungi</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="prose max-w-none text-text-muted pt-6 border-t border-gray-100">
                    <p>Berikut adalah detail tambahan mengenai proyek <strong>{selectedProject.title}</strong>. Proyek ini dibangun dengan fokus pada fungsionalitas, desain antarmuka yang modern, serta pengalaman pengguna yang optimal.</p>
                    <p>Konsep pengerjaannya diawali dengan analisis kebutuhan, dilanjutkan dengan perancangan arsitektur dan eksekusi visual, sebelum akhirnya di-deploy sebagai solusi fungsional yang siap digunakan.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.section>
  );
}
