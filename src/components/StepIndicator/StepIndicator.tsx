import React from "react";

interface StepIndicatorProps {
  currentStep?: number;
  steps?: (number | string)[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep = 0,
  steps = [1, 2, 3, 4],
}) => {
  return (
    <div className="flex">
      {steps.map((step, index) => {
        return (
          <div className="flex items-center" key={index}>
            <div
              key={index}
              className={`flex justify-center items-center w-7 h-7 border border-primary rounded-full font-medium text-[10px] transition-all ${
                currentStep == index
                  ? "text-white bg-primary"
                  : "text-primary bg-transparent"
              }`}
            >
              {step}
            </div>

            {index < steps.length - 1 && (
              <div className="w-3 h-[1px] bg-primary" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
