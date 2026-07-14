"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import { useTheme } from "@/views/context/ThemeContext";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGooglegemini,
} from "react-icons/si";

const stats = [
  { icon: <FaStar size={18} />, value: "2,000+", label: "GitHub Stars" },
  { icon: <FaCodeBranch size={18} />, value: "1,000+", label: "Forks" },
  { icon: <FaUsers size={18} />, value: "500+", label: "Devs Mentored" },
  {
    icon: <FaGithub size={18} />,
    value: "Top 200",
    label: "India Contributors",
  },
];

const highlights = [
  {
    emoji: "🤖",
    title: "AI Application Developer",
    description:
      "Building intelligent features with LLMs, Gemini API, and AI-powered developer tools",
    isAI: true,
  },
  {
    emoji: "🏆",
    title: "GitHub Trending",
    description:
      "Namaste React — 2,000+ Stars, 1,000+ Forks, featured on GitHub Trending",
    isAI: false,
  },
  {
    emoji: "⚡",
    title: "Performance Expert",
    description:
      "90+ Lighthouse scores with SSR, code splitting & bundle optimization",
    isAI: false,
  },
  {
    emoji: "🎯",
    title: "Top 1% Mentor",
    description:
      "Recognized on Topmate for frontend engineering & career mentoring",
    isAI: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const AboutHighlights = () => {
  const { theme } = useTheme();

  const orbitIcons = [
    { Icon: SiReact, color: "#61DAFB", size: 28 },
    {
      Icon: SiNextdotjs,
      color: theme === "dark" ? "#ffffff" : "#000000",
      size: 26,
    },
    { Icon: SiTypescript, color: "#3178C6", size: 24 },
    { Icon: SiNodedotjs, color: "#339933", size: 26 },
    { Icon: SiMongodb, color: "#47A248", size: 24 },
    { Icon: SiGooglegemini, color: "#8E75B2", size: 24 },
  ];

  return (
    <motion.div
      className="flex-1 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={cardVariants}
        className="relative w-full aspect-square max-w-[280px] mx-auto mb-4"
      ></motion.div>

      <motion.div variants={cardVariants} className="flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-br from-purple-500/10 via-secondary/10 to-blue-500/10 border border-secondary/20">
          <FaRobot className="text-secondary text-sm" />
          <span className="text-xs font-semibold text-secondary tracking-wider uppercase">
            Full Stack + AI
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 gap-3"
      >
        {stats.map(({ icon, value, label }) => (
          <motion.div
            key={label}
            variants={cardVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4
                       hover:border-secondary/50 transition-all duration-300 cursor-default"
          >
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col gap-1">
              <span className="text-secondary">{icon}</span>
              <span className="text-xl sm:text-2xl font-bold text-text">
                {value}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={containerVariants} className="flex flex-col gap-3">
        {highlights.map(({ emoji, title, description, isAI }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            whileHover={{ x: 4 }}
            className={`group flex items-start gap-3 rounded-xl border backdrop-blur-sm p-4
                       transition-all duration-300 cursor-default
                       ${
                         isAI
                           ? "border-secondary/30 bg-secondary/5 hover:border-secondary/60"
                           : "border-border bg-card/30 hover:border-secondary/40"
                       }`}
          >
            <span className="text-xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
              {emoji}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text flex items-center gap-1.5">
                {title}
                {isAI && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-secondary/15 text-secondary uppercase tracking-wider">
                    New
                  </span>
                )}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mt-0.5">
                {description}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutHighlights;
