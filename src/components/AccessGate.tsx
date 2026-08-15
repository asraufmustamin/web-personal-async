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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main"
          >
            <div className="relative z-10 flex flex-col items-center px-6 max-w-sm w-full">
              
              <AnimatePresence mode="wait">
                {step === 'request' ? (
                  <motion.div
                    key="request"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center w-full"
                  >
                    <motion.button
                      onClick={handleRequestAccess}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-text-main text-bg-main font-medium rounded-2xl px-6 py-4 flex items-center justify-center gap-3 shadow-2xl transition-all"
                    >
                      Minta Akses via WhatsApp
                      <Send size={18} />
                    </motion.button>
                    
                    <button
                      onClick={() => setStep('unlock')}
                      className="text-text-muted/40 hover:text-text-main text-xs uppercase tracking-[0.2em] transition-colors mt-8 p-2"
                    >
                      Sudah punya kode?
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="unlock"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <form onSubmit={handleUnlock} className="flex flex-col gap-6 items-center w-full">
                      <input
                        type="password"
                        placeholder="KODE AKSES"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        autoFocus
                        className={`w-full bg-transparent border-b-2 ${error ? 'border-red-500/50 focus:border-red-500 text-red-500' : 'border-text-muted/20 focus:border-text-main text-text-main'} px-2 py-3 text-center tracking-[0.4em] font-mono text-xl placeholder:text-text-muted/30 placeholder:tracking-[0.2em] placeholder:text-sm focus:outline-none transition-all duration-300`}
                      />
                      
                      <motion.button
                        type="submit"
                        disabled={!passcode}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-text-main text-bg-main disabled:opacity-30 disabled:cursor-not-allowed font-medium rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all"
                      >
                        Buka
                        <ArrowRight size={18} />
                      </motion.button>

                      <button
                        type="button"
                        onClick={() => setStep('request')}
                        className="text-text-muted/40 hover:text-text-main text-xs uppercase tracking-[0.2em] transition-colors mt-4 p-2"
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

        {/* Success unlock animation */}
        {successAnim && (
          <motion.div
            key="success"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
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
