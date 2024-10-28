import React from "react";
import PaymentOption from "../PaymentOption/PaymentOption";

interface PaymentOptionContainerProps {
  data: { title: string; image: string; background?: string }[];
}

const PaymentOptionContainer: React.FC<PaymentOptionContainerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-[rgba(255,255,255,0.52)]">
        Select Payment Options
      </p>

      <div className="flex flex-col gap-6">
        {data.map((item, index) => {
          return (
            <PaymentOption
              title={item.title}
              image={item.image}
              background={item.background}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PaymentOptionContainer;
