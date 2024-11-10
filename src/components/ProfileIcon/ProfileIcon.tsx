import React, { HTMLAttributes, useState } from "react";

interface ProfileIconProps extends HTMLAttributes<HTMLImageElement> {
  profilePic: string;
  fallback?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({
  profilePic,
  fallback = "/vite.svg",
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(profilePic);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return (
    <img
      src={imgSrc}
      alt="Profile"
      onError={handleError}
      className={`w-10 h-10 rounded-full overflow-hidden bg-blue-400 shadow-first object-fill ${className}`}
      {...props}
    />
  );
};

export default ProfileIcon;
