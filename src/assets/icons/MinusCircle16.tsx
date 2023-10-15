import type { SVGProps } from "react";
const MinusCircle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#minus-circle(16)_svg__a)">
      <path d="M10 8.5a.5.5 0 0 0 0-1H6a.5.5 0 0 0 0 1h4Z" />
      <path
        fillRule="evenodd"
        d="M8 .833a7.167 7.167 0 1 0 0 14.334A7.167 7.167 0 0 0 8 .833ZM1.833 8a6.167 6.167 0 1 1 12.334 0A6.167 6.167 0 0 1 1.834 8Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="minus-circle(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { MinusCircle16 };
