"use client";
import React from "react";
import ProfileField from "./profile-field";
import EditProfileDialog from "./edit-profile-dialog";

const SecurityCard = () => {
  return (
    <div className="rounded bg-[#FFFFFF]">
      <div className="flex items-center justify-between py-4  px-6 border border-[#F2F2F2]">
        <p className="font-medium text-lg text-[#222222]">Security</p>
        <EditProfileDialog />
      </div>

      <div className="p-6 border border-[#F2F2F2] flex justify-between">
        <ProfileField label="Password" value="*********************" />
      </div>
    </div>
  );
};

export default SecurityCard;
