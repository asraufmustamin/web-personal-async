"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { staggerContainer, fadeUpBlur } from "@/lib/animations";

export default function ContactSection() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 100, damping: 15, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Parallax movement ranges
  const charX = useTransform(springX, [-0.5, 0.5], [-200, 200]);
  const charY = useTransform(springY, [-0.5, 0.5], [-200, 200]);
  const bgX = useTransform(springX, [-0.5, 0.5], [-100, 100]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-100, 100]);

  const toggleActive = () => {
    setIsActive((prev) => {
      const next = !prev;
      if (!next) {
        // Return to center when deactivated
        mouseX.set(0);
        mouseY.set(0);
      }
      return next;
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // Range: -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Dynamic speech text
  const getSpeechText = () => {
    if (!isActive) return "Klik saya untuk mulai berkolaborasi!";
    switch (hoveredContact) {
      case "email":
        return "Kirim pesan lewat Email? Siap meluncur!";
      case "whatsapp":
        return "Lebih suka ngobrol cepat? Mari ke WhatsApp!";
      case "location":
        return "Saya berbasis di Makassar. Mari ngopi!";
      default:
        return "Punya ide luar biasa? Mari kita wujudkan!";
    }
  };

  const contacts = [
    {
      id: "email",
      icon: "mail",
      label: "Email",
      value: "asrfmstmn@gmail.com",
      link: "mailto:asrfmstmn@gmail.com?subject=Halo%20ASYNC%20-%20Diskusi%20Proyek&body=Halo%20Mas%20Asrauf,%0A%0ASaya%20tertarik%20untuk%20berdiskusi%20mengenai%20potensi%20kerjasama%20untuk%20sebuah%20proyek.%0A%0ATerima%20kasih.",
      color: "bg-blue-500",
      position: "md:-translate-x-[240px] lg:-translate-x-[340px] md:-translate-y-10",
    },
    {
      id: "whatsapp",
      icon: "chat",
      label: "WhatsApp",
      value: "+62 851-8966-6794",
      link: "https://wa.me/6285189666794?text=Halo%20Mas%20Asrauf,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20potensi%20kerjasama%20proyek.%20Bisa%20kita%20ngobrol%20lebih%20lanjut?",
      color: "bg-green-500",
      position: "md:translate-x-[240px] lg:translate-x-[340px] md:-translate-y-10",
    },
    {
      id: "location",
      icon: "location_on",
      label: "Lokasi",
      value: "Makassar, Sulsel",
      link: "#",
      color: "bg-orange-500",
      position: "md:translate-y-[140px] lg:translate-y-[170px]",
    }
  ];

  return (
    <motion.section 
      id="kontak" 
      className="py-10 md:py-24 bg-bg-main relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* Giant Character Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06] overflow-hidden z-0">
        <img 
          src="/pixelneboo.png" 
          alt="" 
          className="w-full max-w-5xl object-cover object-center scale-150 md:scale-100 blur-[2px]"
        />
      </div>

      {/* Dynamic Background Glow */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0"
      />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* Massive Typography Hero */}
        <motion.div 
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          variants={fadeUpBlur}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 block drop-shadow-sm">Tertarik Berkolaborasi?</span>
          <h2 ref={headingRef} className="text-4xl md:text-7xl lg:text-[7.5rem] font-black text-text-main font-serif tracking-tight leading-[1.1] md:leading-none mb-6 filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] md:drop-shadow-[0_30px_30px_rgba(0,0,0,0.2)] px-2">
            Mari{" "}
            {isHeadingInView ? (
              <Typewriter 
                text={["Wujudkan."]} 
                speed={70} 
                waitTime={15000}
                cursorChar="_" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400"
              />
            ) : (
              <span className="invisible">Wujudkan.</span>
            )}
          </h2>
          <motion.div className="flex flex-col gap-6 w-full max-w-md lg:max-w-none mx-auto" variants={fadeUpBlur}>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-sm">
              Singkirkan formulir kaku. Pilih jalur komunikasi favorit Anda dan mari mulai diskusi proyek impian Anda hari ini.
            </p>
          </motion.div>
        </motion.div>

        {/* Interactive Character Arena */}
        <div className="relative w-full max-w-4xl flex flex-col md:block items-center justify-center mt-10 md:mt-10 md:h-[400px]">
          
          {/* Character & Bubble Wrapper */}
          <motion.div
            style={{ x: charX, y: charY }}
            className="relative z-10 mt-4 md:-mt-8 flex flex-col items-center"
            animate={isActive ? { y: [0, -20, 0], rotate: [-1.5, 2, -1.5] } : { y: 0, rotate: 0 }}
            transition={isActive ? { repeat: Infinity, duration: 6, ease: "easeInOut" } : { duration: 0.5 }}
            onClick={toggleActive}
          >
            {/* Speech Bubble */}
            <motion.div 
              className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              key={hoveredContact || "default"}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="bg-white px-6 py-4 rounded-3xl rounded-br-none shadow-xl border border-black/5 relative">
                <p className="text-text-main font-medium text-center whitespace-nowrap">
                  {getSpeechText()}
                </p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-3 right-6 w-6 h-6 bg-white border-b border-r border-black/5 transform rotate-45"></div>
              </div>
            </motion.div>

            {/* Character */}
            <div className={`relative w-64 h-64 md:w-72 md:h-72 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-300 ${!isActive ? "cursor-pointer hover:scale-105" : "cursor-pointer"}`}>
              <img 
                src="/pixelneboo.png" 
                alt="Pixelneboo Mascot" 
                className="w-full h-full object-contain object-bottom"
              />
              {/* Floor Shadow */}
              <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-black/10 rounded-[100%] blur-xl transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}></div>
            </div>
          </motion.div>

          {/* Floating Contact Badges (Desktop Only) */}
          <div className="hidden md:flex absolute inset-0 w-full h-full pointer-events-none items-center justify-center z-20">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.id}
                href={contact.link}
                target={contact.id !== "location" ? "_blank" : undefined}
                rel="noreferrer"
                onMouseEnter={() => setHoveredContact(contact.id)}
                onMouseLeave={() => setHoveredContact(null)}
                className={`absolute pointer-events-auto flex items-center gap-3 p-2 pr-5 bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-white group ${contact.position}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15, 
                  delay: 0.2 + index * 0.1 
                }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${contact.color} text-white shadow-inner group-hover:rotate-12 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-[24px]">{contact.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">{contact.label}</span>
                  <span className="text-sm font-semibold text-text-main">{contact.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Stacked Contact Badges (Mobile Only) */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-8 w-full z-20 pb-16">
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target={contact.id !== "location" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 p-2 pr-5 bg-white/90 backdrop-blur-md border border-white/50 shadow-md rounded-full w-full max-w-[280px]"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${contact.color} text-white shadow-inner`}>
                  <span className="material-symbols-outlined text-[24px]">{contact.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">{contact.label}</span>
                  <span className="text-sm font-semibold text-text-main">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
