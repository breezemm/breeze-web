import { SVGProps } from "react";

const TelegramIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <mask
                    id="mask0_5096_14379"
                    style={{maskType: "luminance"}}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={24}
                    height={25}
                >
                    <path d="M24 0.615234H0V24.6152H24V0.615234Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_5096_14379)">
                    <path
                        d="M12 24.6152C18.6275 24.6152 24 19.2427 24 12.6152C24 5.98773 18.6275 0.615234 12 0.615234C5.3725 0.615234 0 5.98773 0 12.6152C0 19.2427 5.3725 24.6152 12 24.6152Z"
                        fill="url(#paint0_linear_5096_14379)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.43229 12.4884C8.93029 10.9639 11.2633 9.95943 12.4303 9.47393C15.7628 8.08793 16.4553 7.84693 16.9068 7.83893C17.0058 7.83743 17.2278 7.86193 17.3718 7.97843C17.4933 8.07693 17.5263 8.20993 17.5423 8.30343C17.5583 8.39693 17.5783 8.60943 17.5623 8.77593C17.3818 10.6734 16.6003 15.2779 16.2028 17.4034C16.0348 18.3024 15.7033 18.6039 15.3828 18.6334C14.6858 18.6979 14.1568 18.1729 13.4818 17.7304C12.4258 17.0384 11.8293 16.6074 10.8038 15.9319C9.61928 15.1509 10.3873 14.7219 11.0623 14.0204C11.2393 13.8369 14.3093 11.0444 14.3688 10.7909C14.3763 10.7594 14.3833 10.6409 14.3133 10.5789C14.2428 10.5164 14.1393 10.5379 14.0648 10.5549C13.9588 10.5789 12.2713 11.6939 9.00279 13.9004C8.52379 14.2289 8.09029 14.3894 7.70179 14.3809C7.27329 14.3719 6.44878 14.1389 5.83628 13.9394C5.08478 13.6954 4.48729 13.5659 4.53929 13.1514C4.56679 12.9349 4.86429 12.7139 5.43229 12.4884Z"
                        fill="#FCFCFC"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_5096_14379"
                        x1={12}
                        y1="0.615234"
                        x2={12}
                        y2="24.4372"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#2AABEE"/>
                        <stop offset={1} stopColor="#229ED9"/>
                    </linearGradient>
                </defs>
            </svg>


        </>

    );
};

export default TelegramIcon;
