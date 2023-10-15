import type { SVGProps } from "react";
const CloseCircle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#close-circle(16)_svg__a)">
      <path d="M6.687 5.98a.5.5 0 0 0-.707.707L7.293 8 5.98 9.313a.5.5 0 1 0 .707.707L8 8.707l1.313 1.313a.5.5 0 0 0 .707-.707L8.707 8l1.313-1.313a.5.5 0 0 0-.707-.707L8 7.293 6.687 5.98Z" />
      <path
        fillRule="evenodd"
        d="M8 .833a7.167 7.167 0 1 0 0 14.334A7.167 7.167 0 0 0 8 .833ZM1.833 8a6.167 6.167 0 1 1 12.334 0A6.167 6.167 0 0 1 1.834 8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="close-circle(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { CloseCircle16 };
