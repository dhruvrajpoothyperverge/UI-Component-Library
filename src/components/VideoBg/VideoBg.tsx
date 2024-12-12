import React, { useState } from "react";
import { Play } from "../Icons/icon";

interface VideoBgProps {
  thumbnail: string;
  link: string;
}

const VideoBg: React.FC<VideoBgProps> = ({ thumbnail, link }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-[3/2] max-h-[50vh]">
      {isPlaying ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          src={link}
          autoPlay
          loop
          controls
          // onClick={() => setIsPlaying(false)}
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white w-14 h-14 rounded-full bg-opacity-50 hover:bg-opacity-40 transition-opacity text-primary"
            onClick={handleVideoClick}
            aria-label="Video play pause button"
          >
            <Play />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBg;
