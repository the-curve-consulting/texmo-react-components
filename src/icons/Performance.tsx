import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerformance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 46.305 46.305"
    width="auto"
    height="auto"
    {...props}
  >
    <path
      fill="none"
      stroke="#424244"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M23.153 1.5A21.653 21.653 0 1 1 1.5 23.153"
      data-name="Path 1503"
    />
    <path
      fill="#fff"
      stroke="#424244"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M4.334 12.178a21.2 21.2 0 0 1 8.154-7.84"
      data-name="Path 1504"
    />
    <text
      fill="#424244"
      data-name={100}
      fontFamily="Kohinoor-Bold, Kohinoor"
      fontSize={16}
      fontWeight={700}
      transform="translate(23.153 27.153)"
    >
      <tspan x={-13.296} y={0}>
        {'100'}
      </tspan>
    </text>
  </svg>
);
export default SvgPerformance;
