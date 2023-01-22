import React from "react";

const FacebookIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Share to Facebook"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#262626"
      //   fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="11.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        d="M16.671 15.469 17.203 12h-3.328V9.749a1.734 1.734 0 0 1 1.956-1.874h1.513V4.922a18.452 18.452 0 0 0-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v7.885a12.125 12.125 0 0 0 3.75 0V15.47Z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
