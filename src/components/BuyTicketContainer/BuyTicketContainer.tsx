import React, { ReactNode } from "react";
import { LeftArrow } from "../Icons/icon";
import StepIndicator from "../StepIndicator/StepIndicator";

interface BuyTicketContainerProps {
  onBackClick: () => void;
  steps: any[];
  currentStep: number;
  children: ReactNode;
}

const BuyTicketContainer: React.FC<BuyTicketContainerProps> = ({
  onBackClick,
  steps,
  currentStep,
  children,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-5">
        <button
          className="rounded-lg bg-white text-primary p-2.5"
          onClick={onBackClick}
        >
          <LeftArrow />
        </button>

        <StepIndicator currentStep={currentStep} steps={steps} />

        <div className="w-9 h-9" />
      </div>

      {children}
    </div>
  );
};

export default BuyTicketContainer;
