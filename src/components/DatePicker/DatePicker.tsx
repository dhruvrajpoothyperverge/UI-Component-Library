import React from "react";

interface DatePickerProps {
  dateList: string[];
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  dateList,
  selectedDate,
  onDateSelect,
}) => {
  return (
    <div className="flex gap-3 flex-nowrap overflow-x-auto py-2">
      {dateList.map((date) => (
        <div
          key={date}
          className={`text-center cursor-pointer px-5 py-2 rounded-md transition-all duration-300 ease-in-out transform ${
            date === selectedDate
              ? "bg-primary text-white font-semibold scale-105 shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:scale-105"
          }`}
          onClick={() => onDateSelect(date)}
        >
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </div>
      ))}
    </div>
  );
};

export default DatePicker;
