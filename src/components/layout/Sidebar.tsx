"use client";

import { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaUser, FaDesktop, FaAddressCard, FaGithub } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";
import Logo from "./Logo";

interface SidebarProps {
  sidebarOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const sidebarItems = [
  { icon: <IoHome size={20} />, label: "Home", href: "#home", id: "home" },
  { icon: <FaUser size={18} />, label: "About", href: "#about", id: "about" },
  {
    icon: <FaDesktop size={19} />,
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    icon: <FaAddressCard size={20} />,
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];

const Sidebar = ({ sidebarOpen, onClose, activeSection }: SidebarProps) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`sidebar-panel bg-primary/95 backdrop-blur-xl border-l border-border/20 shadow-2xl ${
        sidebarOpen ? "open" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/20">
        <a href="/" onClick={onClose}>
          <Logo />
        </a>
        <button
          onClick={onClose}
          className="p-2 rounded-xl hover:bg-hover transition-colors cursor-pointer"
          aria-label="Close sidebar"
        >
          <IoMdClose size={24} />
        </button>
      </div>

      <nav className="flex-1 py-4">
        {sidebarItems.map(({ icon, label, href, id }) => (
          <a
            key={label}
            href={href}
            onClick={onClose}
            className={`sidebar-nav-item ${
              activeSection === id ? "active" : ""
            }`}
          >
            <span>{icon}</span>
            <span>{label}</span>
            <span className="sidebar-active-dot" />
          </a>
        ))}
      </nav>

      <div className="mt-auto px-4 pb-6">
        <div className="flex items-center rounded-xl border border-border/30 bg-card/50 overflow-hidden">
          <button
            onClick={toggleTheme}
            className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium hover:bg-hover transition-all duration-300 cursor-pointer border-r border-border/30"
          >
            {theme === "light" ? (
              <MdDarkMode size={18} />
            ) : (
              <BsSunFill size={16} />
            )}
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <a
            href="https://github.com/chetannada/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="github-spin flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium hover:bg-hover transition-all duration-300"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
