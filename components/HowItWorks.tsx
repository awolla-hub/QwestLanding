"use client";

import { motion } from "framer-motion";
import { 
  PenLine, 
  Users, 
  Navigation, 
  ThumbsUp
} from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Создайте задание",
    description: "Опишите, что нужно сделать, укажите бюджет и время. Это займёт меньше минуты.",
    color: "#A855F7",
  },
  {
    icon: Users,
    title: "Выберите героя",
    description: "Просмотрите отклики исполнителей, их рейтинги и отзывы. Выберите лучшего.",
    color: "#6366F1",
  },
  {
    icon: Navigation,
    title: "Отслеживайте",
    description: "Наблюдайте за выполнением в реальном времени. Общайтесь в чате при необходимости.",
    color: "#8B5CF6",
  },
  {
    icon: ThumbsUp,
    title: "Подтвердите",
    description: "Когда задание выполнено, подтвердите завершение и оставьте отзыв герою.",
    color: "#A855F7",
  },
];

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="relative py-20 sm:py-32" 
      aria-labelledby="how-it-works-title"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="text-xs sm:text-sm font-medium text-[#8B5CF6] tracking-widest uppercase">
              Простой процесс
            </span>
          </motion.div>
          
          <h2 
            id="how-it-works-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee"
          >
            <span className="gradient-text">Как это работает</span>
          </h2>
          
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Четыре простых шага к выполнению любого задания
          </p>
        </motion.div>

        {/* Steps - Desktop Layout */}
        <div className="hidden lg:block relative" role="list" aria-label="Шаги процесса">
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.article
                key={index}
                role="listitem"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative group">
                  {/* Number circle on the line */}
                  <div className="relative flex justify-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="relative z-10"
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#0A0E14]"
                        style={{ 
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                          boxShadow: `0 0 30px ${step.color}40`,
                        }}
                        aria-label={`Шаг ${index + 1}`}
                      >
                        <span className="text-[#0A0E14]">{index + 1}</span>
                      </div>
                      {/* Pulse effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ background: step.color }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#0F1419]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center group-hover:border-white/10 transition-all duration-300"
                    style={{
                      boxShadow: `0 0 0 1px ${step.color}10`,
                    }}
                  >
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <step.icon size={28} style={{ color: step.color }} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

              </motion.article>
            ))}
          </div>
        </div>

        {/* Steps - Mobile Layout */}
        <div className="lg:hidden relative pl-4" role="list" aria-label="Шаги процесса">
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <motion.article
                key={index}
                role="listitem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-4 sm:gap-5"
              >
                {/* Number circle with background to cover the line */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="relative z-10 flex-shrink-0"
                >
                  {/* Background circle to cover line */}
                  <div className="absolute inset-[-4px] rounded-full bg-[#0A0E14]" aria-hidden="true" />
                  <div 
                    className="relative w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold border-4 border-[#0A0E14]"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                      boxShadow: `0 0 20px ${step.color}30`,
                    }}
                    aria-label={`Шаг ${index + 1}`}
                  >
                    <span className="text-[#0A0E14]">{index + 1}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 bg-[#0F1419]/80 border border-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-1">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div 
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <step.icon size={18} style={{ color: step.color }} aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
