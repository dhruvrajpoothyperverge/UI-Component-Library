import React from "react";
import Button from "../Button/Button";
import StickyBottomContainer from "../StickyBottomContainer/StickyBottomContainer";

interface AmountAndCartContainerProps {
  totalAmount: number;
  addToCart: () => void;
}

const AmountAndCartContainer: React.FC<AmountAndCartContainerProps> = ({
  totalAmount,
  addToCart,
}) => {
  return (
    <StickyBottomContainer>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="text-white font-medium text-xs">Total Price:</p>
          <h6 className="font-semibold text-4xl text-[#33B528]">
            ${totalAmount}
          </h6>
        </div>

        <Button
          text="Add to cart"
          size="small"
          className="flex-1"
          onClick={addToCart}
        />
      </div>
    </StickyBottomContainer>
  );
};

export default AmountAndCartContainer;
