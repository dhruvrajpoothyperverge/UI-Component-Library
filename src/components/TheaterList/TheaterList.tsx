import Skeleton from "react-loading-skeleton";
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
  loading?: boolean;
}

const TheaterList: React.FC<TheaterListProps> = ({
  selectedMovieTheater,
  availableTheaters,
  onTheaterSelect,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="px-4 py-2 rounded-lg bg-gray-800">
            <Skeleton
              height={28}
              width="60%"
              baseColor="#4b5563"
              highlightColor="#6b7280"
            />
            <Skeleton
              height={20}
              width="40%"
              baseColor="#4b5563"
              highlightColor="#6b7280"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {availableTheaters.map((theater) => (
        <div
          key={theater._id}
          className={`cursor-pointer px-4 py-3 rounded-lg transition duration-200 ease-in-out transform ${
            selectedMovieTheater?._id === theater._id
              ? "bg-primary text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
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
