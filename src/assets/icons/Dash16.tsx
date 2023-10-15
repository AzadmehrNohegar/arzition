import type { SVGProps } from "react";
const Dash16 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 8c0 .276-.336.5-.75.5h-8.5C3.336 8.5 3 8.276 3 8s.336-.5.75-.5h8.5c.414 0 .75.224.75.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Dash16 };
