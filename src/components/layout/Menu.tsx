import { ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

interface MenuProps {
  icon: ReactNode;
  label: ReactNode;
  onClick?: MouseEventHandler<HTMLLIElement>;
  pxClass?: string;
}

const Menu = ({
  icon,
  label,
  onClick = () => {},
  pxClass = "px-4",
}: MenuProps) => (
  <li
    className={clsx(
      "flex items-center py-4 text-2xl cursor-pointer hover:bg-hover transition-colors duration-200",
      pxClass
    )}
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    {label}
  </li>
);

export default Menu;
