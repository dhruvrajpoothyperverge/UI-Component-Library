import React from "react";
import Heading from "../Heading/Heading";
import FoodItem from "../FoodItem/FoodItem";

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
}

const FoodItemContainer: React.FC<FoodItemContainerProps> = ({
  heading,
  data,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {heading && <Heading label={heading} />}

      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default FoodItemContainer;
