import { SVGProps } from "react"
const SearchIcon= ({...props}: SVGProps<SVGSVGElement>) =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.25 2.75C7.41751 2.75 3.5 6.66751 3.5 11.5C3.5 16.3325 7.41751 20.25 12.25 20.25C17.0825 20.25 21 16.3325 21 11.5C21 6.66751 17.0825 2.75 12.25 2.75ZM2 11.5C2 5.83908 6.58908 1.25 12.25 1.25C17.9109 1.25 22.5 5.83908 22.5 11.5C22.5 14.0605 21.5611 16.4017 20.0089 18.1982L23.2803 21.4697C23.5732 21.7626 23.5732 22.2374 23.2803 22.5303C22.9874 22.8232 22.5126 22.8232 22.2197 22.5303L18.9482 19.2589C17.1517 20.8111 14.8105 21.75 12.25 21.75C6.58908 21.75 2 17.1609 2 11.5Z" fill="currentColor"/>
</svg>
    )

}

export default SearchIcon;