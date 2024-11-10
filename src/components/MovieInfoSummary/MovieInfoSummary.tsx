import React from "react";
import { Exchange } from "../Icons/icon";

interface MovieInfoSummaryProps {
  image: string;
  title: string;
  productionName: string;
}

const MovieInfoSummary: React.FC<MovieInfoSummaryProps> = ({
  image,
  title,
  productionName,
}) => {
  return (
    <div className="w-auto aspect-[3/2] max-h-[50vh] relative rounded-2xl">
      <img
        src={image}
        alt=""
        className="w-full h-full object-fill rounded-2xl"
      />

      <div className="flex justify-between items-center absolute bottom-0 left-0 backdrop-blur-sm w-full px-3 py-1.5 text-white bg-[rgba(0,0,0,0.7)] rounded-b-2xl">
        <div>
          <h6 className="font-semibold text-xl">{title}</h6>
          <p className="font-light text-[11px]">{productionName}</p>
        </div>

        <div className="cursor-pointer">
          <Exchange />
        </div>
      </div>
    </div>
  );
};

export default MovieInfoSummary;
