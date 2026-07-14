"use client";

import { useTheme } from "@/views/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroIllustration = () => {
  const { theme } = useTheme();

  return (
    <motion.div 
      className="flex-1 flex justify-center items-center relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glowing background orbs for AI vibe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-64 h-64 rounded-full bg-secondary/15 blur-3xl absolute"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="w-48 h-48 rounded-full bg-purple-500/15 blur-3xl absolute"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Image
          src={
            theme === "dark"
              ? "/images/hero-illustration-dark.png"
              : "/images/hero-illustration-light.png"
          }
          alt="Hero Illustration"
          width={450}
          height={450}
          className="w-full max-w-[450px] drop-shadow-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroIllustration;
