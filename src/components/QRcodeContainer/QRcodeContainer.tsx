import React from "react";
import QR from "../QR/QR";

interface QRcodeContainerProps {
  value: string;
  width?: number;
  height?: number;
}

const QRcodeContainer: React.FC<QRcodeContainerProps> = ({
  value,
  width,
  height,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <h1 className="font-bold text-xl text-white">My Ticket</h1>

      <QR value={value} width={width} height={height} />

      <p className="text-xs font-semibold text-white">
        You can start enjoying the movie by scanning your ticket to the theater
        and canteen staff.
      </p>
    </div>
  );
};

export default QRcodeContainer;
