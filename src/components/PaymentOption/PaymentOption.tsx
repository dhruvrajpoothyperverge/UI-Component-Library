import React, { useState, useRef, useEffect } from "react";
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
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const paddingLeft = parseFloat(
        window.getComputedStyle(container).paddingLeft
      );
      const paddingRight = parseFloat(
        window.getComputedStyle(container).paddingRight
      );
      setContainerWidth(container.offsetWidth - paddingLeft - paddingRight);
    }
  }, []);

  const draggableWidth = 96;

  return (
    <div
      ref={containerRef}
      className={`w-full h-28 flex justify-between items-center p-2 rounded-2xl relative transition-all duration-300 ${
        isSelected ? "bg-green-500" : background
      }`}
    >
      <p className="text-white font-medium text-sm absolute left-5 top-1/2 -translate-y-1/2">
        Pay with {title}
      </p>
      <motion.div
        className="bg-white rounded-xl w-24 h-24 flex justify-center items-center shadow-[8px_4px_4px_0px_rgba(0,0,0,0.25)] z-10"
        drag="x"
        dragConstraints={{ left: 0, right: containerWidth - draggableWidth }}
        initial={{ x: isSelected ? 0 : containerWidth - draggableWidth }}
        animate={{ x: isSelected ? 0 : containerWidth - draggableWidth }}
        whileDrag={{ scale: 1.02 }}
        onDragEnd={(e, info) => info.offset.x < -100 && onSelect(title)}
        transition={{ duration: 0.3 }}
      >
        <img src={image} alt={title} className="w-14" />
      </motion.div>
    </div>
  );
};

export default PaymentOption;
