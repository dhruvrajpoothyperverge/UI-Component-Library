import React from "react";
import { Link } from "react-router-dom";

interface CarouselImageProps {
  label: string;
  image: string;
  link: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  label,
  image,
  link,
}) => {
  return (
    <div className="w-full rounded-2xl aspect-[2/1] max-h-[50vh] bg-gray-900 relative">
      <Link to={link}>
        <img src={image} alt="" className="w-full h-full rounded-2xl" />
        <p className="absolute bottom-4 left-4 font-semibold text-xl text-white">
          {label}
        </p>
      </Link>
    </div>
  );
};

export default CarouselImage;
