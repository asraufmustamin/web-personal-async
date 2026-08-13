"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Send, ArrowRight, Eye, EyeOff } from 'lucide-react';

// ─── Floating Particles Background ───
function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Marquee Running Text ───
function RunningText() {
  const words = [
    "PORTFOLIO", "PROTECTED", "EXCLUSIVE", "ACCESS", "REQUIRED",
    "MUHAMMAD", "ASRAUF", "MUSTAMIN", "VERIFY", "IDENTITY",
    "PORTFOLIO", "PROTECTED", "EXCLUSIVE", "ACCESS", "REQUIRED",
    "MUHAMMAD", "ASRAUF", "MUSTAMIN", "VERIFY", "IDENTITY",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Top marquee */}
      <div className="absolute top-[15%] left-0 w-full overflow-hidden opacity-[0.03]">
        <div className="animate-marquee whitespace-nowrap">
          {words.map((w, i) => (
            <span key={`t-${i}`} className="text-[8rem] md:text-[12rem] font-serif font-black text-text-main mx-8 tracking-tighter">
              {w}
            </span>
          ))}
        </div>
      </div>
      {/* Bottom marquee (reverse) */}
      <div className="absolute bottom-[10%] left-0 w-full overflow-hidden opacity-[0.03]">
        <div className="animate-marquee-reverse whitespace-nowrap">
          {words.map((w, i) => (
            <span key={`b-${i}`} className="text-[8rem] md:text-[12rem] font-serif font-black text-text-main mx-8 tracking-tighter">
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Animated Lock Icon ───
function AnimatedLock() {
  return (
    <motion.div
      className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
      animate={{ rotateY: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border border-primary/10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
        <Lock className="text-primary" size={28} />
      </div>
    </motion.div>
  );
}

// ─── Step Indicator ───
function StepIndicator({ step }: { step: 'request' | 'unlock' }) {
  return (
    <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em]">
      <span className={`transition-colors duration-300 ${step === 'request' ? 'text-primary font-bold' : 'text-text-muted/40'}`}>
        01 Minta Akses
      </span>
      <span className="w-8 h-[1px] bg-text-muted/20" />
      <span className={`transition-colors duration-300 ${step === 'unlock' ? 'text-primary font-bold' : 'text-text-muted/40'}`}>
        02 Masukkan Kode
      </span>
    </div>
  );
}


export default function AccessGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<'request' | 'unlock'>('request');
  const [successAnim, setSuccessAnim] = useState(false);

  // State untuk form permintaan akses
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');

  // ─── KONFIGURASI ───
  // GANTI NOMOR WHATSAPP DAN PASSWORD DI SINI
  const WHATSAPP_NUMBER = "6281234567890";
  const CORRECT_PASSCODE = "ASRAUF2025";

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
      }, 1200);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }, [passcode, CORRECT_PASSCODE]);

  const handleRequestAccess = useCallback(() => {
    if (!name || !purpose) return;
    const message = `Halo Asrauf, saya ${name}. Saya ingin meminta kode akses untuk melihat portofolio Anda. Tujuan saya: ${purpose}. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }, [name, purpose, WHATSAPP_NUMBER]);

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {!isUnlocked && !successAnim && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main overflow-y-auto"
          >
            {/* Background effects */}
            <RunningText />
            <FloatingParticles />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-main)_70%)] pointer-events-none" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-10 px-6 py-12 max-w-lg w-full">

              {/* Lock animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatedLock />
              </motion.div>

              {/* Title */}
              <motion.div
                className="flex flex-col items-center gap-3 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight gradient-text leading-tight">
                  Akses Terbatas
                </h1>
                <p className="text-text-muted text-sm md:text-base max-w-sm leading-relaxed">
                  Portofolio ini dilindungi untuk menjaga privasi. Verifikasi identitas Anda untuk melanjutkan.
                </p>
              </motion.div>

              {/* Step indicator */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <StepIndicator step={step} />
              </motion.div>

              {/* Content area with step transition */}
              <motion.div
                className="w-full"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence mode="wait">
                  {step === 'request' ? (
                    <motion.div
                      key="request"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-4"
                    >
                      {/* Name input */}
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Nama Anda"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border-b-2 border-text-muted/15 focus:border-primary px-1 py-3 text-text-main text-base placeholder:text-text-muted/30 focus:outline-none transition-colors duration-300"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Purpose input */}
                      <div className="relative group">
                        <input
                          type="text"
                          placeholder="Tujuan (misal: Rekrutmen, Lihat Proyek)"
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className="w-full bg-transparent border-b-2 border-text-muted/15 focus:border-primary px-1 py-3 text-text-main text-base placeholder:text-text-muted/30 focus:outline-none transition-colors duration-300"
                        />
                      </div>

                      {/* WhatsApp button */}
                      <motion.button
                        onClick={handleRequestAccess}
                        disabled={!name || !purpose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 w-full bg-[#25D366] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40"
                      >
                        <Send size={18} />
                        Minta Akses via WhatsApp
                      </motion.button>

                      {/* Switch to unlock */}
                      <button
                        onClick={() => setStep('unlock')}
                        className="mt-2 text-text-muted/50 hover:text-primary text-sm transition-colors flex items-center justify-center gap-2 group"
                      >
                        Sudah punya kode?
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unlock"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <form onSubmit={handleUnlock} className="flex flex-col gap-4">
                        {/* Passcode input */}
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Masukkan Kode Akses"
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            className={`w-full bg-transparent border-b-2 ${error ? 'border-red-500' : 'border-text-muted/15 focus:border-primary'} px-1 py-3 pr-10 text-text-main text-xl text-center tracking-[0.3em] font-mono placeholder:text-text-muted/30 placeholder:text-base placeholder:tracking-normal focus:outline-none transition-colors duration-300`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted/40 hover:text-text-main transition-colors"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>

                        {/* Error message */}
                        <AnimatePresence>
                          {error && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-red-500 text-xs text-center tracking-widest uppercase"
                            >
                              Kode akses tidak valid
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Submit button */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-2 w-full gradient-bg text-white font-bold rounded-2xl px-6 py-4 flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 group"
                        >
                          Buka Portofolio
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        {/* Back to request */}
                        <button
                          type="button"
                          onClick={() => setStep('request')}
                          className="mt-1 text-text-muted/50 hover:text-primary text-sm transition-colors flex items-center justify-center gap-2"
                        >
                          ← Kembali minta akses
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Footer branding */}
              <motion.p
                className="text-text-muted/20 text-[10px] tracking-[0.3em] uppercase font-sans mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Muhammad Asrauf Mustamin — Portfolio
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Success unlock animation */}
        {successAnim && (
          <motion.div
            key="success"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onAnimationComplete={() => setSuccessAnim(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-main"
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ scale: 1 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="text-primary text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  ✓
                </motion.span>
              </motion.div>
              <p className="text-primary font-serif font-bold text-xl tracking-wide">
                Akses Diberikan
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Portofolio — blur saat terkunci */}
      <div className={!isUnlocked ? "filter blur-lg select-none pointer-events-none" : ""}>
        {children}
      </div>
    </>
  );
}
