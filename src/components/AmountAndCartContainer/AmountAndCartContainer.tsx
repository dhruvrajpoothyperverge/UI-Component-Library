import React from "react";
import Button from "../Button/Button";
import StickyBottomContainer from "../StickyBottomContainer/StickyBottomContainer";

interface AmountAndCartContainerProps {
  totalAmount: number;
  addToCart: () => void;
  disabled?: boolean;
}

const AmountAndCartContainer: React.FC<AmountAndCartContainerProps> = ({
  totalAmount,
  addToCart,
  disabled = false,
}) => {
  return (
    <StickyBottomContainer>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-white font-medium text-xs">Total Price:</p>
          <h6 className="font-semibold text-4xl text-[#33B528]">
            ${totalAmount.toFixed(2)}
          </h6>
        </div>

        <Button
          text="Add to cart"
          size="small"
          className="flex-1"
          onClick={addToCart}
          disabled={disabled}
        />
      </div>
    </StickyBottomContainer>
  );
};

export default AmountAndCartContainer;
