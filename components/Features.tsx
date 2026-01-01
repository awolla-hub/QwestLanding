"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  Zap, 
  MessageCircle, 
  MapPin, 
  Handshake, 
  Star, 
  Sparkles,
  LucideIcon
} from "lucide-react";
import { MouseEvent, useRef } from "react";

const features = [
  {
    icon: Zap,
    title: "Быстрый поиск",
    description: "Найдите героя за считанные минуты. Алгоритм подберёт лучших исполнителей рядом с вами.",
    color: "#A855F7",
    gradient: "from-[#A855F7] to-[#8B5CF6]",
  },
  {
    icon: MessageCircle,
    title: "Чат в реальном времени",
    description: "Общайтесь с исполнителем напрямую. Уточняйте детали и договаривайтесь об условиях.",
    color: "#6366F1",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    icon: MapPin,
    title: "Отслеживание на карте",
    description: "Видьте, где находится ваш герой в реальном времени. Знайте точное время прибытия.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#818CF8]",
  },
  {
    icon: Handshake,
    title: "Прямые расчёты",
    description: "Оплата напрямую исполнителю — без посредников. Договаривайтесь об удобном способе оплаты.",
    color: "#A855F7",
    gradient: "from-[#A855F7] to-[#8B5CF6]",
  },
  {
    icon: Star,
    title: "Рейтинги и отзывы",
    description: "Выбирайте проверенных исполнителей с реальными отзывами от других пользователей.",
    color: "#6366F1",
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
  {
    icon: Sparkles,
    title: "Бесплатный период",
    description: "Сейчас тестовый период — сервис работает полностью бесплатно, без комиссии!",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6] to-[#818CF8]",
  },
];

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  gradient: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, color, gradient, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Spotlight effect
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    
    // Tilt effect (reduced for mobile performance)
    const centerX = width / 2;
    const centerY = height / 2;
    const maxTilt = 8;
    
    rotateY.set(((e.clientX - left - centerX) / centerX) * maxTilt);
    rotateX.set(-((e.clientY - top - centerY) / centerY) * maxTilt);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-2xl border border-white/5 bg-[#0F1419]/80 p-6 sm:p-8 overflow-hidden"
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${color}15,
              transparent 80%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}20, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {/* Icon with glow */}
        <div className="relative mb-4 sm:mb-6">
          <motion.div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${gradient} p-0.5`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-full h-full rounded-2xl bg-[#0F1419] flex items-center justify-center">
              <Icon size={24} style={{ color }} aria-hidden="true" />
            </div>
          </motion.div>
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            style={{ background: color }}
            aria-hidden="true"
          />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed group-hover:text-[#D1D5DB] transition-colors">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left hidden sm:block"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

export default function Features() {
  return (
    <section 
      id="features" 
      className="relative py-20 sm:py-32"
      aria-labelledby="features-title"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-medium text-[#A855F7] tracking-widest uppercase">
              Возможности
            </span>
          </motion.div>
          
          <h2 
            id="features-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee"
          >
            <span className="gradient-text">Всё для успеха</span>
          </h2>
          
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Мощные инструменты для быстрого и удобного выполнения любых заданий
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
