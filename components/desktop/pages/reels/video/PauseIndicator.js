/* --------------------------------------- */
/*          Pause  Play  Indicator         */
/* --------------------------------------- */
import React, { useState, useEffect } from "react";
import { PlayIcon } from "utils/icons";

const PauseIndicator = ({ play }) => {
  // const { play, playpause } = params;
  const [indicator, setIndicator] = useState("scale_down_center");

  useEffect(() => {
    if (play) {
      setIndicator("scale_down_center");
    } else {
      setIndicator("scale_up_center");
    }
  }, [play]);

  return (
    <button
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointernone`}
      role="volume indicator"
      data-role="vid_overlay"
    >
      <div
        className={`p-[15px] rounded-full opacity-0 bg-[rgba(0,0,0,0.3)] ${indicator}`}
      >
        <PlayIcon color={"white"} />
      </div>
    </button>
  );
};

export default PauseIndicator;
