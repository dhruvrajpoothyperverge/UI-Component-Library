import Skeleton from "react-loading-skeleton";
import React from "react";

interface Seat {
  row: number;
  col: number;
}

interface Session {
  _id: string;
  movie: string;
  startTime: string;
  endTime: string;
  filledSeats: Seat[];
  lockedSeats: Seat[];
}

interface SessionListProps {
  selectedSession: Session | null;
  availableSessions: Session[];
  onSessionSelect: (session: Session) => void;
  loading?: boolean;
}

const SessionList: React.FC<SessionListProps> = ({
  selectedSession,
  availableSessions,
  onSessionSelect,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className="space-y-4 mt-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-lg p-4 bg-gray-800">
            <Skeleton
              width="70%"
              height={20}
              baseColor="#4b5563"
              highlightColor="#6b7280"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      {availableSessions.map((session) => (
        <div
          key={session._id}
          className={`cursor-pointer rounded-lg p-4 transition duration-200 ease-in-out transform ${
            session === selectedSession
              ? "bg-primary text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => onSessionSelect(session)}
        >
          <div className="flex gap-2 text-lg font-semibold">
            {new Date(session.startTime).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
            <p>-</p>
            {new Date(session.endTime).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionList;
