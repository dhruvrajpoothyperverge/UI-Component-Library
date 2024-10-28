import React from "react";
import QRCode from "react-qr-code";

interface QRCodeProps {
  value: string;
  width?: number;
  height?: number;
}

const QR: React.FC<QRCodeProps> = ({
  value,
  width = 200,
  height = 200,
}) => {
  return (
    <div className="p-5 bg-white w-fit rounded-xl">
      <div className="relative">
        <QRCode value={value} width={width} height={height} />

        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-transparent via-[rgba(108,71,219,0.8)] to-primary opacity-50 animate-expand"></div>
      </div>
    </div>
  );
};

export default QR;
