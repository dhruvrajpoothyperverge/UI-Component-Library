import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface Path {
  icon: ReactNode;
  label?: string;
  url: string;
}

interface NavbarProps {
  data: Path[];
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex justify-around w-full h-20  text-white bg-[rgba(0,0,0,0.79)] shadow-first rounded-t-full backdrop-blur-sm fixed bottom-0 left-0">
      {data.map((ele, index) => {
        return (
          <Link
            to={ele.url}
            key={index}
            className="flex items-center justify-center w-14 h-full relative"
            title={ele.label || ""}
          >
            <span
              className={`w-5 h-5 ${
                currentPath === ele.url ? "text-primary scale-[1.3]" : ""
              }`}
            >
              {ele.icon}
            </span>

            {currentPath === ele.url && (
              <div className="w-full h-2 rounded-full bg-primary absolute bottom-0"></div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
