import React, { useEffect, useState } from "react";
import style from "./video.module.css";
import VideoEl from "components/general/reels/VideoEl";
import Overlay from "./VidOverlay";
import Buttons from "./Buttons";

const Video = (props) => {
  const { muted, muteFn, loading, url, video } = props;
  const [fullScreen, setFullScreen] = useState(true);
  const [play, setPlay] = useState(true);

  function playpause() {
    if (!video) return;

    if (video.paused) {
      video.dataset.stop = "";
      video.play();
      setPlay(true);
    } else {
      video.pause();
      video.dataset.stop = "true";
      setPlay(false);
    }

    // Note* the dataset stop is checked by the intersection observer to know if a video was paused by user so it doesnt call the play function
  }

  function likeFn() {
    setLiked(!liked);
  }

  return (
    <article
      className={`my-[16px] flex justify-between mx-auto ${style.video__wrapper}`}
    >
      <div className="flex-[1] relative">
        <VideoEl fullScreen={fullScreen} src={url} />
        <Overlay params={{ loading, playpause, play, muteFn, muted }} />
      </div>

      <div className="w-[60px] self-end">
        {/* - Buttons => like comment message etc - */}
        <Buttons params={{ fullScreen, setFullScreen }} />
      </div>
    </article>
  );
};

export default Video;
