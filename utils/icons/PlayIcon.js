import React from "react";

const PlayIcon = ({ color, class: cs }) => {
  return (
    <svg
      aria-label="Play button icon"
      className={cs}
      color={color}
      fill="currentColor"
      //   color="#ffffff"
      //   fill="#ffffff"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <title>Play button icon</title>
      <path d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path>
    </svg>
  );
};

export default PlayIcon;
