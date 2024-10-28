import React, { ReactNode } from "react";
import SelectDiv from "../SelectDiv/SelectDiv";

interface SelectDivContainerProps {
  data: {
    text: string;
    icon?: ReactNode;
    isSelected?: boolean;
    onClick: () => void;
  }[];
}

const SelectDivContainer: React.FC<SelectDivContainerProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-semibold text-sm text-[rgba(255,255,255,0.7)]">
        You need to select the mandatory fields &#40;*&#41; to proceed to the
        checkout page.
      </p>

      <div className="flex flex-col gap-5">
        {data.map((item, index) => {
          return (
            <SelectDiv
              text={item.text}
              icon={item.icon}
              isSelected={item.isSelected}
              onClick={item.onClick}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectDivContainer;
