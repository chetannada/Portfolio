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
      className={`fixed top-14 right-0 w-[40%] min-w-40 h-full bg-primary z-50 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Menu icon={<IoHome />} label="Home" pxClass="px-8" />
    </ul>
  );
};

export default Sidebar;
