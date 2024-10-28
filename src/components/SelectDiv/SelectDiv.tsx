import React, { HTMLAttributes, ReactNode } from "react";

interface SelectDivProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  icon?: ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}

const SelectDiv: React.FC<SelectDivProps> = ({
  text,
  icon,
  isSelected = false,
  onClick,
  ...props
}) => {
  return (
    <div
      className={`flex justify-between items-center px-10 py-6 border-[3px] border-primary rounded-xl font-semibold ${
        isSelected ? "text-white bg-primary " : "bg-transparent text-primary"
      }`}
      onClick={onClick}
      {...props}
    >
      <p>{text}</p>

      {icon}
    </div>
  );
};

export default SelectDiv;
