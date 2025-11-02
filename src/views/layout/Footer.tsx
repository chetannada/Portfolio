"use client";

import { IoMdHeart } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="p-2 flex flex-row flex-wrap justify-center items-center gap-2 bg-primary border-t border-t-secondary">
      Created By <IoMdHeart color={theme === "dark" ? "red" : "darkred"} />
      <a
        href="https://www.linkedin.com/in/chetannada"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold tracking-wider hover:underline"
      >
        Chetan Nada
      </a>
      <FaRegCopyright />
      {year}
      <a
        href="https://github.com/chetannada/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:underline tracking-widest"
      >
        portfo
        <span className="text-secondary">lio.</span>
      </a>
    </footer>
  );
};

export default Footer;
