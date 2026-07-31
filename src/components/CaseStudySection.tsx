"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/context/LanguageContext";

const caseStudies: Record<string, CaseStudy> = {
  cenrana: {
    id: "cenrana",
    title: "Sistem Informasi Desa Cenrana",
    subtitle: "Platform Digital Desa Terintegrasi — Aspirasi Publik & Ekonomi Digital",
    role: "Business Analyst & Project Lead",
    date: "Jul 2025 – Apr 2026",
    client: "Pemerintah Desa Cenrana, Kab. Maros",
    liveUrl: "https://desacenrana.id",
    heroImage: "/case-study/cenrana/screenshot-homepage.png",
    overview: "Mengembangkan Sistem Informasi Desa (SID) full-stack yang mengintegrasikan pusat informasi, layanan aspirasi warga, dan etalase ekonomi digital (Lapak Warga). Sistem dibangun dari nol (~95% kode kustom) menggunakan Next.js 16, dengan fitur keamanan berlapis (SHA-256, AES-256-GCM) dan PWA.",
    problems: [
      { icon: "wifi_off", title: "Kesenjangan Infrastruktur", desc: "Informasi desa masih mengandalkan papan pengumuman fisik. Distribusi informasi membutuhkan 3-7 hari." },
      { icon: "feedback", title: "Aspirasi Tidak Terkelola", desc: "Warga menyuarakan keluhan melalui media sosial pribadi tanpa saluran resmi, sulit ditindaklanjuti." },
      { icon: "trending_down", title: "Stagnasi Ekonomi UMKM", desc: "70 pelaku wirausaha dengan jangkauan pemasaran terbatas pada lingkungan lokal." },
    ],
    metrics: [
      { label: "UAT Success", value: 93.8, suffix: "%", icon: "verified" },
      { label: "Tabel Database", value: 20, suffix: "+", icon: "storage" },
      { label: "Custom Code", value: 95, suffix: "%", icon: "code" },
      { label: "Modul Admin", value: 18, suffix: "", icon: "dashboard" },
      { label: "Populasi Desa", value: 1826, suffix: " jiwa", icon: "groups" },
      { label: "Data Dikelola", value: 5000, suffix: "+", icon: "database" },
    ],
    techStack: [
      { name: "Next.js 16", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TailwindCSS 4", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "Node.js 20+", category: "Backend" },
      { name: "MySQL 8+", category: "Database" },
      { name: "SHA-256 + AES-256", category: "Security" },
      { name: "JWT + bcrypt", category: "Security" },
      { name: "Supabase Storage", category: "Storage" },
      { name: "PWA", category: "Platform" },
    ],
    phases: [
      {
        title: "1. Analisis Kebutuhan Bisnis",
        period: "Oktober 2025",
        icon: "travel_explore",
        status: "complete",
        roleFocus: "IT Business Analyst (BA)",
        desc: "Melakukan wawancara semi-terstruktur dengan Perangkat Desa (Kepala Desa, Sekdes, Kaur) untuk menggali kebutuhan operasional. Memetakan alur kerja manual (As-Is Process) dan mengidentifikasi 3 masalah utama: keterlambatan papan pengumuman fisik, keluhan warga tak terdata, dan stagnasi UMKM.",
        outputs: [
          "Dokumen Spesifikasi Kebutuhan Sistem (SRS)",
          "Pemetaan Proses As-Is vs To-Be",
          "Matriks Pemangku Kepentingan (Stakeholder Mapping)"
        ],
        image: null,
      },
      {
        title: "2. Pemodelan & Arsitektur Sistem",
        period: "November 2025",
        icon: "schema",
        status: "complete",
        roleFocus: "System Analyst (SA)",
        desc: "Mentranslasikan kebutuhan bisnis menjadi blueprint teknis yang siap dieksekusi. Merancang Entity Relationship Diagram (ERD) 20+ tabel database, Use Case Diagram, dan Sequence Diagram untuk alur enkripsi NIK serta penanganan pengaduan.",
        outputs: [
          "Entity Relationship Diagram (ERD 20+ Tabel)",
          "Cetak Biru Arsitektur Sistem Full-Stack",
          "Sequence Diagram Validasi NIK (SHA-256)",
          "Flowchart Alur Pengaduan & Layanan Warga"
        ],
        image: "/case-study/cenrana/arsitektur-sistem.png",
      },
      {
        title: "3. Desain Prototipe & Logika Bisnis",
        period: "Nov 2025 – Jan 2026",
        icon: "design_services",
        status: "complete",
        roleFocus: "UI/UX & System Analyst",
        desc: "Merancang Wireframe & High-Fidelity Prototype untuk 18 modul admin dan portal publik. Merancang logika proteksi privasi warga (SHA-256 NIK Hashing) dan alur bisnis Lapak Warga terintegrasi WhatsApp Gateway.",
        outputs: [
          "Wireframe & High-Fidelity UI Prototype",
          "Spesifikasi Alur Bisnis WhatsApp Gateway",
          "Protokol Keamanan Data NIK Terenkripsi"
        ],
        image: "/case-study/cenrana/screenshot-homepage.png",
      },
      {
        title: "4. Pengujian Kelayakan (UAT & QA)",
        period: "Feb – Mar 2026",
        icon: "fact_check",
        status: "complete",
        roleFocus: "IT BA / QA Analyst",
        desc: "Menyusun matriks skenario User Acceptance Testing (UAT) dan menguji kelayakan sistem langsung bersama aparatur desa dan sampel warga. Mengukur System Usability Scale (SUS) dan mengaudit performa web.",
        outputs: [
          "Matriks & Laporan UAT Success (93.8%)",
          "Evaluasi System Usability Scale (SUS: 75.6)",
          "Google Lighthouse & Audit Keamanan Web"
        ],
        image: "/cenrana_sc/Screenshot (3938).png",
      },
      {
        title: "5. Pelatihan & Serah Terima",
        period: "Mar – Mei 2026",
        icon: "rocket_launch",
        status: "complete",
        roleFocus: "IT Project Lead & BA",
        desc: "Menyusun Buku Panduan Penggunaan Sistem (User Manual) versi PDF, mengadakan sosialisasi & pelatihan langsung pengoperasian dashboard admin bagi aparatur desa, serta serah terima domain desacenrana.id.",
        outputs: [
          "Buku Panduan Penggunaan Sistem (User Manual PDF)",
          "Berita Acara Serah Terima (BAST) Sistem",
          "Peluncuran Resmi Domain desacenrana.id"
        ],
        image: null,
      },
    ],
    diagrams: [
      { title: "Cetak Biru Arsitektur Sistem Full-Stack", image: "/case-study/cenrana/arsitektur-sistem.png" },
      { title: "Entity Relationship Diagram (ERD 20+ Tabel)", image: "/case-study/cenrana/erd-diagram.png" },
      { title: "Struktur Basis Data MySQL (20+ Tabel Data)", image: "/cenrana_sc/Screenshot (4403).png" },
      { title: "Cloud Media Storage (Supabase Storage Buckets)", image: "/cenrana_sc/Screenshot (4404).png" },
      { title: "Laporan Evaluasi Sistem (Skor UAT 93.8% & SUS)", image: "/cenrana_sc/Screenshot (3938).png" },
      { title: "Infrastruktur Production Hosting (Hostinger VPS)", image: "/cenrana_sc/Screenshot (4402).png" },
      { title: "Sequence Diagram — Validasi & Hashing NIK", image: "/case-study/cenrana/sequence-diagram.png" },
      { title: "Flowchart Metode Pengembangan SDLC", image: "/case-study/cenrana/flowchart-metode.png" },
    ],
    screenshots: [
      { 
        title: "Beranda Utama (Homepage)", 
        image: "/cenrana_sc/beranda.png",
        category: "1. Beranda",
        desc: "Portal utama informasi terpadu & pintu masuk seluruh layanan desa." 
      },
      { 
        title: "Portal Profil & Identitas Desa", 
        image: "/cenrana_sc/profil.png",
        category: "2. Profil Desa",
        desc: "Informasi demografi, wilayah, struktur organisasi, dan sejarah desa." 
      },
      { 
        title: "Pusat Informasi Publik", 
        image: "/cenrana_sc/informasi.png",
        category: "3. Informasi",
        desc: "Portal transparansi berita desa, pengumuman resmi, dan agenda kegiatan." 
      },
      { 
        title: "Hub Layanan Digital Warga", 
        image: "/cenrana_sc/layanan.png",
        category: "4. Layanan Warga",
        desc: "Portal pusat akses layanan mandiri bagi seluruh masyarakat desa." 
      },
      { 
        title: "Layanan Aspirasi Warga", 
        image: "/cenrana_sc/layananaspirasi.png",
        category: "4. Layanan Warga",
        desc: "Formulir pengaduan publik dengan proteksi enkripsi NIK SHA-256." 
      },
      { 
        title: "Layanan e-Surat Digital", 
        image: "/cenrana_sc/layanansurat.png",
        category: "4. Layanan Warga",
        desc: "Permohonan surat keterangan administrasi online otomatis." 
      },
      { 
        title: "Lapak Warga (Ekonomi UMKM)", 
        image: "/cenrana_sc/lapakwarga.png",
        category: "4. Layanan Warga",
        desc: "Etalase pemasaran digital UMKM desa terhubung WhatsApp pengrajin." 
      },
      { 
        title: "Dashboard Ringkasan Admin", 
        image: "/cenrana_sc/dashboard.png",
        category: "5. Admin & Panel",
        desc: "Ringkasan statistik data warga, aspirasi, bansos, dan aktivitas." 
      },
      { 
        title: "Panel Kontrol Admin (CMS)", 
        image: "/cenrana_sc/panel.png",
        category: "5. Admin & Panel",
        desc: "Pusat pengelolaan 18 modul operasional sistem secara mandiri." 
      },
    ],
    fieldPhotos: [
      {
        title: "Penandatanganan Kerjasama Mitra",
        image: "/foto/kerjasama (1).jpeg",
        category: "1. Inisiasi & Kerja Sama",
        desc: "Proses penandatanganan dokumen kerja sama pengembangan sistem bersama mitra desa."
      },
      {
        title: "Kesepakatan Inisiasi Proyek",
        image: "/foto/kerjasama (2).jpeg",
        category: "1. Inisiasi & Kerja Sama",
        desc: "Diskusi alur inisiasi proyek & penetapan komitmen bersama mitra pemerintah desa."
      },
      {
        title: "Observasi & Analisis Kebutuhan",
        image: "/foto/observasi.jpeg",
        category: "2. Elicitation & Analisis",
        desc: "Wawancara langsung & observasi alur kerja manual bersama perangkat desa."
      },
      {
        title: "Implementasi Kode & Development",
        image: "/foto/build.jpeg",
        category: "3. Development",
        desc: "Pengembangan kode kustom 18 modul admin & portal publik terintegrasi PWA."
      },
      {
        title: "Deployment & Konfigurasi Hosting",
        image: "/foto/build dan deploy.jpeg",
        category: "3. Deployment",
        desc: "Penyetelan domain desacenrana.id, konfigurasi server, & enkripsi SSL."
      },
      {
        title: "Pengujian UAT Langsung Warga",
        image: "/foto/prosesuat.jpeg",
        category: "4. Testing & UAT",
        desc: "Uji coba langsung skenario pengajuan pengaduan oleh sampel warga desa."
      },
      {
        title: "Evaluasi UAT & SUS Score",
        image: "/foto/uatdansus.jpeg",
        category: "4. Testing & UAT",
        desc: "Pengisian kuesioner kelayakan sistem & validasi fitur oleh aparatur desa."
      },
      {
        title: "Sosialisasi & Pelatihan Desa",
        image: "/foto/pelatihan.jpeg",
        category: "5. Pelatihan & Handover",
        desc: "Sosialisasi & pelatihan pengoperasian sistem mandiri untuk perangkat desa."
      },
      {
        title: "Bimbingan Teknis Admin Dashboard",
        image: "/foto/pelatihanadmin.jpeg",
        category: "5. Pelatihan & Handover",
        desc: "Pelatihan mendalam pengelolaan modul CMS, data bansos, & e-Surat."
      },
      {
        title: "Surat Pernyataan Website Diterima",
        image: "/foto/surat pernyatan mitra kontrak.jpeg",
        category: "6. Legalitas & Acceptance",
        desc: "Dokumen resmi Surat Pernyataan Penerimaan Sistem & Berita Acara (BAST)."
      },
      {
        title: "Serah Terima Resmi Platform Desa",
        image: "/foto/serahterima.jpeg",
        category: "6. Serah Terima Resmi",
        desc: "Penyerahan simbolis sistem informasi desa & Buku Panduan ke Kepala Desa."
      },
    ],
  },
  topsis: {
    id: "topsis",
    title: "Makassar Auto: SPK Motor Bekas",
    subtitle: "Sistem Pendukung Keputusan Berbasis Web Menggunakan Metode TOPSIS",
    role: "System Analyst & DSS Developer",
    date: "Apr 2026 – Jun 2026",
    client: "Riset (3 Dealer Motor Bekas)",
    liveUrl: "",
    heroImage: "/case-study/topsis/rekomendasi.png",
    overview: "Membangun Sistem Pendukung Keputusan (SPK) berbasis web untuk pemeringkatan motor bekas menggunakan algoritma TOPSIS. Mengolah 7 kriteria kompleks (harga, mesin, jarak tempuh, tahun, dll) dari 53 unit data riil yang tersebar di 3 dealer Kota Makassar menjadi rekomendasi objektif bagi calon pembeli.",
    problems: [
      { icon: "directions_car", title: "Keragaman Kondisi Unit", desc: "Variabel kompleks seperti jarak tempuh, kondisi mesin, dan kelengkapan surat sulit dibandingkan secara manual." },
      { icon: "price_change", title: "Asimetri Informasi Harga", desc: "Pembeli awam sering hanya terpaku pada harga dan fisik, mengabaikan aspek teknis krusial." },
      { icon: "calculate", title: "Kesulitan Pembobotan", desc: "Setiap pembeli kesulitan membobot parameter benefit vs cost secara matematis dalam waktu singkat." },
    ],
    metrics: [
      { label: "Unit Data Uji", value: 53, suffix: "", icon: "motorcycle" },
      { label: "Dealer Terlibat", value: 3, suffix: "", icon: "storefront" },
      { label: "Kriteria Evaluasi", value: 7, suffix: "", icon: "fact_check" },
      { label: "Skala Penilaian", value: 5, suffix: " Poin", icon: "linear_scale" },
    ],
    techStack: [
      { name: "Web API", category: "Frontend" },
      { name: "TOPSIS Algorithm", category: "Algorithm" },
      { name: "MySQL", category: "Database" },
      { name: "Waterfall Model", category: "Methodology" },
      { name: "Euclidean Distance", category: "Math" },
    ],
    phases: [
      {
        title: "Analisis & Pengumpulan Data",
        period: "April 2026",
        icon: "database",
        status: "complete",
        desc: "Mengumpulkan data primer 53 unit motor bekas dari 3 dealer di Makassar. Merumuskan 7 kriteria penilaian teknis dan ekonomis (harga, mesin, jarak tempuh, dsb).",
        outputs: ["Dataset 53 Unit Motor", "Matriks Keputusan Awal", "7 Kriteria Penilaian"],
        image: null,
      },
      {
        title: "Pembobotan & Konversi",
        period: "Mei 2026",
        icon: "balance",
        status: "complete",
        desc: "Mengubah kriteria biaya (cost) seperti harga dan kilometer menjadi skala manfaat (benefit) 1-5 agar perhitungan matriks berjalan seragam.",
        outputs: ["Konversi Cost ke Benefit", "Matriks Normalisasi", "Solusi Ideal Positif & Negatif"],
        image: "/case-study/topsis/input-data.png",
      },
      {
        title: "Implementasi Algoritma",
        period: "Mei - Juni 2026",
        icon: "memory",
        status: "complete",
        desc: "Menerjemahkan perhitungan jarak Euclidean dan nilai preferensi (Vi) ke dalam bentuk kode agar sistem otomatis menyajikan leaderboard motor terbaik.",
        outputs: ["Kalkulator TOPSIS Dinamis", "Fitur Simulasi Penilaian", "Leaderboard Peringkat"],
        image: "/case-study/topsis/peringkat.png",
      },
      {
        title: "Pengujian (Black-box & Validasi)",
        period: "Juni 2026",
        icon: "fact_check",
        status: "complete",
        desc: "Melakukan black-box testing dan mencocokkan hasil sistem dengan komputasi manual. Diperoleh kesesuaian 100% pada peringkat rekomendasi.",
        outputs: ["Laporan Pengujian", "Validasi Hasil Komputasi", "Sistem Siap Digunakan"],
        image: "/case-study/topsis/rekomendasi.png",
      }
    ],
    diagrams: [],
    screenshots: [
      { title: "Hasil Rekomendasi Tertinggi", image: "/case-study/topsis/rekomendasi.png" },
      { title: "Form Input & Atribut Kriteria", image: "/case-study/topsis/input-data.png" },
      { title: "Halaman Peringkat Keseluruhan", image: "/case-study/topsis/peringkat.png" },
    ],
  }
};

interface CaseStudy {
  id: string; title: string; subtitle: string; role: string; date: string; client: string; liveUrl?: string;
  heroImage: string; overview: string;
  problems: { icon: string; title: string; desc: string }[];
  metrics: { label: string; value: number; suffix: string; icon: string }[];
  techStack: { name: string; category: string }[];
  phases: { title: string; period: string; icon: string; status: string; roleFocus?: string; desc: string; outputs: string[]; image: string | null }[];
  diagrams?: { title: string; image: string }[];
  screenshots?: { title: string; image: string; category?: string; desc?: string }[];
  fieldPhotos?: { title: string; image: string; category: string; desc: string }[];
}

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString('id-ID')}{suffix}</span>;
}

export default function CaseStudyDetail({ projectId }: { projectId: string }) {
  const { t } = useLanguage();
  const [activePhase, setActivePhase] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const study = caseStudies[projectId];

  // Reset phase when switching projects
  useEffect(() => {
    setActivePhase(0);
  }, [projectId]);

  if (!study) return null;

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto w-full">
      {/* Lightbox Modal rendered via Portal */}
      {isMounted && createPortal(
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
            >
              <motion.img
                src={lightboxImg}
                alt="Enlarged view"
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      
      <div className="w-full relative z-10 text-left">


        {/* Hero Card */}
        <motion.div
          className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 dark:border-white/5 mb-16 group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative h-[300px] md:h-[420px] overflow-hidden">
            <img 
              src={study.heroImage} 
              alt={study.title} 
              className="w-full h-full object-cover object-top blur-[2px] scale-[1.03] group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 backdrop-blur-[2px]" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-4 inline-block">
                {study.role}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-white/80 text-sm md:text-base max-w-2xl">{study.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-white/70 text-sm">
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">calendar_month</span>{study.date}</span>
                <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">apartment</span>{study.client}</span>
                {study.liveUrl && (
                  <a href={study.liveUrl} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[16px]">language</span>Kunjungi Website
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Overview + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <motion.div 
            className="lg:col-span-3 bg-bg-card rounded-[2rem] p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-text-main mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span>
              {t.caseStudy.overviewTitle}
            </h3>
            <p className="text-text-muted leading-relaxed text-[15px] mb-6">{study.overview}</p>
            
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              {t.caseStudy.problemsTitle}
            </h4>
            <div className="space-y-4">
              {study.problems.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-red-500 text-[20px]">{p.icon}</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-text-main mb-0.5">{p.title}</h5>
                    <p className="text-text-muted text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {study.metrics.map((m, i) => (
              <div key={i} className="bg-bg-card rounded-2xl p-5 border border-black/5 dark:border-white/5 shadow-lg flex flex-col items-center justify-center text-center hover:border-primary/30 transition-colors group">
                <span className="material-symbols-outlined text-primary text-[24px] mb-2 group-hover:scale-110 transition-transform">{m.icon}</span>
                <span className="text-2xl md:text-3xl font-bold text-text-main">
                  <CountUp target={m.value} suffix={m.suffix} />
                </span>
                <span className="text-text-muted text-[11px] font-bold uppercase tracking-wider mt-1">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Development Process Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif text-center mb-10">
            Proses <span className="text-primary">Pengembangan (SDLC)</span>
          </h3>

          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 pb-2 px-2">
            {study.phases.map((phase, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-300 border ${
                  activePhase === i
                    ? 'bg-primary text-white border-primary shadow-[0_4px_20px_rgba(234,88,12,0.3)]'
                    : 'bg-bg-card text-text-muted border-black/5 dark:border-white/5 hover:border-primary/30'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{phase.icon}</span>
                <span className="hidden md:inline">{phase.title}</span>
                <span className="md:hidden">{i + 1}</span>
              </button>
            ))}
          </div>

          {/* Phase Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
              className="bg-bg-card rounded-[2rem] border border-black/5 dark:border-white/5 shadow-xl overflow-hidden"
            >
              {study.phases[activePhase].image ? (
                /* Split Layout for Phase with Technical Diagram/Screenshot */
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 relative min-h-[250px] md:min-h-[350px] bg-bg-main flex items-center justify-center p-4">
                    <img 
                      src={study.phases[activePhase].image!} 
                      alt={study.phases[activePhase].title}
                      className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-500 rounded-xl"
                      onClick={() => setLightboxImg(study.phases[activePhase].image)}
                    />
                  </div>
                  <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[20px]">{study.phases[activePhase].icon}</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-text-main">{study.phases[activePhase].title}</h4>
                          <span className="text-text-muted text-xs font-mono">{study.phases[activePhase].period}</span>
                        </div>
                      </div>
                      {(study.phases[activePhase] as any).roleFocus && (
                        <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider shrink-0">
                          {(study.phases[activePhase] as any).roleFocus}
                        </span>
                      )}
                    </div>
                    <p className="text-text-muted leading-relaxed text-[14px] mb-6">{study.phases[activePhase].desc}</p>
                    
                    <h5 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Output / Deliverables</h5>
                    <ul className="space-y-2">
                      {study.phases[activePhase].outputs.map((out, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-[13px] text-text-muted">
                          <span className="material-symbols-outlined text-emerald-500 text-[16px]">check_circle</span>
                          {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                /* Full-Width Text Layout for Text/Deliverable-focused Phases */
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-[24px]">{study.phases[activePhase].icon}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-text-main leading-tight">{study.phases[activePhase].title}</h4>
                        <span className="text-text-muted text-xs font-mono">{study.phases[activePhase].period}</span>
                      </div>
                    </div>
                    {(study.phases[activePhase] as any).roleFocus && (
                      <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-wider border border-primary/20">
                        {(study.phases[activePhase] as any).roleFocus}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-3">
                      <h5 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">psychology</span>
                        Fokus & Deskripsi Analis
                      </h5>
                      <p className="text-text-muted leading-relaxed text-[15px]">{study.phases[activePhase].desc}</p>
                    </div>

                    <div className="bg-bg-main/60 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                      <h5 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">task_alt</span>
                        Hasil / Artefak Deliverables
                      </h5>
                      <ul className="space-y-3">
                        {study.phases[activePhase].outputs.map((out, i) => (
                          <li key={i} className="flex items-center gap-3 text-[14px] text-text-main font-medium">
                            <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[16px]">check</span>
                            </span>
                            {out}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Technical Diagrams */}
        {study.diagrams && study.diagrams.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif text-center mb-10">
              Dokumentasi <span className="text-primary">Teknis</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.diagrams.map((d, i) => (
                <motion.div
                  key={i}
                  className="bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxImg(d.image)}
                >
                  <div className="relative h-[200px] md:h-[250px] overflow-hidden bg-white">
                    <img src={d.image} alt={d.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-bold text-text-main">{d.title}</h4>
                    <p className="text-text-muted text-[11px] mt-1">Klik untuk memperbesar</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif text-center mb-10">
            Tech <span className="text-primary">Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {study.techStack.map((t, i) => (
              <span key={i} className="px-4 py-2 bg-bg-card rounded-xl border border-black/5 dark:border-white/5 text-sm font-bold text-text-main hover:border-primary/30 hover:text-primary transition-colors shadow-sm">
                {t.name}
                <span className="text-text-muted text-[10px] ml-2 font-normal opacity-60">{t.category}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Screenshots Gallery */}
        {study.screenshots && study.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif mb-2">
                Screenshot <span className="text-primary">Aplikasi & Modul</span>
              </h3>
              <p className="text-text-muted text-xs md:text-sm max-w-xl mx-auto">
                5 Modul Utama Sistem Terpadu Desa Cenrana: Beranda, Profil Desa, Informasi Publik, Layanan Warga (Aspirasi, e-Surat, Lapak UMKM), dan Panel Admin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.screenshots.map((s, i) => (
              <motion.div
                key={i}
                className="bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 shadow-lg overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -4 }}
                onClick={() => setLightboxImg(s.image)}
              >
                <div>
                  <div className="relative h-[200px] overflow-hidden bg-black/5 dark:bg-white/5">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
                    </div>
                    {s.category && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-md">
                        {s.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-bold text-text-main mb-1.5 group-hover:text-primary transition-colors">{s.title}</h4>
                    {s.desc && (
                      <p className="text-text-muted text-[12px] leading-relaxed line-clamp-2">{s.desc}</p>
                    )}
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <span className="text-primary text-[11px] font-bold inline-flex items-center gap-1">
                    Lihat Ukuran Penuh <span className="material-symbols-outlined text-[14px]">open_in_full</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}

        {/* Field Activity Documentation Gallery */}
        {study.fieldPhotos && study.fieldPhotos.length > 0 && (
          <motion.div
            className="mt-16 pt-16 border-t border-black/5 dark:border-white/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider mb-3 inline-block">
                Dokumentasi Lapangan SDLC
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-text-main font-serif mb-2">
                Jejak Aktivitas & <span className="text-primary">Implementasi</span>
              </h3>
              <p className="text-text-muted text-xs md:text-sm max-w-xl mx-auto">
                Dokumentasi perjalanan nyata peran IT Business Analyst & System Analyst di lapangan, mulai dari analisis, perancangan, pengujian UAT, hingga pelatihan & serah terima resmi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {study.fieldPhotos.map((photo, i) => (
                <motion.div
                  key={i}
                  className="bg-bg-card rounded-2xl border border-black/5 dark:border-white/5 shadow-md overflow-hidden group cursor-pointer hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxImg(photo.image)}
                >
                  <div>
                    <div className="relative h-[180px] overflow-hidden bg-black/5 dark:bg-white/5">
                      <img 
                        src={photo.image} 
                        alt={photo.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">zoom_in</span>
                      </div>
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/75 backdrop-blur-md text-white text-[9px] font-bold rounded-md uppercase tracking-wider shadow-md">
                        {photo.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-xs font-bold text-text-main mb-1 group-hover:text-primary transition-colors line-clamp-1">{photo.title}</h4>
                      <p className="text-text-muted text-[11px] leading-relaxed line-clamp-2">{photo.desc}</p>
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-0">
                    <span className="text-primary text-[10px] font-bold inline-flex items-center gap-1">
                      Perbesar Foto <span className="material-symbols-outlined text-[12px]">open_in_full</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
