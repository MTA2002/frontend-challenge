import ProfileCard from "@/components/profile-card";
import SecurityCard from "@/components/security-card";

export default function Home() {
  return (
    <div className="px-4 py-5 flex flex-col gap-4  bg-[#FAFAFA] min-h-dvh">
      <p className="font-semibold text-xl bg-">Profile</p>
      <ProfileCard />
      <SecurityCard />
    </div>
  );
}
