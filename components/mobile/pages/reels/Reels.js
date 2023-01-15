import React, { useState, useEffect, useRef } from "react";
import Video from "./video";
import video from "./video/video.module.css";
import SetHeight from "../../../../utils/hooks/setHeight";

// app
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

  function handleCanPlay() {
    console.log("I was called");
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
  }, []); //vid urls dep here later

  /* -------- mute and unmute logic -------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
      vid.addEventListener("canplay", handleCanPlay);
    });

    return () => {
      vid.forEach((vid) => {
        vid.removeEventListener("canplay", handleCanPlay);
      });
    };
  }, [muted]);

  /* ------- Effect for vid skeleton ------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.addEventListener("canplay", handleCanPlay);
    });

    return () => {
      vid.forEach((vid) => {
        vid.removeEventListener("canplay", handleCanPlay);
      });
    };
  }, []);

  /* -- dynamic Reels Wrapper Height hook - */
  SetHeight(ReelsREf);

  const urls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://static.videezy.com/system/resources/previews/000/005/755/original/xylophone.mp4",
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
      {/* <Video
        muted={muted}
        loading={loading}
        handleVideoOnTap={handleVideoOnTap}
        key={"insta"}
      /> */}
    </div>
  );
};

export default Reels;
