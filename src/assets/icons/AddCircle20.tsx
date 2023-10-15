import type { SVGProps } from "react";
const AddCircle20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.625 7.5a.625.625 0 1 0-1.25 0v1.875H7.5a.625.625 0 0 0 0 1.25h1.875V12.5a.625.625 0 1 0 1.25 0v-1.875H12.5a.625.625 0 1 0 0-1.25h-1.875V7.5Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 1.042a8.958 8.958 0 1 0 0 17.916 8.958 8.958 0 0 0 0-17.916ZM2.292 10a7.708 7.708 0 1 1 15.416 0 7.708 7.708 0 0 1-15.416 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export { AddCircle20 };
