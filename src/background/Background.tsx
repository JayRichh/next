import { ReactNode } from "react";

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  image?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className="relative overflow-hidden"
    style={{ backgroundColor: props.color }}
  >
    {props.image && (
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
    )}
    {props.children}
  </div>
);

export { Background };
