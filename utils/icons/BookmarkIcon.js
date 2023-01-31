import React from "react";

const BookmarkIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Save"
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
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

export default BookmarkIcon;
