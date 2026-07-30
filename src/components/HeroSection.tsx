'use client';

import { motion } from 'framer-motion';
import { Home, User, Sparkles, Briefcase, Folder, Mail, CheckCircle2, Cpu, BarChart3, ShieldCheck } from 'lucide-react';
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTheme } from "next-themes";
import { Typewriter } from '@/components/ui/typewriter';

const tabs = [
  { title: 'Beranda', icon: Home, href: '#beranda' },
  { title: 'Tentang', icon: User, href: '#tentang' },
  { title: 'Keahlian', icon: Sparkles, href: '#keahlian' },
  { title: 'Pengalaman', icon: Briefcase, href: '#pengalaman' },
  { title: 'Proyek', icon: Folder, href: '#proyek' },
  { title: 'Kontak', icon: Mail, href: '#kontak' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  },
};

export default function HeroSection() {
  const { theme } = useTheme();
  const isVibrant = theme === 'vibrant';

  return (
    <>
      {/* HeroSection */}
      <motion.section 
        className={`min-h-[90vh] flex flex-col justify-center items-center text-center pt-6 md:pt-80 lg:pt-32 pb-24 md:pb-16 px-4 md:px-12 mx-auto relative overflow-hidden transition-all duration-500 ${isVibrant ? "max-w-6xl text-left" : "max-w-5xl text-center"}`} 
        id="beranda" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="w-full z-10 relative mt-0 lg:mt-16">
          
          {/* Mobile Logo & Nav */}
          <div className="md:hidden flex flex-col items-center w-full relative z-40 mb-10">
            <div className="w-[180px] h-10 mb-6">
              <img 
                src="/logo-async-gold.png" 
                alt="ASYNC Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = '/logo-async.png'; }}
              />
            </div>
            <div className="flex justify-between items-center w-full max-w-[320px] bg-bg-card shadow-sm border border-black/5 dark:border-white/5 rounded-full px-2 py-1">
              {tabs.map((tab) => (
                <a key={tab.title} href={tab.href} className="flex justify-center items-center text-text-muted hover:text-primary hover:bg-primary/5 p-2 sm:p-2.5 rounded-full transition-colors active:scale-95">
                  <tab.icon size={20} />
                </a>
              ))}
              <div className="mx-1 border-l border-gray-200 dark:border-gray-800 h-5"></div>
              <div className="scale-90 flex items-center justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Conditional Layout for Vibrant Mode (Split 2-Column Dashboard) */}
          {isVibrant ? (
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left Column: Branding & Typewriter */}
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-purple-400">
                    Fresh Graduate | IT BA & PM Track
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main font-serif leading-tight">
                  <Typewriter
                    text={[
                      "IT Business Analyst & Project Coordinator",
                      "Data-Driven Problem Solver",
                      "SDLC End-to-End",
                      "Digital Transformation"
                    ]}
                    speed={70}
                    className="vibrant-gradient-text"
                    waitTime={2000}
                    deleteSpeed={40}
                    cursorChar={"|"}
                  />
                </h1>

                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  Menjembatani kebutuhan bisnis dengan solusi teknologi yang presisi. Berpengalaman mengorkestrasi siklus pengembangan sistem (SDLC), analisis proses bisnis, dan manajemen data untuk menghadirkan dampak digital yang terukur.
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a href="#proyek" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/25 transition-all">
                    Lihat Studi Kasus Proyek
                  </a>
                  <a href="#kontak" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-sm transition-all">
                    Hubungi Saya
                  </a>
                </div>
              </div>

              {/* Right Column: Executive BA & PM Dashboard Card */}
              <div className="lg:col-span-5 w-full">
                <div className="vibrant-gradient-border p-6 rounded-3xl bg-bg-card/80 backdrop-blur-xl shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-purple-400 animate-pulse" />
                      <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">
                        BA & PM Executive Dashboard
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Live Metrics
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> UAT Score
                      </div>
                      <div className="text-xl font-extrabold text-white font-serif">93.8%</div>
                      <div className="text-[10px] text-cyan-400 mt-0.5">Verified Acceptance</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Dokumen MBKM
                      </div>
                      <div className="text-xl font-extrabold text-white font-serif">344 Hal</div>
                      <div className="text-[10px] text-purple-400 mt-0.5">Laporan Bea Cukai</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium mb-1">
                        <BarChart3 className="w-3.5 h-3.5 text-rose-400" /> Cumlaude IPK
                      </div>
                      <div className="text-xl font-extrabold text-white font-serif">3.93 / 4.0</div>
                      <div className="text-[10px] text-rose-400 mt-0.5">Yudisium Terbaik</div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium mb-1">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Data CRM
                      </div>
                      <div className="text-xl font-extrabold text-white font-serif">&gt;5.000</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Validasi BPJS TK</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                    <span className="text-xs font-semibold text-purple-300">
                      Siklus SDLC 100% Terukur dari Analisis hingga Live Deploy
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Standard Centered Layout for Light & Dark Modes */
            <div className="flex flex-col items-center gap-0 md:gap-8 max-w-4xl mx-auto">
              <motion.div layout variants={itemVariants} className="flex flex-col items-center w-full relative z-30">
                <motion.div layout className="relative w-full flex flex-col items-center">
                  <div className="flex text-primary font-sans tracking-[0.15em] md:tracking-[0.25em] uppercase text-[10px] md:text-sm font-bold mb-4 md:mb-8 items-center justify-center gap-3 md:gap-5 text-center py-2">
                    <span className="w-8 md:w-16 h-[1px] bg-primary/40"></span>
                    <span>Fresh Graduate | IT BA & PM Track</span>
                    <span className="w-8 md:w-16 h-[1px] bg-primary/40"></span>
                  </div>
                </motion.div>
                
                <motion.h1 layout className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tighter leading-[1.2] md:leading-[1.1] font-serif px-2 w-full max-w-full mt-0 z-20 text-center">
                    <Typewriter
                      text={[
                        "IT Business Analyst & Project Coordinator",
                        "Data-Driven Problem Solver",
                        "SDLC End-to-End",
                        "Digital Transformation"
                      ]}
                      speed={70}
                      className="gradient-text"
                      waitTime={2000}
                      deleteSpeed={40}
                      cursorChar={"|"}
                    />
                </motion.h1>
              </motion.div>
              
              <motion.div layout variants={itemVariants} className="font-sans text-base md:text-xl text-text-muted max-w-3xl leading-relaxed mt-4 md:mt-8 px-4 md:px-0">
                <p>Menjembatani kebutuhan bisnis dengan solusi teknologi yang presisi. Berpengalaman mengorkestrasi siklus pengembangan sistem (SDLC), analisis proses bisnis, dan manajemen data untuk menghadirkan dampak digital yang terukur.</p>
              </motion.div>
            </div>
          )}

        </div>
      </motion.section>
    </>
  );
}
