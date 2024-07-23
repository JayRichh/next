import { ReactNode, useEffect, useState } from "react";
import Menu from "./Menu";
import { Logo } from "./Logo";
import Link from "next/link";

type INavbarProps = {
  children?: ReactNode;
};

const NavbarTwoColumns = ({ children }: INavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldShowNavLinks = !isScrolled && !isMobile;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`flex flex-wrap justify-between items-center mx-auto px-3 py-3 transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <Logo xl />
        {shouldShowNavLinks && (
          <div className="items-center sticky top-0 z-40 mr-20 mb-2 hidden md:block">
            <ul className="flex items-center font-medium text-xl text-gray-800 gap-6">
              <li className="list-none">
                <Link href="/map">
                  <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-tertiary-500">
                    Map
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/ports">
                  <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-tertiary-500">
                    Ports
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/containers">
                  <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-tertiary-500">
                    Containers
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/news">
                  <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-tertiary-500">
                    News
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                </Link>
              </li>
              <li className="list-none">
                <Link href="/about">
                  <a className="group relative inline-block text-gray-800 transition duration-300 ease-in-out hover:text-tertiary-500">
                    About
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-tertiary-100 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </a>
                </Link>
              </li>
              {children}
            </ul>
          </div>
        )}
        <div className="absolute top-0 right-0 p-3 z-50">
          <Menu showNavLinks={isScrolled || isMobile} />
        </div>
      </div>
    </div>
  );
};

export { NavbarTwoColumns };
