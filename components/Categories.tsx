"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Package, 
  Home, 
  Wrench, 
  Car, 
  GraduationCap,
  Heart,
  Briefcase,
  LucideIcon
} from "lucide-react";

const categories = [
  {
    icon: ShoppingBag,
    title: "Покупки",
    description: "Купить продукты, одежду, подарки",
    color: "#A855F7",
  },
  {
    icon: Package,
    title: "Доставка",
    description: "Доставить посылки и документы",
    color: "#8B5CF6",
  },
  {
    icon: Home,
    title: "Помощь по дому",
    description: "Уборка, ремонт, сборка мебели",
    color: "#818CF8",
  },
  {
    icon: Wrench,
    title: "Ремонт",
    description: "Мелкий ремонт техники и мебели",
    color: "#E879F9",
  },
  {
    icon: Car,
    title: "Курьерские услуги",
    description: "Быстрая доставка по городу",
    color: "#A855F7",
  },
  {
    icon: GraduationCap,
    title: "Образование",
    description: "Репетиторство, помощь с уроками",
    color: "#8B5CF6",
  },
  {
    icon: Heart,
    title: "Уход и помощь",
    description: "Уход за детьми, пожилыми, питомцами",
    color: "#818CF8",
  },
  {
    icon: Briefcase,
    title: "Бизнес-услуги",
    description: "Помощь в офисе, переводы, консультации",
    color: "#E879F9",
  },
];

export default function Categories() {
  return (
    <section 
      id="categories"
      className="relative py-20 sm:py-32"
      aria-labelledby="categories-title"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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
            <span className="text-xs sm:text-sm font-medium text-[#818CF8] tracking-widest uppercase">
              Категории заданий
            </span>
          </motion.div>
          
          <h2 
            id="categories-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee"
          >
            <span className="gradient-text">Любые задачи</span>
          </h2>
          
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Найдите исполнителя для любой категории заданий
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0F1419]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              {/* Gradient glow on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${category.color}10, transparent)`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon size={24} style={{ color: category.color }} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed group-hover:text-[#D1D5DB] transition-colors">
                  {category.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

