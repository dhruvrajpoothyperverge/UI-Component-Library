import React from "react";
import Heading from "../Heading/Heading";
import FoodItem from "../FoodItem/FoodItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface FoodItemProps {
  image: string;
  label: string;
  items: string[];
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

interface FoodItemContainerProps {
  data: FoodItemProps[];
  heading?: string;
  loading?: boolean;
}

const FoodItemContainer: React.FC<FoodItemContainerProps> = ({
  heading,
  data,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {heading && <Skeleton height={30} width={200} />}
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-5 bg-black rounded-lg flex">
              <Skeleton width={120} height={120} className="flex-shrink-0" borderRadius={"12px"} />
              <div className="flex flex-col justify-between ml-2 w-full">
                <Skeleton width={100} height={20} />
                <Skeleton width={80} height={10} count={3} />
                <Skeleton width={60} height={20} />
              </div>
              <div className="ml-auto my-auto flex items-center">
                <Skeleton width={40} height={120} borderRadius={"20px"}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-white text-lg">No food items available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {heading && <Heading label={heading} />}
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <FoodItem
            image={item.image}
            label={item.label}
            items={item.items}
            quantity={item.quantity}
            price={item.price}
            onIncrease={item.onIncrease}
            onDecrease={item.onDecrease}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItemContainer;
