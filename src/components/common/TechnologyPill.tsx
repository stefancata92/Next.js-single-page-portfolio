import { useEffect, useState } from "react";

interface TechnologyPillProps {
  children: React.ReactNode;
  animationOn?: boolean;
}

const TechnologyPill: React.FC<TechnologyPillProps> = ({
  children,
  animationOn = true,
  ...props
}) => {
  const [wiggle, setWiggle] = useState(false);

  useEffect(() => {
    if (!animationOn) {
      return; // Don't start the animation if animationOn prop is false
    }

    const randomTime = Math.floor(Math.random() * 5000) + 2000; // between 2 and 7 seconds
    const timerId = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 1000); // animation lasts for 1 second
    }, randomTime);

    return () => clearInterval(timerId); // clean up on unmount
  }, [animationOn]);

  return (
    <span
      className={`inline-block px-3 text-base py-1 font-bold text-black bg-primary rounded-full ${
        wiggle ? "animate-wiggle" : ""
      }`}
      {...props}
    >
      {children}
    </span>
  );
};

export default TechnologyPill;
