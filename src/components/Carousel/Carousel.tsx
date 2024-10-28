import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CarouselImage from "../CarouselImage/CarouselImage";

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
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  dots = true,
  infinite = false,
  autoplay = false,
  autoplaySpeed = 3000,
}) => {
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
        {data.map((item, index) => (
          <SwiperSlide key={index} className="pb-8">
            <CarouselImage image={item.image} link={item.link} label={item.label} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
