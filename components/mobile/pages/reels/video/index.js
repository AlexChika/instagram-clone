/* --------------------------------------- */
/*              Video Component              */
/* --------------------------------------- */
import React, { useState, useMemo } from "react";
import video from "./video.module.css";
import Overlay from "./VidOverlay";
import VideoEl from "components/general/reels/VideoEl";

const Video = (props) => {
  const { muted, muteFn, loading, url, showOptModal, showCmtModal } = props;
  const [fullScreen, setFullScreen] = useState(true);
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
        <VideoEl fullScreen={fullScreen} src={url} />

        {/* --------------- Overlay --------------- */}
        <Overlay
          params={{
            muteFn,
            muted,
            loading,
            setFullScreen,
            fullScreen,
            showOptModal,
            showCmtModal,
          }}
        />
      </article>
    </>
  );
};

export default Video;
