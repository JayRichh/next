import { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left flex flex-col items-start justify-center min-h-screen px-6 py-12 lg:px-24 lg:py-20 gap-8">
    <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 font-extrabold leading-tight tracking-tight">
      {props.title}
    </h1>
    <hr className="py-12" />
    <div className="text-lg md:text-xl lg:text-2xl text-gray-800 mt-4 mb-8 max-w-3xl">
      {props.description}
    </div>
    {props.button}
  </header>
);

export { HeroOneButton };
