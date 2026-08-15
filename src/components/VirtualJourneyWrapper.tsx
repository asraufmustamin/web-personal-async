"use client";

import { useState } from "react";
import { VirtualJourneyTrigger } from "./VirtualJourneyTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function VirtualJourneyWrapper() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <VirtualJourneyTrigger onTrigger={() => setShowModal(true)} />
      
      {/* ─── Popup Modal: Fitur Dalam Tahap Pengembangan ─── */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative z-10 max-w-sm w-full bg-bg-card border border-primary/30 p-6 md:p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] text-center flex flex-col items-center gap-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-text-main p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Tutup"
              >
                <X size={18} />
              </button>

              {/* Glowing Icon Badge */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(248,157,10,0.3)] mt-2">
                <Sparkles size={30} className="animate-pulse text-primary" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5">
                <div className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider mx-auto">
                  <span>Tahap Penyempurnaan</span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-text-main">
                  Fitur Segera Hadir
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                  Pengalaman perjalanan virtual 3D interaktif ini sedang dalam tahap kurasi visual & pengembangan konten eksklusif. Nantikan segera!
                </p>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
                className="mt-1 w-full py-3.5 px-6 bg-gradient-to-r from-[#F89D0A] to-[#DD6202] text-white font-bold rounded-2xl shadow-[0_10px_25px_-5px_rgba(248,157,10,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(221,98,2,0.6)] transition-all cursor-pointer"
              >
                Mengerti
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
