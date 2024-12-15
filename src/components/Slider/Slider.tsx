import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SliderProps {
  data: {
    link: string;
    image: string;
  }[];
  isLoading?: boolean;
  error?: string | null;
}

const Slider: React.FC<SliderProps> = ({
  data,
  isLoading = false,
  error = null,
}) => {
  if (error) {
    return (
      <div className="text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 flex-nowrap overflow-x-scroll">
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-[182px] h-[268px] shrink-0">
              <Skeleton className="h-full" borderRadius={"12px"} />
            </div>
          ))
        : data.map((item, index) => (
            <Link to={item.link} className="shrink-0" key={index}>
              <img
                src={item.image}
                srcSet={`${item.image} 1x, ${item.image}?resolution=2x 2x`}
                alt="movie thumbnail"
                className="rounded-xl"
                width={182}
                height={268}
              />
            </Link>
          ))}
    </div>
  );
};

export default Slider;
