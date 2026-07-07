"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur } from "@/lib/animations";

const images = [
  "/foto-aboutus.jpeg",
  "/about-1.jpeg",
  "/about-2.jpeg"
];

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [isMobileFanned, setIsMobileFanned] = useState(true);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <motion.section 
      id="tentang" 
      className="py-10 md:py-32 bg-bg-main"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column - Photo Carousel (Interactive Fanning Stack) */}
          <div 
            className="lg:col-span-5 flex justify-center items-center py-4"
            onMouseEnter={() => setIsPhotoHovered(true)}
            onMouseLeave={() => { setIsPhotoHovered(false); setIsMobileFanned(false); }}
          >
            <div 
              className="relative group w-full max-w-[400px] aspect-[4/5] cursor-pointer"
              onClick={() => setIsMobileFanned(!isMobileFanned)}
            >
              
              {/* Photo 3 (Back of the stack) */}
              <div className={`absolute inset-0 z-10 rounded-3xl overflow-hidden shadow-lg border border-black/10 bg-bg-card transition-all duration-500 origin-bottom 
                ${isMobileFanned ? 'scale-95 rotate-[8deg] translate-x-10 -translate-y-2 opacity-100' : 'scale-90 translate-y-8 opacity-40'} 
                group-hover:scale-95 group-hover:rotate-[8deg] group-hover:translate-x-10 group-hover:-translate-y-2 group-hover:opacity-100`}>
                <img 
                  src={images[(currentImage + 2) % images.length]} 
                  className={`w-full h-full object-cover filter transition-all duration-500 ${isMobileFanned ? 'brightness-100' : 'brightness-75 group-hover:brightness-100'}`} 
                  alt="Back photo stack" 
                />
              </div>

              {/* Photo 2 (Middle of the stack) */}
              <div className={`absolute inset-0 z-20 rounded-3xl overflow-hidden shadow-lg border border-black/10 bg-bg-card transition-all duration-500 origin-bottom 
                ${isMobileFanned ? 'scale-95 -rotate-[8deg] -translate-x-10 -translate-y-4 opacity-100' : 'scale-95 translate-y-4 opacity-70'} 
                group-hover:scale-95 group-hover:-rotate-[8deg] group-hover:-translate-x-10 group-hover:-translate-y-4 group-hover:opacity-100`}>
                <img 
                  src={images[(currentImage + 1) % images.length]} 
                  className={`w-full h-full object-cover filter transition-all duration-500 ${isMobileFanned ? 'brightness-100' : 'brightness-90 group-hover:brightness-100'}`} 
                  alt="Middle photo stack" 
                />
              </div>
              
              {/* Photo 1 (Front Main Carousel) */}
              <div className={`relative z-30 w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-bg-card transition-transform duration-500 group-hover:-translate-y-6 ${isMobileFanned ? '-translate-y-6' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImage}
                    src={images[currentImage]} 
                    alt={`Foto ${currentImage + 1}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation dots (Clickable) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-40">
                  {images.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
                      className={`h-2.5 rounded-full transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${idx === currentImage ? "bg-primary w-8" : "bg-bg-card/50 hover:bg-primary/80 w-2.5"}`}
                      aria-label={`Lihat foto ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Optional: click anywhere on the stack to advance the carousel */}
              <div 
                className="absolute inset-0 z-50 rounded-3xl" 
                onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
                aria-label="Next photo"
                role="button"
                style={{ display: "none" }} /* Hidden by default, let users use dots to avoid hijacking hover too much */
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`lg:col-span-7 flex flex-col items-start gap-6 h-full py-4 justify-center transition-transform duration-500 ${isPhotoHovered ? "lg:translate-x-6" : "translate-x-0"}`}>
            
            {/* Header Section */}
            <div className="flex flex-col gap-1 w-full mt-8 lg:mt-0 items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-1 w-full">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                <span className="text-primary font-bold tracking-widest uppercase text-xs">
                  Kenali Lebih Dekat
                </span>
                <span className="w-8 h-[2px] bg-primary rounded-full lg:hidden"></span>
              </div>
              
              <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight leading-[1.2] lg:leading-[1.1] flex flex-col lg:block items-center">
                <span className="font-light">Saya</span>{" "}
                <span className="whitespace-nowrap mt-1 md:mt-0 md:ml-2">
                  {isHeadingInView ? (
                    <Typewriter 
                      text={["Asrauf Mustamin."]} 
                      speed={70} 
                      waitTime={15000}
                      cursorChar="_" 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-dark"
                    />
                  ) : (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-dark">Asrauf Mustamin.</span>
                  )}
                </span>
              </h2>
              
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center lg:justify-start gap-2 md:gap-3 mt-3 w-full">
                <div className="flex items-center justify-center bg-primary/10 border border-primary/20 text-primary px-3 py-2 rounded-[3px] font-bold gap-1.5 shadow-sm whitespace-nowrap">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span className="text-[13px]">Digital Solution Partner</span>
                </div>
                
                <a href="#proyek" className="group relative px-3 py-2 bg-primary text-white rounded-[3px] font-bold flex items-center justify-center gap-1.5 overflow-hidden shadow-md hover:shadow-primary/30 transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-1.5 text-[13px] whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px]">cases</span> Lihat Karya
                  </span>
                </a>
                
                <a href="/cv-muhammad-asrauf-mustamin-intern.pdf" target="_blank" rel="noopener noreferrer" className="group px-3 py-2 bg-transparent border border-primary text-primary rounded-[3px] font-bold flex items-center justify-center gap-1.5 hover:bg-primary/5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-y-1 transition-transform">download</span> <span className="text-[13px] whitespace-nowrap">Unduh CV</span>
                </a>
                
                <a href="#kontak" className="group px-3 py-2 bg-transparent border border-primary text-primary rounded-[3px] font-bold flex items-center justify-center gap-1.5 hover:bg-primary/5 transition-all duration-300">
                  <span className="material-symbols-outlined text-[16px] group-hover:scale-110 transition-transform">mail</span> <span className="text-[13px] whitespace-nowrap">Hubungi</span>
                </a>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="border-l-[3px] border-primary/40 pl-4 md:pl-6 flex flex-col gap-3 mt-4 relative z-10 text-justify w-full max-w-2xl mx-auto lg:mx-0">
              <p className="text-text-muted font-medium text-[14px] md:text-[17px] leading-relaxed tracking-tight">
                Sarjana Komputer dengan <strong className="text-primary font-bold">IPK 3,93/4,00 — Cumlaude</strong>. Berpengalaman dalam analisis proses bisnis, pengembangan sistem informasi, pengelolaan data, serta koordinasi lintas fungsi di lingkungan institusional dan pemerintahan.
              </p>
              <p className="text-text-muted font-medium text-[14px] md:text-[17px] leading-relaxed tracking-tight">
                Memimpin siklus pengembangan (SDLC) dan implementasi solusi digital yang mendukung operasional layanan publik. Berkomitmen memberikan kontribusi nyata melalui penguasaan teknologi, pendekatan berbasis data, dan kemampuan memimpin proyek digital secara end-to-end.
              </p>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
