import React from "react";

interface SeatProps {
  status: "vacant" | "filled" | "selected" | "invalid" | "locked";
}

const Seat: React.FC<SeatProps> = React.memo(({ status, ...props }) => {
  return (
    <div
      className={`w-[25px] h-[25px] rounded-md
        ${
          status === "vacant"
            ? "bg-[rgba(255,255,255,0.53)]"
            : status === "filled" || status === "locked"
            ? "bg-primary"
            : status === "selected"
            ? "bg-[rgba(198,110,29,1)]"
            : "bg-transparent"
        }
        `}
      {...props}
    />
  );
});

export default Seat;
