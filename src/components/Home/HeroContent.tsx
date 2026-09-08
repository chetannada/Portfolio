"use client";

import { motion, Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroContent = () => {
  return (
    <motion.div
      className="flex-1 w-full flex justify-center items-start flex-col gap-5 z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <div className="border-beam inline-block">
          <div className="border-beam-inner inline-flex items-center gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 text-secondary text-xs sm:text-sm font-semibold tracking-wide">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-secondary"></span>
            </span>
            Available for new opportunities
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-2 flex flex-col gap-1 sm:gap-2"
      >
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-neutral-400">
          Hi There!{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋</span>{" "}
          I&apos;m
        </h2>
        <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-text leading-tight sm:leading-none">
          Chetan Nada.
        </h1>
        <h2 className="text-2xl sm:text-4xl lg:text-[3rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-secondary to-purple-500 leading-tight">
          Full Stack Engineer.
        </h2>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="min-h-12 sm:min-h-16 mt-2 text-lg sm:text-xl lg:text-2xl font-medium text-neutral-500 dark:text-neutral-400"
      >
        <Typewriter />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed mt-2"
      >
        I specialize in architecting scalable enterprise web applications,
        building reusable design systems, and integrating intelligent AI-powered
        solutions to solve complex business problems.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-4 mt-6"
      >
        <Link
          href="#projects"
          className="
            group relative inline-flex items-center gap-2
            rounded-xl px-7 py-3.5 text-sm font-semibold text-white
            bg-linear-to-r from-secondary via-orange-500 to-amber-500
            shadow-lg shadow-secondary/30
            transition-all duration-300
            hover:scale-105 hover:shadow-xl hover:shadow-secondary/40
          "
        >
          <span className="absolute inset-0 rounded-xl bg-linear-to-r from-secondary via-orange-500 to-amber-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
          <span className="relative z-10 flex items-center gap-2">
            View Projects
            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>

        <Link
          href="#contact"
          className="
            group relative inline-flex items-center gap-2
            rounded-xl border border-secondary/30 px-7 py-3.5
            text-sm font-semibold text-text
            bg-card/60 backdrop-blur-sm
            transition-all duration-300
            hover:border-secondary/60 hover:bg-card/80
            hover:shadow-lg hover:shadow-secondary/15
            hover:scale-105
          "
        >
          <FiMail
            size={16}
            className="text-secondary/70 transition-colors duration-300 group-hover:text-secondary"
          />
          Contact Me
        </Link>

        <div className="flex items-center gap-3 ml-1">
          <a
            href="https://github.com/ChetanNada"
            target="_blank"
            rel="noreferrer"
            className="
              group relative p-3.5 rounded-xl
              border border-border/60 bg-card/50
              text-neutral-500 dark:text-neutral-400
              backdrop-blur-sm
              transition-all duration-300
              hover:border-neutral-700 hover:dark:border-neutral-500
              hover:bg-neutral-800 hover:text-white
              hover:shadow-lg hover:shadow-neutral-800/30 hover:dark:shadow-neutral-600/20
              hover:scale-110
            "
          >
            <FaGithub size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/chetannada"
            target="_blank"
            rel="noreferrer"
            className="
              group relative p-3.5 rounded-xl
              border border-border/60 bg-card/50
              text-neutral-500 dark:text-neutral-400
              backdrop-blur-sm
              transition-all duration-300
              hover:border-[#0A66C2] hover:bg-[#0A66C2]
              hover:text-white
              hover:shadow-lg hover:shadow-[#0A66C2]/30
              hover:scale-110
            "
          >
            <FaLinkedin size={19} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
