import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  image: string;
  link: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  image,
  link,
  className,
  ...props
}) => {
  return (
    <Link to={link}>
      <div
        className={`w-[150px] h-[200px] rounded-xl bg-gray-900 ${className}`}
        {...props}
      >
        <img src={image} className="w-full h-full bg-gray-900 rounded-xl object-fill" />
      </div>
    </Link>
  );
};

export default Thumbnail;
