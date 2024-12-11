import React, { useState } from "react";
import { motion } from "framer-motion";

interface DescriptionProps {
  maxLen?: number;
  data: string;
}

const Description: React.FC<DescriptionProps> = ({ maxLen = 150, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const shouldTruncate = data.length > maxLen;

  return (
    <div>
      <motion.div
        className="text-white"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: isExpanded || !shouldTruncate ? "auto" : "75px",
        }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <p>
          {isExpanded || !shouldTruncate
            ? data
            : `${data.substring(0, maxLen)}...`}
        </p>
      </motion.div>

      <button
        onClick={toggleExpand}
        className="text-primary underline font-light cursor-pointer"
      >
        {isExpanded ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default Description;
