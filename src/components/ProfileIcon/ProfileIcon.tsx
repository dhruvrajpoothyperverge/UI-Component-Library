import React, { useState } from "react";

interface ProfileIconProps {
    profilePic: string;
    fallback?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ profilePic,fallback="/vite.svg",...props}) => {
    const [imgSrc, setImgSrc] = useState(profilePic);

    const handleError = () => {
        setImgSrc(fallback);
    };

    return (
        <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-400 shadow-first">
            <img 
                src={imgSrc} 
                alt="Profile" 
                onError={handleError} 
                className="w-full h-full object-fill"
                {...props}
            />
        </div>
    );
}

export default ProfileIcon;
