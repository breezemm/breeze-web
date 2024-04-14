import { SVGProps } from "react";

const UpArrowIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
             className="w-6 h-6" {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"/>
        </svg>


    );
};

export default UpArrowIcon;
