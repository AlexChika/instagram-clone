import React from "react";

const CheckIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Checkmark filled icon"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#0095f6"
      //   fill="#0095f6"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5.706 9.21-6.5 6.495a1 1 0 0 1-1.414-.001l-3.5-3.503a1 1 0 1 1 1.414-1.414l2.794 2.796L16.293 8.3a1 1 0 0 1 1.414 1.415Z"></path>
    </svg>
  );
};

export default CheckIcon;
