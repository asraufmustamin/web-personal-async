'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Eye, 
  ChevronRight,
  Database,
  Workflow
} from 'lucide-react';

interface CaseFile {
  id: string;
  code: string;
  title: string;
  institution: string;
  role: string;
  period: string;
  metrics: string;
  humanStory: string;
  keyDeliverables: string[];
  mainImage: string;
  gallery: string[];
  liveLink?: string;
}

const caseFiles: CaseFile[] = [
  {
    id: 'cenrana',
    code: 'CASE-01',
    title: 'Sistem Informasi Terpadu Desa Cenrana',
    institution: 'Pemerintah Desa Cenrana • Kab. Maros',
    role: 'Project Lead & System Analyst',
    period: 'Jul 2025 – Apr 2026',
    metrics: 'UAT 93.8% • SUS Score 75.6 • Live 3 Bulan',
    humanStory: 'Proyek ini bermula dari KKN yang kemudian saya kembangkan menjadi nota kesepahaman (MOU/kontrak) resmi dengan Pemerintah Desa Cenrana, sekaligus proyek tugas akhir akademik S.Kom saya. Desa butuh transparansi anggaran, pengurusan e-Surat (10 jenis dokumen), dan pasar warga online tanpa mengorbankan privasi NIK warga. Saya memimpin SDLC end-to-end dari requirement gathering, PRD, hingga UAT langsung di masyarakat.',
    keyDeliverables: [
      'Dokumen PRD & Alur UI/UX Figma Mandiri',
      'Modul e-Surat, Transparansi Anggaran & Lapak Warga',
      'Standard Enkripsi Data Kependudukan NIK',
      'Pengujian UAT Success Rate 93.8% & SUS Score 75.6'
    ],
    mainImage: '/screenshot-3910.png',
    gallery: [
      '/screenshot-3910.png',
      '/desacenrana1-2.png',
      '/desacenrana1-3.png',
      '/desacenrana1-4.png'
    ],
    liveLink: 'https://desacenrana.id/'
  },
  {
    id: 'beacukai',
    code: 'CASE-02',
    title: 'SIM Rumah Tangga Instansi & Process Mapping',
    institution: 'Kanwil Bea Cukai Sulbagsel • Makassar',
    role: 'System Analyst Internship (MBKM Flagship)',
    period: 'Mar 2025 – Jul 2025',
    metrics: '0 Data Loss Incident • 20+ Aset Visual Disetujui',
    humanStory: 'Di Kanwil Bea Cukai, alur pengelolaan sarana rumah tangga instansi belum memiliki prototipe terstandar. Saya melakukan requirement gathering dan Business Process Mapping untuk merancang SIM Rumah Tangga, memvalidasi rekam data administrasi harian tanpa insiden kehilangan data, serta merancang 20+ aset komunikasi visual instansi tanpa revisi mayor.',
    keyDeliverables: [
      'Business Process Mapping Alur Administrasi Instansi',
      'Perancangan Prototipe & Wireframe SIM Rumah Tangga',
      'Validasi Aliran Data Administrasi Harian (0 Data Loss)',
      '20+ Aset Komunikasi Visual Instansi Disetujui'
    ],
    mainImage: '/excel-template-main-1782922479118.png',
    gallery: [
      '/excel-template-main-1782922479118.png',
      '/excel-template-gallery1-1782922490894.png',
      '/logobeacukai.png'
    ]
  },
  {
    id: 'bpjs',
    code: 'CASE-03',
    title: 'Validasi & Resolusi Backlog 5.000+ Data Peserta',
    institution: 'BPJS Ketenagakerjaan Cabang Makassar',
    role: 'Data Management & Validation Analyst (MBKM)',
    period: 'Okt 2024 – Jan 2025',
    metrics: '5.000+ Data Tervalidasi • Akurasi >99% • 3 Bulan Tuntas',
    humanStory: 'Saya menangani penumpukan data error (backlog) peserta BPJS. Melalui formulasi validasi spreadsheet terstruktur dan pembersihan sistematis, saya berhasil memvalidasi lebih dari 5.000 entri data dengan tingkat akurasi >99% dalam kurun 3 bulan, disusul pengarsipan digital ke sistem SIPP dan pengelolaan WhatsApp Blasting ke 3.000+ peserta aktif.',
    keyDeliverables: [
      'Validasi Presisi 5.000+ Entri Data (Akurasi >99%)',
      'Penyelesaian Tuntas Backlog Error dalam 3 Bulan',
      'Digitalisasi Berkas Fisik ke Sistem Pelayanan Peserta (SIPP)',
      'Pengelolaan Program WhatsApp Blasting 3.000+ Peserta'
    ],
    mainImage: '/digital-archive-main-1782922500056.png',
    gallery: [
      '/digital-archive-main-1782922500056.png',
      '/digital-archive-gallery1-1782922509764.png',
      '/it-support-main-1782922519204.png'
    ]
  },
  {
    id: 'topsis',
    code: 'CASE-04',
    title: 'Sistem Pendukung Keputusan TOPSIS Motor Bekas',
    institution: 'Proyek Independen / Klien Skripsi • Makassar',
    role: 'Independent SPK TOPSIS Developer',
    period: 'Apr 2026 – Jun 2026',
    metrics: '7 Kriteria Analisis • Multi-Dealer Data • Live Site',
    humanStory: 'Membangun sistem pendukung keputusan (SPK) pemilihan motor bekas dari nol menggunakan metode TOPSIS untuk keperluan pembuktian riset skripsi klien. Menyusun requirement mandiri, memproses data 3 dealer motor bekas di Makassar dengan 7 kriteria, hingga sistem live dan dapat diakses publik di makassarauto.my.id.',
    keyDeliverables: [
      'Implementasi Algoritma TOPSIS 7 Kriteria',
      'Penyusunan Modul Input Data Multi-Dealer',
      'Deployment Live Website makassarauto.my.id'
    ],
    mainImage: '/topsis-2.png',
    gallery: [
      '/topsis-2.png',
      '/topsis-1.png'
    ],
    liveLink: 'https://makassarauto.my.id/'
  }
];

export default function CaseFileStageSection() {
  const [activeCaseId, setActiveCaseId] = useState<string>('cenrana');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const activeCase = caseFiles.find((c) => c.id === activeCaseId) || caseFiles[0];

  return (
    <section id="cases" className="py-24 bg-[#030305] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.25em]">
              [ 02 ] INTERACTIVE CASE STAGE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-white tracking-tight mt-2">
              Panggung Berkas Proyek.
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-xs">
            Pilih berkas di bawah untuk menginspeksi alur kerja, cerita lapangan, dan bukti deliverable fisik.
          </p>
        </div>

        {/* Horizontal Case Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8">
          {caseFiles.map((item) => {
            const isSelected = item.id === activeCaseId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseId(item.id);
                  setSelectedImageIndex(0);
                }}
                className={`px-6 py-4 rounded-2xl border text-left shrink-0 transition-all ${
                  isSelected
                    ? 'bg-zinc-900 border-primary text-white shadow-lg shadow-primary/10'
                    : 'bg-zinc-950/80 border-white/10 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {item.code}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{item.institution.split('•')[0]}</span>
                </div>
                <h4 className="text-sm font-bold font-serif text-white">
                  {item.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Split Stage Inspector */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-8 items-start bg-zinc-950/80 p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {/* Left Story & Deliverables Panel */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                  <span>{activeCase.code}</span>
                  <span>•</span>
                  <span>{activeCase.role}</span>
                  <span>•</span>
                  <span>{activeCase.period}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
                  {activeCase.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  {activeCase.institution}
                </p>
              </div>

              {/* Metric Tag */}
              <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary flex items-center justify-between">
                <span>MATRIKS TERVALIDASI:</span>
                <span className="text-white">{activeCase.metrics}</span>
              </div>

              {/* Human Story */}
              <div>
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  [ CERITA &amp; TANTANGAN LAPANGAN ]
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal text-justify">
                  {activeCase.humanStory}
                </p>
              </div>

              {/* Deliverables List */}
              <div>
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  [ DELIVERABLES &amp; BUKTI FISIK ]
                </h4>
                <div className="flex flex-col gap-2">
                  {activeCase.keyDeliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200 font-medium">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Link Button */}
              {activeCase.liveLink && (
                <div className="pt-4 border-t border-white/10">
                  <a 
                    href={activeCase.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-xs rounded-full hover:scale-[1.02] transition-transform shadow-md shadow-primary/20"
                  >
                    Kunjungi Sistem Live ({activeCase.liveLink})
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}

            </div>

            {/* Right Visual Blueprint Canvas */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Main Image Viewport */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
                <img 
                  src={activeCase.gallery[selectedImageIndex] || activeCase.mainImage}
                  alt={activeCase.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Eye size={12} className="text-primary" />
                  <span>PREVIEW {selectedImageIndex + 1}/{activeCase.gallery.length}</span>
                </div>
              </div>

              {/* Thumbnails Navigator */}
              {activeCase.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {activeCase.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative aspect-video w-24 rounded-xl overflow-hidden border shrink-0 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-primary ring-2 ring-primary/40 opacity-100'
                          : 'border-white/10 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
