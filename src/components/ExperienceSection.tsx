"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur } from "@/lib/animations";

const allExperiences = [
  {
    role: "Ketua OSIS",
    company: "SMAN 2 Enrekang",
    location: "Enrekang",
    date: "2021 – 2022",
    description: "Memimpin organisasi siswa intra sekolah — mengkoordinasikan program kerja, mengelola komunikasi antara siswa dan pihak sekolah, serta merencanakan dan mengevaluasi seluruh kegiatan OSIS selama masa jabatan.",
    activities: [
      "Mengkoordinasikan program kerja tahunan OSIS.",
      "Mengelola komunikasi antara siswa dan pihak sekolah.",
      "Merencanakan dan mengevaluasi seluruh kegiatan OSIS."
    ],
    competencies: ["Leadership", "Public Speaking", "Team Management", "Decision Making"],
    label: "Organisasi",
    category: "Organisasi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Logo_OSIS.svg/1024px-Logo_OSIS.svg.png",
    theme: "from-[#064e3b] to-[#059669]"
  },
  {
    role: "Koordinator INFOKOM",
    company: "UKM Pencinta Pasar Modal",
    location: "ITB Nobel Indonesia",
    date: "2023 – 2024",
    description: "Bertanggung jawab dalam pengelolaan komunikasi organisasi, distribusi informasi kegiatan, serta pengembangan identitas visual dan media sosial UKM agar lebih interaktif dan profesional.",
    activities: [
      "Menjembatani komunikasi ke lembaga kemahasiswaan.",
      "Menyusun dan mendistribusikan informasi.",
      "Mengelola media sosial organisasi."
    ],
    competencies: ["Leadership", "Communication", "Branding", "Social Media Management"],
    label: "Organisasi",
    category: "Organisasi",
    logo: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png",
    theme: "from-[#064e3b] to-[#059669]"
  },
  {
    role: "Developer",
    company: "Sistem Prediksi & SPK",
    location: "Academic Projects",
    date: "Project-Based",
    description: "Mengembangkan berbagai sistem berbasis data untuk membantu proses analisis, prediksi, dan pengambilan keputusan menggunakan algoritma dan metode yang sesuai dengan kebutuhan.",
    activities: [
      "Analisis kebutuhan pengguna.",
      "Pengolahan dan persiapan dataset.",
      "Implementasi algoritma prediksi & analisis."
    ],
    competencies: ["Decision Support System", "Data Analysis", "System Development"],
    label: "Riset Akademik",
    category: "Proyek",
    logo: "/logo-async.png",
    theme: "from-[#7c2d12] to-[#ea580c]"
  },
  {
    role: "Staf Pengelolaan & Validasi Data",
    company: "BPJS Ketenagakerjaan",
    location: "Makassar",
    date: "Okt 2024 – Jan 2025",
    description: "Memvalidasi dan mengoreksi 5.000+ entri data peserta dalam SIM BPJS Ketenagakerjaan dengan akurasi 99%+. Mengelola program komunikasi digital terjadwal kepada 3.000+ peserta aktif serta melaksanakan digitalisasi dokumen administrasi fisik ke sistem digital.",
    activities: [
      "Memvalidasi dan mengoreksi 5.000+ entri data peserta.",
      "Mengelola komunikasi digital kepada 3.000+ peserta aktif.",
      "Melaksanakan digitalisasi dan pengarsipan dokumen."
    ],
    competencies: ["Data Validation", "Data Integrity", "Digital Archiving", "Stakeholder Communication"],
    label: "MBKM",
    category: "Profesional",
    logo: "/bpjs-ketenagakerjaan-logo-png-seeklogo-406885.png",
    theme: "from-[#0f172a] to-[#334155]"
  },
  {
    role: "Analis Sistem & Staf Administrasi Digital",
    company: "Kanwil Bea Cukai Sulbagsel",
    location: "Makassar",
    date: "Mar 2025 – Jul 2025",
    description: "Menganalisis kebutuhan operasional instansi dan merancang prototipe SIM Rumah Tangga — mencakup requirement gathering, business process mapping, dokumentasi proses bisnis, dan perancangan alur sistem. Merancang 20+ aset komunikasi visual yang disetujui tanpa revisi mayor.",
    activities: [
      "Requirement gathering & business process mapping.",
      "Merancang prototipe Sistem Informasi Manajemen.",
      "Memproduksi 20+ aset komunikasi visual instansi."
    ],
    competencies: ["Business Process Mapping", "Requirement Gathering", "System Analysis", "Visual Communication"],
    label: "MBKM Flagship",
    category: "Profesional",
    logo: "/logobeacukai.png",
    theme: "from-[#0f172a] to-[#334155]"
  },
  {
    role: "Freelance Designer & Data Entry",
    company: "ASYNC Solutions",
    location: "Makassar",
    date: "2023 – Sekarang",
    description: "Menangani 5+ proyek desain grafis untuk klien dari berbagai sektor — mencakup logo & brand identity, materi visual media sosial, poster/flyer event, dan konten visual UMKM. Juga melaksanakan proyek data entry ke Sistem Kusuka milik Kementerian Kelautan dan Perikanan (KKP).",
    activities: [
      "Mendesain logo, brand identity, dan konten media sosial.",
      "Membuat poster, flyer event, dan materi visual UMKM.",
      "Data entry ke Sistem Kusuka KKP."
    ],
    competencies: ["Graphic Design", "Brand Identity", "Data Entry", "Content Creation"],
    label: "Freelance",
    category: "Profesional",
    logo: "/logo-async.png",
    theme: "from-[#0f172a] to-[#334155]"
  },
  {
    role: "Project Lead",
    company: "Sistem Desa Cenrana",
    location: "Kabupaten Maros",
    date: "Jul 2025 – Apr 2026",
    description: "Memimpin pengembangan end-to-end (SDLC) dan deployment Sistem Informasi Desa Terpadu (desacenrana.id) — mencakup 3 modul utama: transparansi anggaran real-time, e-Surat (10 jenis dokumen), dan manajemen data kependudukan. Skor aksesibilitas Google Lighthouse 94%.",
    activities: [
      "Memimpin SDLC end-to-end hingga deployment.",
      "Mengembangkan 3 modul utama sistem desa.",
      "Implementasi keamanan data (enkripsi NIK)."
    ],
    competencies: ["Project Leadership", "SDLC", "Website Development", "UI/UX Design"],
    label: "Proyek Desa",
    category: "Proyek",
    logo: "/logonobel.png",
    theme: "from-[#7c2d12] to-[#ea580c]"
  },
  {
    role: "Developer",
    company: "Layanan Aspirasi Digital",
    location: "Program KKN Cenrana",
    date: "Jul 2025 – Sep 2025",
    description: "Mengembangkan konsep layanan aspirasi digital yang bertujuan membantu masyarakat menyampaikan keluhan maupun aspirasi secara lebih cepat, mudah, dan terdokumentasi.",
    activities: [
      "Analisis kebutuhan pelaporan masyarakat.",
      "Perancangan konsep platform digital.",
      "Deployment dan implementasi website."
    ],
    competencies: ["User Research", "System Design", "Community Engagement"],
    label: "Proyek KKN",
    category: "Proyek",
    logo: "/logonobel.png",
    theme: "from-[#7c2d12] to-[#ea580c]"
  }
];

const highlights = [
  { title: "Project Leadership", desc: "Memimpin pengembangan Sistem Informasi Desa Cenrana dari tahap analisis kebutuhan hingga implementasi." },
  { title: "Experience in Government & Public Service", desc: "Berpengalaman bekerja di lingkungan instansi pemerintah dan pelayanan publik melalui program MBKM." },
  { title: "Data Management", desc: "Terbiasa mengelola, memvalidasi, merapikan, dan menyajikan data untuk kebutuhan administrasi maupun sistem informasi." },
  { title: "Design & Digital Communication", desc: "Memiliki pengalaman dalam desain visual, branding digital, dokumentasi media, dan komunikasi organisasi." },
  { title: "System & Website Development", desc: "Mengembangkan website, sistem informasi, sistem prediksi, dan sistem pendukung keputusan berbasis kebutuhan pengguna." },
  { title: "Leadership & Organization", desc: "Memiliki pengalaman memimpin organisasi sekolah dan mengelola komunikasi organisasi tingkat perguruan tinggi." },
  { title: "Digital Solution Mindset", desc: "Terbiasa memahami kebutuhan, melakukan riset, dan merancang solusi yang sesuai dengan konteks pengguna." },
  { title: "Continuous Learning", desc: "Aktif mempelajari teknologi, tools, dan pendekatan baru untuk meningkatkan kualitas solusi digital." },
];

export default function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const cardsContainerRef = useRef(null);
  const isCardsInView = useInView(cardsContainerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, allExperiences.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollHighlights = (direction: 'left' | 'right') => {
    if (highlightsRef.current) {
      const scrollAmount = highlightsRef.current.clientWidth > 768 ? 400 : 300;
      highlightsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const activeItem = allExperiences[currentIndex];

  return (
    <motion.section 
      className="py-10 md:py-24 px-4 md:px-8 bg-bg-card relative overflow-hidden border-t border-black/5" 
      id="pengalaman"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-10"
          variants={fadeUpBlur}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
              PERJALANAN & PENGALAMAN
            </span>
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
          </div>

          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-text-main tracking-tight mb-6 px-2">
            Pengalaman{" "}
            {isHeadingInView ? (
              <Typewriter 
                text={["Profesional & Organisasi."]} 
                speed={70} 
                waitTime={15000}
                cursorChar="_" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-dark"
              />
            ) : (
              <span className="invisible">Profesional & Organisasi.</span>
            )}
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Visualisasi terpusat perjalanan karir, proyek, dan kolaborasi yang disusun rapi berdasarkan klasifikasinya. Silakan jelajahi kartu di bawah ini.
          </p>
        </motion.div>

        {/* Card Fan Carousel */}
        <motion.div 
          ref={cardsContainerRef}
          className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden mt-2 select-none"
          variants={fadeUpBlur}
        >
          {allExperiences.map((item, index) => {
            const offset = index - currentIndex;
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = absOffset <= 3;

            return (
              <motion.div
                key={index}
                className={`absolute w-[220px] h-[300px] md:w-[260px] md:h-[360px] rounded-2xl md:rounded-[2rem] shadow-2xl cursor-pointer flex flex-col justify-between p-6 md:p-7 text-white bg-gradient-to-br ${item.theme} border border-white/20 overflow-hidden group hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-shadow duration-500`}
                animate={{
                  x: isCardsInView ? offset * (isMobile ? 65 : 120) : 0,
                  y: isCardsInView ? absOffset * (isMobile ? 12 : 20) : 0,
                  rotateZ: isCardsInView ? offset * (isMobile ? 7 : 9) : 0,
                  scale: isCardsInView ? (isActive ? 1 : Math.max(1 - absOffset * 0.12, 0.65)) : 0.85,
                  opacity: isCardsInView ? (isVisible ? 1 : 0) : 0,
                }}
                transition={{
                  x: { type: "spring", stiffness: 80, damping: 18, mass: 0.6 },
                  y: { type: "spring", stiffness: 80, damping: 18, mass: 0.6 },
                  rotateZ: { type: "spring", stiffness: 80, damping: 18, mass: 0.6 },
                  scale: { type: "spring", stiffness: 100, damping: 20, mass: 0.5 },
                  opacity: { duration: 0.3, ease: "easeOut" },
                }}
                style={{ zIndex: 50 - absOffset, willChange: "transform, opacity" }}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Logo Watermark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none mix-blend-overlay">
                  <img src={item.logo} alt="" className="w-40 h-40 object-contain filter grayscale brightness-0 invert pointer-events-none" />
                </div>

                {/* Card Content (Preview) */}
                <div className="relative z-10 flex flex-col items-start">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] md:text-xs font-bold text-white backdrop-blur-md border border-white/20 uppercase tracking-wider shadow-sm">
                    {item.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-4 leading-snug drop-shadow-md">
                    {item.role}
                  </h3>
                </div>
                <div className="relative z-10">
                  <p className="font-medium text-sm text-white drop-shadow-sm leading-tight">{item.company}</p>
                  <p className="text-[11px] text-white/80 mt-1.5 font-mono bg-black/20 inline-block px-2 py-1 rounded-md backdrop-blur-sm">{item.date}</p>
                </div>

                {/* Overlay for inactive cards */}
                <div className={`absolute inset-0 rounded-2xl md:rounded-[2rem] transition-opacity duration-500 ${isActive ? 'bg-transparent opacity-0' : 'bg-black/30 opacity-100'}`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mt-4 md:mt-6">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:bg-bg-main transition-all active:scale-95 border border-black/5 disabled:opacity-30 disabled:cursor-not-allowed" disabled={currentIndex === 0}>
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          
          <div className="flex gap-2">
             {allExperiences.map((_, i) => (
               <div key={i} onClick={() => setCurrentIndex(i)} className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${i === currentIndex ? 'bg-primary w-8' : 'bg-black/10 w-2.5 hover:bg-black/20'}`} />
             ))}
          </div>

          <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:bg-bg-main transition-all active:scale-95 border border-black/5 disabled:opacity-30 disabled:cursor-not-allowed" disabled={currentIndex === allExperiences.length - 1}>
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </div>

        {/* Detailed Information (Compact & Rectangular Split Layout) */}
        <div className="max-w-5xl mx-auto mt-8 w-full bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 ease-out border border-black/5 p-6 md:p-8 relative overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col md:flex-row gap-6 md:gap-10"
            >
              {/* Left Column: Core Info & Description */}
              <div className="flex-1 md:border-r border-black/5 md:pr-8 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                     <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${activeItem.theme} shadow-sm`}></span>
                     <span className="text-text-muted font-bold text-[11px] uppercase tracking-wider">{activeItem.category}</span>
                  </div>
                  {/* Logo Instansi Asli (Tanpa Efek Transparan) */}
                  <img src={activeItem.logo} alt="" className="h-10 md:h-12 w-auto object-contain max-w-[120px] drop-shadow-sm" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-main leading-tight mb-2">{activeItem.role}</h3>
                
                <div className="flex flex-wrap items-center gap-2 mb-4 bg-bg-card py-2 px-3 rounded-lg border border-black/5 w-fit">
                  <span className="material-symbols-outlined text-primary text-[16px]">domain</span>
                  <span className="text-primary font-bold text-sm">{activeItem.company}</span>
                  <span className="text-text-muted text-xs mx-1">•</span>
                  <span className="text-text-muted text-xs font-mono">{activeItem.date}</span>
                </div>
                
                <p className="text-text-main leading-relaxed text-sm">
                  {activeItem.description}
                </p>
              </div>

              {/* Right Column: Activities & Competencies */}
              <div className="flex-1 flex flex-col justify-center gap-6">
                <div>
                  <h4 className="font-bold text-text-main mb-3 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                    <span className="material-symbols-outlined text-primary text-[18px]">task_alt</span>
                    Aktivitas Utama
                  </h4>
                  <ul className="space-y-2 text-[13px] text-text-muted">
                    {activeItem.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="leading-snug">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-text-main mb-3 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                    <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
                    Kompetensi
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeItem.competencies.map((comp, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-[11px] font-bold rounded-full border border-primary/10 transition-colors hover:bg-primary hover:text-white cursor-default">
                          {comp}
                        </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Highlights Section */}
        <motion.div 
          className="mt-12 md:mt-28 relative group/section"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif">Professional <span className="text-primary">Highlights</span></h3>
          </div>
          
          {/* Carousel Arrows (Hover Reveal) */}
          <button 
            onClick={() => scrollHighlights('left')} 
            className="absolute left-0 top-1/2 mt-5 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-muted hover:text-primary z-20 opacity-0 group-hover/section:opacity-100 transition-all duration-300 pointer-events-none group-hover/section:pointer-events-auto active:scale-95 border border-black/5 hidden md:flex"
          >
            <span className="material-symbols-outlined text-2xl pr-0.5">chevron_left</span>
          </button>
          
          <button 
            onClick={() => scrollHighlights('right')} 
            className="absolute right-0 top-1/2 mt-5 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-text-muted hover:text-primary z-20 opacity-0 group-hover/section:opacity-100 transition-all duration-300 pointer-events-none group-hover/section:pointer-events-auto active:scale-95 border border-black/5 hidden md:flex"
          >
            <span className="material-symbols-outlined text-2xl pl-0.5">chevron_right</span>
          </button>

          {/* Highlights Container */}
          <div 
            ref={highlightsRef}
            className="flex overflow-x-auto snap-x md:snap-mandatory gap-4 md:gap-6 pb-12 pt-10 scroll-smooth px-6 md:px-10 -mx-6 md:-mx-10 md:scroll-pl-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            onMouseLeave={() => setHoveredHighlight(null)}
          >
            {/* Tailwind utility for hiding scrollbar isn't standard, so inline style used */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {highlights.map((h, i) => {
              const currentHighlight = hoveredHighlight !== null ? hoveredHighlight : activeHighlight;
              const isFocused = currentHighlight === i;
              const isAnyFocused = currentHighlight !== null;
              
              const scaleClass = isFocused ? 'scale-105 md:scale-110 z-10 shadow-2xl' : (isAnyFocused ? 'scale-95 opacity-50 blur-[1px]' : 'scale-100 hover:shadow-lg');
              const bgClass = isFocused ? 'bg-gradient-to-br from-primary to-primary-dark border-transparent shadow-primary/30' : 'bg-white border-black/5 hover:border-primary/20';

              return (
                <motion.div 
                  key={i} 
                  className="w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-center md:snap-start"
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div
                    onClick={() => setActiveHighlight(isFocused ? null : i)}
                    onMouseEnter={() => setHoveredHighlight(i)}
                    className={`p-6 md:p-8 border rounded-2xl md:rounded-3xl transition-all duration-500 ease-out cursor-pointer flex flex-col items-start relative overflow-hidden h-full min-h-[220px] md:min-h-0 ${scaleClass} ${bgClass}`}
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${isFocused ? 'bg-white/20 scale-110' : 'bg-primary/10'}`}>
                       <span className={`material-symbols-outlined transition-colors duration-500 text-[24px] ${isFocused ? 'text-white' : 'text-primary'}`}>star</span>
                    </div>
                    <div className="flex flex-col flex-1 w-full justify-start">
                        <h4 className={`font-bold text-[15px] md:text-lg mb-2 transition-colors duration-500 pr-2 ${isFocused ? 'text-white' : 'text-text-main'}`}>{h.title}</h4>
                        <p className={`text-[13px] md:text-sm leading-relaxed transition-colors duration-500 ${isFocused ? 'text-white/90' : 'text-text-muted'}`}>{h.desc}</p>
                    </div>
                    
                    {/* Decorative background element */}
                    <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full transition-opacity duration-700 blur-xl pointer-events-none ${isFocused ? 'bg-white/20 opacity-100' : 'bg-gradient-to-br from-primary/5 to-transparent opacity-0'}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
