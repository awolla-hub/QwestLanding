"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send, Mail, ExternalLink, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Возможности", href: "#features" },
    { label: "Как работает", href: "#how-it-works" },
    { label: "Категории", href: "#categories" },
    { label: "Для кого", href: "#for-users" },
    { label: "Скачать", href: "#download" },
  ],
  support: [
    { label: "FAQ", href: "#faq" },
    { label: "Telegram поддержка", href: "https://t.me/qwest_support", external: true },
    { label: "Написать нам", href: "mailto:support@qwestapp.ru", external: true },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "/privacy", external: true },
    { label: "Согласие на обработку данных", href: "/consent", external: true },
    { label: "Пользовательское соглашение", href: "/agreement", external: true },
  ],
};

const socialLinks = [
  { icon: Send, href: "https://t.me/qwest_app", label: "Telegram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative"
      role="contentinfo"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8 sm:pb-10">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 sm:mb-6 group"
              aria-label="Qwest - На главную"
            >
              <div className="relative">
                <Image
                  src="/icon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="sm:w-11 sm:h-11 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[#A855F7]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text font-bungee">
                QWEST
              </span>
            </motion.a>

            <p className="text-sm sm:text-base text-[#9CA3AF] mb-6 sm:mb-8 max-w-sm leading-relaxed">
              Сервис выполнения заданий, который соединяет тех, кому нужна помощь, 
              с теми, кто готов её оказать. Быстро, надёжно, безопасно.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <motion.a
                href="https://t.me/qwest_support"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#A855F7] transition-colors group"
                aria-label="Telegram поддержка: @qwest_support"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-[#1F2937] flex items-center justify-center group-hover:bg-[#A855F7]/10 transition-colors">
                  <Send size={16} aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base">@qwest_support</span>
              </motion.a>
              <motion.a
                href="mailto:support@qwestapp.ru"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#A855F7] transition-colors group"
                aria-label="Email: support@qwestapp.ru"
              >
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-[#1F2937] flex items-center justify-center group-hover:bg-[#A855F7]/10 transition-colors">
                  <Mail size={16} aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base">support@qwestapp.ru</span>
              </motion.a>
            </div>
          </div>

          {/* Product Links */}
          <nav aria-labelledby="footer-product-heading">
            <h4 id="footer-product-heading" className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Продукт</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.product.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-[#9CA3AF] hover:text-white transition-colors inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-labelledby="footer-support-heading">
            <h4 id="footer-support-heading" className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Поддержка</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.support.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm sm:text-base text-[#9CA3AF] hover:text-white transition-colors inline-flex items-center gap-1.5 relative group"
                  >
                    {link.label}
                    {link.external && <ExternalLink size={12} className="opacity-50" aria-hidden="true" />}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-labelledby="footer-legal-heading">
            <h4 id="footer-legal-heading" className="text-white font-semibold mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Правовая информация</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.legal.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm sm:text-base text-[#9CA3AF] hover:text-white transition-colors inline-flex items-center gap-1.5 relative group"
                  >
                    {link.label}
                    {link.external && <ExternalLink size={12} className="opacity-50" aria-hidden="true" />}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#8B5CF6] group-hover:w-full transition-all duration-300" aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#1F2937]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6B7280] text-xs sm:text-sm flex items-center gap-2"
            >
              © {currentYear} Qwest. Сделано с 
              <Heart size={14} className="text-[#A855F7] fill-[#A855F7]" aria-label="любовью" /> 
              для героев
            </motion.p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:bg-gradient-to-r hover:from-[#A855F7]/20 hover:to-[#8B5CF6]/20 hover:text-[#A855F7] transition-all min-h-[44px]"
                  aria-label={social.label}
                >
                  <social.icon size={18} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
