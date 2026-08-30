"use client";

import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 transition-all duration-300 hover:bg-secondary/10 hover:text-secondary focus:outline-none cursor-pointer"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {theme === "light" ? <MdDarkMode size={20} /> : <BsSunFill size={20} />}
    </button>
  );
};

export default ThemeToggle;
