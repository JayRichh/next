import Link from "next/link";
import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { useState } from "react";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <Background image="/assets/images/boat.jpg">
      <HeroOneButton
        title={
          <>
            {"Exploring New Frontiers in\n"}
            <span className="text-tertiary-500">Marine Research</span>
          </>
        }
        description={
          <>
            {
              "At the forefront of marine research, our company is dedicated to "
            }
            <strong>pioneering innovations</strong>
            {" that enhance our understanding of oceanic ecosystems. We offer "}
            <strong>advanced research vessels</strong>
            {" and "}
            <strong>cutting-edge technologies</strong>
            {
              " to facilitate groundbreaking studies and discoveries. Partner with us to "
            }
            <strong>explore the mysteries of the deep</strong>
            {" and contribute to a more "}
            <strong>sustainable future</strong>
            {" through our commitment to scientific excellence and discovery."}
          </>
        }
        button={
          <Link href="/research">
            <a
              className="inline-flex items-center font-bold text-tertiary-500 text-lg"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Button xl>Discover Our Research</Button>
              <span
                className={`group transition-all duration-300 ml-2 flex items-center justify-center ${
                  hover
                    ? "translate-x-1 opacity-100 animate-bounce"
                    : "translate-x-0 opacity-0"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-tertiary-100 stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="m21.71 11.29L13.71 3.29c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l6.29 6.29H3c-.55 0-1 .45-1 1s.45 1 1 1h15.59l-6.29 6.29c-.39.39-.39 1.02 0 1.41.2.2.45.29.71.29s.51-.1.71-.29l8-8c.39-.39.39-1.02 0-1.41Z"></path>
                </svg>
              </span>
            </a>
          </Link>
        }
      />
    </Background>
  );
};

export { Hero };
