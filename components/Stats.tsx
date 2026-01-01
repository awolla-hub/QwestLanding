"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Активных пользователей",
    color: "#A855F7",
  },
  {
    icon: CheckCircle,
    value: "5000+",
    label: "Выполненных заданий",
    color: "#8B5CF6",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Средний рейтинг",
    color: "#818CF8",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Успешных заказов",
    color: "#E879F9",
  },
];

export default function Stats() {
  return (
    <section 
      className="relative py-16 sm:py-24"
      aria-labelledby="stats-title"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 
            id="stats-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-bungee"
          >
            <span className="gradient-text">Qwest в цифрах</span>
          </h2>
          <p className="text-[#9CA3AF] text-sm sm:text-base max-w-2xl mx-auto">
            Реальные результаты нашей работы
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0F1419]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 text-center group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} aria-hidden="true" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-bungee"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}CC)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm sm:text-base text-[#9CA3AF] group-hover:text-[#D1D5DB] transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

