"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';

export default function AccessGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [step, setStep] = useState<'request' | 'unlock'>('request');
  const [successAnim, setSuccessAnim] = useState(false);

  // ─── KONFIGURASI ───
  const WHATSAPP_NUMBER = "6285189666794";
  const CORRECT_PASSCODE = "ASYNC22";

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
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleUnlock = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === CORRECT_PASSCODE) {
      setError(false);
      setSuccessAnim(true);
      setTimeout(() => {
        setIsUnlocked(true);
        localStorage.setItem('portfolio_unlocked', 'true');
        document.body.style.overflow = '';
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }, [passcode, CORRECT_PASSCODE]);

  const handleRequestAccess = useCallback(() => {
    const message = `Halo, saya tertarik dengan profil Anda dan ingin meminta kode akses untuk melihat portofolio lengkap Anda. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, [WHATSAPP_NUMBER]);

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && !successAnim && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main overflow-hidden"
          >
            {/* ─── Orange-Gold Character Background ─── */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
              {/* Radial Golden Ambient Glow */}
              <motion.div
                className="absolute w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(248,157,10,0.18)_0%,rgba(252,213,96,0.08)_40%,transparent_70%)] blur-2xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Zoomed Floating Character Mascot with Golden Tint & Glow */}
              <motion.div
                className="relative w-[340px] sm:w-[460px] md:w-[580px] lg:w-[640px] aspect-square flex items-center justify-center opacity-25 dark:opacity-20 select-none"
                style={{
                  filter: "drop-shadow(0 0 45px rgba(248, 157, 10, 0.45))",
                }}
                animate={{
                  y: [-12, 12, -12],
                  rotate: [-1.5, 1.5, -1.5],
                  scale: [1.15, 1.25, 1.15],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/pixelneboo.png"
                  alt="Background Mascot"
                  className="w-full h-full object-contain filter contrast-125"
                />
                
                {/* Soft Orange/Gold Duotone Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F89D0A]/30 via-[#FCD560]/20 to-transparent mix-blend-color pointer-events-none rounded-full" />
              </motion.div>
            </div>

            {/* ─── Centered Foreground Interactive Content ─── */}
            <div className="relative z-10 flex flex-col items-center px-6 max-w-sm w-full">
              <AnimatePresence mode="wait">
                {step === 'request' ? (
                  <motion.div
                    key="request"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full"
                  >
                    <motion.button
                      onClick={handleRequestAccess}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-text-main text-bg-main font-semibold rounded-2xl px-7 py-4.5 flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(248,157,10,0.15)] border border-text-main/10 hover:border-primary/40 transition-all cursor-pointer group"
                    >
                      <span>Minta Akses via WhatsApp</span>
                      <Send size={18} className="text-primary group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                    
                    <button
                      onClick={() => setStep('unlock')}
                      className="text-text-muted/50 hover:text-primary text-xs uppercase tracking-[0.25em] font-medium transition-colors mt-8 py-2 px-3 cursor-pointer"
                    >
                      Sudah punya kode?
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="unlock"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <form onSubmit={handleUnlock} className="flex flex-col gap-6 items-center w-full">
                      <input
                        type="password"
                        placeholder="KODE AKSES"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        autoFocus
                        className={`w-full bg-transparent border-b-2 ${
                          error
                            ? 'border-red-500 text-red-500 placeholder:text-red-300'
                            : 'border-text-muted/20 focus:border-primary text-text-main'
                        } px-2 py-3.5 text-center tracking-[0.4em] font-mono text-xl placeholder:text-text-muted/30 placeholder:tracking-[0.2em] placeholder:text-sm focus:outline-none transition-all duration-300`}
                      />
                      
                      <motion.button
                        type="submit"
                        disabled={!passcode}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-text-main text-bg-main disabled:opacity-30 disabled:cursor-not-allowed font-semibold rounded-2xl px-7 py-4.5 flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all cursor-pointer group"
                      >
                        <span>Buka Portofolio</span>
                        <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <button
                        type="button"
                        onClick={() => setStep('request')}
                        className="text-text-muted/50 hover:text-text-main text-xs uppercase tracking-[0.25em] font-medium transition-colors mt-3 py-1 px-3 cursor-pointer"
                      >
                        Kembali
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ─── Success Unlock Flash Animation ─── */}
        {successAnim && (
          <motion.div
            key="success"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="fixed inset-0 z-[100] bg-bg-main pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className={!isUnlocked ? "filter blur-xl grayscale select-none pointer-events-none opacity-30 transition-all duration-700" : "transition-all duration-700"}>
        {children}
      </div>
    </>
  );
}
