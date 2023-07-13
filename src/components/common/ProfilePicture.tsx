import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-[-12px] border-2 border-dashed border-primary-100 rounded-full animate-spin-slow"></div>
      <div className="z-10">
        <Image
          src="/images/rounded-profile-pic.png"
          alt="Stefan Catalin"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
