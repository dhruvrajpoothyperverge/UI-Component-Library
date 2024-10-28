import React, { useState } from "react";

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
      <p className="inline text-white">
        {isExpanded || !shouldTruncate ? (
          data
        ) : (
          <>{data.substring(0, maxLen)}...</>
        )}
      </p>

      {shouldTruncate && (
        <>
          &nbsp;&nbsp;
          <button
            onClick={toggleExpand}
            className="text-primary underline font-light cursor-pointer"
          >
            {isExpanded ? "Show Less" : "See All"}
          </button>
        </>
      )}
    </div>
  );
};

export default Description;
