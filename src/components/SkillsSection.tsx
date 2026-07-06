"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";

const skills = [
  {
    id: "01",
    title: "Desain Visual & Branding",
    desc: "Membantu menciptakan identitas visual dan materi komunikasi yang konsisten untuk kebutuhan personal, bisnis, organisasi, maupun instansi. Mulai dari desain media sosial, banner promosi, materi publikasi, hingga identitas visual yang membantu menyampaikan pesan secara lebih jelas dan profesional.",
    tags: ["Social Media Design", "Feed & Carousel Content", "Banner Design", "Poster Design", "Spanduk & Publikasi", "Logo Design", "Brand Identity", "Presentation Design", "Visual Communication", "UI Mockup", "Digital Assets", "Marketing Materials"]
  },
  {
    id: "02",
    title: "Website & System Development",
    desc: "Merancang dan membangun website maupun sistem informasi yang disesuaikan dengan kebutuhan pengguna dan tujuan bisnis. Fokus pada solusi yang tidak hanya berjalan secara teknis, tetapi juga mudah digunakan, mudah dikelola, dan mampu mendukung proses kerja yang lebih efisien.",
    tags: ["Company Profile Website", "Personal Website", "Landing Page", "Dashboard System", "Information System", "Frontend Development", "Backend Integration", "Database Implementation", "Responsive Design", "API Integration", "Deployment & Maintenance", "SDLC End-to-End", "User Acceptance Testing (UAT)", "Monitoring Performa Aplikasi", "Python", "GitHub"]
  },
  {
    id: "03",
    title: "Data Management & Digital Administration",
    desc: "Membantu mengelola data agar lebih rapi, terstruktur, dan siap digunakan untuk kebutuhan operasional maupun pengambilan keputusan. Mulai dari input data, validasi, perapihan dataset, hingga penyajian informasi dalam bentuk yang lebih mudah dipahami.",
    tags: ["Data Entry", "Data Validation", "Data Cleaning", "Data Organization", "Spreadsheet Management", "Data Processing", "Reporting", "Data Visualization", "Digital Documentation", "Digital Archiving", "Administrative Support", "Information Structuring", "Data Integrity", "Validasi Data Massal", "Pelaporan Manajemen", "Google Workspace", "Microsoft Office"]
  },
  {
    id: "04",
    title: "AI-Assisted Development",
    desc: "Memanfaatkan teknologi Artificial Intelligence untuk mempercepat proses riset, dokumentasi, eksplorasi solusi, dan pengembangan produk digital. AI digunakan sebagai alat bantu produktivitas untuk menghasilkan proses kerja yang lebih efisien tanpa mengurangi kualitas hasil akhir.",
    tags: ["AI Workflow", "Prompt Engineering", "AI Research", "AI-Assisted Coding", "Technical Documentation", "Rapid Prototyping", "Productivity Optimization", "Automation Exploration", "Content Generation", "Knowledge Management"]
  },
  {
    id: "05",
    title: "Digital Research & Solution Planning",
    desc: "Setiap solusi yang baik dimulai dari pemahaman masalah yang tepat. Saya terbiasa melakukan analisis kebutuhan, menyusun alur kerja, memetakan proses, dan merancang pendekatan yang paling sesuai sebelum pengembangan dimulai.",
    tags: ["Requirement Analysis", "Workflow Design", "User Flow", "Feature Planning", "System Mapping", "Problem Solving", "Solution Design", "Digital Strategy", "Project Planning", "Business Process Understanding", "Business Process Mapping", "Requirement Gathering", "Dokumentasi Sistem (SOP, UAT)", "Analisis Proses Bisnis"]
  },
  {
    id: "06",
    title: "Communication & Project Coordination",
    desc: "Menjadi penghubung antara kebutuhan teknis dan non-teknis agar setiap proses dapat berjalan lebih jelas dan terarah. Terbiasa berkoordinasi dengan berbagai pihak, menyusun kebutuhan proyek, dan menjaga komunikasi agar tujuan dapat dicapai secara efektif.",
    tags: ["Project Coordination", "Stakeholder Communication", "Team Collaboration", "Information Management", "Requirement Gathering", "Project Documentation", "Operational Support", "Digital Communication", "Task Coordination", "Process Alignment", "Stakeholder Management", "IT Project Management", "Koordinasi Lintas Fungsi", "TOEFL Score 537"]
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
      className="py-10 md:py-28 px-4 md:px-8 bg-bg-main relative overflow-hidden" 
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
                className="relative cursor-pointer transition-all duration-300 ease-out border rounded-2xl group overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 h-full border-black/5 hover:border-primary/20 flex flex-col"
                onClick={() => setSelectedSkill(skill)}
                variants={popIn}
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-8 md:h-10 w-auto flex items-center justify-start group-hover:scale-105 transition-transform duration-300 origin-left">
                      <img src="/logo-async-gold.png" alt="ASYNC" className="h-full w-auto object-contain object-left scale-125 md:scale-150 origin-left" />
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
                className="relative w-full max-w-xl max-h-[90vh] overflow-hidden flex flex-col bg-white rounded-[2rem] shadow-2xl border border-gray-100"
              >
                <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-primary-dark"></div>
                
                <div className="p-6 md:p-8 flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-24 md:w-32">
                      <img src="/logo-async-gold.png" alt="ASYNC" className="w-full h-auto object-contain object-left" />
                    </div>
                    <button 
                      onClick={() => setSelectedSkill(null)}
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-serif text-text-main mb-2 leading-tight tracking-tight">
                    {selectedSkill.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                    {selectedSkill.desc}
                  </p>

                  <div className="border-t border-gray-100 pt-5 mt-2">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-primary/80"></span>
                      <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">Fokus Area</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tags.map((tag: string, i: number) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/5 border border-primary/10 text-primary text-xs md:text-sm font-medium rounded-xl cursor-default hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
