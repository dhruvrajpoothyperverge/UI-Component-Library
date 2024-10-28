import React from "react";

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
      <a href={link}>
        <img src={image} alt="" className="w-full h-full"/>
        <p className="absolute bottom-4 left-4 font-semibold text-xl text-white">{label}</p>
      </a>
    </div>
  );
};

export default CarouselImage;
