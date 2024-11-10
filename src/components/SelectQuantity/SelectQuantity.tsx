import React from "react";
import { Minus, Plus } from "../Icons/icon";

interface SelectQuantityProps {
  label?: string;
  quantity: number;
  maxAllowed: number;
  align?: "horizontal" | "vertical";
  onIncrease: () => void;
  onDecrease: () => void;
}

const SelectQuantity: React.FC<SelectQuantityProps> = ({
  label,
  quantity,
  maxAllowed,
  align = "horizontal",
  onIncrease,
  onDecrease,
}) => {
  const isIncreaseDisabled = quantity >= maxAllowed;
  const isDecreaseDisabled = quantity <= 0;

  return (
    <div
      className={`flex ${
        align === "vertical" ? "flex-col-reverse" : "flex-row"
      } items-center gap-4`}
    >
       <div
        onClick={isDecreaseDisabled ? undefined : onDecrease}
        className={`border rounded-full w-[30px] h-[30px] flex items-center justify-center text-3xl cursor-pointer text-white ${
          isDecreaseDisabled && "opacity-40"
        }`}
      >
        <Minus/>
      </div>

      <div
        className={`flex flex-col items-center font-semibold text-white ${
          isDecreaseDisabled && isDecreaseDisabled && "opacity-40"
        }`}
      >
        <span className="text-xl">{quantity}</span>
        {label && <span className="text-[10px]">{label}</span>}
      </div>

      <div
        onClick={isIncreaseDisabled ? undefined : onIncrease}
        className={`border border-white rounded-full w-[30px] h-[30px] flex items-center justify-center text-3xl cursor-pointer text-white ${
          isIncreaseDisabled && "opacity-40"
        }`}
      >
        <Plus/>
      </div>
    </div>
  );
};

export default SelectQuantity;
