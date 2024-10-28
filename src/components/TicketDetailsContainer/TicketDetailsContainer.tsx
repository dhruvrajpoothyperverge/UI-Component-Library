import React from "react";
import Heading from "../Heading/Heading";
import SelectQuantity from "../SelectQuantity/SelectQuantity";

interface SelectQuantityProps {
  label?: string;
  quantity: number;
  maxAllowed: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

interface TicketDetailsContainerProps {
  data: SelectQuantityProps[];
}

const TicketDetailsContainer: React.FC<TicketDetailsContainerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading label="Ticket Details" />

      <div className="bg-black py-3 flex border border-gray-700 rounded-xl mt-2 relative">
        {data.map((item, index) => {
          return (
            <div className="flex-1 flex justify-center" key={index}>
              <SelectQuantity
                label={item.label}
                quantity={item.quantity}
                maxAllowed={item.maxAllowed}
                onIncrease={item.onIncrease}
                onDecrease={item.onDecrease}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketDetailsContainer;
