import * as React from "react";

const SvgArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M13.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H3a.75.75 0 0 1 0-1.5h16.19l-5.72-5.72a.75.75 0 0 1 0-1.06z"
    />
  </svg>
);

export default SvgArrowRight;
