import type { SVGProps } from "react";
const ClockSquare16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#clock-square(16)_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.962.833h.076c1.54 0 2.745 0 3.686.127.963.13 1.724.4 2.32.996.597.597.867 1.357.996 2.32.127.941.127 2.147.127 3.686v.076c0 1.54 0 2.745-.127 3.686-.13.963-.4 1.724-.996 2.32-.596.597-1.357.867-2.32.996-.94.127-2.147.127-3.686.127h-.076c-1.539 0-2.745 0-3.686-.127-.963-.13-1.723-.4-2.32-.996-.596-.596-.867-1.357-.996-2.32-.127-.94-.127-2.147-.127-3.686v-.076c0-1.539 0-2.745.127-3.686.13-.963.4-1.723.996-2.32.597-.596 1.357-.867 2.32-.996C5.217.833 6.423.833 7.962.833ZM4.409 1.951c-.852.115-1.366.333-1.746.712-.38.38-.597.894-.712 1.746-.116.867-.118 2.006-.118 3.591 0 1.586.002 2.724.118 3.591.115.852.333 1.366.712 1.746.38.38.894.598 1.746.712.867.117 2.006.118 3.591.118 1.586 0 2.724-.001 3.591-.118.852-.114 1.366-.332 1.746-.712.38-.38.598-.894.712-1.746.117-.867.118-2.005.118-3.59 0-1.586-.001-2.725-.118-3.592-.114-.852-.332-1.366-.712-1.746-.38-.38-.894-.597-1.746-.712-.867-.116-2.005-.118-3.59-.118-1.586 0-2.725.002-3.592.118ZM8 4.833a.5.5 0 0 1 .5.5v2.46l1.52 1.52a.5.5 0 0 1-.707.707L7.891 8.598c-.193-.193-.29-.29-.34-.412-.05-.122-.05-.258-.05-.531V5.333a.5.5 0 0 1 .5-.5Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clock-square(16)_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export { ClockSquare16 };
