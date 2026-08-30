"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../../theme/ThemeToggle";
import { FaGithub } from "react-icons/fa";
import Sidebar from "./Sidebar";
import useWindowSize from "../../hooks/useWindowSize";
import Logo from "./Logo";
import SectionNav from "./SectionNav";
import useActiveSection from "../../hooks/useActiveSection";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const windowSize = useWindowSize();
  const activeSection = useActiveSection();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-floating">
      <div
        className={`header-glass transition-all duration-400 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav className="flex justify-between items-center h-16 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <a href="/" className="relative z-10 shrink-0">
            <Logo />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <SectionNav activeSection={activeSection} />

            <div className="flex items-center rounded-full border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden">
              <a
                href="https://github.com/chetannada/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="github-spin flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-text hover:text-secondary hover:bg-secondary/10 transition-all duration-300 border-r border-border/40"
              >
                <FaGithub size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <ThemeToggle />
            </div>

            <button
              onClick={handleSidebar}
              className={`hidden max-lg:flex hamburger-btn ml-1 ${
                sidebarOpen ? "open" : ""
              }`}
              aria-label="Toggle navigation menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div
            className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar
            sidebarOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activeSection={activeSection}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
