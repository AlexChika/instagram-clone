/* --------------------------------------- */
/*              Video Component              */
/* --------------------------------------- */
import React, { useEffect, useState, useMemo } from "react";
import video from "./video.module.css";
import Overlay from "./VidOverlay";
import VideoEl from "./VideoEl";

const Video = (props) => {
  const { muted, handleVideoOnTap, loading, url, svg } = props;
  // const [loading, setLoading] = useState(false);
  // .............................
  // memoized list video dom elements
  // const vidEl = useMemo(() => {
  //   return [...document.querySelectorAll(`[data-vid="reels"]`)];
  // }, []);

  // console.log(vidEl);

  return (
    <>
      {/* ------------ Parent Wrapper ----------- */}
      <article className={` ${video.video__wrapper}`}>
        {/* ----------- Video Element ----------- */}
        <VideoEl svg={svg} src={url} />

        {/* --------------- Overlay --------------- */}
        <Overlay params={{ handleVideoOnTap, muted, loading }} />
      </article>
    </>
  );
};

export default Video;
