import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  className="",
  ...props
}) => {
  const baseClasses = `w-full bg-[#4D4D4D] px-6 py-3 rounded-lg bg-[rgba(77,77,77,0.4)] text-[rgba(255,255,255,0.27)] shadow-first`;

  return (
    <input
      className={`${baseClasses} ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      {...props}
    />
  );
};

export default Input;
