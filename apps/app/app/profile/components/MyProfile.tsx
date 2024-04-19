import React from "react";
import Profile from "@/app/profile/components/Profile";
import FriendsForYou from "@/app/search/components/FriendsForYou";
import UserActivity from "@/app/profile/components/UserActivity";

const MyProfile = () => {
  return (
    <div className="w-full max-w-96 ">
      <div className="px-6 pb-6 border-b-4 border-neutral-3">
        <Profile />
      </div>
      <div className="p-6 border-b-4 border-neutral-3">
        <FriendsForYou />
      </div>

      <UserActivity />
    </div>
  );
};

export default MyProfile;
