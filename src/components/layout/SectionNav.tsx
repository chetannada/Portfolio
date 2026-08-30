"use client";

import { motion } from "framer-motion";
import { FaHome, FaUser, FaDesktop, FaAddressCard } from "react-icons/fa";


const navItems = [
  { label: "Home", icon: <FaHome size={18} />, target: "#home", id: "home" },
  { label: "About", icon: <FaUser size={16} />, target: "#about", id: "about" },
  {
    label: "Projects",
    icon: <FaDesktop size={17} />,
    target: "#projects",
    id: "projects",
  },
  {
    label: "Contact",
    icon: <FaAddressCard size={18} />,
    target: "#contact",
    id: "contact",
  },
];

interface SectionNavProps {
  activeSection: string;
}

const SectionNav = ({ activeSection }: SectionNavProps) => {
  return (
    <span className="hidden lg:flex items-center gap-2">
      {navItems.map(({ label, icon, target, id }) => (
        <motion.a
          key={label}
          href={target}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          className={`nav-pill flex items-center gap-2 px-3 py-2 text-base font-medium text-text rounded-full ${
            activeSection === id ? "active" : ""
          }`}
        >
          <span
            className={`transition-colors duration-300 ${
              activeSection === id ? "text-secondary" : ""
            }`}
          >
            {icon}
          </span>
          <span>{label}</span>
          <span className="active-dot" />
        </motion.a>
      ))}

    </span>
  );
};

export default SectionNav;
