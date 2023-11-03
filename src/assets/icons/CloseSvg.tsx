import React, { FC } from "react";

const Close: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
  <mask id="mask0_373_754" className="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#C4C4C4"/>
  </mask>
  <g mask="url(#mask0_373_754)">
    <path d="M6.39995 18.3L5.69995 17.6L11.3 12L5.69995 6.40001L6.39995 5.70001L12 11.3L17.6 5.70001L18.3 6.40001L12.7 12L18.3 17.6L17.6 18.3L12 12.7L6.39995 18.3Z" fill="#131316"/>
  </g>
</svg>
  );
};

export default Close;
