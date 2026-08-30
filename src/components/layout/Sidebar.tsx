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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sidebarOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sidebarOpen, onClose]);

  return (
    <div
      className={`sidebar-panel bg-primary/95 backdrop-blur-xl border-l border-border/20 shadow-2xl ${
        sidebarOpen ? "open" : ""
      }`}
    >
      <div className="flex items-center justify-between px-5 h-16 border-b border-black/6 dark:border-white/6 shrink-0">
        <a href="/" onClick={onClose} className="flex items-center">
          <Logo />
        </a>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-xl flex items-center justify-center border border-black/10 dark:border-white/10 bg-black/3 dark:bg-white/4 hover:bg-secondary/10 hover:border-secondary/30 hover:text-secondary hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Close sidebar"
        >
          <IoMdClose size={22} />
        </button>
      </div>

      <nav className="flex-1 py-4 flex flex-col">
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

        <div className="pt-4 mt-2 mx-4 border-t border-border/20">
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
      </nav>
    </div>
  );
};

export default Sidebar;
