import * as React from "react";

const SvgArrowBottom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25a.75.75 0 0 1 .75.75v16.19l5.72-5.72a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06 0l-7-7a.75.75 0 1 1 1.06-1.06l5.72 5.72V3a.75.75 0 0 1 .75-.75z"
    />
  </svg>
);

export default SvgArrowBottom;
