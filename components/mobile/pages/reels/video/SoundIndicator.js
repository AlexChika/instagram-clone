/* --------------------------------------- */
/*          Sound Volume Indicator         */
/* --------------------------------------- */

import React, { useEffect, useState } from "react";
import video from "./video.module.css";
import { SpeakerOffIcon, SpeakerOnIcon } from "../../../../../utils/icons";

const Sound = ({ muted }) => {
  const [indicator, setIndicator] = useState("sound__off");
  const [height, setHeight] = useState(0);

  const getHeight = () => {
    let height = window.innerHeight;
    setHeight(height);
  };

  useEffect(() => {
    setIndicator("sound__on");

    setTimeout(() => {
      setIndicator("sound__off");
    }, [800]);
  }, [muted]);

  return (
    <div
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      role="volume indicator"
    >
      <h3 className="text-white">height {height}</h3>
      <button className="text-white red" onClick={getHeight}>
        Get height
      </button>
      {muted ? (
        <div className={`${video.sound__indicator} ${video[indicator]}`}>
          <SpeakerOffIcon color={"white"} />
        </div>
      ) : (
        <div className={`${video.sound__indicator} ${video[indicator]} `}>
          <SpeakerOnIcon color="white" />
        </div>
      )}
    </div>
  );
};

export default Sound;
