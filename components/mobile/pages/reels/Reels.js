import React, { useState, useEffect, useRef } from "react";
import Video from "./video";
import video from "./video/video.module.css";
import SetHeight from "utils/hooks/mobileSetHeight";
import OptionsModal from "../components/OptionsModal";
import ReelsComment from "./ReelsComment";

// app
const Reels = () => {
  const ReelsREf = useRef(null);
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showCommentsModal, setShowCommentsModal] = useState(false);

  //   func ...
  function muteFn() {
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
  }, []); //vid urls dep here later

  /* -------- mute and unmute logic -------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
    });
  }, [muted]);

  /* -- dynamic Reels Wrapper Height hook - */
  SetHeight(ReelsREf);

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
    <>
      <div ref={ReelsREf} className={video.reels__wrapper}>
        {urls.map((url, index) => {
          return (
            <Video
              muted={muted}
              loading={loading}
              muteFn={muteFn}
              key={index}
              url={url}
              showOptModal={setShowOptionsModal}
              showCmtModal={setShowCommentsModal}
            />
          );
        })}
      </div>

      {/* comments section general here */}
      <ReelsComment
        showModal={showCommentsModal}
        setShowModal={setShowCommentsModal}
      />

      {/* options modal general here too */}
      <OptionsModal
        showModal={showOptionsModal}
        setShowModal={setShowOptionsModal}
      />
    </>
  );
};

export default Reels;
