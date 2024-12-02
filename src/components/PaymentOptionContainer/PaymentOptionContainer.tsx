import React, { useState } from "react";
import PaymentOption from "../PaymentOption/PaymentOption";

interface PaymentOptionContainerProps {
  data: { title: string; image: string; background?: string }[];
  selectedOption: string | null;
  onSelect: (title: string) => void;
}

const PaymentOptionContainer: React.FC<PaymentOptionContainerProps> = ({
  data,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-[rgba(255,255,255,0.52)]">
        Select Payment Options
      </p>
      <div className="flex flex-col gap-5">
        {data.map((item, index) => (
          <PaymentOption
            key={index}
            title={item.title}
            image={item.image}
            background={item.background}
            isSelected={selectedOption === item.title}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentOptionContainer;
