import React, { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      className={className} // use the className prop
      {...props} // spread any additional passed props
    >
      <path
        fillRule="evenodd"
        stroke="#007FF5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.92"
        d="M9.41 20.113c2.679-1.08 6.206-3.345 8.155-5.11 1.778-1.561 1.778-3.124 0-4.686-1.949-1.764-5.476-4.029-8.156-5.109-2.181-.707-3.437.222-3.833 2.678a41.381 41.381 0 00-.247 4.774 41.398 41.398 0 00.247 4.775c.383 2.464 1.654 3.37 3.833 2.678z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default ArrowIcon;
