import React from "react";

const CommentIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Comment"
      className={cs}
      color={color}
      fill="currentColor"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Comment</title>
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

export default CommentIcon;
