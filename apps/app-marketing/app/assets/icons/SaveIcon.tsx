import { SVGProps } from "react";
const SaveIcon=({...props}:SVGProps<SVGSVGElement>)=>{
    return(
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  {...props}
>
  <path
    d="M12 18L7.1 20.1C6.6 20.3167 6.125 20.277 5.675 19.9811C5.225 19.6852 5 19.2665 5 18.725V4.375C5 3.975 5.15 3.625 5.45 3.325C5.75 3.025 6.1 2.875 6.5 2.875H17.5C17.9 2.875 18.25 3.025 18.55 3.325C18.85 3.625 19 3.975 19 4.375V18.725C19 19.2665 18.775 19.6852 18.325 19.9811C17.875 20.277 17.4 20.3167 16.9 20.1L12 18ZM12 16.4L17.5 18.725V4.375H6.5V18.725L12 16.4ZM12 4.375H6.5H17.5H12Z"
    fill="currentColor"
  />
</svg>

    )
}

export default SaveIcon