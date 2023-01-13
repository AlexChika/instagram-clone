import React, { useState, useEffect, useMemo, useRef } from "react";
import Video from "./video";
import video from "./video/video.module.css";

const Reels = () => {
  const ReelsREf = useRef(null);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);

  //   func ...
  function handleVideoOnTap() {
    setMuted(!muted);
  }

  function handleWaiting() {
    console.log("fired");
    setLoading(true);
  }
  function handlePlaying() {
    console.log("firing");
    setLoading(false);
  }

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
  }, [muted]);

  /* -------- mute and unmute logic -------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
    });
  }, [muted]);

  /* -- dynamic Reels Wrapper Height logic - */
  useEffect(() => {
    let _height;
    const refElement = ReelsREf.current;
    function handleScrollEvent() {
      if (_height === window.innerHeight) return;
      _height = window.innerHeight;
      ReelsREf.current.style.height = `${_height - 44}px`;
      console.log(_height);
      // 44px serves as the bottom navbar height
    }

    refElement.addEventListener("scroll", handleScrollEvent);

    return () => {
      refElement.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const urls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  ];
  return (
    <div ref={ReelsREf} className={video.reels__wrapper}>
      {urls.map((url, index) => {
        return (
          <Video
            muted={muted}
            loading={loading}
            handleVideoOnTap={handleVideoOnTap}
            key={index}
            url={url}
          />
        );
      })}
    </div>
  );
};

export default Reels;
