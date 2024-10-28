import React, { ReactNode } from "react";
import Heading from "../Heading/Heading";

interface HeadingContainerProps {
  label: string;
  seeAllLink?: string;
  children?: ReactNode;
}

const HeadingContainer: React.FC<HeadingContainerProps> = ({
  label,
  seeAllLink,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading label={label} seeAllLink={seeAllLink} />

      <div>{children}</div>
    </div>
  );
};

export default HeadingContainer;
