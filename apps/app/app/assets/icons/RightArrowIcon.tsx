import { SVGProps } from "react";

const RightArrowIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M5.55644 4.75274L1.13612 0.466272C0.8603 0.198804 0.333008 0.360933 0.333008 0.71321L0.333008 9.28614C0.333008 9.63842 0.8603 9.80055 1.13612 9.53308L5.55644 5.24661C5.70297 5.10452 5.70297 4.89483 5.55644 4.75274Z"
                fill="currentColor"/>
        </svg>

    );
};

export default RightArrowIcon;
