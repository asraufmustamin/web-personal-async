"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <>
      {/* ProjectsSection */}
      <motion.section className="py-20 px-8 md:px-12 bg-bg-main" id="proyek" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-main mb-6 tracking-tighter">Karya <span className="gradient-text">Terbaik</span>.</h2>
              <p className="text-xl text-text-muted leading-relaxed font-medium">Kumpulan proyek yang telah saya bangun, mulai dari desain antarmuka hingga sistem backend yang kompleks.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border-2 border-black/10 flex items-center justify-center text-text-main hover:bg-primary hover:text-bg-main hover:border-transparent transition-all duration-300"><span className="material-symbols-outlined text-[28px]">chevron_left</span></button>
              <button className="w-14 h-14 rounded-full border-2 border-black/10 flex items-center justify-center text-text-main hover:bg-primary hover:text-bg-main hover:border-transparent transition-all duration-300"><span className="material-symbols-outlined text-[28px]">chevron_right</span></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="group bg-bg-card rounded-[2.5rem] overflow-hidden border border-black/5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(248,157,10,0.15)] hover:border-primary/50 hover:-translate-y-3 flex flex-col h-full relative">
              <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="p-10 flex flex-col grow relative z-20">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2 group-hover:text-primary transition-colors tracking-tight">Sistem Informasi Desa Cenrana</h3>
                <p className="text-accent mb-4 text-sm font-semibold">Project Lead | Nov 2025 – Apr 2026</p>
                <p className="text-text-muted mb-8 leading-relaxed grow font-medium">Website desa yang dirancang untuk mendukung informasi publik, transparansi anggaran, layanan administrasi (e-Surat), dan kebutuhan digital masyarakat desa.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Website Desa</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Sistem Informasi</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">E-Surat</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-bg-card rounded-[2.5rem] overflow-hidden border border-black/5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(248,157,10,0.15)] hover:border-primary/50 hover:-translate-y-3 flex flex-col h-full relative">
              <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="p-10 flex flex-col grow relative z-20">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2 group-hover:text-primary transition-colors tracking-tight">Sistem Layanan Aspirasi Digital</h3>
                <p className="text-accent mb-4 text-sm font-semibold">Koordinator & Developer | Jul 2025 – Sep 2025</p>
                <p className="text-text-muted mb-8 leading-relaxed grow font-medium">Platform pelaporan warga untuk menyampaikan keluhan atau aspirasi terkait kondisi infrastruktur secara lebih cepat dan terdokumentasi.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Layanan Aspirasi</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Pelaporan Warga</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Digital Service</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-bg-card rounded-[2.5rem] overflow-hidden border border-black/5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(248,157,10,0.15)] hover:border-primary/50 hover:-translate-y-3 flex flex-col h-full relative">
              <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="p-10 flex flex-col grow relative z-20">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2 group-hover:text-primary transition-colors tracking-tight">Prototipe SIM Rumah Tangga</h3>
                <p className="text-accent mb-4 text-sm font-semibold">Kanwil Bea Cukai Sulbagsel | 2025</p>
                <p className="text-text-muted mb-8 leading-relaxed grow font-medium">Prototipe sistem informasi yang dikembangkan untuk membantu kebutuhan administrasi internal kantor agar proses pengelolaan informasi lebih efisien.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Sistem Administrasi</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Pengelolaan Data</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Prototipe</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-bg-card rounded-[2.5rem] overflow-hidden border border-black/5 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(248,157,10,0.15)] hover:border-primary/50 hover:-translate-y-3 flex flex-col h-full relative">
              <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <div className="p-10 flex flex-col grow relative z-20">
                <h3 className="text-2xl font-bold font-serif text-text-main mb-2 group-hover:text-primary transition-colors tracking-tight">Desain Visual & Branding</h3>
                <p className="text-accent mb-4 text-sm font-semibold">Graphic Design & Digital Comm</p>
                <p className="text-text-muted mb-8 leading-relaxed grow font-medium">Pembuatan konten media sosial, infografis, feed, Reels, dan materi publikasi untuk kebutuhan organisasi maupun instansi.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Desain Feed & Reels</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Infografis</span>
                  <span className="px-3 py-1 bg-black/5 text-primary rounded-lg text-xs font-bold">Canva & Figma</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
}
