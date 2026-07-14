"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/views/context/ThemeContext";
import { FaRobot } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGooglegemini,
  SiDocker,
  SiTailwindcss,
  SiExpress,
  SiMui,
  SiSass,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";

const HeroIllustration = () => {
  const { theme } = useTheme();

  const techStack = [
    // Outer Orbit (40%)
    { Icon: SiReact, color: "#61DAFB", radius: "40%", duration: 35 },
    { Icon: SiTypescript, color: "#3178C6", radius: "40%", duration: 35 },
    { Icon: SiMongodb, color: "#47A248", radius: "40%", duration: 35 },
    { Icon: SiTailwindcss, color: "#06B6D4", radius: "40%", duration: 35 },
    { Icon: SiSass, color: "#CC6699", radius: "40%", duration: 35 },

    // Middle Orbit (28%)
    {
      Icon: SiNextdotjs,
      color: theme === "dark" ? "#ffffff" : "#000000",
      radius: "28%",
      duration: 25,
    },
    { Icon: SiNodedotjs, color: "#339933", radius: "28%", duration: 25 },
    { Icon: SiDocker, color: "#2496ED", radius: "28%", duration: 25 },
    { Icon: SiTestinglibrary, color: "#E33332", radius: "28%", duration: 25 },

    // Inner Orbit (16%)
    { Icon: SiGooglegemini, color: "#8E75B2", radius: "16%", duration: 15 },
    {
      Icon: SiExpress,
      color: theme === "dark" ? "#ffffff" : "#000000",
      radius: "16%",
      duration: 15,
    },
    { Icon: SiMui, color: "#007FFF", radius: "16%", duration: 15 },
    { Icon: SiJest, color: "#C21325", radius: "16%", duration: 15 },
  ];

  const orbits: Record<string, typeof techStack> = {};
  techStack.forEach((t) => {
    if (!orbits[t.radius]) orbits[t.radius] = [];
    orbits[t.radius].push(t);
  });

  const particles = [
    { top: "15%", left: "20%" },
    { top: "25%", left: "80%" },
    { top: "45%", left: "10%" },
    { top: "60%", left: "85%" },
    { top: "80%", left: "30%" },
    { top: "75%", left: "70%" },
    { top: "35%", left: "35%" },
    { top: "10%", left: "60%" },
    { top: "85%", left: "55%" },
    { top: "50%", left: "25%" },
    { top: "40%", left: "75%" },
    { top: "20%", left: "45%" },
  ];

  return (
    <motion.div
      className="flex-1 flex justify-center items-center relative w-full aspect-square max-w-[550px] mt-10 lg:mt-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          className="w-[90%] h-[90%] rounded-full bg-cyan-500/10 blur-[80px] absolute"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1/2 h-1/2 rounded-full bg-blue-600/10 blur-[60px] absolute"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative w-[95%] h-[95%] sm:w-full sm:h-full flex items-center justify-center z-10">
        <div className="absolute w-[110%] h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
        <div className="absolute h-[110%] w-px bg-linear-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

        <motion.div
          className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400/50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400/50" />
        </motion.div>

        <motion.div
          className="absolute w-[56%] h-[56%] rounded-full border-[1.5px] border-dashed border-blue-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute w-[32%] h-[32%] rounded-full border border-cyan-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-cyan-400/80" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-cyan-400/80" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-[-2px] sm:inset-0 rounded-xl sm:rounded-2xl bg-linear-to-br from-secondary via-purple-500 to-blue-500 opacity-80 blur-md sm:blur-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-1 bg-card/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-inner"
              style={{ rotate: 45 }}
              animate={{ rotate: [45, 135, 225, 315, 405] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <span className="relative z-10 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-br from-secondary to-purple-400 font-pacifico drop-shadow-sm">
              CN
            </span>
          </motion.div>
        </div>

        {particles.map((pos, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${i % 2 === 0 ? "bg-cyan-400" : "bg-blue-500"} shadow-[0_0_8px_rgba(6,182,212,0.8)]`}
            style={{ left: pos.left, top: pos.top }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {Object.entries(orbits).map(([radius, items]) => {
          return items.map((tech, i) => {
            const baseAngle = (i * 360) / items.length;
            return (
              <motion.div
                key={`${radius}-${i}`}
                className="absolute inset-0"
                initial={{ rotate: baseAngle }}
                animate={{ rotate: baseAngle + 360 }}
                transition={{
                  duration: tech.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-slate-900/40 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-md"
                  style={{
                    top: `calc(50% - ${radius})`,
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  initial={{ rotate: -baseAngle }}
                  animate={{ rotate: -(baseAngle + 360) }}
                  transition={{
                    duration: tech.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <tech.Icon
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    color={tech.color}
                  />
                </motion.div>
              </motion.div>
            );
          });
        })}
      </div>
    </motion.div>
  );
};

export default HeroIllustration;
