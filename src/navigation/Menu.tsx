import { useRef, useState, useEffect } from "react";
import Link from "next/link";

type MenuProps = {
  showNavLinks: boolean;
};

const Menu = ({ showNavLinks }: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="relative">
      <div
        className="cursor-pointer flex items-center p-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ overflow: "hidden" }}
      >
        <svg
          className={`text-tertiary-900 stroke-current mr-0 z-10`}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        <span
          className={`absolute left-1/2 top-0 transform -translate-x-1/2 transition duration-500 text-lg ${
            hover ? "translate-y-16 opacity-100" : "translate-y-1/2 opacity-0"
          } rotate-90 text-gray-900`}
          style={{ transitionTimingFunction: "cubic-bezier(1,0,0,1)" }}
        >
          Menu
        </span>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 bg-white p-6 transition-transform duration-400 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-full md:w-1/3 md:h-full md:rounded-l-lg`}
        ref={menuRef}
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="absolute left-3 text-gray-500 stroke-current"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m20.71 19.29l-4.39-4.39c1.05-1.35 1.69-3.05 1.69-4.9 0-4.42-3.58-8-8-8S2 5.58 2 10s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69l4.39 4.39c.39.39 1 .39 1.41 0s.39-1 0-1.41ZM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 p-2 rounded-md bg-gray-100 focus:bg-white focus:ring-primary-500"
              style={{ border: "none" }}
            />
          </div>
          <svg
            className="text-primary-500 stroke-current mr-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setMenuOpen(false)}
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Navigate</h3>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <Link href="/our-fleet">
                <a className="hover:underline">Our fleet</a>
              </Link>
            </li>
            <li>
              <Link href="/windstaller-alliance">
                <a className="hover:underline">Windstaller Alliance</a>
              </Link>
            </li>
            <li>
              <Link href="/chartering-spot">
                <a className="hover:underline">Chartering | Spot</a>
              </Link>
            </li>
            <li>
              <Link href="/investors">
                <a className="hover:underline">Investors</a>
              </Link>
            </li>
          </ul>
        </div>

        {showNavLinks && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Site Map</h3>
            <ul className="mt-4 space-y-4 text-lg">
              <li>
                <Link href="/map">
                  <a className="hover:underline">Map</a>
                </Link>
              </li>
              <li>
                <Link href="/ports">
                  <a className="hover:underline">Ports</a>
                </Link>
              </li>
              <li>
                <Link href="/containers">
                  <a className="hover:underline">Containers</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="hover:underline">News</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:underline">About</a>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Sustainability</h3>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <Link href="/sustainability">
                <a className="hover:underline">Sustainability</a>
              </Link>
            </li>
            <li>
              <Link href="/job-opportunities">
                <a className="hover:underline">Job Opportunities</a>
              </Link>
            </li>
            <li>
              <Link href="/safety-management">
                <a className="hover:underline">Safety Management</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-4 space-y-4 text-lg">
            <li>
              <Link href="/our-story">
                <a className="hover:underline">Our story</a>
              </Link>
            </li>
            <li>
              <Link href="/news-media">
                <a className="hover:underline">News and media</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="hover:underline">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">Follow us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:underline">
              <svg
                className="text-primary-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.24c0-2.5 1.51-3.87 3.72-3.87 1.06 0 1.97.08 2.24.11v2.59h-1.54c-1.21 0-1.45.58-1.45 1.42v1.86h2.89l-.38 2.89h-2.51v6.99c4.78-.75 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="https://linkedin.com" className="hover:underline">
              <svg
                className="text-primary-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0-4 0" />
              </svg>
            </a>
            <a href="https://instagram.com" className="hover:underline">
              <svg
                className="text-primary-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.32 0" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
