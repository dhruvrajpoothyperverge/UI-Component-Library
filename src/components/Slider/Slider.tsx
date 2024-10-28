import React from "react";
import { Link } from "react-router-dom";

interface SliderProps {
  data: {
    link: string;
    image: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="flex gap-3 flex-nowrap overflow-x-auto">
      {data.map((item, index) => {
        return (
          <Link to={item.link} className="shrink-0" key={index}>
            <img src={item.image} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default Slider;
