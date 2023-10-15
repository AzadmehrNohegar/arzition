import type { SVGProps } from "react";
const ClockCircle20 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416ZM1.042 10a8.958 8.958 0 1 1 17.916 0 8.958 8.958 0 0 1-17.916 0ZM10 6.042c.345 0 .625.28.625.625V9.74l1.9 1.9a.625.625 0 1 1-.884.884l-2.083-2.083A.625.625 0 0 1 9.375 10V6.667c0-.346.28-.625.625-.625Z"
      clipRule="evenodd"
    />
  </svg>
);
export { ClockCircle20 };
