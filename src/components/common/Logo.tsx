import Image from "next/image";

interface LogoProps {
  image?: string;
}

const Logo: React.FC<LogoProps> = ({ image = "stefan-catalin-logo.svg" }) => {
  return (
    <div className="logo">
      <Image
        src={`/images/` + image}
        alt="Logo"
        width={100}
        height={100}
        className="w-[200px]"
      />
    </div>
  );
};

export default Logo;
