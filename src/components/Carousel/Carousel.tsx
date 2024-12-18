import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselImage from "../CarouselImage/CarouselImage";
import Skeleton from "react-loading-skeleton";

interface CarouselItem {
  label: string;
  image: string;
  link: string;
}

interface CarouselProps {
  data: CarouselItem[];
  dots?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  isLoading?: boolean;
  error?: string | null;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  dots = true,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 3000,
  isLoading = false,
  error,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      infinite
        ? (prevIndex + 1) % data.length
        : Math.min(prevIndex + 1, data.length - 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      infinite
        ? (prevIndex - 1 + data.length) % data.length
        : Math.max(prevIndex - 1, 0)
    );
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplaySpeed, nextSlide]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="relative aspect-[2/1] max-h-[50vh] overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence>
          {isLoading
            ? Array.from({ length: 1 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  className="absolute w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Skeleton
                    className="aspect-[2/1] max-h-[50vh] w-full"
                    borderRadius={"16px"}
                  />
                </motion.div>
              ))
            : data.length > 0 && (
                <motion.div
                  key={currentIndex}
                  className="absolute w-full h-full"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CarouselImage
                    image={data[currentIndex].image}
                    link={data[currentIndex].link}
                    label={data[currentIndex].label}
                  />
                </motion.div>
              )}
        </AnimatePresence>
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ▶
      </button>

      {dots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
