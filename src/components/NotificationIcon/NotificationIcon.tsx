import React, { ButtonHTMLAttributes } from "react";
import { Notification } from "../Icons/icon";

interface NotificationIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  showBadge?: boolean;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
  showBadge = false,
  className,
  ...props
}) => {
  const baseClasses = "";

  return (
    <button
      className={`${baseClasses} ${className} border border-primary p-2.5 rounded-full relative`}
      {...props}
    >
      <Notification className="text-primary" />
      {showBadge && (
        <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0 right-0" />
      )}
    </button>
  );
};

export default NotificationIcon;
