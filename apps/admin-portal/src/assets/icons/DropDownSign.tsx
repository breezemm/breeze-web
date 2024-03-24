import {SVGProps} from 'react'

const DropDownSign = ({...props}: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="null" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.907388 0.349227C1.26681 -0.0700991 1.89811 -0.118661 2.31744 0.240762L11 7.68294L19.6825 0.240762C20.1018 -0.11866 20.7331 -0.0700982 21.0926 0.349228C21.452 0.768553 21.4034 1.39985 20.9841 1.75928L11.6508 9.75928C11.2763 10.0803 10.7237 10.0803 10.3492 9.75928L1.01585 1.75927C0.596527 1.39985 0.547965 0.768553 0.907388 0.349227Z" fill="#FCFCFC"/>
    </svg>

  );
};

export default DropDownSign;
