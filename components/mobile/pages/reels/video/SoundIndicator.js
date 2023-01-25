/* --------------------------------------- */
/*          Sound Volume Indicator         */
/* --------------------------------------- */

import React, { useEffect, useState } from "react";
import video from "./video.module.css";
import { SpeakerOffIcon, SpeakerOnIcon } from "../../../../../utils/icons";

const Sound = ({ muted }) => {
  const [indicator, setIndicator] = useState("scale_down_center");

  useEffect(() => {
    setIndicator("scale_up_center");

    setTimeout(() => {
      setIndicator("scale_down_center");
    }, [800]);
  }, [muted]);

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      role="volume indicator"
    >
      {muted ? (
        <div
          className={`p-[15px] rounded-full opacity-0 bg-[rgba(0,0,0,0.3)] ${indicator}`}
        >
          <SpeakerOffIcon color={"white"} />
        </div>
      ) : (
        <div
          className={`p-[15px] rounded-full opacity-0 bg-[rgba(0,0,0,0.3)] ${indicator} `}
        >
          <SpeakerOnIcon color="white" />
        </div>
      )}
    </div>
  );
};

export default Sound;
