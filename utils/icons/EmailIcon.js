import React from "react";

const EmailIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Share via Email"
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
      <rect
        fill="none"
        height="17.273"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="20"
        x="2"
        y="3.364"
      ></rect>
      <polyline
        fill="none"
        points="2 7.155 12.002 13.81 22 7.157"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </svg>
  );
};

export default EmailIcon;
