import { ReactNode } from "react";
import NavLink from "./NavLink";

type INavbarLinksProps = {
  children: ReactNode;
};

const NavbarLinks = ({ children }: INavbarLinksProps) => {
  return (
    <div className="items-center sticky top-0 bg-gray-100 z-40 mr-20 mb-2 hidden md:block">
      <ul className="flex items-center font-medium text-xl text-gray-800 gap-6">
        <NavLink href="/map" label="Map" />
        <NavLink href="/ports" label="Ports" />
        <NavLink href="/containers" label="Containers" />
        <NavLink href="/news" label="News" />
        <NavLink href="/about" label="About" />
        {children}
      </ul>
    </div>
  );
};

export default NavbarLinks;
