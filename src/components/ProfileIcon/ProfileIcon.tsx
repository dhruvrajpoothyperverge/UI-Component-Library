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
      alt="User profile picture"
      onError={handleError}
      loading="lazy"
      className={`w-10 h-10 rounded-full object-cover bg-blue-400 shadow-md ${className}`}
      width={40}
      height={40}
      {...props}
    />
  );
};

export default ProfileIcon;
