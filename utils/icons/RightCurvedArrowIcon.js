import React from "react";

const RightCurvedArrowIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="See All"
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
      <path
        d="M23.247 10.465H9.185a8.438 8.438 0 0 0-8.438 8.438v2.819"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
      <polyline
        fill="none"
        points="15.06 2.278 23.247 10.465 15.06 18.653"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></polyline>
    </svg>
  );
};

export default RightCurvedArrowIcon;
