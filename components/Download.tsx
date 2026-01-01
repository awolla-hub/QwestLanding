"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, Play, Download as DownloadIcon, CheckCircle2, Sparkles, X, Clock, MapPin, DollarSign, Trophy, Star, ChevronRight, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

// Icons used in phone mockup benefit list
const benefitItems = [
  { icon: Clock, text: "Работай когда удобно", emoji: "⏰" },
  { icon: MapPin, text: "Заказы рядом с тобой", emoji: "📍" },
  { icon: DollarSign, text: "Оплата напрямую от клиента", emoji: "💰" },
  { icon: Trophy, text: "Достижения и уровни", emoji: "🏆" },
  { icon: Star, text: "Рейтинг и отзывы", emoji: "⭐" },
];

const benefits = [
  "Бесплатная регистрация",
  "Без подписок и скрытых платежей",
  "Тестовый период без комиссии",
  "Оплата напрямую исполнителю",
];

export default function Download() {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Определяем тип устройства
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const android = /android/i.test(userAgent);
    const ios = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    
    setIsAndroid(android);
    setIsIOS(ios);
  }, []);

  const handleAndroidDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Для Android устройств - прямая установка
    if (isAndroid) {
      // Позволяем браузеру обработать скачивание
      // На Android при скачивании APK система предложит установить
      return;
    }
    // Для других устройств - скачивание файла
    e.preventDefault();
    window.location.href = '/qwest.apk';
  };

  return (
    <section 
      id="download" 
      className="relative py-20 sm:py-32"
      aria-labelledby="download-title"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#A855F7]/10 border border-[#A855F7]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8"
            >
              <DownloadIcon size={14} className="text-[#A855F7] sm:w-4 sm:h-4" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-[#A855F7] font-medium">Доступно бесплатно</span>
            </motion.div>

            <h2 
              id="download-title"
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee leading-tight"
            >
              <span className="gradient-text">Скачайте</span>
              <br />
              <span className="text-white">прямо сейчас</span>
            </h2>
            
            <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-md leading-relaxed">
              Присоединяйтесь к нашему сообществу. {isAndroid ? "Установите приложение прямо сейчас!" : "Доступно для Android. iOS версия скоро."}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-8 sm:mb-10" aria-label="Преимущества">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-[#8B5CF6] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-[#D1D5DB]">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Test period badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-4 py-3 rounded-xl mb-8 sm:mb-10"
            >
              <Sparkles size={18} className="text-[#8B5CF6]" aria-hidden="true" />
              <span className="text-sm text-[#8B5CF6] font-medium">Сейчас тестовый период — сервис полностью бесплатный!</span>
            </motion.div>

            {/* Android installation instructions */}
            {isAndroid && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-[#0F1419]/60 border border-[#8B5CF6]/20 rounded-xl p-4 mb-6 sm:mb-8"
              >
                <p className="text-sm text-[#D1D5DB] mb-2">
                  <strong className="text-white">Инструкция по установке:</strong>
                </p>
                <ol className="text-sm text-[#9CA3AF] space-y-1 list-decimal list-inside">
                  <li>Нажмите кнопку "Установить Android APK"</li>
                  <li>Разрешите установку из неизвестных источников (если потребуется)</li>
                  <li>Дождитесь завершения установки</li>
                  <li>Откройте приложение Qwest</li>
                </ol>
              </motion.div>
            )}

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href="#download"
                onClick={(e) => { e.preventDefault(); }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white text-black px-5 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-gray-100 transition-colors group min-h-[48px] cursor-not-allowed opacity-90"
                aria-label="Загрузить в App Store (скоро)"
                title="Приложение скоро будет доступно в App Store"
              >
                <Apple size={32} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs opacity-60">Загрузить в</div>
                  <div className="text-base sm:text-lg font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="/qwest.apk"
                download="qwest.apk"
                onClick={handleAndroidDownload}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 bg-white text-black px-5 sm:px-6 py-3 sm:py-4 rounded-2xl hover:bg-gray-100 transition-colors group min-h-[48px]"
                aria-label="Скачать APK для Android"
                title={isAndroid ? "Скачать и установить приложение Qwest" : "Скачать APK файл для Android"}
              >
                <Play size={32} fill="black" className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-xs opacity-60">{isAndroid ? "Установить" : "Скачать"}</div>
                  <div className="text-base sm:text-lg font-semibold">Android APK</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-10 lg:mt-0"
            aria-hidden="true"
          >
            {/* Glow layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-gradient-to-r from-[#A855F7]/30 to-[#8B5CF6]/30 rounded-full blur-[60px] sm:blur-[80px]"
                style={{ willChange: "transform" }}
              />
            </div>
            
            {/* Phone Frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
              style={{ willChange: "transform" }}
            >
              {/* Phone shell */}
              <div className="relative w-[240px] sm:w-[300px] h-[500px] sm:h-[620px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[40px] sm:rounded-[50px] p-2 sm:p-3 shadow-2xl">
                {/* Side buttons */}
                <div className="absolute -right-1 top-24 sm:top-28 w-1 h-12 sm:h-16 bg-[#3a3a3a] rounded-l-sm" />
                <div className="absolute -left-1 top-20 sm:top-24 w-1 h-6 sm:h-8 bg-[#3a3a3a] rounded-r-sm" />
                <div className="absolute -left-1 top-28 sm:top-36 w-1 h-12 sm:h-14 bg-[#3a3a3a] rounded-r-sm" />
                <div className="absolute -left-1 top-42 sm:top-52 w-1 h-12 sm:h-14 bg-[#3a3a3a] rounded-r-sm" />
                
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-[#A855F7] to-[#9333EA] rounded-[34px] sm:rounded-[42px] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-6 sm:h-8 bg-black rounded-full z-20" />
                  
                  {/* Close button */}
                  <div className="absolute top-12 sm:top-14 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <X size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                  </div>
                  
                  {/* App content */}
                  <div className="absolute inset-0 flex flex-col pt-12 sm:pt-14 px-3 sm:px-4">
                    {/* Title */}
                    <div className="flex items-center justify-center mb-3 sm:mb-4 mt-2">
                      <span className="text-white font-bold text-lg sm:text-xl font-bungee tracking-wide">QWEST</span>
                    </div>
                    
                    {/* Benefits list */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {benefitItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-2 bg-white/90 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 sm:py-2.5"
                        >
                          <span className="text-xs sm:text-sm">{item.emoji}</span>
                          <span className="text-[#1F2937] text-[10px] sm:text-xs font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Hero image */}
                    <div className="flex-1 flex items-end justify-center pb-16 sm:pb-20">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Image
                          src="/hero-together.png"
                          alt="Qwest - Герои вместе"
                          width={140}
                          height={140}
                          className="sm:w-[180px] sm:h-[180px] object-contain"
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="absolute bottom-8 sm:bottom-10 left-3 right-3 sm:left-4 sm:right-4">
                      <div className="h-10 sm:h-12 bg-[#FACC15] rounded-full flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg">
                        <Rocket size={14} className="text-[#1F2937] sm:w-4 sm:h-4" />
                        <span className="text-[#1F2937] font-bold text-xs sm:text-sm">Начать!</span>
                        <ChevronRight size={14} className="text-[#1F2937] sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    
                    {/* Page indicators */}
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <div className="w-4 sm:w-5 h-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[40px] sm:rounded-[50px] pointer-events-none" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
