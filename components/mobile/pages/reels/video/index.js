/* --------------------------------------- */
/*              Video Component              */
/* --------------------------------------- */
import React, { useEffect, useState, useMemo } from "react";
import video from "./video.module.css";
import Overlay from "./VidOverlay";
import VideoEl from "./VideoEl";

const Video = (props) => {
  const { muted, handleVideoOnTap } = props;
  const [loading, setLoading] = useState(true);
  // .............................
  // memoized list video dom elements
  // const vidEl = useMemo(() => {
  //   return [...document.querySelectorAll(`[data-vid="reels"]`)];
  // }, []);

  // console.log(vidEl);

  // obj.addEventListener("loadeddata", () => {
  //   if (obj.readyState >= 2) {
  //     obj.play();
  //   }
  // });
  // ..................................

  return (
    <>
      {/* ------------ Parent Wrapper ----------- */}
      <article
        className={`h-[calc(100vh-44px)] relative ${video.video__wrapper}`}
      >
        {/* ----------- Video Element ----------- */}
        <VideoEl />

        {/* --------------- Overlay --------------- */}
        <Overlay params={{ handleVideoOnTap, muted, loading }} />
      </article>
    </>
  );
};

export default Video;
