import type { SVGProps } from "react";
const Dash20 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 10c0 .345-.336.625-.75.625h-8.5c-.414 0-.75-.28-.75-.625s.336-.625.75-.625h8.5c.414 0 .75.28.75.625Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Dash20 };
