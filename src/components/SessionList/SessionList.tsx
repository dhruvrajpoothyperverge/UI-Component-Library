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
}

interface SessionListProps {
  selectedSession: Session | null;
  availableSessions: Session[];
  onSessionSelect: (session: Session) => void;
}

const SessionList: React.FC<SessionListProps> = ({
  selectedSession,
  availableSessions,
  onSessionSelect,
}) => {
  return (
    <div className="space-y-4 mt-6">
      {availableSessions.map((session) => (
        <div
          key={session._id}
          className={`cursor-pointer rounded-lg p-4 transition duration-200 ease-in-out transform
            ${session === selectedSession ? "bg-primary" : "bg-white"}`}
          onClick={() => onSessionSelect(session)}
        >
          <div className="flex gap-2 text-lg font-semibold text-gray-800">
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
