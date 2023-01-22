import React from "react";

const LinkIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Copy link"
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
        d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="8.471"
        x2="15.529"
        y1="15.529"
        y2="8.471"
      ></line>
    </svg>
  );
};

export default LinkIcon;
