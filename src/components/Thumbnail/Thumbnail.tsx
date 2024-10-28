import React, { HTMLAttributes } from "react";

interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  link: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, link,className,...props }) => {
  return (
    <div className={`w-[150px] h-[200px] rounded-xl bg-gray-300 ${className}`} {...props}>
      <img src={image} className="w-full h-full"/>
    </div>
  );
};

export default Thumbnail;
