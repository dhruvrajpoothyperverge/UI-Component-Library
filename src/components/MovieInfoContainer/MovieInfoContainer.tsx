import React from "react";
import { LeftArrow, Heart } from "../Icons/icon";
import VideoBg from "../VideoBg/VideoBg";
import MovieInfo from "../MovieInfo/MovieInfo";
import Slider from "../Slider/Slider";
import Description from "../Description/Description";
import HeadingContainer from "../HeadingContainer/HeadingContainer";

export interface Movie {
  _id: string;
  image: string;
  title: string;
  productionHouse: string;
  rating: number;
  imdb: number;
  description: string;
  imagesInTheMovie: {
    link: string;
    image: string;
  }[];
  videoLink: string;
  videoThumbnail: string;
  releaseDate: string;
}

interface MovieInfoContainerProps {
  onBackClick: () => void;
  onHeartClick: () => void;
  isFavorite?: boolean;
  movieInfo: Movie;
}

const MovieInfoContainer: React.FC<MovieInfoContainerProps> = ({
  onBackClick,
  onHeartClick,
  isFavorite = false,
  movieInfo,
}) => {
  return (
    <div>
      <div className="relative">
        <VideoBg thumbnail={movieInfo?.videoThumbnail} link={movieInfo?.videoLink} />

        <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black via-[#0000009f] to-transparent" />

        <div className="fixed z-50 top-10 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center">
          <button
            className="rounded-lg bg-white text-primary p-2.5"
            onClick={onBackClick}
          >
            <LeftArrow />
          </button>

          <button
            className="bg-[rgba(0,0,0,0.44)] p-1.5 rounded-full"
            onClick={onHeartClick}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "text-pink-500" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-7 px-5 pb-7">
        <MovieInfo data={movieInfo} />

        <div className="flex flex-col gap-4">
          <Description
            data={movieInfo?.description || "No description available."}
          />
          <HeadingContainer label="Images in the movie">
            {movieInfo?.imagesInTheMovie &&
            movieInfo?.imagesInTheMovie.length > 0 ? (
              <Slider data={movieInfo?.imagesInTheMovie || []} />
            ) : (
              <div>No images available for this movie.</div>
            )}
          </HeadingContainer>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoContainer;
