'use client';

import { motion } from 'framer-motion';
import { Home, User, Sparkles, Briefcase, Folder, Mail } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
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

  return (
    <>
      {/* HeroSection */}
      <motion.section 
        className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-6 md:pt-80 lg:pt-32 pb-24 md:pb-16 px-4 md:px-12 max-w-5xl mx-auto relative overflow-hidden" 
        id="beranda" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 hidden -z-20"></div>
        <div className="w-full flex flex-col items-center justify-center z-10 relative mt-0 lg:mt-16">
          
          <div className="flex flex-col items-center gap-0 md:gap-8 max-w-4xl">
            {/* Mobile Nav: Icons only, above logo (Outside animation for zero jitter) */}
            <div className="md:hidden flex justify-between items-center w-full bg-white shadow-sm border border-black/5 rounded-3xl p-2 mb-6 z-40 relative">
              {tabs.map((tab) => (
                <a key={tab.title} href={tab.href} className="flex justify-center items-center text-text-muted hover:text-primary hover:bg-primary/5 p-2 sm:p-3 rounded-2xl transition-colors active:scale-95">
                  <tab.icon size={22} />
                </a>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex flex-col items-center w-full relative z-30">
              
              {/* Mobile Only: Logo ASYNC below the nav */}
              <div className="md:hidden flex justify-center mb-8 mt-0 w-full z-10">
                 <img src="/logo async gold.png" alt="ASYNC Logo" className="w-[50vw] max-w-[200px] h-auto object-contain drop-shadow-sm" />
              </div>

              {/* Name Subtitle Hook (Desktop & Mobile) */}
              <div className="relative w-full flex flex-col items-center">
                <a 
                  href="#layanan"
                  className="group flex text-primary font-sans tracking-[0.05em] md:tracking-[0.1em] uppercase text-[10px] md:text-sm font-bold mb-2 md:mb-6 items-center justify-center gap-2 md:gap-3 text-center px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                >
                  <span className="relative flex h-2 w-2 md:mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Jelajahi Layanan ASYNC Solutions
                  <span className="material-symbols-outlined text-[14px] md:text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
              
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-text-main tracking-tighter leading-[1.2] md:leading-[1.1] font-serif min-h-[50px] sm:min-h-[60px] md:min-h-[100px] flex items-center justify-center px-2 w-full max-w-full mt-0 z-20 text-center">
                  <Typewriter
                    text={[
                      "Digital Solution Partner.",
                      "System Information.",
                      "Visual Designer.",
                      "Data Specialist."
                    ]}
                    speed={70}
                    className="whitespace-nowrap gradient-text"
                    waitTime={2000}
                    deleteSpeed={40}
                    cursorChar={"_"}
                  />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="font-sans text-base md:text-xl text-text-muted max-w-3xl leading-relaxed mt-4">
              <p><span className="text-primary font-medium">Membantu merancang solusi digital yang rapi, fungsional, dan sesuai kebutuhan</span> melalui sistem informasi, data management, desain visual, dan komunikasi digital.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
