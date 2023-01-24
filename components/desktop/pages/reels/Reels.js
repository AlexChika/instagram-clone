import { useEffect, useState, useRef } from "react";
import video from "./video/video.module.css";
import SetHeight from "utils/hooks/desktopSetHight";
import Video from "./video";

// ......
const Reels = () => {
  const ReelsREf = useRef(null);

  //   local state
  const [currentVideo, setCurrentVideo] = useState(null);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);

  //   functions
  function muteFn() {
    setMuted(!muted);
  }

  function handleWaiting() {
    setLoading(true);
  }

  function handlePlaying() {
    setLoading(false);
  }

  // effects and hooks
  SetHeight(ReelsREf);

  /* ------- autoplay observer logic ------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.65,
    };

    function observerHandler(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.addEventListener("waiting", handleWaiting);
          entry.target.addEventListener("playing", handlePlaying);
          entry.target.play();
          setCurrentVideo(entry.target);
        } else {
          entry.target.removeEventListener("waiting", handleWaiting);
          entry.target.removeEventListener("playing", handlePlaying);
          entry.target.pause();
        }
      });
    }

    let observer = new IntersectionObserver(observerHandler, options);

    vid.forEach((el) => {
      observer.observe(el);
    });
    return () => {};
  }, []); //vid urls dep here later

  /* -------- mute and unmute logic -------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
    });
  }, [muted]);

  const urls = [
    "/insta-vid.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "/insta-vid1.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "/insta-vid2.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "/insta-vid3.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "/insta-vid4.mp4",
  ];

  return (
    <div ref={ReelsREf} className={video.reels__wrapper}>
      {urls.map((url, index) => {
        return (
          <Video
            muted={muted}
            loading={loading}
            muteFn={muteFn}
            video={currentVideo}
            key={index}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default Reels;
