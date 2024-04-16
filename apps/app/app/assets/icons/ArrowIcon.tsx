import { SVGProps } from "react";

const ArrowIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.0149 19.6534L0.595703 18.2342L8.83033 9.99953L0.595703 1.7649L2.0149 0.345703L11.6687 9.99953L2.0149 19.6534Z"
        fill="#323334"
      />
    </svg>
  );
};

export default ArrowIcon;
