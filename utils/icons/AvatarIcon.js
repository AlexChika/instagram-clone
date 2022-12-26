import React from "react";

const AvatarIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="user avartar"
      width="36"
      height="36"
      fill={color}
      // fill="#ffffff"
      viewBox="0 0 24 18"
    >
      <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
};

export default AvatarIcon;
