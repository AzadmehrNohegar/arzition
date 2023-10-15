import type { SVGProps } from "react";
const Danger20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 5.208c.345 0 .625.28.625.625v5a.625.625 0 1 1-1.25 0v-5c0-.345.28-.625.625-.625ZM10 14.167a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.042 10a8.958 8.958 0 1 1 17.916 0 8.958 8.958 0 0 1-17.916 0ZM10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Danger20 };
