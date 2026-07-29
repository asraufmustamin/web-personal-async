'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface JournalEntry {
  period: string;
  category: string;
  title: string;
  institution: string;
  details: string;
  highlights: string[];
}

const journalEntries: JournalEntry[] = [
  {
    period: 'Jul 2025 – Apr 2026',
    category: 'PROYEK UTAMA & MOU DESA',
    title: 'Project Lead & System Analyst Sistem Desa Cenrana',
    institution: 'Pemerintah Desa Cenrana • Kab. Maros',
    details: 'Memimpin SDLC dari inisiatif KKN menjadi platform terpadu berbasis kontrak resmi desa. Menyusun PRD, desain UI Figma mandiri, enkripsi NIK, dan pengujian UAT 93.8% dengan SUS Score 75.6.',
    highlights: ['MOU Resmi Pemerintah Desa', 'UAT Success Rate 93.8%', 'Sistem Usability Scale (SUS) 75.6']
  },
  {
    period: 'Mar 2025 – Jul 2025',
    category: 'MAGANG MBKM FLAGSHIP',
    title: 'System Analyst Kanwil Bea Cukai Sulbagsel',
    institution: 'Kanwil Bea Cukai Sulbagsel • Makassar',
    details: 'Requirement gathering & Business Process Mapping SIM Rumah Tangga, validasi aliran data digital harian (0 data loss), serta perancangan 20+ aset visual instansi disetujui tanpa revisi mayor.',
    highlights: ['0 Data Loss Incident', '20+ Visual Assets Approved', 'BPM SIM Rumah Tangga']
  },
  {
    period: 'Okt 2024 – Jan 2025',
    category: 'MAGANG MBKM',
    title: 'Data Management & Validation Analyst BPJS',
    institution: 'BPJS Ketenagakerjaan Cabang Makassar',
    details: 'Memvalidasi & mengoreksi 5.000+ entri data peserta dengan akurasi >99%, menyelesaikan backlog error dalam 3 bulan, pengarsipan digital SIPP, dan WhatsApp Blasting 3.000+ peserta.',
    highlights: ['5.000+ Data Tervalidasi (>99%)', 'Resolusi Backlog 3 Bulan', 'Archiving SIPP System']
  },
  {
    period: '2022 – 2026',
    category: 'PRESTASI AKADEMIK',
    title: 'S.Kom. Sistem & Teknologi Informasi',
    institution: 'ITB Nobel Indonesia • IPK 3,93 / 4,00',
    details: 'Lulusan Terbaik Fakultas Teknologi Industri & Predikat Cumlaude. TOEFL Prediction Score 537.',
    highlights: ['IPK 3,93 / 4,00 (Cumlaude)', 'Yudisium Terbaik FTI', 'TOEFL Score 537']
  },
  {
    period: '2023 – 2024',
    category: 'KEPEMIMPINAN ORGANISASI',
    title: 'Koordinator INFOKOM UKM Nobel',
    institution: 'UKM Pencinta Pasar Modal ITB Nobel',
    details: 'Menjembatani komunikasi resmi antar lembaga kemahasiswaan dan mengelola publikasi media sosial organisasi.',
    highlights: ['Koordinator Komunikasi Digital', 'Branding Social Media']
  },
  {
    period: '2020 – 2021',
    category: 'KEPEMIMPINAN SISWA',
    title: 'Ketua OSIS SMAN 2 Enrekang',
    institution: 'SMA Negeri 2 Enrekang',
    details: 'Memimpin organisasi siswa intra sekolah dan mengoordinasikan program kerja sekolah.',
    highlights: ['Ketua OSIS Periode 2020-2021', 'Kepemimpinan Organisasi']
  }
];

export default function FieldJournalSection() {
  return (
    <section id="pengalaman" className="py-24 bg-[#030305] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.25em]">
              [ 04 ] FIELD JOURNAL &amp; MILESTONES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-white tracking-tight mt-2">
              Jurnal Karir &amp; Kepemimpinan.
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-xs">
            Perjalanan langsung dari bangku kepemimpinan sekolah, yudisium terbaik kampus, hingga pengerjaan proyek instansi pemerintah.
          </p>
        </div>

        {/* Timeline Journal */}
        <div className="flex flex-col gap-8">
          {journalEntries.map((entry, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl border border-white/10 bg-zinc-950/80 hover:border-primary/30 transition-all grid lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-3 flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  {entry.category}
                </span>
                <span className="text-xs font-mono text-zinc-400 font-bold flex items-center gap-1.5 mt-1">
                  <Calendar size={14} className="text-primary" />
                  {entry.period}
                </span>
              </div>

              <div className="lg:col-span-9 flex flex-col gap-3">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white leading-tight">
                    {entry.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {entry.institution}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                  {entry.details}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {entry.highlights.map((hl, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200">
                      <CheckCircle2 size={12} className="text-primary" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
