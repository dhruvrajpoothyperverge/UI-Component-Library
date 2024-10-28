import React, { ReactNode } from "react";

interface BackgroundContainerProps {
  bgurl?: string;
  children?: ReactNode;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  bgurl,
  children,
}) => {
  return (
    <div
      className={`bg-[url('${bgurl}')] bg-no-repeat bg-cover bg-center bg-fixed w-full min-h-screen flex flex-col justify-end p-5`}
    >
      {children}
    </div>
  );
};

export default BackgroundContainer;
