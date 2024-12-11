import React from "react";
import Skeleton from "react-loading-skeleton";
import BookingSummary from "../BookingSummary/BookingSummary";

interface BookedTicketContainerProps {
  bookedTickets: any[];
  onTicketClick: (ticketId: string) => void;
  loading?: boolean;
  error?: string | null;
}

const BookedTicketContainer: React.FC<BookedTicketContainerProps> = ({
  bookedTickets,
  onTicketClick,
  loading = false,
  error = null,
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Skeleton height={185} width="100%" borderRadius={"12px"} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (bookedTickets.length === 0) {
    return <p>No ticket found.</p>;
  }

  return (
    <div className="space-y-4">
      {bookedTickets.map((ticket, index) => (
        <BookingSummary
          data={ticket}
          key={index}
          onClick={() => onTicketClick(ticket._id)}
        />
      ))}
    </div>
  );
};

export default BookedTicketContainer;
