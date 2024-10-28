import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div>
      <div className="w-full h-[3px] rounded-full bg-white" />
      <div className={`text-white font-semibold px-2 ${className}`}>
        <p>FIGMA</p>
        <p>MOVIE</p>
      </div>
      <div className="w-full h-[3px] rounded-full bg-white" />
    </div>
  );
};

export default Logo;
