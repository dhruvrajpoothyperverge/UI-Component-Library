import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "primarydark" | "tertiary";
  size?: "small" | "medium" | "large";
  isGlow?: boolean;
}

const variantClasses = {
  primary: "bg-primary text-white",
  primarydark: "bg-primarydark text-white",
  secondary: "bg-black text-white",
  tertiary: "bg-white text-primary",
};

const sizeClasses = {
  small: "text-sm h-10 font-medium",
  medium: "text-base h-[52px] font-semibold",
  large: "text-lg h-16 font-extrabold",
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  variant = "primary",
  size = "medium",
  disabled = false,
  isGlow = false,
  style,
  className,
  ...props
}) => {
  const baseClasses = `flex justify-center items-center rounded-xl focus:outline-none transition-all duration-200 relative w-full outline-none active:scale-[0.98] ${
    disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
  } ${isGlow ? "shadow-glow" : ""}`;

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      style={{
        textShadow: `${isGlow ? "2px 2px 4px rgba(0,0,0,1)" : ""}`,
        ...style,
      }}
      {...props}
    >
      {text}

      <div className="absolute right-6">{icon}</div>
    </button>
  );
};

export default Button;
