import { SVGProps } from "react";

const TiktokIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg
                width={24}
                height={28}
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M17.7867 9.82941C19.538 11.0854 21.683 11.8246 23.9999 11.8246V7.35027C23.5613 7.35027 23.124 7.30488 22.6951 7.21355V10.7354C20.3782 10.7354 18.2337 9.9962 16.4819 8.74017V17.871C16.4819 22.4384 12.7921 26.1413 8.24114 26.1413C6.54261 26.1413 4.96437 25.6261 3.65332 24.7423C5.14988 26.278 7.23701 27.2305 9.54539 27.2305C14.0969 27.2305 17.7867 23.5277 17.7867 18.9603V9.82941ZM19.3962 5.31532C18.5015 4.33388 17.9138 3.06595 17.7867 1.66412V1.08887H16.55C16.8614 2.87079 17.9229 4.39288 19.3962 5.31532ZM6.53184 21.2374C6.03204 20.5794 5.76201 19.7744 5.76314 18.9472C5.76314 16.8578 7.4509 15.1638 9.53293 15.1638C9.92097 15.1638 10.3067 15.2234 10.676 15.3414V10.7672C10.2443 10.7076 9.80807 10.6821 9.37181 10.6917V14.2522C9.00193 14.1342 8.61616 14.0746 8.22812 14.0746C6.14609 14.0746 4.45834 15.7686 4.45834 17.858C4.45834 19.3353 5.30191 20.614 6.53184 21.2374Z"
                    fill="#FF004F"
                />
                <path
                    d="M16.4819 8.74017C18.2332 9.9962 20.3782 10.7354 22.6951 10.7354V7.21355C21.4022 6.9367 20.2574 6.25876 19.3962 5.31532C17.9229 4.39288 16.8614 2.87022 16.55 1.08887H13.3022V18.9597C13.2948 21.0434 11.6099 22.73 9.53238 22.73C8.30812 22.73 7.22059 22.1446 6.53187 21.2374C5.30138 20.614 4.45779 19.3353 4.45779 17.858C4.45779 15.7686 6.14554 14.0746 8.22757 14.0746C8.62639 14.0746 9.01104 14.137 9.37185 14.2522V10.6917C4.90031 10.7842 1.30469 14.4507 1.30469 18.9597C1.30469 21.2108 2.19991 23.2514 3.65336 24.7423C4.96441 25.6261 6.54265 26.1413 8.24118 26.1413C12.7921 26.1413 16.4819 22.4384 16.4819 17.871V8.74017Z"
                    fill="#191A1A"
                />
                <path
                    d="M22.6952 7.21391V6.2614C21.5294 6.2631 20.3857 5.93519 19.3963 5.31569C20.2722 6.27785 21.4256 6.9416 22.6952 7.21391ZM16.5501 1.08923C16.5206 0.919041 16.4979 0.747719 16.482 0.575256V0H11.9975V17.8714C11.9901 19.9546 10.3057 21.6412 8.22769 21.6412C7.61783 21.6412 7.042 21.4959 6.53199 21.2378C7.22071 22.1449 8.30824 22.7304 9.53249 22.7304C11.61 22.7304 13.2949 21.0438 13.3023 18.9601V1.08923H16.5501ZM9.37197 10.6921V9.6783C8.99754 9.62668 8.61969 9.60115 8.2413 9.60115C3.68977 9.60115 0 13.304 0 17.8714C0 20.7346 1.45004 23.258 3.65348 24.7426C2.20003 23.2518 1.30481 21.2111 1.30481 18.9601C1.30481 14.4511 4.90043 10.7846 9.37197 10.6921Z"
                    fill="#00F2EA"
                />
            </svg>

        </>

    );
};

export default TiktokIcon;
