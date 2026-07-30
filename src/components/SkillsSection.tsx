"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";

const skillIcons: Record<string, string> = {
  "01": "search_insights",
  "02": "database",
  "03": "code",
  "04": "groups",
  "05": "palette",
  "06": "smart_toy",
};

const skills = [
  {
    id: "01",
    title: "Analisis Sistem & Proses Bisnis",
    desc: "Setiap solusi yang baik dimulai dari pemahaman masalah yang tepat. Saya terbiasa melakukan ekstraksi kebutuhan pengguna (requirement gathering), menyusun alur kerja, memetakan proses bisnis, dan merancang pendekatan yang paling efektif sebelum tahap pengembangan dimulai.",
    tags: ["System Analysis", "Requirement Gathering", "Business Process Mapping", "Problem Solving", "Workflow Design", "System Mapping", "Solution Design", "Dokumentasi Sistem (SOP, UAT)"]
  },
  {
    id: "02",
    title: "Manajemen Data & Validasi",
    desc: "Memastikan integritas dan kualitas data untuk kebutuhan operasional. Berpengalaman dalam memvalidasi ribuan data, merapikan dataset kompleks, dan melakukan digitalisasi dokumen agar terstruktur dan siap mendukung pengambilan keputusan.",
    tags: ["Data Validation", "Data Management", "Data Integrity", "Digital Archiving", "Data Processing", "Spreadsheet Management", "Reporting", "Validasi Data Massal"]
  },
  {
    id: "03",
    title: "Siklus Pengembangan Sistem (SDLC)",
    desc: "Mengawal siklus pengembangan perangkat lunak secara end-to-end. Memastikan sistem atau website yang dibangun tidak hanya berfungsi secara teknis, tetapi juga menjawab kebutuhan pengguna akhir dan mencapai metrik keberhasilan yang ditargetkan.",
    tags: ["SDLC End-to-End", "User Acceptance Testing (UAT)", "System Implementation", "Frontend & Backend Logic", "Database Implementation", "Dashboard System", "API Integration", "Deployment & Maintenance"]
  },
  {
    id: "04",
    title: "Koordinasi Proyek & Kepemimpinan",
    desc: "Menjadi jembatan antara kebutuhan bisnis (non-teknis) dan tim pengembang (teknis). Terbiasa memimpin tim, menyusun prioritas proyek, dan menjaga komunikasi antar pemangku kepentingan agar proyek selesai tepat waktu dan sesuai ekspektasi.",
    tags: ["Project Coordination", "Team Leadership", "Stakeholder Communication", "Task Coordination", "Project Documentation", "Public Speaking", "IT Project Management", "TOEFL Score 537", "Project Planning", "Timeline & Milestone Management", "Stakeholder Coordination"]
  },
  {
    id: "05",
    title: "Komunikasi Visual & Prototyping",
    desc: "Menerjemahkan ide dan kebutuhan sistem menjadi rancangan visual yang mudah dipahami. Mulai dari pembuatan wireframe, prototipe antarmuka dasar, hingga pembuatan materi komunikasi digital yang mendukung branding proyek.",
    tags: ["UI Prototyping", "Wireframing", "Visual Communication", "Graphic Design", "Social Media Design", "Presentation Design", "Brand Identity", "Mockup Creation"]
  },
  {
    id: "06",
    title: "Pengembangan Berbasis AI",
    desc: "Memanfaatkan teknologi Artificial Intelligence (Prompt Engineering) untuk mempercepat proses riset, menyusun kerangka dokumentasi, dan mengeksplorasi solusi guna meningkatkan produktivitas pengembangan.",
    tags: ["Prompt Engineering", "AI Workflow", "AI Research", "AI-Assisted Coding", "Rapid Prototyping", "Productivity Optimization", "Content Generation"]
  }
];

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <motion.section 
      className="py-16 md:py-24 px-4 md:px-8 bg-bg-main relative overflow-hidden" 
      id="keahlian"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        
        {/* Top: Centered Title */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeUpBlur}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
              PENGALAMAN & FOKUS
            </span>
            <span className="w-8 h-[2px] bg-primary rounded-full"></span>
          </div>

          <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight mb-6">
            Keahlian{" "}
            {isHeadingInView ? (
              <Typewriter 
                text={["Utama."]} 
                speed={70} 
                waitTime={15000}
                cursorChar="_" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-dark"
              />
            ) : (
              <span className="invisible">Utama.</span>
            )}
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Ketertarikan dan pengalaman pada beberapa bidang yang saling mendukung dalam pengembangan solusi digital, dari tahap analisis hingga implementasi.
          </p>
        </motion.div>

        {/* Bottom: Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4">
          {skills.map((skill, index) => {
            return (
              <motion.div 
                key={skill.id}
                className="relative cursor-pointer transition-all duration-300 ease-out border rounded-2xl group overflow-hidden bg-bg-card hover:shadow-xl hover:-translate-y-1 h-full border-black/5 dark:border-white/5 hover:border-primary/20 flex flex-col"
                onClick={() => setSelectedSkill(skill)}
                variants={popIn}
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-orange-500 transition-all duration-300">
                      <span className="material-symbols-outlined text-primary group-hover:text-white text-xl md:text-2xl transition-colors duration-300">{skillIcons[skill.id] || "star"}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 group-hover:text-primary transition-colors group-hover:bg-primary/5">
                      <span className="material-symbols-outlined text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300">arrow_forward</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight text-text-main group-hover:text-primary transition-colors mb-3">
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-4 flex-1">
                    {skill.desc}
                  </p>

                  <div className="mt-auto">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider group-hover:underline">Lihat Detail &rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedSkill && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col bg-bg-card rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/5"
              >
                {/* Fixed Header */}
                <div className="p-6 md:p-8 pb-0 md:pb-0 flex justify-between items-center shrink-0 w-full bg-bg-card z-20">
                  {/* Left: ASYNC Logo */}
                  <div className="w-[90px] md:w-[110px] flex items-center justify-start opacity-90 -ml-1">
                    <img 
                      src="/logo-async-gold.png" 
                      alt="ASYNC" 
                      className="w-full h-auto object-contain object-left" 
                      onError={(e) => { (e.target as HTMLImageElement).src = '/logo-async.png'; }}
                    />
                  </div>

                  {/* Right: Close Button */}
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors -mr-1"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>

                {/* Scrollable Content Body */}
                <div className="px-6 md:px-8 pt-1 md:pt-2 overflow-y-auto flex-1 min-h-0 z-10" style={{ scrollbarWidth: 'none' }}>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-text-main mb-3 leading-tight tracking-tight text-left">
                    {selectedSkill.title}
                  </h3>
                  
                  <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 text-left">
                    {selectedSkill.desc}
                  </p>

                  <div className="pt-5 mt-6 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Fokus Area & Teknologi</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 justify-start">
                      {selectedSkill.tags.map((tag: string, i: number) => (
                        <div 
                          key={i} 
                          className="px-3.5 py-1.5 bg-bg-main border border-black/5 dark:border-white/10 rounded-lg text-sm md:text-base font-medium text-text-muted hover:text-primary transition-colors shadow-sm cursor-default"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Spacer to guarantee scrollable padding at the bottom across all browsers */}
                  <div className="h-6 md:h-8 w-full shrink-0"></div>
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
