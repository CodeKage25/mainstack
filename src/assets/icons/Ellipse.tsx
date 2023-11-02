import React, { FC } from "react";

const Ellipse: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_373_1255)"/>
  <defs>
    <linearGradient id="paint0_linear_373_1255" x1="1.6" y1="7.70569e-07" x2="29.44" y2="32" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5C6670"/>
      <stop offset="1" stop-color="#131316"/>
    </linearGradient>
  </defs>
</svg>
  );
};

export default Ellipse;
