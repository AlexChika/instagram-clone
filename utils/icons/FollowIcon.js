import React from "react";

const FollowIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="follow icon"
      className={cs}
      color={color}
      fill="currentColor"
      height="20"
      role="img"
      viewBox="0 0 24 24"
      width="20"
    >
      <title></title>
      <path
        d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></path>
      <path
        d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447"
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
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="5.001"
        x2="5.001"
        y1="7.998"
        y2="14.003"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        x1="8.004"
        x2="2.003"
        y1="11"
        y2="11"
      ></line>
    </svg>
  );
};

export default FollowIcon;
