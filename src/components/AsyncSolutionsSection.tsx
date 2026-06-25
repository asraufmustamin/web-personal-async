"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUpBlur, popIn } from "@/lib/animations";

export default function AsyncSolutionsSection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: "web",
      title: "Web Development",
      desc: "Pembuatan website company profile, landing page, hingga sistem informasi yang kompleks dan responsif."
    },
    {
      icon: "database",
      title: "Manajemen Data",
      desc: "Pengelolaan, analisis, dan visualisasi data untuk membantu pengambilan keputusan bisnis yang tepat."
    },
    {
      icon: "design_services",
      title: "UI/UX & Desain",
      desc: "Merancang antarmuka pengguna yang intuitif dan estetis untuk pengalaman digital yang maksimal."
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
          
          {/* Left Content (Text & CTA) */}
          <motion.div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start" variants={fadeUpBlur}>
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                Layanan Khusus
              </span>
              <span className="w-8 h-[2px] bg-primary rounded-full lg:hidden"></span>
            </div>

            <h2 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-text-main tracking-tight leading-[1.2] mb-6">
              Hadirkan Solusi Digital Bersama <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 font-black">
                ASYNC Solutions.
              </span>
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Selain kiprah personal saya, ASYNC Solutions hadir sebagai entitas profesional yang siap menjadi mitra strategis Anda dalam mewujudkan ide bisnis melalui teknologi web, pengelolaan data, dan desain visual yang memukau.
            </p>

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

          {/* Right Content (Cards) */}
          <div className="flex-1 w-full flex flex-col gap-4 md:gap-5">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeUpBlur}
                className="bg-white p-6 md:p-8 rounded-3xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(248,157,10,0.1)] transition-all duration-300 flex items-start gap-5 md:gap-6 group"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-2 font-serif tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
