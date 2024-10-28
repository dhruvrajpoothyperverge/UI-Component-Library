import React, { useMemo } from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Star, HalfStar } from "../Icons/icon";

interface MovieData {
  image: string;
  title: string;
  productionHouse: string;
  rating: number;
  imdb: number;
}

interface MovieInfoProps {
  data: MovieData;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ data }) => {
  const { image, title, productionHouse, rating, imdb } = data;

  const renderStar = useMemo(() => {
    const maxRating = 5;
    const full: number = Math.max(0, Math.min(Math.floor(rating), maxRating));
    const hasHalf: boolean = rating % 1 > 0;

    return (
      <div className="flex gap-[1px]">
        {Array.from({ length: full }, (_, index) => (
          <Star key={index} className="text-[#E49600]" />
        ))}

        {hasHalf && <HalfStar className="text-[#E49600]" />}

        {Array.from({ length: maxRating - full - 1 }, (_, index) => (
          <Star key={index} className="text-white" />
        ))}
      </div>
    );
  }, [rating]);

  return (
    <div className="flex gap-4">
      <Thumbnail image={image} link="" />

      <div className="flex flex-col gap-2 mt-auto text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-xs font-light">{productionHouse}</p>
        <div className="flex gap-1 items-center">
          {renderStar}{" "}
          <span className="font-light text-xs">&#40; {rating} / 5 &#41;</span>
        </div>
        <div className="flex items-center gap-1.5 font-light text-xs">
          <img src="/src/assets/imdb.png" />
          <span>{imdb}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
