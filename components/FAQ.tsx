"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Как стать героем и начать зарабатывать?",
    answer: "Скачайте приложение, зарегистрируйтесь и выберите роль 'Герой'. Пройдите простую верификацию, и вы сможете принимать заказы в своём городе. Чем выше ваш рейтинг — тем больше заказов вы получаете.",
  },
  {
    question: "Какие задания можно выполнять?",
    answer: "В Qwest есть множество категорий: доставка, покупки, помощь по дому, курьерские услуги, мелкий ремонт и многое другое. Выбирайте те категории, в которых вы разбираетесь.",
  },
  {
    question: "Как формируется цена за задание?",
    answer: "Заказчик указывает бюджет при создании задания. Вы можете принять этот бюджет или предложить свою цену в отклике. Цена фиксируется после того, как заказчик выберет вашу заявку.",
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата происходит напрямую между заказчиком и исполнителем. Сервис не является посредником в платежах — вы договариваетесь об удобном способе оплаты напрямую. Это удобно и быстро!",
  },
  {
    question: "Какая комиссия у сервиса?",
    answer: "Сейчас идёт тестовый период — сервис работает полностью бесплатно, без комиссии! Пользуйтесь всеми возможностями Qwest и зарабатывайте без ограничений.",
  },
  {
    question: "Можно ли отменить заказ?",
    answer: "Да, заказчик может отменить заказ до того, как герой начнёт выполнение. После начала выполнения отмена возможна только по согласованию сторон или через службу поддержки.",
  },
  {
    question: "Как связаться с поддержкой?",
    answer: "В приложении есть раздел 'Поддержка' с чатом. Также вы можете написать нам на support@qwestapp.ru или в Telegram @qwest_support. Мы всегда на связи!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <section 
      id="faq" 
      className="relative py-20 sm:py-32"
      aria-labelledby="faq-title"
    >

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8"
          >
            <HelpCircle size={14} className="text-[#6366F1] sm:w-4 sm:h-4" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-[#6366F1] font-medium">Частые вопросы</span>
          </motion.div>
          
          <h2 
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-bungee"
          >
            <span className="gradient-text">FAQ</span>
          </h2>
          
          <p className="text-[#9CA3AF] text-base sm:text-lg md:text-xl">
            Ответы на популярные вопросы о сервисе
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4" role="list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-[#0F1419] border border-[#A855F7]/20' 
                    : 'bg-[#0F1419]/60 border border-white/5 hover:border-white/10'
                }`}
              >
                {/* Gradient accent on open */}
                {openIndex === index && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6]" aria-hidden="true" />
                )}

                <button
                  id={`faq-button-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between text-left min-h-[48px]"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className={`text-sm sm:text-base font-medium pr-4 transition-colors ${
                    openIndex === index ? 'text-white' : 'text-[#D1D5DB]'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index 
                        ? 'bg-[#A855F7]/20' 
                        : 'bg-white/5'
                    }`}
                  >
                    <ChevronDown 
                      size={16} 
                      className={openIndex === index ? 'text-[#A855F7]' : 'text-[#6B7280]'} 
                      aria-hidden="true"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-content-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-block p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#818CF8]/10 to-[#A855F7]/10 border border-white/5">
            <MessageCircle size={28} className="text-[#6366F1] mx-auto mb-3 sm:mb-4" aria-hidden="true" />
            <p className="text-white font-medium mb-1 sm:mb-2">Не нашли ответ?</p>
            <p className="text-sm sm:text-base text-[#6B7280] mb-4 sm:mb-6">Напишите нам — мы всегда на связи!</p>
            <motion.a
              href="mailto:support@qwestapp.ru"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base min-h-[44px]"
              aria-label="Написать в поддержку на email"
            >
              Написать в поддержку
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
