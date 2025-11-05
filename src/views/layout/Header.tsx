"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";
import Logo from "./Logo";
import SectionNav from "./SectionNav";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setSidebarOpen(false);
    }
  }, [windowSize.width]);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="fixed top-0 z-50 px-16 max-xs:px-8 h-16 w-full bg-primary border-b-2 border-b-secondary transition-colors duration-300">
      <nav className="flex justify-between items-center h-full">
        <a href="/">
          <Logo />
        </a>

        <div className="flex items-center gap-2">
          <SectionNav />
          <ThemeToggle />

          <div
            onClick={handleSidebar}
            className="hidden max-lg:block ml-1 text-4xl cursor-pointer"
          >
            {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>
        </div>

        {sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} />}
      </nav>
    </header>
  );
};

export default Header;
