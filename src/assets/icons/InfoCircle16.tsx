import type { SVGProps } from "react";
const InfoCircle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#info-circle(16)_svg__a)">
      <path d="M8 11.834a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5ZM8 4.667A.667.667 0 1 1 8 6a.667.667 0 0 1 0-1.333Z" />
      <path
        fillRule="evenodd"
        d="M.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8ZM8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.834Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="info-circle(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { InfoCircle16 };
