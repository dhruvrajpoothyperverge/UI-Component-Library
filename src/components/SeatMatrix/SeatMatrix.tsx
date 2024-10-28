import React, { useState } from "react";
import Seat from "../Seat/Seat";

type SeatStatus = "vacant" | "filled" | "selected" | "invalid";

interface SeatMatrixProps {
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

const SeatMatrix: React.FC<SeatMatrixProps> = ({
  rowSize = 9,
  colSize = 12,
  invalidRow = [4],
  invalidCol = [9],
  filledSeats = [],
  onSeatClick,
}) => {
  const initialSeats: SeatStatus[][] = Array.from(
    { length: rowSize },
    (_, rowIndex) =>
      Array.from({ length: colSize }, (_, colIndex) => {
        if (invalidRow.includes(rowIndex) || invalidCol.includes(colIndex)) {
          return "invalid";
        }
        if (
          filledSeats.some(
            (seat) => seat.row === rowIndex && seat.col === colIndex
          )
        ) {
          return "filled";
        }
        return "vacant";
      })
  );

  const [seats, setSeats] = useState<SeatStatus[][]>(initialSeats);

  const toggleSeat = (rowIndex: number, seatIndex: number) => {
    setSeats((prevSeats) => {
      const newSeats = prevSeats.map((row, rIndex) =>
        rIndex === rowIndex
          ? row.map((seat, sIndex) => {
              if (sIndex === seatIndex) {
                return seat === "vacant" ? "selected" : "vacant";
              }
              return seat;
            })
          : row
      );

      return newSeats;
    });

    const currentSeatStatus = seats[rowIndex][seatIndex];
    const status = currentSeatStatus === "vacant" ? "selected" : "vacant";
    onSeatClick(rowIndex, seatIndex, status);
  };

  return (
    <div className="flex flex-col items-center min-w-full overflow-x-auto flex-nowrap">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center my-1.5">
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              className="mx-0.5"
              onClick={() =>
                (col === "vacant" || col === "selected") &&
                toggleSeat(rowIndex, colIndex)
              }
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
