import React, { HTMLAttributes, ReactNode } from "react";

interface StickyBottomContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const StickyBottomContainer: React.FC<StickyBottomContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`fixed bottom-0 w-full backdrop-blur-md bg-[rgba(0,0,0,0.5)] p-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default StickyBottomContainer;
