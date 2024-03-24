import {SVGProps} from 'react'

const VerifiedBadgeIcon = ({...props}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="icon/ verified user">
        <path id="Vector"
              d="M8.81152 21.8653L7.02692 18.8576L3.63847 18.1153L3.96925 14.6269L1.6731 12L3.96925 9.37309L3.63847 5.88464L7.02692 5.14234L8.81152 2.13464L12 3.48849L15.1884 2.13464L16.973 5.14234L20.3615 5.88464L20.0307 9.37309L22.3268 12L20.0307 14.6269L20.3615 18.1153L16.973 18.8576L15.1884 21.8653L12 20.5115L8.81152 21.8653V21.8653ZM10.95 15.2038L16.2538 9.89999L15.2 8.81539L10.95 13.0654L8.79997 10.9462L7.74615 12L10.95 15.2038V15.2038Z"
              fill="currentColor"/>
      </g>
    </svg>

  );
};

export default VerifiedBadgeIcon;
