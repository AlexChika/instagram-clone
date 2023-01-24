import React, { useEffect, useState } from "react";
import style from "./video.module.css";
import VideoEl from "components/general/reels/VideoEl";
import Overlay from "./VidOverlay";

const Video = (props) => {
  const { muted, muteFn, loading, url, video } = props;
  const [fullScreen, setFullScreen] = useState(true);
  const [play, setPlay] = useState(false);

  function playpause() {
    if (!video) return;
    console.log("I ran ...video.js desktop");

    if (video.paused) {
      video.play();
      setPlay(true);
    } else {
      video.pause();
      setPlay(false);
    }
  }

  return (
    <article
      className={`my-[16px] flex justify-between mx-auto ${style.video__wrapper}`}
    >
      <div className="flex-[1] relative">
        <VideoEl fullScreen={fullScreen} src={url} />
        <Overlay />
      </div>

      <div className="w-[60px] green">{/* <Buttons/>  */}</div>
    </article>
  );
};

export default Video;
