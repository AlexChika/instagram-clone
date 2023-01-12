import React, { useState, useEffect } from "react";
import Video from "./video";
import video from "./video/video.module.css";

const Reels = () => {
  const [muted, setMuted] = useState(true);
  let vidEl;

  //   func ...
  function handleVideoOnTap() {
    setMuted(!muted);
  }

  function handleVideoLoaded() {
    console.log(vidEl.readyState);
    if (vidEl.readyState >= 2) {
      vidEl.play();
    } else {
      vidEl.pause();
    }
  }

  // autoplay observer logic
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
          vidEl = entry.target;
          console.log(vidEl);
          entry.target.addEventListener("loadeddata", handleVideoLoaded);
        } else {
          entry.target.removeEventListener("loadeddata", handleVideoLoaded);
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

  //   mute and unmute logic
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
    });
  }, [muted]);

  return (
    <div className={video.reels__wrapper}>
      {[1, 2, 3, 4, 5, 6].map((vid, index) => {
        return (
          <Video
            muted={muted}
            handleVideoOnTap={handleVideoOnTap}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Reels;
