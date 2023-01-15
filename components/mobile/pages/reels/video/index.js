/* --------------------------------------- */
/*              Video Component              */
/* --------------------------------------- */
import React, { useState, useMemo } from "react";
import Skeleton from "./VidSkeleton";
import video from "./video.module.css";
import Overlay from "./VidOverlay";
import VideoEl from "./VideoEl";

const Video = (props) => {
  const { muted, muteFn, loading, url } = props;
  const [canplay, setCanPlay] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
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
        <VideoEl fullScreen={fullScreen} setCanPlay={setCanPlay} src={url} />

        {/* --------------- Overlay --------------- */}
        {canplay && (
          <Overlay
            params={{ muteFn, muted, loading, setFullScreen, fullScreen }}
          />
        )}

        {/* ----------- Skeleton loader ----------- */}
        {!canplay && <Skeleton />}
      </article>
    </>
  );
};

export default Video;
