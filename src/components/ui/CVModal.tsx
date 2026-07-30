import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Briefcase } from "lucide-react";

export function CVModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-bg-card border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md shadow-2xl relative pointer-events-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-main transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
                <h3 className="text-xl font-bold font-serif text-text-main">Pilih Versi CV</h3>
                <span className="w-8 h-[2px] bg-primary rounded-full"></span>
              </div>

              <p className="text-text-muted text-sm mb-6 text-center">
                Silakan pilih versi Curriculum Vitae yang paling sesuai dengan kebutuhan atau posisi yang Anda tuju.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="/CV_Muhammad_Asrauf_Mustamin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 p-4 rounded-2xl border-2 border-primary/20 hover:border-primary bg-bg-main hover:bg-primary/5 transition-all duration-300"
                  onClick={onClose}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-text-main text-base">IT Business Analyst</span>
                    <span className="text-xs text-text-muted">Fokus pada analisis sistem, requirement gathering, & UAT</span>
                  </div>
                </a>

                <a
                  href="/CV_Muhammad_Asrauf_Mustamin_PM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 p-4 rounded-2xl border-2 border-[#cc7a00]/20 hover:border-[#cc7a00] bg-bg-main hover:bg-[#cc7a00]/5 transition-all duration-300"
                  onClick={onClose}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#cc7a00]/10 flex items-center justify-center text-[#cc7a00] group-hover:scale-110 transition-transform">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-text-main text-base">Project Manager</span>
                    <span className="text-xs text-text-muted">Fokus pada koordinasi, timeline, & stakeholder management</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
