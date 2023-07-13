import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "text" | "contained" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  children,
  onClick,
  disabled = false,
}) => {
  let buttonClass = "";

  switch (variant) {
    case "text":
      buttonClass = disabled
        ? "bg-transparent text-gray-40"
        : "bg-transparent text-primary";
      break;
    case "outlined":
      buttonClass = disabled
        ? "border-[3px] border-gray-40 text-gray-40 bg-transparent"
        : "border-[3px] border-primary text-primary bg-base-70";
      break;
    case "contained":
      buttonClass = disabled
        ? "bg-gray-40 text-gray-10"
        : "bg-primary text-base-70";
      break;
    default:
      buttonClass = "bg-primary text-base-70";
  }

  // Add a class to gray out the button when it's disabled
  if (disabled) {
    buttonClass += " cursor-not-allowed";
  }

  return (
    <motion.button
      onClick={!disabled ? onClick : undefined}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      transition={{ type: "spring", stiffness: 800, damping: 20 }}
      className={`rounded-2xl px-7 py-4 text-xl font-black ${buttonClass}`}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
