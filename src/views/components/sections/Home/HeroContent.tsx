"use client";

import { motion, Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      className="flex-1 flex justify-center items-start flex-col min-h-[400px] gap-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold tracking-wide">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          Available for new opportunities
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-2 flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-400">
          Hi There!{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋</span>{" "}
          I&apos;m
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-text leading-none whitespace-nowrap">
          Chetan Nada.
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-secondary to-purple-500 leading-tight">
          Full Stack Engineer.
        </h2>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="h-16 sm:h-20 mt-2 text-xl sm:text-2xl font-medium text-neutral-500 dark:text-neutral-400"
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
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-full bg-secondary text-white font-semibold shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-1 transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-full border-2 border-secondary/50 text-secondary font-semibold hover:bg-secondary/10 hover:border-secondary hover:-translate-y-1 transition-all duration-300"
        >
          Contact Me
        </a>
        <div className="flex items-center gap-3 ml-2">
          <a
            href="https://github.com/ChetanNada"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-full border border-border bg-card/50 text-neutral-600 dark:text-neutral-400 hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/chetannada"
            target="_blank"
            rel="noreferrer"
            className="p-3.5 rounded-full border border-border bg-card/50 text-neutral-600 dark:text-neutral-400 hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
