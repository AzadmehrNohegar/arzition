import type { SVGProps } from "react";
const InfoCircle20 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 14.791c.345 0 .625-.28.625-.625v-5a.625.625 0 1 0-1.25 0v5c0 .346.28.625.625.625ZM10 5.833A.833.833 0 1 1 10 7.5a.833.833 0 0 1 0-1.667Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.042 10a8.958 8.958 0 1 1 17.916 0 8.958 8.958 0 0 1-17.916 0ZM10 2.292a7.708 7.708 0 1 0 0 15.416 7.708 7.708 0 0 0 0-15.416Z"
      clipRule="evenodd"
    />
  </svg>
);
export { InfoCircle20 };
