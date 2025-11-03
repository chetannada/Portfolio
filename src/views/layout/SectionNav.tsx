"use client";

import { motion } from "framer-motion";
import { FaHome, FaUser, FaDesktop, FaAddressCard } from "react-icons/fa";
import { FaCodeFork, FaStar } from "react-icons/fa6";

const navItems = [
  { label: "Home", icon: <FaHome size={18} />, target: "#home" },
  { label: "About", icon: <FaUser size={16} />, target: "#about" },
  { label: "Projects", icon: <FaDesktop size={16} />, target: "#projects" },
  {
    label: "Contact",
    icon: <FaAddressCard size={18} />,
    target: "#contact",
  },
];

const SectionNav = () => {
  return (
    <span className="hidden lg:flex items-center gap-6">
      {navItems.map(({ label, icon, target }) => (
        <motion.a
          key={label}
          href={target}
          whileHover={{ y: -2 }}
          className="group relative flex items-center gap-2 text-text"
        >
          <span className="text-[17px]">{icon}</span>
          <span className="text-base font-medium">{label}</span>
          <motion.span
            layout
            className="absolute left-0 -bottom-1.5 h-0.5 w-full bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          />
        </motion.a>
      ))}

      <a
        href="https://github.com/chetannada/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:scale-105 transition"
      >
        <FaCodeFork size={16} />
        <FaStar size={18} />
      </a>
    </span>
  );
};

export default SectionNav;
