"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Send, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AccessGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  
  // State untuk form permintaan akses
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');

  // Konfigurasi Kunci
  // GANTI NOMOR WHATSAPP DAN PASSWORD DI SINI
  const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Anda (Gunakan 62, tanpa 0 atau +)
  const CORRECT_PASSCODE = "ASRAUF2025"; // Ganti dengan password yang Anda inginkan

  useEffect(() => {
    setIsMounted(true);
    const lockedStatus = localStorage.getItem('portfolio_unlocked');
    if (lockedStatus !== 'true') {
      setIsUnlocked(false);
      document.body.style.overflow = 'hidden';
    } else {
      setIsUnlocked(true);
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setError(false);
      setIsUnlocked(true);
      localStorage.setItem('portfolio_unlocked', 'true');
      document.body.style.overflow = '';
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleRequestAccess = () => {
    if (!name || !purpose) {
      alert("Mohon isi Nama dan Tujuan terlebih dahulu.");
      return;
    }
    const message = `Halo Asrauf, saya ${name}. Saya ingin meminta kode akses untuk melihat portofolio Anda. Tujuan saya: ${purpose}. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isMounted) return null; // Mencegah hydration mismatch

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main/80 backdrop-blur-xl p-4 sm:p-8 overflow-y-auto"
          >
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-bg-main/50 border border-border-main/50 p-8 rounded-3xl shadow-2xl">
              
              {/* Kiri: Info & Form Request */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary w-fit mb-2">
                    <ShieldCheck size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-main">
                    Portofolio Terkunci
                  </h2>
                  <p className="text-text-muted text-lg">
                    Untuk menjaga privasi dan keamanan dokumen, portofolio ini memerlukan kode akses. Silakan minta akses terlebih dahulu.
                  </p>
                </div>

                <div className="flex flex-col gap-4 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <h3 className="font-semibold text-text-main text-lg flex items-center gap-2">
                    Minta Kode Akses
                  </h3>
                  <div className="flex flex-col gap-3">
                    <input 
                      type="text" 
                      placeholder="Nama Anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-bg-main border border-border-main rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <input 
                      type="text" 
                      placeholder="Tujuan (misal: Rekrutmen, Lihat Proyek)"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="bg-bg-main border border-border-main rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <button 
                      onClick={handleRequestAccess}
                      className="mt-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95"
                    >
                      <Send size={18} />
                      Minta via WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Kanan: Form Masukkan Kode */}
              <div className="flex flex-col gap-6 justify-center h-full">
                <div className="bg-bg-main border border-border-main p-8 rounded-2xl shadow-xl flex flex-col gap-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-border-main/50 flex items-center justify-center text-text-main mb-2">
                      <Lock size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-text-main">
                      Sudah Punya Kode?
                    </h3>
                    <p className="text-text-muted">
                      Masukkan kode akses yang telah diberikan untuk melihat portofolio.
                    </p>
                  </div>

                  <form onSubmit={handleUnlock} className="flex flex-col gap-4">
                    <div className="relative">
                      <input 
                        type="password" 
                        placeholder="Masukkan Kode Akses"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        className={`w-full bg-bg-main border ${error ? 'border-red-500' : 'border-border-main'} rounded-xl px-4 py-3 text-text-main focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500/50' : 'focus:ring-primary/50'} transition-all text-center text-xl tracking-widest font-mono`}
                      />
                      <AnimatePresence>
                        {error && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-red-500 text-sm text-center absolute -bottom-6 w-full"
                          >
                            Kode akses salah!
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <button 
                      type="submit"
                      className="mt-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 group"
                    >
                      Buka Portofolio
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Portofolio */}
      {/* Konten tetap ada di DOM untuk keperluan SEO, tapi blur/hidden di belakang overlay jika terkunci */}
      <div className={!isUnlocked ? "filter blur-sm select-none pointer-events-none" : ""}>
        {children}
      </div>
    </>
  );
}
