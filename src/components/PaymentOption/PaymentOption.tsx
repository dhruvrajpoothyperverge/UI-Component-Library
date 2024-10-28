import React, { HTMLAttributes } from "react";

interface PaymentOptionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
  background?: string;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  title,
  image,
  background = "bg-[gray]",
  ...props
}) => {
  return (
    <div
      className={`w-full h-28 flex justify-between items-center p-2 rounded-2xl hover:border ${background}`}
      {...props}
    >
      <p className="text-white font-medium text-sm pl-5">Pay with {title}</p>

      <div className="bg-white rounded-xl w-24 h-24 flex justify-center items-center shadow-[8px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <img src={image} alt="" className="w-14" />
      </div>
    </div>
  );
};

export default PaymentOption;
