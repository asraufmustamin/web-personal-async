'use client';

import { motion } from 'framer-motion';
import { Home, User, Sparkles, Briefcase, Folder, Mail } from 'lucide-react';
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from '@/components/ui/LanguageToggle';
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

import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
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
        <div className="w-full flex flex-col items-center justify-center z-10 relative mt-0 lg:mt-16">
          
          <div className="flex flex-col items-center gap-0 md:gap-8 max-w-4xl">
            {/* Mobile Logo & Nav Container */}
            <div className="md:hidden flex flex-col items-center w-full relative z-40 mb-10">
              {/* Mobile Logo */}
              <div className="w-[280px] sm:w-[320px] h-20 sm:h-24 mb-6 sm:mb-8 flex justify-center items-center">
                <img 
                  src="/logo-async-gold.png" 
                  alt="ASYNC Logo" 
                  className="w-full h-full object-contain scale-125"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/logo-async.png'; }}
                />
              </div>

              {/* Mobile Nav & Toggles Card (Single Row) */}
              <div className="flex justify-between items-center w-[98%] max-w-[420px] bg-bg-card shadow-md shadow-black/5 dark:shadow-white/5 border border-black/5 dark:border-white/10 rounded-full px-2 py-1.5">
                <div className="flex justify-around items-center flex-1 px-1">
                  {tabs.map((tab) => (
                    <a key={tab.title} href={tab.href} className="flex justify-center items-center text-text-muted hover:text-primary hover:bg-primary/10 p-2 sm:p-2.5 rounded-full transition-all active:scale-95">
                      <tab.icon size={20} />
                    </a>
                  ))}
                </div>
                
                <div className="mx-1 sm:mx-2 h-6 w-[1px] bg-black/10 dark:bg-white/10 shrink-0"></div>
                
                <div className="flex items-center justify-end gap-0.5 sm:gap-1 shrink-0">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
            </div>

            <motion.div layout variants={itemVariants} className="flex flex-col items-center w-full relative z-30">
              
              {/* Personal Branding Subtitle */}
              <motion.div layout className="relative w-full flex flex-col items-center">
                <div className="flex text-primary font-sans tracking-[0.15em] md:tracking-[0.25em] uppercase text-[10px] md:text-sm font-bold mb-4 md:mb-8 items-center justify-center gap-3 md:gap-5 text-center py-2">
                  <span className="w-8 md:w-16 h-[1px] bg-primary/40"></span>
                  <span>{t.hero.subtitle}</span>
                  <span className="w-8 md:w-16 h-[1px] bg-primary/40"></span>
                </div>
              </motion.div>
              
              <motion.h1 layout className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tighter leading-[1.2] md:leading-[1.1] font-serif px-2 w-full max-w-full mt-0 z-20 text-center">
                  <Typewriter
                    text={t.hero.typewriter}
                    speed={70}
                    className="gradient-text"
                    waitTime={2000}
                    deleteSpeed={40}
                    cursorChar={"|"}
                  />
              </motion.h1>
            </motion.div>
            
            <motion.div layout variants={itemVariants} className="font-sans text-base md:text-xl text-text-muted max-w-3xl leading-relaxed mt-4 md:mt-8 px-4 md:px-0">
              <p>{t.hero.description}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
