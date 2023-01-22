import React from "react";

const MusicIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Audio image"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#ffffff"
      //   fill="#ffffff"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <title>Audio image</title>
      <path d="M21.002 16.972V2.044a.999.999 0 0 0-.36-.769 1.012 1.012 0 0 0-.823-.214L6.816 3.479A1 1 0 0 0 6 4.462v10.864A3.75 3.75 0 1 0 9 19V9.56l9.003-1.675v5.442A3.75 3.75 0 1 0 21.005 17c0-.01-.003-.02-.003-.029Z"></path>
    </svg>
  );
};

export default MusicIcon;
