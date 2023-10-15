import type { SVGProps } from "react";
const Heart16 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.75 2.95c-1.106.505-1.917 1.707-1.917 3.141 0 1.465.6 2.594 1.46 3.562.708.798 1.565 1.459 2.401 2.103.199.153.396.306.59.458.35.277.664.52.965.696.302.176.545.257.751.257.207 0 .45-.08.751-.257.302-.176.614-.419.965-.696.194-.152.392-.305.59-.458.836-.644 1.694-1.305 2.402-2.103.86-.968 1.459-2.097 1.459-3.562 0-1.434-.81-2.636-1.916-3.142-.983-.449-2.273-.378-3.536.726l.972.971a.5.5 0 1 1-.707.708L7.647 4.02l-.007-.007C6.268 2.588 4.824 2.458 3.75 2.949ZM8 2.971C6.46 1.593 4.733 1.401 3.334 2.04c-1.477.675-2.5 2.243-2.5 4.051 0 1.777.74 3.133 1.71 4.226.778.876 1.73 1.608 2.57 2.255.19.147.375.29.551.428.342.27.708.556 1.08.773.371.217.795.394 1.255.394.46 0 .884-.177 1.256-.394.371-.217.738-.504 1.08-.773.175-.139.36-.281.55-.428.84-.647 1.792-1.38 2.57-2.255.97-1.093 1.71-2.449 1.71-4.226 0-1.808-1.022-3.376-2.5-4.051-1.399-.64-3.124-.447-4.666.932Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Heart16 };