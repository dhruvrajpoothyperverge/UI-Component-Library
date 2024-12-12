import React, { HTMLAttributes } from "react";

interface SelectedFoodItem {
  label: string;
  quantity: number;
}

interface BookingSummaryData {
  movie: string;
  adult: number;
  child: number;
  session: string;
  seatNumbers: string[];
  buffetProducts: SelectedFoodItem[];
  buffetTotal: number;
  ticketTotal: number;
  theater: string;
}

interface BookingSummaryProps extends HTMLAttributes<HTMLDivElement> {
  data: BookingSummaryData;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ data, ...props }) => {
  const {
    movie,
    adult,
    child,
    session,
    seatNumbers,
    theater,
    buffetProducts = [],
    buffetTotal = 0,
    ticketTotal,
  } = data;

  return (
    <div
      className="flex gap-4 p-5 bg-black justify-between rounded-xl"
      {...props}
    >
      <div className="flex flex-col gap-2.5 text-xs">
        <p className="text-[rgba(255,255,255,0.87)]">Movie: {movie}</p>

        <p className="text-white">
          Ticket Count: {adult > 0 && `${adult} Adult`}{" "}
          {child > 0 && `${child} Child`}{" "}
          <span className="text-[rgba(51,181,40,1)]">
            &#40; ${ticketTotal} &#41;
          </span>
        </p>

        <p className="text-[rgba(255,255,255,0.87)]">Session: {session}</p>

        <p className="text-white">
          Seat Number: &nbsp;
          {seatNumbers.join(", ")}
        </p>

        <p className="text-[rgba(255,255,255,0.87)]">
          Buffet Products:{" "}
          {buffetProducts.length === 0
            ? "None"
            : buffetProducts.map((item) => item?.label).join(", ")}{" "}
          <span className={`${buffetTotal > 0 && "text-[rgba(51,181,40,1)]"}`}>
            &#40; ${buffetTotal} &#41;
          </span>
        </p>

        <p className="text-[rgba(255,255,255,0.87)]">
          Movie Theater: {theater}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className="text-sm text-white underline font-semibold underline-offset-2">
          Total Amount
        </h4>
        <h4 className="text-[rgba(51,181,40,1)] text-[32px]">
          ${(ticketTotal + buffetTotal).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default BookingSummary;
