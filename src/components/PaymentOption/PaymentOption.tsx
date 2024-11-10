import React, { useState } from "react";
import { motion } from "framer-motion";

interface PaymentOptionProps {
  title: string;
  image: string;
  background?: string;
  isSelected: boolean;
  onSelect: (title: string) => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  title,
  image,
  background = "bg-[gray]",
  isSelected,
  onSelect,
  ...props
}) => {
  const [dragged, setDragged] = useState(false);

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x < -100) {
      onSelect(title);
    } else {
      setDragged(false);
    }
  };

  return (
    <div
      className={`w-full h-28 flex justify-between items-center p-2 rounded-2xl relative transition-all duration-300 ${background} ${
        isSelected && "bg-green-500"
      }`}
      {...props}
    >
      <p className="text-white font-medium text-sm absolute left-5 top-1/2 -translate-y-1/2">
        Pay with {title}
      </p>

      <motion.div
        className="bg-white rounded-xl w-24 h-24 flex justify-center items-center shadow-[8px_4px_4px_0px_rgba(0,0,0,0.25)] z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 250 }}
        initial={{ x: isSelected ? 0 : 250 }}
        whileDrag={{ scale: 1.05 }}
        onDragEnd={handleDragEnd}
        onDrag={() => setDragged(true)}
      >
        <img src={image} alt={title} className="w-14" />
      </motion.div>
    </div>
  );
};

export default PaymentOption;
