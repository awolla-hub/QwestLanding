"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0A0E14]" />
      
      {/* Animated cosmic gradient orbs - matching icon theme */}
      {/* Purple nebula - top left */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-[#A855F7] rounded-full blur-[100px] md:blur-[150px] lg:blur-[200px]"
      />
      
      {/* Indigo cosmic cloud - top right */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-[#818CF8] rounded-full blur-[80px] md:blur-[130px] lg:blur-[180px]"
      />
      
      {/* Pink nebula - middle left */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[50%] left-[5%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#E879F9] rounded-full blur-[80px] md:blur-[120px] lg:blur-[160px]"
      />
      
      {/* Gold hero glow - bottom right (from icon) */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          scale: [1.05, 0.95, 1.05],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[70%] right-[0%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#FBBF24] rounded-full blur-[80px] md:blur-[110px] lg:blur-[150px]"
      />
      
      {/* Purple cosmic cloud - bottom (hidden on mobile for performance) */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-[85%] left-[30%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#8B5CF6] rounded-full blur-[150px] lg:blur-[200px]"
      />
    </div>
  );
}
