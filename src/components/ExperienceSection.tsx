"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur } from "@/lib/animations";
import CaseStudyDetail from "@/components/CaseStudySection";

const categories = ["Semua", "Profesional", "Proyek", "Desain & Kreatif", "Organisasi"];

const allExperiences = [
  {
    role: "System Analyst & DSS Developer",
    company: "Freelance / Proyek Independen",
    location: "Makassar",
    date: "Apr 2026 – Jun 2026",
    description: "Mengembangkan Sistem Pendukung Keputusan (SPK) metode TOPSIS berbasis web. Menganalisis kebutuhan pengguna, memvalidasi variabel keputusan, dan menyusun dokumentasi sistem yang fungsional.",
    activities: [
      "Menganalisis kebutuhan & variabel keputusan.",
      "Mengembangkan SPK metode TOPSIS.",
      "Menyusun dokumentasi sistem fungsional."
    ],
    competencies: ["System Analysis", "Decision Support System", "Requirement Documentation"],
    label: "Freelance",
    category: "Proyek",
    logo: "/logo-async-gold.png",
    theme: "from-[#7c2d12] to-[#ea580c]",
    relatedProject: "topsis"
  },
  {
    role: "Business Analyst & Project Lead",
    company: "Sistem Terpadu Desa Cenrana",
    location: "Kabupaten Maros",
    date: "Jul 2025 – Apr 2026",
    description: "Memimpin siklus pengembangan (SDLC) platform digital desa secara end-to-end. Menggali kebutuhan langsung dari perangkat desa dan menerjemahkannya menjadi solusi web yang mencatatkan keberhasilan UAT 93,8%.",
    activities: [
      "Memimpin SDLC end-to-end platform desa.",
      "Melakukan requirement gathering & UI prototyping.",
      "Mengeksekusi User Acceptance Testing (UAT)."
    ],
    competencies: ["Business Analysis", "Project Leadership", "Requirement Gathering", "UAT"],
    label: "Proyek Utama",
    category: "Proyek",
    logo: "/logonobel.png",
    theme: "from-[#7c2d12] to-[#ea580c]",
    relatedProject: "cenrana"
  },
  {
    role: "System Analyst & Software Developer Intern",
    company: "Kanwil Bea Cukai Sulbagsel (Kemenkeu RI)",
    location: "Makassar",
    date: "Mar 2025 – Jul 2025",
    description: "Menjalani rotasi kerja di 5 bidang strategis. Mengembangkan prototipe SIMIRA (Sistem Informasi Manajemen Rumah Tangga) berbasis PHP Laravel & MySQL, menganalisis sistem pengaduan keberatan/banding, serta mengeksekusi media monitoring berita harian (NALIKA).",
    activities: [
      "Mengembangkan aplikasi SIMIRA (Laravel & MySQL) untuk inventaris gudang instansi.",
      "Mengeksekusi NALIKA (Media Monitoring) & analisis berita harian kepabeanan.",
      "Melakukan cross-check & input data pegawai di Bidang Umum.",
      "Mengidentifikasi alur kerja bidang Penindakan, Penyidikan & Kepatuhan Internal."
    ],
    competencies: ["System Analysis", "Laravel & MySQL", "Business Process Mapping", "Media Monitoring", "Database Design"],
    label: "Magang Kemenkeu",
    category: "Profesional",
    logo: "/logobeacukai.png",
    theme: "from-[#0f172a] to-[#334155]",
    relatedProject: null,
    proofSection: {
      metrics: [
        { label: "Rotasi Bidang", value: "5 Bidang", icon: "published_with_changes" },
        { label: "Sistem Dikembangkan", value: "SIMIRA", icon: "inventory" },
        { label: "Laporan MBKM", value: "344 Halaman", icon: "description" },
        { label: "Durasi Rotasi", value: "4 Bulan", icon: "event_available" }
      ],
      workflow: [
        { phase: "Analisis Kebutuhan Gudang", desc: "Wawancara pengelola gudang rumah tangga & pemetaan alur barang As-Is vs To-Be.", roleFocus: "IT Business Analyst" },
        { phase: "Pengembangan Web SIMIRA", desc: "Merancang database MySQL & membangun prototipe Laravel dengan stok update real-time.", roleFocus: "System Analyst" },
        { phase: "Media Monitoring & Cross-check", desc: "Analisis berita harian kepabeanan (NALIKA) & validasi silang data ribuan pegawai.", roleFocus: "Operational Analyst" },
        { phase: "Pelaporan & Validasi Akademik", desc: "Menyusun laporan akhir magang 344 hal & validasi logbook MBKM di SIAKAD Nobel.", roleFocus: "Project Coordinator" }
      ],
      proofs: [
        { title: "Dashboard Aplikasi SIMIRA", image: "/projects/simira-dashboard.jpeg", caption: "Screenshot antarmuka dashboard utama SIMIRA (PHP Laravel) di laptop kantor.", tag: "Prototipe Web" },
        { title: "Proses Coding & Development", image: "/projects/simira-work-1.jpeg", caption: "Dokumentasi aktivitas pengembangan & pengujian sistem di meja kerja Bea Cukai.", tag: "Development" },
        { title: "Verifikasi Spreadsheet Pegawai", image: "/projects/simira-work-2.jpeg", caption: "Suasana verifikasi data & analisis operasional instansi dengan seragam resmi.", tag: "Data Analysis" },
        { title: "Logbook SIAKAD Nobel", image: "/projects/beacukai-siakad-log.jpeg", caption: "Tangkapan layar rekap logbook harian tervalidasi di portal siakad.nobel.ac.id.", tag: "Validasi SIAKAD" }
      ]
    }
  },
  {
    role: "Data Analyst & Account Representative Specialist",
    company: "BPJS Ketenagakerjaan Cabang Makassar",
    location: "Makassar",
    date: "Okt 2024 – Jan 2025",
    description: "Mengelola akuisisi & administrasi kepesertaan. Memvalidasi integritas >5.000 data Kualitas IGI, mengotomatisasi penagihan iuran/tunggakan via WA Blasting, serta memverifikasi data integrasi perusahaan dari portal OSS (Online Single Submission).",
    activities: [
      "Memvalidasi & melakukan koreksi kualitas data IGI (>5.000 data kepesertaan).",
      "Mengoperasikan penagihan iuran & tunggakan berkala via WA Blasting & Email.",
      "Memverifikasi pendaftaran pelaku usaha dari sistem OSS Kemeninves/BKPM.",
      "Menjalankan sosialisasi lapangan program BPU (Bukan Penerima Upah)."
    ],
    competencies: ["Data Quality Control", "WA Blasting Automation", "OSS System Integration", "CRM & Data Integrity", "Public Relations"],
    label: "MBKM",
    category: "Profesional",
    logo: "/bpjs-ketenagakerjaan-logo-png-seeklogo-406885.png",
    theme: "from-[#0f172a] to-[#334155]",
    relatedProject: null,
    proofSection: {
      metrics: [
        { label: "Data Divalidasi", value: ">5.000 Data", icon: "verified_user" },
        { label: "Otomatisasi Penagihan", value: "WA Blasting", icon: "send" },
        { label: "Sistem Terintegrasi", value: "Portal OSS", icon: "sync" },
        { label: "Durasi Magang", value: "4 Bulan", icon: "calendar_today" }
      ],
      workflow: [
        { phase: "Analisis Integrasi Portal OSS", desc: "Memetakan NIK & NPP perusahaan baru dari portal OSS Kemeninves/BKPM ke CRM BPJS.", roleFocus: "Process Analyst" },
        { phase: "Pembersihan Data IGI (>5.000 Data)", desc: "Mengeksekusi validasi presisi tinggi pada spreadsheet kepesertaan untuk koreksi identitas.", roleFocus: "Data Quality Analyst" },
        { phase: "Otomatisasi Penagihan Iuran", desc: "Pengoperasian sistem WA Blasting & Email massal untuk peringatan jatuh tempo tunggakan.", roleFocus: "Operations Specialist" },
        { phase: "Edukasi & Sosialisasi Lapangan", desc: "Pendistribusian brosur & edukasi langsung program kepesertaan BPU bagi pekerja informal.", roleFocus: "Field Coordinator" }
      ],
      proofs: [
        { title: "Administrasi Kantor Cabang", image: "/experience/bpjs/image14.jpeg", caption: "Aktivitas pengelolaan administrasi & verifikasi data peserta di kantor cabang.", tag: "Operasional Kantor" },
        { title: "Cross-check Spreadsheet Data IGI", image: "/experience/bpjs/image15.jpeg", caption: "Proses validasi dan koreksi ketidakcocokan >5.000 data kepesertaan peserta.", tag: "Data Validation" },
        { title: "Automated Communication System", image: "/experience/bpjs/image24.jpeg", caption: "Pengoperasian aplikasi komunikasi massal WA Blasting untuk penagihan iuran.", tag: "WA Blasting" },
        { title: "Sosialisasi Kepesertaan BPU", image: "/experience/bpjs/image27.jpeg", caption: "Kegiatan edukasi dan pembagian brosur jaminan sosial pekerja informal di Makassar.", tag: "Sosialisasi" }
      ]
    }
  },
  {
    role: "Data Digitalization Support",
    company: "Sistem Kusuka KKP",
    location: "Freelance",
    date: "Mei 2024 – Jul 2024",
    description: "Mengelola digitalisasi dan penginputan lebih dari 1.000 data profil pengguna ke portal sistem kementerian secara presisi dan sesuai standar prosedur administrasi.",
    activities: [
      "Melakukan digitalisasi 1.000+ data profil.",
      "Memastikan keakuratan input data.",
      "Menjalankan prosedur administrasi sistem."
    ],
    competencies: ["Data Management", "Data Entry", "Digital Administration"],
    label: "Freelance",
    category: "Profesional",
    logo: "/logo-async-gold.png",
    theme: "from-[#0f172a] to-[#334155]",
    relatedProject: null
  },
  {
    role: "Koordinator INFOKOM",
    company: "UKM Pencinta Pasar Modal",
    location: "ITB Nobel Indonesia",
    date: "2023 – 2024",
    description: "Mengelola komunikasi resmi kelembagaan dan pengembangan identitas visual organisasi. Memastikan distribusi informasi berjalan efektif dan profesional.",
    activities: [
      "Menjembatani komunikasi antar lembaga.",
      "Mengelola penjadwalan publikasi media sosial.",
      "Merancang materi visual komunikasi."
    ],
    competencies: ["Communication", "Stakeholder Management", "Visual Branding"],
    label: "Organisasi",
    category: "Organisasi",
    logo: "/Logo%20PPM-1.png",
    theme: "from-[#064e3b] to-[#059669]",
    relatedProject: null
  },
  {
    role: "Ketua Organisasi Siswa Intra Sekolah (OSIS)",
    company: "SMA Negeri 2 Enrekang",
    location: "Enrekang",
    date: "2020 – 2021",
    description: "Memimpin kepengurusan OSIS dan mengoordinasikan berbagai program kerja. Memastikan komunikasi yang baik antara siswa, guru, dan pihak sekolah.",
    activities: [
      "Mengkoordinasikan berbagai program kerja.",
      "Memimpin kepengurusan dan anggota OSIS.",
      "Menjadi penghubung komunikasi."
    ],
    competencies: ["Leadership", "Public Speaking", "Event Management"],
    label: "Organisasi",
    category: "Organisasi",
    logo: "/logo-osis.png",
    theme: "from-[#1e40af] to-[#3b82f6]",
    relatedProject: null
  },
  {
    role: "Desainer Grafis & Media Sosial",
    company: "UKM Pencinta Pasar Modal",
    location: "Makassar",
    date: "2023 – 2024",
    description: "Merancang kumpulan desain media sosial yang mendukung branding organisasi dan komunikasi publikasi digital untuk kepengurusan periode 2024-2025.",
    activities: [
      "Membuat desain konten Feed & Story Instagram.",
      "Mengelola aset komunikasi visual organisasi.",
      "Mendukung kampanye publikasi digital."
    ],
    competencies: ["Graphic Design", "Social Media Branding", "Visual Communication"],
    label: "Desain",
    category: "Desain & Kreatif",
    logo: "/logo_ppm_transparent.png",
    theme: "from-[#ec4899] to-[#db2777]",
    relatedProject: null,
    gallery: [
      "/ppm-1.png",
      "/ppm-2.png",
      "/ppm-3.png",
      "/ppm-4.png",
      "/ppm-5.png"
    ]
  },
  {
    role: "Kreator Konten Visual",
    company: "POSKO KKN Desa Cenrana",
    location: "Cenrana",
    date: "Jul 2025 – Sep 2025",
    description: "Merancang desain konten media sosial yang mendukung publikasi kegiatan dan program kerja Posko KKN selama periode pengabdian di Desa Cenrana.",
    activities: [
      "Merancang materi publikasi program kerja.",
      "Mendokumentasikan kegiatan pengabdian.",
      "Mengelola visual konten harian."
    ],
    competencies: ["Content Creation", "Digital Design", "Documentation"],
    label: "Desain",
    category: "Desain & Kreatif",
    logo: "/logo_nobel_transparent.png",
    theme: "from-[#8b5cf6] to-[#6d28d9]",
    relatedProject: null,
    gallery: [
      "/cenranice-1.png",
      "/cenranice-2.png"
    ]
  }
];


const highlights = [
  { title: "Lulusan & Yudisium Terbaik (IPK 3,93)", desc: "Sebagai Fresh Graduate, terbukti memiliki pondasi akademik dan logika penyelesaian masalah yang solid dengan predikat Cumlaude dan Yudisium Terbaik Fakultas Teknologi Industri." },
  { title: "Skor Penerimaan Tinggi (UAT 93,8%)", desc: "Mengawal pengembangan sistem informasi yang benar-benar diterima pengguna nyata, dibuktikan dengan skor User Acceptance Test mencapai 93,8%." },
  { title: "Pengiriman Solusi Efisien (Live 3 Bulan)", desc: "Menunjukkan ketangkasan (agility) dalam mengorkestrasi proyek dari tahap analisis kebutuhan hingga sistem dirilis (live) dalam waktu singkat." },
  { title: "Implementasi AI-Assisted Development", desc: "Berpengalaman bertindak sebagai logic orchestrator yang memanfaatkan alat bantu Artificial Intelligence untuk mempercepat siklus pengembangan sistem (SDLC)." },
  { title: "Validasi Skala Besar (5.000+ Data)", desc: "Membuktikan ketelitian tingkat tinggi dan kesiapan dalam menjaga integritas ribuan data krusial untuk kebutuhan instansi publik skala enterprise." },
  { title: "Standar Keamanan & Privasi (NIK)", desc: "Mengedepankan etika dan kerahasiaan pengguna dalam perancangan sistem, termasuk penerapan enkripsi untuk keamanan integrasi data kependudukan." },
  { title: "Kolaborasi Lintas Sektor", desc: "Adaptif dan luwes bekerja sama dengan berbagai kultur entitas: Pemerintahan Desa, Kementerian (Kemenkeu, KKP), hingga BUMN." },
  { title: "Pengelolaan Komunikasi & Visual", desc: "Memiliki keahlian komunikasi publik dan visual branding yang terasah melalui peran di Subbagian Humas dan kepemimpinan organisasi." },
];

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const [selectedExpIndex, setSelectedExpIndex] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredExperiences = activeCategory === "Semua" 
    ? allExperiences 
    : allExperiences.filter(e => e.category === activeCategory);
    
  const highlightsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  const scrollHighlights = (direction: 'left' | 'right') => {
    if (highlightsRef.current) {
      const scrollAmount = highlightsRef.current.clientWidth > 768 ? 400 : 300;
      highlightsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedExpIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedExpIndex]);

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 md:px-8 bg-bg-card relative overflow-hidden border-t border-black/5" 
      id="pengalaman"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
    >
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          variants={fadeUpBlur}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
              PERJALANAN & PENGALAMAN
            </span>
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
          </div>

          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-text-main tracking-tight mb-4 px-2">
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
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-2xl font-bold font-serif mb-6 text-text-main">Jelajahi <span className="text-primary">Portofolio</span></h3>
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[12px] md:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-[0_4px_20px_rgba(234,88,12,0.3)]'
                    : 'bg-bg-card text-text-muted border-black/5 dark:border-white/5 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {cat}
                <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/5'
                }`}>
                  {cat === "Semua" ? allExperiences.length : allExperiences.filter(e => e.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Cards ("Doors") */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((item, index) => {
              // Find actual index in allExperiences for consistent ID linking
              const actualIndex = allExperiences.findIndex(e => e.role === item.role && e.company === item.company);
              
              return (
                <motion.div 
                  key={`${item.role}-${item.company}`}
                  layoutId={`exp-card-${actualIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedExpIndex(actualIndex)}
                  className="bg-bg-main border border-black/5 dark:border-white/5 rounded-[2rem] p-6 lg:p-8 cursor-pointer hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col relative overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center p-2.5 border border-black/5 dark:border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <img src={item.logo} alt="" className="w-full h-full object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${
                        item.category === 'Profesional' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                        item.category === 'Proyek' ? 'bg-primary/10 text-primary' :
                        'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  
                  <div className="relative z-10 mb-4">
                    <h3 className="font-bold text-lg md:text-xl text-text-main mb-1.5 group-hover:text-primary transition-colors leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-text-muted">{item.company}</p>
                  </div>
                  
                  <div className="mt-auto relative z-10 flex items-center justify-between text-[11px] font-bold text-text-muted border-t border-black/5 dark:border-white/5 pt-5 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">calendar_month</span> 
                      {item.date.split("–")[0].trim()}
                    </span>
                    <span className={`flex items-center gap-1.5 transition-colors ${item.relatedProject ? 'text-primary group-hover:translate-x-1 transition-transform' : 'group-hover:text-text-main'}`}>
                      {item.relatedProject ? (
                        <>Buka Portofolio <span className="material-symbols-outlined text-[16px]">arrow_forward</span></>
                      ) : (
                        <>Detail <span className="material-symbols-outlined text-[16px]">open_in_new</span></>
                      )}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Highlights Section (MOVED TO BOTTOM) */}
        <motion.div 
          className="mt-24 mb-16 md:mb-24 relative group/section"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-8 md:mb-12 relative">
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-text-main mb-4">
              Jejak Dampak & <span className="text-primary">Pencapaian</span>
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6">
              Bukan sekadar daftar pengalaman, melainkan jejak bukti nyata dari dampak yang telah saya hadirkan untuk instansi, publik, dan kolaborasi tim.
            </p>
            
            {/* Swipe/Scroll Hint */}
            <div className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-wider animate-pulse border border-primary/20">
              <span className="material-symbols-outlined text-[16px] leading-none">swipe</span>
              <span className="leading-none pt-[1px]">Geser untuk melihat selengkapnya</span>
              <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
            </div>
          </div>
          
          {/* Carousel & Arrows Wrapper */}
          <div className="relative group/carousel">
            {/* Carousel Arrows (Hover Reveal) */}
            <button 
              onClick={() => scrollHighlights('left')} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-bg-card rounded-full shadow-lg flex items-center justify-center text-text-muted hover:text-primary z-20 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 pointer-events-none group-hover/carousel:pointer-events-auto active:scale-95 border border-black/5 dark:border-white/5 hidden md:flex"
            >
              <span className="material-symbols-outlined text-2xl pr-0.5">chevron_left</span>
            </button>
            
            <button 
              onClick={() => scrollHighlights('right')} 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-bg-card rounded-full shadow-lg flex items-center justify-center text-text-muted hover:text-primary z-20 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 pointer-events-none group-hover/carousel:pointer-events-auto active:scale-95 border border-black/5 dark:border-white/5 hidden md:flex"
            >
              <span className="material-symbols-outlined text-2xl pl-0.5">chevron_right</span>
            </button>

            {/* Highlights Container */}
            <div 
              ref={highlightsRef}
              className="flex overflow-x-auto snap-x md:snap-mandatory gap-4 md:gap-6 pb-12 pt-6 scroll-smooth px-6 md:px-10 -mx-6 md:-mx-10 md:scroll-pl-10"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              onMouseLeave={() => setHoveredHighlight(null)}
            >
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
                const bgClass = isFocused ? 'bg-gradient-to-br from-primary to-primary-dark border-transparent shadow-primary/30' : 'bg-bg-card border-black/5 dark:border-white/5 hover:border-primary/20';

                return (
                  <motion.div 
                    key={i} 
                    className="w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-center md:snap-start"
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true, amount: 0.1 }}
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
                      <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full transition-opacity duration-700 blur-xl pointer-events-none ${isFocused ? 'bg-white/20 opacity-100' : 'bg-gradient-to-br from-primary/5 to-transparent opacity-0'}`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Modal / Open Door (Fullscreen Overlay) */}
      <AnimatePresence>
        {selectedExpIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-0 md:p-6 lg:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExpIndex(null)}
          >
            <motion.div 
              layoutId={`exp-card-${selectedExpIndex}`}
              className="w-full h-full md:h-auto max-h-full md:max-h-[90vh] md:rounded-[2.5rem] bg-bg-main shadow-2xl relative overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:px-8 md:py-6 border-b border-black/5 dark:border-white/5 bg-bg-main/80 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white dark:bg-black/20 flex items-center justify-center p-2 border border-black/5 dark:border-white/10 shrink-0">
                     <img src={allExperiences[selectedExpIndex].logo} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h2 className="text-base md:text-lg font-bold text-text-main line-clamp-1 leading-tight">{allExperiences[selectedExpIndex].role}</h2>
                    <p className="text-xs md:text-sm text-text-muted">{allExperiences[selectedExpIndex].company}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedExpIndex(null)}
                  className="w-10 h-10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shrink-0"
                >
                  <span className="material-symbols-outlined text-text-main">close</span>
                </button>
              </div>
              
              {/* Modal Body (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-5 md:p-8 lg:p-12" data-lenis-prevent="true">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Top Info Banner */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-8 border-b border-black/5 dark:border-white/5">
                    <div>
                      <h1 className="text-2xl md:text-4xl font-bold text-text-main mb-3 leading-tight">
                        {allExperiences[selectedExpIndex].role}
                      </h1>
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-medium text-text-muted">
                        <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">calendar_month</span> {allExperiences[selectedExpIndex].date}
                        </span>
                        {allExperiences[selectedExpIndex].location && (
                          <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-[18px]">location_on</span> {allExperiences[selectedExpIndex].location}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-lg">
                          <span className="material-symbols-outlined text-[18px]">category</span> {allExperiences[selectedExpIndex].category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description & Competencies */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
                     <div className="lg:col-span-2 space-y-8">
                       <div>
                         <h3 className="text-lg font-bold text-text-main mb-3 font-serif">Tentang Peran</h3>
                         <p className="text-text-muted leading-relaxed text-[15px]">{allExperiences[selectedExpIndex].description}</p>
                       </div>
                       <div>
                          <h3 className="text-lg font-bold text-text-main mb-4 font-serif flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">check_circle</span> 
                            Aktivitas Utama
                          </h3>
                          <ul className="space-y-3">
                            {allExperiences[selectedExpIndex].activities.map((act, i) => (
                               <li key={i} className="flex gap-4 text-text-muted text-[15px]">
                                 <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i+1}</span>
                                 <span className="leading-relaxed">{act}</span>
                               </li>
                            ))}
                          </ul>
                       </div>
                     </div>
                     
                     <div className="bg-bg-card p-6 rounded-[2rem] border border-black/5 dark:border-white/5 h-fit">
                        <h3 className="text-lg font-bold text-text-main mb-5 font-serif flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">psychology</span> 
                          Kompetensi
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                          {allExperiences[selectedExpIndex].competencies.map((comp, i) => (
                            <span key={i} className="px-3 py-1.5 bg-bg-main border border-black/5 dark:border-white/10 text-text-main text-[13px] font-medium rounded-xl">
                              {comp}
                            </span>
                          ))}
                        </div>
                     </div>
                  </div>
                  {/* Proof & Workflow Section (BA & PM Focus) */}
                  {(allExperiences[selectedExpIndex] as any).proofSection && (
                    <div className="mt-10 pt-8 border-t border-black/10 dark:border-white/10 space-y-8">
                      <div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                          Bukti & Alur Kerja Analis (BA & PM)
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-text-main font-serif">
                          Dokumentasi & Ringkasan Kontribusi Real
                        </h3>
                      </div>

                      {/* Key Impact Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {(allExperiences[selectedExpIndex] as any).proofSection.metrics.map((m: any, i: number) => (
                          <div key={i} className="p-4 bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 shadow-sm text-center">
                            <span className="material-symbols-outlined text-primary text-2xl mb-1">{m.icon}</span>
                            <div className="text-base md:text-lg font-black text-text-main font-serif">{m.value}</div>
                            <div className="text-[11px] text-text-muted font-medium mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Workflow (Analisis Alur Kerja) */}
                      <div>
                        <h4 className="text-sm font-bold text-text-main font-serif mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">account_tree</span>
                          Alur Kerja & Fokus Peran
                        </h4>
                        <div className="space-y-3">
                          {(allExperiences[selectedExpIndex] as any).proofSection.workflow.map((w: any, i: number) => (
                            <div key={i} className="p-4 bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{i+1}</span>
                                <div>
                                  <h5 className="text-xs md:text-sm font-bold text-text-main">{w.phase}</h5>
                                  <p className="text-[11px] md:text-xs text-text-muted mt-0.5 leading-relaxed">{w.desc}</p>
                                </div>
                              </div>
                              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-primary text-[10px] md:text-[11px] font-bold rounded-lg shrink-0 w-fit">
                                {w.roleFocus}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Proof Cards (Bukti Dokumentasi) */}
                      <div>
                        <h4 className="text-sm font-bold text-text-main font-serif mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-lg">verified</span>
                          Bukti Otentik Dokumentasi & Log Instansi
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {(allExperiences[selectedExpIndex] as any).proofSection.proofs.map((p: any, i: number) => (
                            <div 
                              key={i} 
                              className="bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
                              onClick={() => setLightboxImg(p.image)}
                            >
                              <div className="relative h-44 bg-black/5 dark:bg-white/5 flex items-center justify-center p-2">
                                <img src={p.image} alt={p.title} className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" />
                                <span className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                                  {p.tag}
                                </span>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                  <span className="material-symbols-outlined text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">zoom_in</span>
                                </div>
                              </div>
                              <div className="p-4">
                                <h5 className="text-xs font-bold text-text-main mb-1 group-hover:text-primary transition-colors">{p.title}</h5>
                                <p className="text-[11px] text-text-muted leading-relaxed">{p.caption}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Case Study Integration */}
                  {allExperiences[selectedExpIndex].relatedProject && (
                     <div className="mt-8 pt-8 border-t-2 border-dashed border-black/10 dark:border-white/10">
                        <CaseStudyDetail projectId={allExperiences[selectedExpIndex].relatedProject!} />
                     </div>
                  )}

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Proof Images */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Bukti Dokumentasi"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
