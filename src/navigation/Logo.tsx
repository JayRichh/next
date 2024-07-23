import { useState } from "react";
import { AppConfig } from "../utils/AppConfig";

type ILogoProps = {
  xl?: boolean;
};

const Logo = ({ xl }: ILogoProps) => {
  const [hover, setHover] = useState(false);
  const [keepOpen, setKeepOpen] = useState(false);
  const [underline, setUnderline] = useState(false);

  const size = xl ? "72" : "72";
  const fontStyle = xl ? "font-semibold text-3xl" : "font-semibold text-xl";

  const handleMouseEnterLogo = () => {
    setHover(true);
  };

  const handleMouseLeaveLogo = () => {
    if (!keepOpen) {
      setHover(false);
    }
  };

  const handleMouseEnterSiteName = () => {
    setKeepOpen(true);
    setUnderline(true);
  };

  const handleMouseLeaveSiteName = () => {
    setKeepOpen(false);
    setHover(false);
    setUnderline(false);
  };

  return (
    <span
      className={`relative inline-flex items-center ${fontStyle} absolute top-0 left-0 z-50`}
    >
      <svg
        onMouseEnter={handleMouseEnterLogo}
        onMouseLeave={handleMouseLeaveLogo}
        className="text-tertiary-900 stroke-current z-10 logo-svg cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 96 120"
        fill="none"
        stroke="#963333"
        strokeWidth="0.501"
        strokeLinejoin="bevel"
        fillRule="evenodd"
      >
        <g
          fill="none"
          stroke="black"
          fontFamily="Times New Roman"
          fontSize="16"
          transform="scale(1 -1)"
        >
          <g transform="translate(0 -96)">
            <g>
              <path
                d="M 11.54,9.751 L 13.239,13.14 L 8.442,28.41 L 85.733,28.41 L 85.846,28.409 L 77.643,16.529 L 84.423,14.832 L 82.727,9.751 L 11.54,9.751 Z M 9.123,31.409 L 9.123,48.725 L 4.038,48.725 L 4.038,62.284 L 14.205,62.284 L 14.205,65.673 L 26.06,69.074 L 26.075,57.198 L 22.684,57.198 L 22.684,53.812 L 26.075,53.812 L 26.075,31.409 L 9.123,31.409 Z M 29.356,31.409 L 29.356,45.144 L 38.357,45.144 L 38.357,31.409 L 29.356,31.409 Z M 47.213,32.967 L 44.101,35.457 L 47.213,41.677 L 84.548,41.677 C 82.561,36.953 78.258,34.18 72.104,32.967 L 47.213,32.967 Z M 50.946,42.921 L 50.946,44.166 L 55.302,44.166 L 55.302,46.031 L 50.946,46.031 L 50.946,48.521 L 48.454,48.521 L 47.213,50.388 L 59.921,50.388 L 59.921,73.787 L 38.063,51.929 C 37.95,51.816 37.824,51.725 37.69,51.655 L 37.69,48.369 L 30.023,48.369 L 30.023,65.394 L 33.869,65.394 L 59.217,77.325 L 59.607,77.715 C 60.192,78.301 61.143,78.301 61.728,77.715 C 62.314,77.13 62.314,76.179 61.728,75.594 L 61.421,75.287 L 61.421,50.388 L 64.014,50.388 L 67.747,47.278 L 71.479,47.278 L 72.904,46.031 L 68.991,46.031 L 68.991,44.166 L 75.036,44.166 L 76.458,42.921 L 50.946,42.921 Z M 64.635,44.166 L 64.635,46.031 L 58.413,46.031 L 58.413,44.166 L 64.635,44.166 Z M 10.819,53.812 L 10.819,57.198 L 7.425,57.198 L 7.425,53.812 L 10.819,53.812 Z M 15.908,53.812 L 15.908,57.198 L 12.512,57.198 L 12.512,53.812 L 15.908,53.812 Z M 20.99,53.812 L 20.99,57.198 L 17.602,57.198 L 17.602,53.812 L 20.99,53.812 Z M 37.69,55.798 L 56.085,74.193 L 36.273,64.867 L 37.69,55.921 L 37.69,55.798 Z"
                strokeLinejoin="miter"
                strokeLinecap="round"
                stroke="none"
                strokeWidth="0.75"
                fill="#963333"
                markerStart="none"
                markerEnd="none"
                strokeMiterlimit="79.8403193612775"
              />
            </g>
          </g>
        </g>
      </svg>

      <div
        className="relative"
        onMouseEnter={handleMouseEnterSiteName}
        onMouseLeave={handleMouseLeaveSiteName}
      >
        <span
          className={`absolute pb-2 text-gray-900 left-full top-1/2 transform -translate-y-1/2 transition-all duration-500 cursor-pointer whitespace-nowrap ${
            hover || keepOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } ${underline ? "underline" : ""}`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            textDecorationColor: "rgba(200, 16, 46, 0.5);",
            overflow: "visible",
          }}
        >
          {AppConfig.site_name}
        </span>
      </div>
    </span>
  );
};

export { Logo };
