import Loading from "components/general/reels/Loading";
import React, { useRef, useEffect, useState } from "react";
import { PlayIcon, SpeakerOffIcon, SpeakerOnIcon } from "utils/icons";

const Video = ({ src, muted, muteFn, video, loading }) => {
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
  }

  function pp(e) {
    if (e.target?.dataset?.role) playpause();
  }

  return (
    <article className="relative">
      <video
        data-vid="video-post"
        loop
        className="w-full bg-black max-h-[80vh] h-auto  mx-auto object-contain"
      >
        <source src={src} type="video/mp4" />

        <p className="italic font-medium text-red-600">
          Your browser does not support mp4 video formats
        </p>
      </video>

      <div
        onClick={pp}
        data-role="video-post"
        className="absolute top-0 bottom-0 right-0 left-0"
      >
        <SoundIndicator params={{ muted, muteFn }} />
        <PauseIndicator play={play} />
        <Loading loading={loading} />
      </div>
    </article>
  );
};

export default Video;

const SoundIndicator = ({ params }) => {
  const { muted, muteFn } = params;
  return (
    <button
      onClick={muteFn}
      className="absolute bottom-[15px] right-[15px] p-[7px] rounded-full bg-neutral-900 z-[5]] pointernone"
    >
      {muted ? (
        <SpeakerOffIcon color="white" class="h-[15px] w-[15px]" />
      ) : (
        <SpeakerOnIcon color="white" class="h-[15px] w-[15px]" />
      )}
    </button>
  );
};

const PauseIndicator = ({ play }) => {
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
      data-role="video-post"
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointernone`}
      role="volume indicator"
    >
      <div className={`p-[15px] rounded-full opacity-0 ${indicator}`}>
        <PlayIcon color={"#ffffff99"} class="w-16 h-16" />
      </div>
    </button>
  );
};
