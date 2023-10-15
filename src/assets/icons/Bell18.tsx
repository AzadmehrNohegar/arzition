import type { SVGProps } from "react";
const Bell18 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 .833A5.167 5.167 0 0 0 2.834 6v.47c0 .464-.138.918-.396 1.305l-.765 1.149a2.347 2.347 0 0 0 1.335 3.566c.504.138 1.012.254 1.523.349l.001.003C5.045 14.21 6.415 15.167 8 15.167s2.956-.957 3.468-2.325l.002-.003a18.997 18.997 0 0 0 1.522-.349 2.347 2.347 0 0 0 1.336-3.566l-.766-1.149a2.353 2.353 0 0 1-.395-1.305V6A5.167 5.167 0 0 0 8 .833Zm2.251 12.192a18.975 18.975 0 0 1-4.502 0c.474.68 1.299 1.142 2.251 1.142.953 0 1.777-.461 2.251-1.142ZM3.834 6a4.167 4.167 0 1 1 8.333 0v.47c0 .662.196 1.309.563 1.86l.766 1.148c.51.765.12 1.806-.767 2.047a17.973 17.973 0 0 1-9.458 0 1.347 1.347 0 0 1-.766-2.047L3.27 8.33c.368-.551.564-1.198.564-1.86V6Z"
      clipRule="evenodd"
    />
  </svg>
);
export { Bell18 };