import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  infinite = false,
  autoplay = false,
  autoplaySpeed = 3000,
  isLoading = false,
  error,
}) => {
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-carousel",
          prevEl: ".swiper-button-prev-carousel",
        }}
        pagination={dots ? { clickable: true } : false}
        autoplay={autoplay ? { delay: autoplaySpeed } : false}
        loop={infinite}
        className="carousel-slider"
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index} className="pb-8">
                <Skeleton
                  className="aspect-[2/1] max-h-[50vh] w-full"
                  borderRadius={"16px"}
                />
              </SwiperSlide>
            ))
          : data.map((item, index) => (
              <SwiperSlide key={index} className="pb-8">
                <CarouselImage
                  image={item.image}
                  link={item.link}
                  label={item.label}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
