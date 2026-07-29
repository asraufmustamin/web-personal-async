'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Layout, Workflow, Bot, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface BlueprintNode {
  id: string;
  code: string;
  title: string;
  icon: any;
  summary: string;
  tools: string[];
  proofPoints: string[];
}

const blueprintNodes: BlueprintNode[] = [
  {
    id: 'req',
    code: 'NODE-01',
    title: 'Business Analysis & PRD',
    icon: Workflow,
    summary: 'Menerjemahkan kebutuhan stakeholder yang abu-abu menjadi dokumen spesifikasi teknis (PRD/BRD), standar operasional (SOP), dan skenario pengujian UAT.',
    tools: ['Figma Wireframing', 'Mermaid Diagramming', 'BRD/PRD Specs', 'UAT Testing (93.8%)'],
    proofPoints: ['PRD Sistem Desa Cenrana', 'SOP SIM Rumah Tangga Bea Cukai', 'UAT Usability Score 75.6']
  },
  {
    id: 'data',
    code: 'NODE-02',
    title: 'Data Integrity & Validation',
    icon: Database,
    summary: 'Eksekusi pembersihan data berskala massal (5.000+ entri), pencocokan integritas, dan pengarsipan digital ke sistem instansi.',
    tools: ['Supabase Database', 'MySQL Relational', 'Excel Formula Automated', 'Digital Archiving (SIPP)'],
    proofPoints: ['5.000+ Entri Data BPJS (>99% Akurasi)', '0 Data Loss Incident Bea Cukai', '1.000+ Profile KUSUKA KKP']
  },
  {
    id: 'sdlc',
    code: 'NODE-03',
    title: 'SDLC & Project Coordination',
    icon: Cpu,
    summary: 'Memimpin siklus hidup pengembangan perangkat lunak dari perencanaan hingga peluncuran live berbasis kesepakatan formal.',
    tools: ['Project Status Report', 'Risk Log Monitoring', 'Stakeholder Alignment', 'MOU Formal Contract'],
    proofPoints: ['Live App desacenrana.id dalam 3 Bulan', 'MOU Resmi Pemdes Cenrana', 'SPK TOPSIS makassarauto.my.id']
  },
  {
    id: 'ai',
    code: 'NODE-04',
    title: 'GenAI Working Agent Operations',
    icon: Bot,
    summary: 'Memanfaatkan AI sebagai agent kerja untuk mempercepat penyusunan draf awal dokumentasi dan diagram alur dengan validasi manual presisi.',
    tools: ['Prompt Engineering', 'Draft Frameworking', 'Manual Logic Verification', 'AI-Augmented Workflow'],
    proofPoints: ['Proses Draf PRD 3x Lebih Cepat', 'Validasi Manual 100% Aturan Bisnis', 'Zero Hallucination Guarantee']
  }
];

export default function BlueprintMatrixSection() {
  const [activeNodeId, setActiveNodeId] = useState<string>('req');
  const activeNode = blueprintNodes.find(n => n.id === activeNodeId) || blueprintNodes[0];

  return (
    <section id="keahlian" className="py-24 bg-[#030305] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-[0.25em]">
              [ 03 ] COMPETENCY BLUEPRINT MATRIX
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-white tracking-tight mt-2">
              Peta Node Arsitektur Skill.
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-xs">
            Klik node di bawah untuk menginspeksi keterkaitan antara metodologi, perangkat kerja, dan bukti eksekusinya.
          </p>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {blueprintNodes.map((node) => {
            const isSelected = node.id === activeNodeId;
            const Icon = node.icon;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`cursor-pointer p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-900 border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                    : 'bg-zinc-950/60 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                      {node.code}
                    </span>
                    <Icon size={20} className={isSelected ? 'text-primary' : 'text-zinc-500'} />
                  </div>

                  <h3 className="text-xl font-bold font-serif text-white mb-2 leading-snug">
                    {node.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {node.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-primary font-bold">
                  <span>INSPEKSI NODE &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Node Blueprint Inspector */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl border border-white/10 bg-zinc-950/90 grid md:grid-cols-2 gap-8 items-start"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                <span>{activeNode.code}</span>
                <span>•</span>
                <span>BLUEPRINT DETAIL</span>
              </div>

              <h3 className="text-2xl font-bold font-serif text-white mb-3">
                {activeNode.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                {activeNode.summary}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                  [ PERANGKAT &amp; METODOLOGI ]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeNode.tools.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 text-xs font-mono font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10">
              <h4 className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">
                [ BUKTI REKAM JEJAK BUKTI KINERJA NODE ]
              </h4>

              <div className="flex flex-col gap-3">
                {activeNode.proofPoints.map((pp, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-white/5 text-xs text-white font-medium">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{pp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
