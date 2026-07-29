'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  GitCommit, 
  CheckCircle2, 
  Layers, 
  FileText, 
  ShieldCheck, 
  Workflow, 
  Bot, 
  UserCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  institution: string;
  role: string;
  period: string;
  badge: string;
  problem: string;
  steps: {
    title: string;
    description: string;
    detail: string;
  }[];
  genAiUsage: {
    aiTask: string;
    humanValidation: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'cenrana',
    title: 'Sistem Informasi Terpadu Desa Cenrana',
    institution: 'Pemerintah Desa Cenrana • Kab. Maros',
    role: 'Project Lead & System Analyst',
    period: 'Juli 2025 – April 2026',
    badge: 'End-to-End SDLC & Live App',
    problem: 'Pengurusan administrasi desa dan aspirasi warga dilakukan secara konvensional, menimbulkan antrean fisik, risiko keamanan data NIK, dan kurangnya transparansi anggaran publik.',
    steps: [
      {
        title: '1. Requirement Gathering & PRD',
        description: 'Melakukan wawancara langsung dengan perangkat desa dan menyusun Dokumen PRD sebagai acuan teknis.',
        detail: 'Menjabarkan 3 modul utama: e-Surat (10 jenis dokumen), Transparansi Anggaran, dan Lapak Warga.'
      },
      {
        title: '2. Prototyping & Enkripsi Data',
        description: 'Perancangan alur di Figma serta integrasi standar keamanan data kependudukan (NIK).',
        detail: 'Memastikan enkripsi NIK pada database Supabase untuk perlindungan privasi warga.'
      },
      {
        title: '3. Testing UAT & Handover MOU',
        description: 'Uji keterpaksaan (User Acceptance Testing) bersama masyarakat dan penandatanganan MOU resmi.',
        detail: 'Mencatatkan skor UAT 93.8% dan Sistem Usability Scale (SUS) 75.6.'
      }
    ],
    genAiUsage: {
      aiTask: 'Menggunakan GenAI untuk menyusun kerangka draf PRD dan alternatif struktur UI/UX.',
      humanValidation: 'Validasi manual oleh Asrauf terhadap regulasi administrasi desa, uji keamanan enkripsi NIK, dan pengujian pengguna langsung.'
    },
    metrics: [
      { label: 'UAT Success Rate', value: '93.8%' },
      { label: 'SUS Usability Score', value: '75.6' },
      { label: 'Waktu Peluncuran', value: '3 Bulan' }
    ]
  },
  {
    id: 'beacukai',
    title: 'SIM Rumah Tangga Instansi',
    institution: 'Kanwil Bea Cukai Sulbagsel • Makassar',
    role: 'System Analyst Internship (MBKM Flagship)',
    period: 'Maret 2025 – Juli 2025',
    badge: 'Business Process Mapping',
    problem: 'Pengelolaan aset & sarana rumah tangga instansi belum memiliki alur sistem informasi terpadu dan dokumentasi proses bisnis yang terstandar.',
    steps: [
      {
        title: '1. Business Process Mapping',
        description: 'Memetakan alur permintaan, perbaikan, dan pengadaan barang/sarana kantor.',
        detail: 'Menghasilkan diagram alur proses (flowchart) interaktif untuk 5 divisi terkait.'
      },
      {
        title: '2. Perancangan Prototipe SIM',
        description: 'Merancang wireframe dan spesifikasi antarmuka SIM Rumah Tangga.',
        detail: 'Memastikan alur pengajuan transparan dari unit pemohon hingga persetujuan pejabat.'
      },
      {
        title: '3. Data Stream & Visual Assets',
        description: 'Memvalidasi rekam data harian dan memproduksi 20+ aset komunikasi visual instansi.',
        detail: 'Menjaga rekam jejak tanpa insiden kerusakan data dan 0 revisi mayor pada aset visual.'
      }
    ],
    genAiUsage: {
      aiTask: 'Memanfaatkan AI untuk membuat draf awal diagram alur kerja dan skenario pengujian SOP.',
      humanValidation: 'Penyelarasan langsung dengan aturan birokrasi Kanwil Bea Cukai dan konfirmasi persetujuan atasan.'
    },
    metrics: [
      { label: 'Data Loss Incident', value: '0 Loss' },
      { label: 'Aset Visual Disetujui', value: '20+ Aset' },
      { label: 'Revisi Mayor Aset', value: '0 Revisi' }
    ]
  },
  {
    id: 'bpjs',
    title: 'Validasi & Resolusi Backlog Data Massal',
    institution: 'BPJS Ketenagakerjaan Cabang Makassar',
    role: 'Data Management & Validation Analyst',
    period: 'Oktober 2024 – Januari 2025',
    badge: 'Data Integrity & Archiving',
    problem: 'Terdapat tumpukan data error (backlog) dan ketidaksesuaian data peserta yang menghambat proses klaim dan pengarsipan digital instansi.',
    steps: [
      {
        title: '1. Pembersihan & Formulir Data',
        description: 'Merumuskan logika penyaringan dan pencocokan data dari berbagai format sumber.',
        detail: 'Menyusun template validasi spreadsheet terstruktur untuk mempercepat cross-check.'
      },
      {
        title: '2. Eksekusi Koreksi 5.000+ Entri',
        description: 'Memvalidasi dan mengoreksi data kepesertaan secara presisi ke dalam SIM BPJS.',
        detail: 'Mencapai tingkat akurasi melampaui 99% dan menyelesaikan backlog dalam 3 bulan.'
      },
      {
        title: '3. Digitalisasi & Communication',
        description: 'Pengarsipan dokumen fisik ke sistem digital & komunikasi terstruktur (WhatsApp Blasting).',
        detail: 'Mengelola pesan terjadwal ke 3.000+ peserta aktif secara efektif.'
      }
    ],
    genAiUsage: {
      aiTask: 'Membuat skrip pembersih data / formula Excel kompleks melalui petunjuk otomatis AI.',
      humanValidation: 'Cross-check 100% data sensitif identitas peserta untuk menjamin kerahasiaan & integritas data.'
    },
    metrics: [
      { label: 'Data Tervalidasi', value: '5.000+ Entri' },
      { label: 'Tingkat Akurasi Data', value: '>99%' },
      { label: 'Penyelesaian Backlog', value: '3 Bulan' }
    ]
  }
];

export default function ProcessSandboxSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('cenrana');
  const [activeTab, setActiveTab] = useState<'flow' | 'ai' | 'metrics'>('flow');

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section id="sandbox" className="py-24 bg-[#050507] text-white border-t border-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Interactive Analyst Sandbox
            </span>
            <span className="w-8 h-[2px] bg-primary rounded-full" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
            Laboratorium Pola Pikir &amp; Simulasi Proses.
          </h2>
          
          <p className="text-zinc-400 font-medium text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Uji dan eksplorasi bagaimana Asrauf mendiagnosis masalah bisnis, merancang alur sistem terstruktur, serta menggabungkan <strong className="text-primary font-semibold">GenAI Working Agent</strong> dengan validasi presisi.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {scenarios.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'command-card-active border-primary shadow-lg shadow-primary/10'
                    : 'command-card border-white/10 hover:border-white/20 opacity-75 hover:opacity-100'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {sc.badge}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white mt-3 leading-snug">
                    {sc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mt-1">
                    {sc.institution}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span>{sc.role}</span>
                  <ArrowRight size={14} className={isActive ? 'text-primary transform translate-x-1 transition-transform' : ''} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="command-card p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {/* Header info of active scenario */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-primary">{scenario.institution}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs text-zinc-400 font-medium">{scenario.period}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white">
                  {scenario.title}
                </h3>
              </div>

              {/* Internal Tab Switcher */}
              <div className="flex items-center p-1 rounded-full bg-zinc-950 border border-white/10 self-start lg:self-auto">
                <button
                  onClick={() => setActiveTab('flow')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'flow' ? 'bg-primary text-white shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Workflow size={14} />
                  Alur &amp; Langkah Analisis
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'ai' ? 'bg-primary text-white shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Bot size={14} />
                  GenAI Working Agent
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'metrics' ? 'bg-primary text-white shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <CheckCircle2 size={14} />
                  Matriks Validasi
                </button>
              </div>
            </div>

            {/* Problem Statement Banner */}
            <div className="my-6 p-4 rounded-2xl bg-zinc-950/60 border border-amber-500/20 flex items-start gap-3">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase shrink-0 mt-0.5">
                Tantangan Bisnis
              </span>
              <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                {scenario.problem}
              </p>
            </div>

            {/* Tab 1: Alur & Langkah Analisis */}
            {activeTab === 'flow' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-6 pt-4">
                {scenario.steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-primary/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base font-bold text-white font-serif mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-300 font-medium leading-relaxed mb-3">
                        {step.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 italic">
                      💡 {step.detail}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Tab 2: GenAI Working Agent Integration */}
            {activeTab === 'ai' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-zinc-950/50 border border-primary/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Bot size={18} />
                    <span>Peran Generative AI Agent (Percepatan Draf)</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {scenario.genAiUsage.aiTask}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950/50 border border-green-500/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                    <UserCheck size={18} />
                    <span>Validasi &amp; Keputusan Akhir (Muhammad Asrauf)</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {scenario.genAiUsage.humanValidation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Matriks Validasi Kuantitatif */}
            {activeTab === 'metrics' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {scenario.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-950/60 border border-white/10 text-center flex flex-col items-center justify-center">
                    <span className="text-3xl md:text-4xl font-extrabold text-primary font-serif mb-1">
                      {m.value}
                    </span>
                    <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
