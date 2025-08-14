"use client";

import React from "react";

import ProfileField from "./profile-field";
import EditProfileDialog from "./edit-profile-dialog";

const ProfileCard = () => {
  return (
    <div className="rounded bg-[#FFFFFF]">
      <div className="flex items-center justify-between py-4  px-6 border border-[#F2F2F2]">
        <p className="font-medium text-lg text-[#222222]">Profile Details</p>

        <EditProfileDialog />
      </div>

      <div className="p-6 border flex border-[#F2F2F2] flex-col  gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <ProfileField label="First Name" value="John" />
          <ProfileField label="Last Name" value="Doe" />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <ProfileField label="Email" value="jhondoe@gmail.com" />
          <ProfileField label="Phone" value="-" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
