import React, { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const LinkIcon: React.FC<ArrowIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      className={className}
      {...props}
    >
      <path
        stroke="#007FF5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.92"
        d="M10.302 4.478H8.4c-2.507 0-4.08 1.776-4.08 4.289v6.782c0 2.513 1.565 4.289 4.08 4.289h7.197c2.517 0 4.083-1.776 4.083-4.29v-1.485M19.68 8.61V4.478m0 0h-4.133m4.133 0l-6.443 6.442"
      ></path>
    </svg>
  );
};

export default LinkIcon;
