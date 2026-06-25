"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";

export default function AsyncSolutionsSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sentences = [
    {
      title: "Web Development",
      text: "Pembuatan website company profile, landing page, hingga sistem informasi yang kompleks dan responsif."
    },
    {
      title: "Manajemen Data",
      text: "Pengelolaan, analisis, dan visualisasi data untuk membantu pengambilan keputusan bisnis yang tepat."
    },
    {
      title: "UI/UX & Desain",
      text: "Merancang antarmuka pengguna yang intuitif dan estetis untuk pengalaman digital yang maksimal."
    }
  ];

  return (
    <motion.section 
      id="layanan" 
      className="py-16 md:py-32 bg-gradient-to-b from-bg-main to-bg-card relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content (Logo & Image Area) */}
          <motion.div 
            className="flex-1 w-full flex justify-center items-center relative group" 
            variants={popIn}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-colors duration-700 w-3/4 h-3/4 m-auto"></div>
            <motion.img 
              src="/no_bg_logo-async.png" 
              alt="ASYNC Solutions Logo" 
              className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(248,157,10,0.15)] transition-transform duration-700 group-hover:scale-105"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right Content (Interactive Text & CTA) */}
          <motion.div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full" variants={fadeUpBlur}>
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                Layanan Profesional
              </span>
              <span className="w-8 h-[2px] bg-primary rounded-full lg:hidden"></span>
            </div>

            <h2 ref={headingRef} className="text-3xl md:text-5xl lg:text-5xl font-bold font-serif text-text-main tracking-tight leading-[1.2] mb-6">
              Lebih dari Sekadar Solusi, <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-black">
                Kami Wujudkan Visi Anda.
              </span>
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              ASYNC Solutions hadir sebagai entitas profesional yang siap menjadi mitra strategis Anda. Kami berfokus pada:
            </p>

            {/* Interactive Sentences (Replacing Cards) */}
            <div className="flex flex-col gap-4 w-full max-w-xl mb-10">
              {sentences.map((item, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative pl-6 py-2 border-l-2 transition-all duration-300 cursor-default ${hoveredIndex === index ? 'border-primary' : 'border-gray-200'}`}
                >
                  {/* Subtle highlight background */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-opacity duration-300 -z-10 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  
                  <h3 className={`text-lg md:text-xl font-bold font-serif mb-1 transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-text-main'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm md:text-base transition-colors duration-300 ${hoveredIndex === index ? 'text-text-main font-medium' : 'text-text-muted'}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <motion.a 
              href="#" /* Ganti dengan URL Landing Page ASYNC Anda nanti */
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-text-main text-white rounded-full font-bold text-base md:text-lg overflow-hidden transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
              variants={popIn}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Kunjungi ASYNC Solutions</span>
              <span className="relative z-10 material-symbols-outlined group-hover:translate-x-1 transition-transform">open_in_new</span>
            </motion.a>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
