import { useEffect } from "react";
import Menu from "../components/menu";
import { IoHome } from "react-icons/io5";

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <ul
      className={`fixed top-16 right-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-80 min-w-48 max-w-80 h-full bg-primary z-50 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Menu icon={<IoHome />} label="Home" pxClass="px-12" />
    </ul>
  );
};

export default Sidebar;
