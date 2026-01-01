"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};


// Deterministic particle positions to avoid hydration mismatch
const particles = [
  { delay: 0, size: 6, x: "15%", y: "25%", color: "#A855F7", repeatDelay: 1.2 },
  { delay: 0.5, size: 4, x: "25%", y: "65%", color: "#8B5CF6", repeatDelay: 1.8 },
  { delay: 1, size: 8, x: "75%", y: "20%", color: "#E879F9", repeatDelay: 1.5 },
  { delay: 1.5, size: 5, x: "85%", y: "55%", color: "#818CF8", repeatDelay: 2.1 },
  { delay: 2, size: 6, x: "45%", y: "75%", color: "#8B5CF6", repeatDelay: 1.3 },
  { delay: 0.3, size: 4, x: "90%", y: "35%", color: "#A855F7", repeatDelay: 1.9 },
  { delay: 0.8, size: 7, x: "8%", y: "50%", color: "#818CF8", repeatDelay: 1.6 },
  { delay: 1.2, size: 5, x: "55%", y: "15%", color: "#FBBF24", repeatDelay: 2.0 },
];

const FloatingParticle = ({ delay, size, x, y, color, repeatDelay }: { 
  delay: number; 
  size: number;
  x: string; 
  y: string;
  color: string;
  repeatDelay: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none hidden md:block"
    style={{ 
      left: x, 
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      willChange: "transform, opacity",
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.8, 0.6, 0],
      scale: [0.5, 1, 1.2, 1, 0.5],
      y: [0, -40, -80, -120, -160],
      x: [0, 10, -5, 15, 0],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      repeatDelay,
      ease: "easeOut",
    }}
  />
);

const OrbitingDot = ({ radius, duration, delay, color }: {
  radius: number;
  duration: number;
  delay: number;
  color: string;
}) => (
  <motion.div
    className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full hidden lg:block"
    style={{ 
      background: color,
      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
      willChange: "transform",
    }}
    animate={{
      x: [
        Math.cos(0) * radius,
        Math.cos(Math.PI / 2) * radius,
        Math.cos(Math.PI) * radius,
        Math.cos(Math.PI * 1.5) * radius,
        Math.cos(Math.PI * 2) * radius,
      ],
      y: [
        Math.sin(0) * radius,
        Math.sin(Math.PI / 2) * radius,
        Math.sin(Math.PI) * radius,
        Math.sin(Math.PI * 1.5) * radius,
        Math.sin(Math.PI * 2) * radius,
      ],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

export default function Hero() {
  const title = "QWEST";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20" aria-label="Hero section">
      {/* Grid Pattern with fade - hidden on mobile */}
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,184,77,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,184,77,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      {/* Floating Particles - only on desktop */}
      {particles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} />
      ))}

      {/* Cursor glow effect - only on desktop */}
      {isMounted && (
        <motion.div
          className="pointer-events-none fixed w-[300px] h-[300px] rounded-full hidden lg:block z-0"
          style={{
            background: "radial-gradient(circle, rgba(255,184,77,0.08) 0%, transparent 70%)",
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            willChange: "transform",
          }}
          animate={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A855F7]/10 to-[#8B5CF6]/10 border border-[#A855F7]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8"
            >
              <Sparkles size={14} className="text-[#A855F7] sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm text-[#A855F7] font-medium">Новое поколение сервисов</span>
            </motion.div>

            {/* Animated Title */}
            <div className="flex mb-4 sm:mb-6 font-bungee perspective-1000">
              {title.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl gradient-text inline-block relative"
                  style={{ 
                    display: "inline-block",
                    textShadow: "0 0 80px rgba(255,184,77,0.3)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 100px rgba(255,184,77,0.5)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-3 sm:mb-4 font-medium"
            >
              Герои рядом. <span className="gradient-text">Задания ждут.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-base sm:text-lg text-[#9CA3AF] mb-8 sm:mb-10 max-w-lg leading-relaxed"
            >
              Найдите исполнителя для любой задачи за считанные минуты. 
              Или станьте героем и зарабатывайте, помогая другим.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a 
                href="#download" 
                className="btn-primary relative overflow-hidden group shimmer min-h-[48px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Скачать приложение Qwest"
              >
                <span className="relative z-10">Скачать приложение</span>
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="btn-secondary group min-h-[48px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Узнать больше о Qwest"
              >
                <span className="group-hover:gradient-text transition-all duration-300">Узнать больше</span>
              </motion.a>
            </motion.div>

            {/* Test period badge instead of fake stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="mt-10 sm:mt-14"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="inline-flex items-center gap-3 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-4 py-3 rounded-xl"
              >
                <Sparkles size={20} className="text-[#8B5CF6]" />
                <div>
                  <div className="text-sm sm:text-base font-semibold text-white">Тестовый период</div>
                  <div className="text-xs sm:text-sm text-[#9CA3AF]">Сервис работает бесплатно, без комиссии!</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Mobile version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex lg:hidden items-center justify-center mt-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/20 to-[#8B5CF6]/20 blur-[60px] rounded-full" />
            <Image
              src="/hero-action.png"
              alt="Qwest Hero"
              width={300}
              height={300}
              className="relative z-10 drop-shadow-[0_0_40px_rgba(255,184,77,0.3)]"
              priority
            />
          </motion.div>

          {/* Hero Image - Desktop version with effects */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ x: moveX, y: moveY }}
          >
            {/* Multiple glow layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#A855F7]/30 to-[#8B5CF6]/30 rounded-full blur-[80px]"
                style={{ willChange: "transform, opacity" }}
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#818CF8]/20 to-[#A855F7]/20 rounded-full blur-[100px]"
                style={{ willChange: "transform, opacity" }}
              />
            </div>

            {/* Orbiting dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitingDot radius={200} duration={20} delay={0} color="#A855F7" />
              <OrbitingDot radius={220} duration={25} delay={5} color="#8B5CF6" />
              <OrbitingDot radius={180} duration={18} delay={10} color="#818CF8" />
            </div>
            
            {/* Hero Image with floating animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/hero-action.png"
                alt="Qwest Hero"
                width={520}
                height={520}
                className="drop-shadow-[0_0_80px_rgba(255,184,77,0.3)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.a
          href="#features"
          className="flex flex-col items-center text-[#6B7280] hover:text-[#A855F7] transition-colors cursor-pointer group"
          aria-label="Прокрутить к секции возможностей"
        >
          <motion.span 
            className="text-xs tracking-widest uppercase mb-3 opacity-60 group-hover:opacity-100 transition-opacity"
          >
            Узнать больше
          </motion.span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
