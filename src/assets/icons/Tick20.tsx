import type { SVGProps } from "react";
const Tick20 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.411 5.78c.26.226.287.621.06.881l-6.548 7.5a.625.625 0 0 1-.941 0l-2.62-3a.625.625 0 0 1 .942-.822l2.149 2.46 6.076-6.96a.625.625 0 0 1 .882-.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Tick20 };
