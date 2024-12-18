import React from "react";
import { Link } from "react-router-dom";

interface HeadingProps {
  label: string;
  seeAllLink?: string;
}

const Heading: React.FC<HeadingProps> = ({ label, seeAllLink }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <p className="text-white font-semibold">{label}</p>
      </div>

      <div className={`w-14 ${seeAllLink ? "block" : "invisible"}`}>
        {seeAllLink && (
          <Link to={seeAllLink} className="text-primary underline">
            See All
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
