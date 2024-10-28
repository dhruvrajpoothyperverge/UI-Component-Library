import React from "react";
import SeatMatrix from "../SeatMatrix/SeatMatrix";

type SeatStatus = "vacant" | "filled" | "selected" | "invalid";

interface SeatMatrixContainerProps {
  rowSize?: number;
  colSize?: number;
  invalidRow?: number[];
  invalidCol?: number[];
  filledSeats?: { row: number; col: number }[];
  onSeatClick: (
    rowIndex: number,
    seatIndex: number,
    status: SeatStatus
  ) => void;
}

const SeatMatrixContainer: React.FC<SeatMatrixContainerProps> = ({
  rowSize,
  colSize,
  invalidRow,
  invalidCol,
  filledSeats,
  onSeatClick,
}) => {
  return (
    <div>
      <div>
        <p className="text-center font-semibold text-lg text-white">Screen</p>
        <img src="/src/assets/screen.png" className="w-full" />
      </div>

      <SeatMatrix
        rowSize={rowSize}
        colSize={colSize}
        invalidRow={invalidRow}
        invalidCol={invalidCol}
        filledSeats={filledSeats}
        onSeatClick={onSeatClick}
      />
    </div>
  );
};

export default SeatMatrixContainer;
