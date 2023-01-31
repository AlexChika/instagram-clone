import React from "react";

const PlusIconRound = ({ color = "#0095f6", class: cs }) => {
  return (
    <svg
      aria-label="Plus icon"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#0095f6"
      //   fill="#0095f6"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z"></path>
    </svg>
  );
};

export default PlusIconRound;
