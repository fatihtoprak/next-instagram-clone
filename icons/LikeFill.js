import * as React from "react";

function SvgLikeFill(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.858 1.42c-2.062 0-3.62.826-4.858 2.567-1.238-1.695-2.796-2.52-4.858-2.52C2.75 1.42 0 4.4 0 8.067c0 3.345 2.475 5.5 4.858 7.562.275.23.596.504.871.78l1.054.916c2.017 1.788 3.025 2.704 3.484 2.98.229.137.504.228.733.228.23 0 .504-.091.733-.229.459-.275 1.284-1.008 3.575-3.116l.917-.825c.32-.276.596-.55.917-.78C19.57 13.567 22 11.458 22 8.067 22 4.4 19.25 1.42 15.858 1.42z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLikeFill;