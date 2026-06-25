"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";
import { Typewriter } from "@/components/ui/typewriter";

export default function AsyncSolutionsSection() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      id: "web",
      icon: "web",
      title: "Web Development",
      desc: "Sistem & Website",
      position: { x: -340, y: -20 }, 
      mobilePos: { x: -105, y: -140 } // Adjusted for mobile screen width and logo clearance
    },
    {
      id: "data",
      icon: "database",
      title: "Manajemen Data",
      desc: "Analisis & Visualisasi",
      position: { x: 340, y: -20 }, 
      mobilePos: { x: 105, y: -140 }
    },
    {
      id: "design",
      icon: "design_services",
      title: "UI/UX & Desain",
      desc: "Antarmuka Digital",
      position: { x: 0, y: 250 }, 
      mobilePos: { x: 0, y: 170 } // Safely below mobile logo
    }
  ];

  return (
    <motion.section 
      id="layanan" 
      className="py-16 md:py-32 bg-bg-main relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Header Text */}
        <motion.div variants={fadeUpBlur} className="mb-2 md:mb-4 relative z-20">
          <div className="flex items-center gap-2 md:gap-3 mb-4 justify-center">
            <span className="w-6 md:w-8 h-[2px] bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm">
              LAYANAN PROFESIONAL
            </span>
            <span className="w-6 md:w-8 h-[2px] bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight leading-[1.3] md:leading-[1.2]">
            Hadirkan Solusi Digital Bersama <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-black h-[1.2em] inline-block mt-1 md:mt-0">
              <Typewriter 
                text={["ASYNC Solutions."]} 
                speed={70} 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400"
                cursorClassName="text-primary"
              />
            </span>
          </h2>
        </motion.div>

        {/* Interactive Radial Hub Area */}
        <div className="relative w-full max-w-[800px] h-[340px] md:h-[400px] flex items-center justify-center -mt-2 md:-mt-4 z-10">
          
          {/* Connector Lines (Visible only when open) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Lines simulating a net/web connecting to the cards. Visible on mobile too! */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ zIndex: 0 }}>
                  <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="md:hidden opacity-40 animate-pulse" />
                  <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="md:hidden opacity-40 animate-pulse" />
                  <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="md:hidden opacity-40 animate-pulse" />

                  <line x1="50%" y1="50%" x2="8%" y2="45%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="hidden md:block opacity-40 animate-pulse" />
                  <line x1="50%" y1="50%" x2="92%" y2="45%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="hidden md:block opacity-40 animate-pulse" />
                  <line x1="50%" y1="50%" x2="50%" y2="130%" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" className="hidden md:block opacity-40 animate-pulse" />
                  <defs>
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F89D0A" />
                      <stop offset="100%" stopColor="#DD6202" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Orbiting Service Cards */}
          <AnimatePresence>
            {isOpen && services.map((service, i) => (
              <motion.div
                key={service.id}
                className="absolute z-20 flex flex-col items-center justify-center bg-white p-3 md:p-6 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-primary/20 w-[140px] md:w-[220px] text-center cursor-pointer hover:scale-105 hover:shadow-primary/20 transition-transform duration-300 group"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: typeof window !== 'undefined' && window.innerWidth < 768 ? service.mobilePos.x : service.position.x,
                  y: typeof window !== 'undefined' && window.innerWidth < 768 ? service.mobilePos.y : service.position.y 
                }}
                exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 15, 
                  mass: 0.8,
                  delay: i * 0.1 
                }}
              >
                <div className="w-8 h-8 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-2 md:mb-3">
                  <span className="material-symbols-outlined text-[18px] md:text-[32px]">{service.icon}</span>
                </div>
                <h3 className="font-bold font-serif text-text-main text-[11px] md:text-lg mb-1 leading-tight">{service.title}</h3>
                <p className="text-[9px] md:text-xs text-text-muted">{service.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Central Hub (ASYNC Logo) */}
          <motion.div 
            className="relative z-30 cursor-pointer flex flex-col items-center group"
            variants={popIn}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Elegant glass/glow background instead of black shadow */}
            <div className={`absolute inset-0 bg-primary/10 backdrop-blur-md rounded-full transition-all duration-700 w-[180px] h-[180px] md:w-[320px] md:h-[320px] m-auto ${isOpen ? 'scale-125 opacity-0' : 'scale-100 opacity-100 shadow-[0_0_50px_rgba(248,157,10,0.15)] border border-white/50'}`}></div>
            
            <img 
              src="/no_bg_logo_async.png" 
              alt="ASYNC Solutions Center" 
              className="w-[200px] h-[200px] md:w-[360px] md:h-[360px] object-contain relative z-10 drop-shadow-xl"
            />
            
            <div className="absolute bottom-2 md:bottom-6 flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity z-40">
              <span className="text-[10px] md:text-sm font-bold text-primary uppercase tracking-widest drop-shadow-md animate-pulse">
                {isOpen ? 'Tutup Layanan' : 'Klik untuk Membuka Jaring'}
              </span>
            </div>
          </motion.div>
          
        </div>

        {/* Dynamic Spacer for Bottom Card */}
        <motion.div 
          animate={{ height: isOpen ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 250) : 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="w-full"
        />

        {/* Global CTA */}
        <motion.div variants={fadeUpBlur} className="mt-4 md:mt-8 z-20">
          <a 
            href="https://async-id.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold text-base md:text-lg overflow-hidden transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Kunjungi Website Utama ASYNC Solutions</span>
            <span className="relative z-10 material-symbols-outlined group-hover:translate-x-1 transition-transform">open_in_new</span>
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}
