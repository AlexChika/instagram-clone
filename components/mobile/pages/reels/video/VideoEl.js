/* --------------------------------------- */
/*              Video Element              */
/* --------------------------------------- */

import React, { useEffect, useRef } from "react";
import getGradient from "../../../../../utils/gradient";

const VideoEl = ({ src = "/insta-vid.mp4", setCanPlay, fullScreen }) => {
  const videoRef = useRef(null);

  function handleCanPlay() {
    setCanPlay(true);
  }

  /* -------- set video aspect ratio ------- */
  useEffect(() => {
    const video = videoRef.current;

    fullScreen
      ? video.style.setProperty("--object-fit", "fill")
      : video.style.setProperty("--object-fit", "contain");
  }, [fullScreen]);

  /* ------- Effect for vid skeleton ------- */
  useEffect(() => {
    const video = videoRef.current;

    function handleCanPlay() {
      if (video.readyState > 2) setCanPlay(true);
    }

    video.style.background = getGradient();
    video.addEventListener("loadeddata", handleCanPlay);

    return () => {
      video.removeEventListener("loadeddata", handleCanPlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ....
  return (
    <video
      ref={videoRef}
      data-vid="reels"
      loop
      className="w-full h-full mx-auto"
    >
      <source src={src} type="video/mp4" />

      <p className="italic font-medium text-red-600">
        Your browser does not support mp4 video formats
      </p>
    </video>
  );
};

export default VideoEl;
