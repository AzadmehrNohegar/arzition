import type { SVGProps } from "react";
const RingBell20 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 1.042A6.458 6.458 0 0 0 3.542 7.5v.587c0 .58-.172 1.148-.495 1.631l-.957 1.436a2.934 2.934 0 0 0 1.67 4.458c.63.172 1.264.317 1.903.436l.002.005c.64 1.71 2.353 2.905 4.335 2.905 1.982 0 3.694-1.196 4.335-2.905l.002-.005a23.744 23.744 0 0 0 1.903-.436 2.934 2.934 0 0 0 1.67-4.458l-.958-1.436a2.941 2.941 0 0 1-.494-1.631V7.5A6.458 6.458 0 0 0 10 1.042Zm2.813 15.239a23.72 23.72 0 0 1-5.627 0c.593.85 1.623 1.427 2.814 1.427 1.19 0 2.221-.576 2.813-1.427ZM4.792 7.5a5.208 5.208 0 1 1 10.416 0v.587c0 .827.245 1.636.704 2.325l.957 1.435a1.684 1.684 0 0 1-.958 2.56 22.467 22.467 0 0 1-11.822 0 1.684 1.684 0 0 1-.959-2.56l.958-1.435a4.192 4.192 0 0 0 .704-2.325V7.5Z"
      clipRule="evenodd"
    />
    <circle cx={15.834} cy={4.167} r={2.5} fill="#F1414E" />
  </svg>
);
export { RingBell20 };
