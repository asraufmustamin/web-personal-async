'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Sparkles, Briefcase, Folder, Mail, Menu, X, Settings } from 'lucide-react';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideServices, setHideServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkHidden = () => {
      setHideServices(localStorage.getItem('hide_services') === 'true');
    };
    checkHidden();
    window.addEventListener('services-toggled', checkHidden);
    return () => window.removeEventListener('services-toggled', checkHidden);
  }, []);

  const tabs = [
    { title: 'Beranda', icon: Home, href: '#beranda' },
    { title: 'Tentang', icon: User, href: '#tentang' },
    { title: 'Keahlian', icon: Sparkles, href: '#keahlian' },
    { title: 'Pengalaman', icon: Briefcase, href: '#pengalaman' },
    { title: 'Proyek', icon: Folder, href: '#proyek' },
    ...(hideServices ? [] : [{ title: 'Layanan', icon: Settings, href: '#layanan' }]),
    { title: 'Kontak', icon: Mail, href: '#kontak' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:block fixed left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'top-3 lg:top-5 mx-4 lg:mx-auto max-w-[95%] lg:max-w-6xl rounded-full py-2.5 lg:py-3 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md shadow-lg shadow-black/5 ring-1 ring-black/5 dark:ring-white/5'
            : 'top-4 lg:top-8 py-4 lg:py-6 bg-transparent ring-1 ring-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-center relative transition-all duration-500">
          
          {/* Logo and Desktop Nav Container */}
          <div className="flex items-center justify-center gap-0 lg:gap-6 w-full lg:w-auto relative z-50 transition-all duration-500">
            {/* Logo */}
            <div className={`flex-none transition-all duration-500 overflow-hidden flex items-center justify-center ${
              isScrolled ? 'w-[130px] lg:w-[150px] h-8 lg:h-10' : 'w-[160px] lg:w-[180px] h-10 lg:h-12'
            }`}>
              <a className="hover:opacity-80 transition-opacity flex justify-center items-center w-full h-full" href="/">
                <img 
                  src="/logo-async-gold.png" 
                  alt="ASYNC Logo" 
                  className="w-full h-full object-cover object-center" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo-async.png';
                  }}
                />
              </a>
            </div>

            {/* Desktop Nav (Fixed, always visible) */}
            <div className="hidden lg:flex transition-all duration-700 opacity-100 translate-x-0 scale-100">
              <ExpandableTabs 
                tabs={tabs} 
                activeColor="text-white bg-gradient-to-r from-primary to-[#cc7a00] shadow-md" 
                className="border-white/10 shadow-lg shadow-black/10 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-xl text-gray-500 dark:text-gray-400 flex-nowrap whitespace-nowrap min-w-max h-12 items-center px-2"
              />
            </div>
            
            <div className="hidden lg:flex ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Tablet Nav (2 Rows, fixed, always visible) */}
          <div className="hidden md:flex lg:hidden justify-center items-center gap-2 w-full transition-all duration-500 absolute left-1/2 -translate-x-1/2 top-[100%] mt-3 max-w-[480px]">
            <ExpandableTabs 
              tabs={tabs} 
              activeColor="text-white bg-gradient-to-r from-primary to-[#cc7a00] shadow-md" 
              className="border-white/10 shadow-lg shadow-black/10 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-xl text-gray-500 dark:text-gray-400 grid grid-cols-3 w-full p-3 gap-2 mx-auto"
            />
            <div className="bg-white/90 dark:bg-[#141414]/90 shadow-lg shadow-black/10 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>

        </div>
      </motion.nav>
    </>
  );
}
