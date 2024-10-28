import React from "react";

interface BookingSummaryData {
  movie: string;
  adult: number;
  child: number;
  session: string;
  seatNumbers: string[];
  buffetProducts: string[];
  buffetTotal: number;
  theater: string;
  amount: number;
}

interface BookingSummaryProps {
  data: BookingSummaryData;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ data }) => {
  const {
    movie,
    adult,
    child,
    session,
    seatNumbers,
    theater,
    buffetProducts = [],
    buffetTotal = 0,
    amount,
  } = data;

  return (
    <div className="flex p-5 bg-black justify-between rounded-xl">
      <div className="flex flex-col gap-2.5 text-[9px]">
        <p className="text-[rgba(255,255,255,0.37)]">Movie: {movie}</p>

        <p className="text-white">
          Ticket Count: {adult > 0 && `${adult} Adult`}{" "}
          {child > 0 && `{child>0 && ${child} Child`}{" "}
          <span className="text-[rgba(51,181,40,1)]">
            &#40; ${amount} &#41;
          </span>
        </p>

        <p className="text-[rgba(255,255,255,0.37)]">Session: {session}</p>

        <p className="text-white">
          Seat Number: &nbsp;
          {seatNumbers.join(", ")}
        </p>

        <p className="text-[rgba(255,255,255,0.37)]">
          Buffet Products: {buffetProducts.length === 0 ? "None" : ""}{" "}
          <span className={`${buffetTotal > 0 && "text-[rgba(51,181,40,1)]"}`}>
            &#40; ${buffetTotal} &#41;
          </span>
        </p>

        <p className="text-[rgba(255,255,255,0.37)]">
          Movie Theater: {theater}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h6 className="text-[9px] text-white underline font-semibold underline-offset-2">
          Total Amount
        </h6>
        <h4 className="text-[rgba(51,181,40,1)] text-[32px]">
          ${amount.toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default BookingSummary;
