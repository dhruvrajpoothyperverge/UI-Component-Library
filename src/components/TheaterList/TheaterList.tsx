import React from "react";

interface Theater {
  _id: string;
  name: string;
  location: string;
  seatingLayout: {
    rows: number;
    cols: number;
  };
  invalidRows: number[];
  invalidCols: number[];
}

interface TheaterListProps {
  selectedMovieTheater: Theater | null;
  availableTheaters: Theater[];
  onTheaterSelect: (theater: Theater) => void;
}

const TheaterList: React.FC<TheaterListProps> = ({
  selectedMovieTheater,
  availableTheaters,
  onTheaterSelect,
}) => {
  return (
    <div className="space-y-4">
      {availableTheaters.map((theater) => (
        <div
          key={theater._id}
          className={`cursor-pointer px-4 py-2 rounded-lg transition duration-200 ease-in-out transform ${
            selectedMovieTheater?._id === theater._id
              ? "bg-primary text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => onTheaterSelect(theater)}
        >
          <div className="text-lg font-semibold">{theater.name}</div>
          <div className="text-sm">{theater.location}</div>
        </div>
      ))}
    </div>
  );
};

export default TheaterList;
