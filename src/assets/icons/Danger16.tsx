import type { SVGProps } from "react";
const Danger16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#danger(16)_svg__a)">
      <path d="M8 4.167a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5ZM8 11.333A.667.667 0 1 0 8 10a.667.667 0 0 0 0 1.333Z" />
      <path
        fillRule="evenodd"
        d="M.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8ZM8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.834Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="danger(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { Danger16 };
