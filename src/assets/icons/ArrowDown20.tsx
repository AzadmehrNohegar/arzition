import type { SVGProps } from "react";
const ArrowDown20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 2.708c.345 0 .625.28.625.625v11.825l3.933-3.933a.625.625 0 1 1 .884.884l-5 5a.625.625 0 0 1-.884 0l-5-5a.625.625 0 1 1 .884-.884l3.933 3.933V3.333c0-.345.28-.625.625-.625Z"
      clipRule="evenodd"
    />
  </svg>
);
export { ArrowDown20 };
