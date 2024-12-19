import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NotificationIcon } from "../Icons/icon";
import Button from "../Button/Button";

interface NotificationProps {
  notifications: { id: string; message: string }[];
  onClear: (id: string) => void;
  onSubscribe?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  notifications,
  onClear,
  onSubscribe,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const toggleNotification = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSubscribeClick = () => {
    setIsVisible(false);

    if (onSubscribe) {
      onSubscribe();
    }
  };

  return (
    <div className="relative" onClick={toggleNotification}>
      <div ref={iconRef}>
        <button
          className="border border-primary p-2.5 rounded-full relative"
          aria-label="Notification icon"
        >
          <NotificationIcon className="text-primary" />
          {notifications.length > 0 && (
            <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0 right-0" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={notificationRef}
            className="absolute top-14 right-0 w-[min(400px,80vw)] bg-gray-900 text-white p-4 rounded-2xl shadow-xl z-50 transition-transform transform duration-300 ease-in-out"
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            exit={{
              opacity: 0,
              transform: "translateY(10px)",
            }}
            transition={{ duration: 0.3 }}
            onClick={handleNotificationClick}
          >
            <div className="flex flex-col gap-3">
              {notifications.length === 0 ? (
                <div className="text-center text-gray-400 p-3">
                  No new notifications
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex justify-between items-center bg-gray-800 p-3 rounded-xl w-full transition-all duration-300 hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium">
                      {notification.message}
                    </span>
                    <button
                      className="text-[#6C47DB] hover:text-[#5b3bb0] transition duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClear(notification.id);
                      }}
                    >
                      <span className="text-xs font-semibold">Clear</span>
                    </button>
                  </div>
                ))
              )}

              {onSubscribe && (
                <Button
                  variant="primary"
                  text="Subscribe"
                  size="small"
                  onClick={handleSubscribeClick}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
