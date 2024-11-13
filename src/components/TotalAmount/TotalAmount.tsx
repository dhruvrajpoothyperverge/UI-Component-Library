import React from "react";
import { RightArrow } from "../Icons/icon";
import Button from "../Button/Button";

interface TotalAmountProps {
  amount: number;
  onClick: () => void;
  isDisabled?: boolean;
}

const TotalAmount: React.FC<TotalAmountProps> = ({
  amount,
  onClick,
  isDisabled = true,
}) => {
  return (
    <div className="flex flex-col items-center bg-[rgba(0,0,0,0.5)] backdrop-blur-md p-5 fixed bottom-0 left-0 w-full">
      <h6 className="text-white underline font-semibold underline-offset-2 mb-4">
        Total Amount
      </h6>
      <h4 className="text-[rgba(51,181,40,1)] text-[55px] mb-6">
        ${amount.toFixed(2)}
      </h4>

      <Button
        text="Pay Now"
        className="w-full"
        icon={<RightArrow />}
        onClick={onClick}
        disabled={isDisabled}
      />
    </div>
  );
};

export default TotalAmount;
