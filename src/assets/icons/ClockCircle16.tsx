import type { SVGProps } from "react";
const ClockCircle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#clock-circle(16)_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 1.833a6.167 6.167 0 1 0 0 12.334A6.167 6.167 0 0 0 8 1.834ZM.833 8a7.167 7.167 0 1 1 14.334 0A7.167 7.167 0 0 1 .833 8ZM8 4.833a.5.5 0 0 1 .5.5v2.46l1.52 1.52a.5.5 0 0 1-.707.707L7.647 8.354A.5.5 0 0 1 7.5 8V5.333a.5.5 0 0 1 .5-.5Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clock-circle(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { ClockCircle16 };
