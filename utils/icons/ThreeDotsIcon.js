import React from "react";

const ThreeDotsIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="More"
      fill="currentColor"
      className={cs}
      color={color}
      //   color="#ffffff"
      //   fill="#ffffff"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>More</title>
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

export default ThreeDotsIcon;
