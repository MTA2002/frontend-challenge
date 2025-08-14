interface ProfileFieldProps {
  label: string;
  value: string;
}

const ProfileField = ({ label, value }: ProfileFieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-1/2">
      <p className="font-medium text-base">{label}</p>
      <p className="text-[#7E7E7E]">{value}</p>
    </div>
  );
};

export default ProfileField;
