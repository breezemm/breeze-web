import { SVGProps } from "react";

const CancleIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.3327 13.9993C27.3327 21.3631 21.3631 27.3327 13.9993 27.3327C6.63555 27.3327 0.666016 21.3631 0.666016 13.9993C0.666016 6.63555 6.63555 0.666016 13.9993 0.666016C21.3631 0.666016 27.3327 6.63555 27.3327 13.9993ZM9.95885 9.95888C10.3494 9.56836 10.9825 9.56836 11.3731 9.95888L13.9993 12.5851L16.6255 9.95891C17.016 9.56839 17.6492 9.56839 18.0397 9.95891C18.4303 10.3494 18.4303 10.9826 18.0397 11.3731L15.4135 13.9993L18.0397 16.6255C18.4302 17.016 18.4302 17.6492 18.0397 18.0397C17.6492 18.4303 17.016 18.4303 16.6255 18.0397L13.9993 15.4136L11.3731 18.0398C10.9826 18.4303 10.3494 18.4303 9.95888 18.0398C9.56836 17.6492 9.56836 17.0161 9.95888 16.6255L12.5851 13.9993L9.95885 11.3731C9.56833 10.9826 9.56833 10.3494 9.95885 9.95888Z"
        fill="#323334"
      />
    </svg>
  );
};

export default CancleIcon;