"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { 
  ShoppingBag, 
  Clock, 
  MessageSquare, 
  MapPinned,
  Star,
  History,
  Wallet,
  TrendingUp,
  Award,
  Calendar,
  ArrowRight,
  LucideIcon
} from "lucide-react";

const customerFeatures = [
  { icon: ShoppingBag, text: "Создавайте заказы в любой категории" },
  { icon: Clock, text: "Получайте отклики за минуты" },
  { icon: MessageSquare, text: "Общайтесь с героем в чате" },
  { icon: MapPinned, text: "Отслеживайте на карте в реальном времени" },
  { icon: Star, text: "Оценивайте качество выполнения" },
  { icon: History, text: "Храните историю всех заказов" },
];

const heroFeatures = [
  { icon: Wallet, text: "Получайте оплату напрямую от заказчика" },
  { icon: TrendingUp, text: "Увеличивайте доход с ростом рейтинга" },
  { icon: Calendar, text: "Работайте в удобное время" },
  { icon: MapPinned, text: "Выбирайте заказы рядом с вами" },
  { icon: Award, text: "Получайте достижения и бонусы" },
  { icon: MessageSquare, text: "Уточняйте детали в чате с заказчиком" },
];

interface RoleCardProps {
  title: string;
  subtitle: string;
  features: { icon: LucideIcon; text: string }[];
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  ctaText: string;
  delay: number;
}

function RoleCard({ title, subtitle, features, icon: MainIcon, gradient, accentColor, ctaText, delay }: RoleCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      onMouseMove={handleMouseMove}
      className="relative group h-full"
    >
      {/* Glow effect */}
      <div 
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl sm:rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} 
        aria-hidden="true"
      />
      
      {/* Card */}
      <div className="relative h-full bg-[#0F1419] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 overflow-hidden group-hover:border-white/10 transition-all duration-500">
        {/* Spotlight effect - desktop only */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                500px circle at ${mouseX}px ${mouseY}px,
                ${accentColor}10,
                transparent 80%
              )
            `,
          }}
          aria-hidden="true"
        />

        {/* Background decoration */}
        <div 
          className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ background: accentColor }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <motion.div 
              className={`w-14 sm:w-16 h-14 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradient} p-0.5`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[#0F1419] flex items-center justify-center">
                <MainIcon size={28} style={{ color: accentColor }} aria-hidden="true" />
              </div>
            </motion.div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
              <p className="text-sm sm:text-base text-[#9CA3AF]">{subtitle}</p>
            </div>
          </div>

          {/* Features List */}
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + index * 0.05 }}
                className="flex items-center gap-3 sm:gap-4 group/item"
              >
                <div 
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover/item:scale-110"
                  style={{ backgroundColor: `${accentColor}15` }}
                >
                  <feature.icon size={16} style={{ color: accentColor }} aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base text-[#D1D5DB] group-hover/item:text-white transition-colors">
                  {feature.text}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r ${gradient} font-semibold text-center flex items-center justify-center gap-2 group/btn overflow-hidden relative min-h-[48px]`}
            aria-label={`${ctaText} - скачать приложение`}
          >
            <span className="relative z-10 text-[#0A0E14] text-sm sm:text-base">{ctaText}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} className="text-[#0A0E14]" aria-hidden="true" />
            </motion.div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ForUsers() {
  return (
    <section 
      id="for-users" 
      className="relative py-20 sm:py-32"
      aria-labelledby="for-users-title"
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
            <span className="text-xs sm:text-sm font-medium text-[#6366F1] tracking-widest uppercase">
              Две стороны
            </span>
          </motion.div>
          
          <h2 
            id="for-users-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee"
          >
            <span className="gradient-text">Для кого Qwest?</span>
          </h2>
          
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Приложение создано для двух типов пользователей — и вы можете быть обоими!
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <RoleCard
            title="Для заказчиков"
            subtitle="Делегируйте любые задачи"
            features={customerFeatures}
            icon={ShoppingBag}
            gradient="from-[#A855F7] to-[#8B5CF6]"
            accentColor="#A855F7"
            ctaText="Создать первый заказ"
            delay={0}
          />

          <RoleCard
            title="Для героев"
            subtitle="Зарабатывайте, помогая другим"
            features={heroFeatures}
            icon={Award}
            gradient="from-[#6366F1] to-[#8B5CF6]"
            accentColor="#6366F1"
            ctaText="Стать героем"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
