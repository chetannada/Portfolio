"use client";

import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "Gemini API",
  "Git",
  "Jest",
  "React Testing Library",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const AboutContent = () => {
  return (
    <motion.div
      className="flex-1 flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Label */}
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        <span className="h-px w-8 bg-secondary" />
        <span className="text-secondary font-semibold tracking-widest uppercase text-sm flex items-center gap-1.5">
          <HiSparkles className="text-base" />
          About Me
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
      >
        Full Stack Engineer
        <br />
        <span className="text-secondary">Powered by AI.</span>
      </motion.h2>

      {/* Role Tags */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        {[
          <>
            SDE-2 <span className="inline-block -translate-y-0.5">@</span>{" "}
            Careplix
          </>,
          "MERN Stack Developer",
          "AI Application Developer",
        ].map((role, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary font-semibold">
              {role}
            </span>
            {i < 2 && (
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Description Paragraphs */}
      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        I&apos;m a Full Stack Engineer specializing in{" "}
        <span className="text-text font-semibold">React.js</span>,{" "}
        <span className="text-text font-semibold">Next.js</span>,{" "}
        <span className="text-text font-semibold">TypeScript</span>, and the{" "}
        <span className="text-text font-semibold">MERN stack</span>, with a
        passion for crafting enterprise-grade web applications that are
        performant, scalable, and beautifully designed.
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        With experience leading end-to-end development across{" "}
        <span className="text-text font-semibold">10+ applications</span>, I
        architect reusable design systems, build robust RESTful APIs, and
        optimize for{" "}
        <span className="text-text font-semibold">90+ Lighthouse scores</span>.
        I also mentor engineering teams and contribute to open-source, with a
        project featured on GitHub Trending.
      </motion.p>

      {/* AI Paragraph with accent border */}
      <motion.div
        variants={itemVariants}
        className="relative pl-4 border-l-2 border-secondary/50"
      >
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary/80 animate-pulse" />
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Recently, I&apos;ve expanded into{" "}
          <span className="text-text font-semibold">
            AI application development
          </span>
          , integrating{" "}
          <span className="text-text font-semibold">
            Large Language Models (LLMs)
          </span>{" "}
          to build intelligent features — from{" "}
          <span className="text-text font-semibold">
            AI-powered text summarization
          </span>{" "}
          and developer tools to workflow automation. I&apos;m excited about the
          intersection of{" "}
          <span className="text-secondary font-semibold">
            Full Stack Engineering + AI
          </span>{" "}
          and love building products that make developers and businesses more
          productive.
        </p>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
      >
        Beyond code, I&apos;m a{" "}
        <span className="text-text font-semibold">
          Top 1% Mentor on Topmate
        </span>{" "}
        and YouTube educator with 85k+ subscribers, passionate about helping
        developers grow and build great software.
      </motion.p>

      {/* Tech Stack Pills */}
      <motion.div variants={itemVariants} className="mt-2">
        <p className="text-sm font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-500 mb-3 flex items-center gap-2">
          <HiSparkles className="text-secondary text-base" />
          Core Technologies
        </p>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech) => {
            const isAI = tech === "Gemini API";
            return (
              <motion.span
                key={tech}
                variants={pillVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border cursor-default transition-colors duration-300
                  ${
                    isAI
                      ? "border-secondary/50 bg-secondary/10 text-secondary hover:bg-secondary/20"
                      : "border-border bg-card text-text hover:border-secondary hover:text-secondary"
                  }`}
              >
                {isAI && <HiSparkles className="inline mr-1 text-xs" />}
                {tech}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
