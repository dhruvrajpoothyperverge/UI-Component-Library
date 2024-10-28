import React from "react";
import Button from "../Button/Button";
import { Check, Cross, UnknownError } from "../Icons/icon";

interface PaymentStatusProps {
  status: "success" | "fail" | "unknown";
  onViewTicket: () => void;
  onTryAgain: () => void;
  onGoHome: () => void;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({
  status,
  onViewTicket,
  onTryAgain,
  onGoHome,
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-full px-5 py-10 min-h-[calc(100vh-76px)]">
      <div></div>

      <div className="flex flex-col items-center text-center text-white">
        <div className="w-[150px] h-[150px] rounded-full bg-white mb-7 flex justify-center items-center text-black">
          {status === "success" ? (
            <Check className="w-32 h-32 top-4 relative" />
          ) : (
            <>
              {status === "fail" ? (
                <Cross className="w-24 h-24" />
              ) : (
                <UnknownError className="w-24 h-24" />
              )}
            </>
          )}
        </div>

        <h6 className="font-medium text-2xl mb-2">
          {status === "success"
            ? "Payment Successful"
            : status === "fail"
            ? "Payment Failed"
            : "Unknown error occured"}
        </h6>

        <p className="font-medium text-xs">
          {status === "success"
            ? "We have sent a copy of your ticket to your e-mail address. You can check your ticket in the My Tickets section on the homepage."
            : "Your ticket purchase could not be processed because there was a problem with the payment process. Try to buy a ticket again by pressing the try again button."}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {status === "success" ? (
          <Button
            variant="primarydark"
            text="View Ticket"
            className="text-sm"
            onClick={onViewTicket}
          />
        ) : (
          <Button
            variant="primarydark"
            text="Try Again"
            className="text-sm"
            onClick={onTryAgain}
          />
        )}

        <Button
          variant="secondary"
          text="Back to Home"
          className="text-sm"
          onClick={onGoHome}
        />
      </div>
    </div>
  );
};

export default PaymentStatus;
