import React from "react";
import SelectQuantity from "../SelectQuantity/SelectQuantity";

interface FoodItemProps {
  image:string;
  label: string;
  items: string[];
  quantity: number;
  price: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const FoodItem: React.FC<FoodItemProps> = ({
  image,
  label,
  items,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="bg-black rounded-xl p-5 flex">
      <div className="border border-primary rounded-xl flex justify-center items-center w-[120px] h-[120px] relative">
        <img src={image} />
        <div className="absolute bottom-0 left-0 rounded-xl w-full h-1/3 opacity-70 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="flex flex-col justify-between ml-2">
        <div>
          <h5 className="text-base font-medium text-white">{label}</h5>

          {items.map((item, index) => {
            return (
              <p
                className="text-[10px] text-[rgba(255,255,255,0.44)]"
                key={index}
              >
                {item}
              </p>
            );
          })}
        </div>

        <div>
          <p className="text-white font-medium text-[10px]">Price:</p>
          <h6 className="text-[27px] text-[#33B528]">${price}</h6>
        </div>
      </div>

      <div className="ml-auto my-auto">
        <SelectQuantity
          maxAllowed={50}
          quantity={quantity}
          align="vertical"
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
    </div>
  );
};

export default FoodItem;
