"use client";

import { useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <header className="fixed top-0 z-50 px-8 max-2xs:px-4 h-14 w-full bg-primary border-b-4 border-b-secondary transition-colors duration-300">
      <nav className="flex justify-between items-center h-full">
        <a href="/">
          <h1
            className={`text-2xl max-2xs:text-xl max-3xs:text-base font-semibold tracking-widest`}
          >
            portfo
            <span className="text-secondary">lio.</span>
          </h1>
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div
            onClick={handleSidebar}
            className="hidden max-lg:block ml-1 text-3xl max-2xs:text-2xl cursor-pointer"
          >
            {sidebarOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>
        </div>

        {sidebarOpen && (
          <>
            <Sidebar sidebarOpen={sidebarOpen} />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
