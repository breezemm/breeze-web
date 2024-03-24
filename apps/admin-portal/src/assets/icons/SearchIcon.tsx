import {SVGProps} from 'react'

const SearchIcon = ({...props}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="11.5" cy="11.5" r="9.5" stroke="#323334" stroke-width="1.5"/>
        <path d="M18.5 18.5L22 22" stroke="#323334" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};

export default SearchIcon;