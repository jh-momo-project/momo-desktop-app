import * as React from "react";

const SvgArrowTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .53.22l7 7a.75.75 0 1 1-1.06 1.06l-5.72-5.72V21a.75.75 0 0 1-1.5 0V4.81l-5.72 5.72a.75.75 0 1 1-1.06-1.06l7-7a.75.75 0 0 1 .53-.22z"
    />
  </svg>
);

export default SvgArrowTop;
