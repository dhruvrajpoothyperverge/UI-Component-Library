import React from "react";

interface UserProfileProps {
  userDetails: {
    fullName?: string;
    email: string;
    phone?: string;
    location?: string;
    birthday?: string;
    profileImage?: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ userDetails }) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={userDetails.profileImage}
          alt="Profile Picture"
          className="rounded-full w-32 h-32 object-cover border-4 border-white"
        />
      </div>

      {userDetails.fullName && (
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">
            {userDetails.fullName}
          </h1>
        </div>
      )}

      <div className="space-y-4 text-white">
        <div className="flex justify-between">
          <span className="font-medium">Email</span>
          <span className="text-gray-400">{userDetails.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Phone</span>
          <span className="text-gray-400">{userDetails?.phone || "N/A"}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Location</span>
          <span className="text-gray-400">
            {userDetails?.location || "N/A"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Birthday</span>
          <span className="text-gray-400">
            {userDetails?.birthday || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
