"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";

// Хук для определения мобильного устройства
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
}

const navLinks = [
  { href: "#features", label: "Возможности" },
  { href: "#how-it-works", label: "Как работает" },
  { href: "#categories", label: "Категории" },
  { href: "#for-users", label: "Для кого" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Track active section
  const handleScroll = useCallback(() => {
    const sections = navLinks.map(link => link.href.replace('#', ''));
    const scrollPosition = window.scrollY + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.header
        role="banner"
        initial={isMobile ? { y: 0 } : { y: -100 }}
        animate={{ y: 0 }}
        transition={isMobile ? { duration: 0 } : { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        {/* Background blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          className="absolute inset-0 bg-[#0A0E14]/80 backdrop-blur-xl border-b border-[#A855F7]/10"
          aria-hidden="true"
        />

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6" aria-label="Главная навигация">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#" 
              className="flex items-center gap-2 sm:gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Qwest - На главную"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/icon.svg"
                  alt=""
                  fill
                  className="object-contain transition-transform group-hover:scale-110 group-hover:rotate-6"
                  aria-hidden="true"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#A855F7]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text font-bungee">
                QWEST
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1" role="menubar">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#9CA3AF] hover:text-white'
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-[#A855F7]/10 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                  </motion.a>
                );
              })}
              
              <motion.a 
                href="#download" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 relative overflow-hidden bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white font-semibold px-5 py-2.5 rounded-xl group min-h-[44px] flex items-center"
                aria-label="Скачать приложение Qwest"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} aria-hidden="true" />
                  Скачать
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative w-11 h-11 flex items-center justify-center text-white rounded-lg"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            
            {/* Menu Panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Мобильное меню навигации"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-sm bg-[#0A0E14] border-l border-[#A855F7]/10 md:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end p-4 sm:p-6">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full bg-[#1F2937] flex items-center justify-center text-white"
                  aria-label="Закрыть меню"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Menu Links */}
              <nav className="flex flex-col px-4 sm:px-6 gap-2" aria-label="Мобильная навигация">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg sm:text-xl text-white py-4 px-4 rounded-xl hover:bg-[#A855F7]/10 transition-colors min-h-[48px] flex items-center"
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#download"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] text-white font-semibold py-4 px-6 rounded-xl text-center text-lg min-h-[48px] flex items-center justify-center"
                >
                  Скачать приложение
                </motion.a>
              </nav>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#A855F7]/5 to-transparent pointer-events-none" aria-hidden="true" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
