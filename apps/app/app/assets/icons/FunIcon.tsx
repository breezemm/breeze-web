import { SVGProps } from "react";

const FunIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_3245_10021)">
        <path d="M24 0H0V24H24V0Z" fill="url(#pattern0_3245_10021)" />
      </g>
      <defs>
        <pattern
          id="pattern0_3245_10021"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00625)" />
        </pattern>
        <clipPath id="clip0_3245_10021">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FunIcon;
