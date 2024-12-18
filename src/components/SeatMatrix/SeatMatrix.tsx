import React from "react";
import Seat from "../Seat/Seat";

type SeatStatus = "vacant" | "filled" | "selected" | "invalid" | "locked";

interface SeatMatrixProps {
  rowSize?: number;
  colSize?: number;
  invalidRow?: number[];
  invalidCol?: number[];
  selectedSeats?: { row: number; col: number }[];
  filledSeats?: { row: number; col: number }[];
  lockedSeats?: { row: number; col: number }[];
  onSeatClick: (
    rowIndex: number,
    seatIndex: number,
    status: SeatStatus
  ) => void;
}

const SeatMatrix: React.FC<SeatMatrixProps> = ({
  rowSize = 9,
  colSize = 12,
  invalidRow = [4],
  invalidCol = [9],
  selectedSeats = [],
  filledSeats = [],
  lockedSeats = [],
  onSeatClick,
}) => {
  const seats: SeatStatus[][] = Array.from({ length: rowSize }, (_, rowIndex) =>
    Array.from({ length: colSize }, (_, colIndex) => {
      if (invalidRow.includes(rowIndex) || invalidCol.includes(colIndex)) {
        return "invalid";
      }

      if (
        lockedSeats.some(
          (seat) => seat.row === rowIndex && seat.col === colIndex
        )
      ) {
        return "locked";
      }

      if (
        filledSeats.some(
          (seat) => seat.row === rowIndex && seat.col === colIndex
        )
      ) {
        return "filled";
      }

      if (
        selectedSeats.some(
          (seat) => seat.row === rowIndex && seat.col === colIndex
        )
      ) {
        return "selected";
      }

      return "vacant";
    })
  );

  return (
    <div className="flex flex-col items-center min-w-full overflow-x-auto flex-nowrap">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center my-1.5">
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              className="mx-0.5"
              onClick={() => {
                console.log(col);
                (col === "vacant" || col === "selected") &&
                  onSeatClick(
                    rowIndex,
                    colIndex,
                    col === "vacant" ? "selected" : "vacant"
                  );
              }}
            >
              <Seat status={col} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatMatrix;
