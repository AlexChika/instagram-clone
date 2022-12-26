import React from "react";

const CaretDown = ({ color }) => {
  return (
    <svg
      aria-label="Down chevron icon"
      color={color}
      fill="currentColor"
      // color="#262626"
      // fill="#262626"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
    </svg>
  );
};

export default CaretDown;
