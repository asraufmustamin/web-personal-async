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
    if (passcode.trim().toUpperCase() === CORRECT_PASSCODE) {
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
            {/* ─── Interactive Left/Right Mascot Background ─── */}
            <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-end ${step === 'request' ? 'justify-end' : 'justify-start'} px-2 sm:px-4 md:px-8 pb-4 sm:pb-8 md:pb-10 lg:pb-14`}>
              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  mass: 0.8,
                }}
                className={`relative w-[320px] sm:w-[440px] md:w-[560px] lg:w-[680px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden ${
                  step === 'request' ? '-mr-6 sm:-mr-10 md:-mr-14' : '-ml-6 sm:-ml-10 md:-ml-14'
                }`}
              >
                {/* Ambient Golden Glow */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(248,157,10,0.25)_0%,rgba(252,213,96,0.08)_45%,transparent_70%)] blur-3xl pointer-events-none" />

                {/* Character: Smooth horizontal flip so the hand points towards the center in both positions */}
                <motion.div
                  className="w-full h-full relative"
                  animate={{
                    scaleX: step === 'unlock' ? -1 : 1,
                    y: [-6, 6, -6],
                  }}
                  transition={{
                    scaleX: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <img
                    src="/pixelneboo.png"
                    alt="Mascot Half Body"
                    className="absolute top-0 right-0 w-full h-[175%] object-cover object-top opacity-40 dark:opacity-30 filter contrast-110 drop-shadow-[0_0_40px_rgba(248,157,10,0.45)]"
                  />
                </motion.div>
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
                      className="w-full bg-[#F89D0A] hover:bg-[#DD6202] text-white font-bold rounded-2xl px-8 py-4.5 flex items-center justify-center gap-3 shadow-[0_12px_30px_-5px_rgba(248,157,10,0.5)] hover:shadow-[0_16px_35px_-5px_rgba(221,98,2,0.6)] transition-all cursor-pointer group"
                    >
                      <span className="tracking-wide text-white text-base">Minta Akses via WhatsApp</span>
                      <Send size={18} className="text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </motion.button>
                    
                    <button
                      onClick={() => setStep('unlock')}
                      className="text-text-muted/50 hover:text-primary text-xs uppercase tracking-[0.25em] font-semibold transition-colors mt-8 py-2 px-3 cursor-pointer"
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
                      {/* Code Access Input: Fully visible as text, not hidden */}
                      <input
                        type="text"
                        placeholder="KODE AKSES"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value.toUpperCase())}
                        autoFocus
                        autoComplete="off"
                        spellCheck={false}
                        className={`w-full bg-transparent border-b-2 ${
                          error
                            ? 'border-red-500 text-red-500 placeholder:text-red-300'
                            : 'border-text-muted/20 focus:border-primary text-text-main'
                        } px-2 py-3.5 text-center tracking-[0.4em] font-mono text-xl uppercase placeholder:text-text-muted/30 placeholder:tracking-[0.2em] placeholder:text-sm focus:outline-none transition-all duration-300`}
                      />
                      
                      <motion.button
                        type="submit"
                        disabled={!passcode}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-[#F89D0A] hover:bg-[#DD6202] text-white disabled:opacity-40 disabled:cursor-not-allowed font-bold rounded-2xl px-8 py-4.5 flex items-center justify-center gap-3 shadow-[0_12px_30px_-5px_rgba(248,157,10,0.5)] transition-all cursor-pointer group"
                      >
                        <span className="tracking-wide text-white text-base">Buka Portofolio</span>
                        <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform shrink-0" />
                      </motion.button>

                      <button
                        type="button"
                        onClick={() => {
                          setStep('request');
                          setError(false);
                        }}
                        className="text-text-muted/50 hover:text-text-main text-xs uppercase tracking-[0.25em] font-semibold transition-colors mt-3 py-1 px-3 cursor-pointer"
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
