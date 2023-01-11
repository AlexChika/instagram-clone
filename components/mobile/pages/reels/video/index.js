/* --------------------------------------- */
/*              Video Element              */
/* --------------------------------------- */
import React, { useEffect, useState, useMemo } from "react";
import Overlay from "./VidOverlay";

const Video = () => {
  const [muted, setMuted] = useState(false);

  //   func ...
  function handleVideoOnTap() {
    setMuted(!muted);
  }

  // memoized list video dom elements
  // const vidEl = useMemo(() => {
  //   return [...document.querySelectorAll(`[data-vid="reels"]`)];
  // }, []);

  // console.log(vidEl);

  // obj.addEventListener("loadeddata", () => {
  //   if (obj.readyState >= 2) {
  //     obj.play();
  //   }
  // });

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
          entry.target.muted = muted;
          console.log(muted);
          entry.target.play();
        } else {
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
  // useEffect(() => {
  //   const vid = [...document.querySelectorAll(`[data-vid="reels"]`)];

  //   vid.forEach((vid) => {
  //     vid.muted = muted;
  //   });
  // }, [muted]);

  return (
    <>
      {/* ------------ Parent Wrapper ----------- */}
      <article className="h-[calc(100vh-44px)] relative">
        {/* ----------- Video Element ----------- */}
        <video data-vid="reels" loop className="w-full h-full">
          <source src="/insta-vid.mp4" type="video/mp4" />

          <p className="italic font-medium text-red-600">
            Your browser does not support mp4 video formats
          </p>
        </video>

        {/* --------------- Overlay --------------- */}
        <Overlay params={{ handleVideoOnTap, muted }} />
      </article>

      {/* ------------ Parent Wrapper ----------- */}
      <article className="h-[calc(100vh-44px)] relative">
        {/* ----------- Video Element ----------- */}
        <video data-vid="reels" loop className="w-full h-full">
          <source src="/insta-vid.mp4" type="video/mp4" />

          <p className="italic font-medium text-red-600">
            Your browser does not support mp4 video formats
          </p>
        </video>

        {/* --------------- Overlay --------------- */}
        <Overlay params={{ handleVideoOnTap, muted }} />
      </article>

      {/* ------------ Parent Wrapper ----------- */}
      <article className="h-[calc(100vh-44px)] relative">
        {/* ----------- Video Element ----------- */}
        <video data-vid="reels" loop className="w-full h-full">
          <source src="/insta-vid.mp4" type="video/mp4" />

          <p className="italic font-medium text-red-600">
            Your browser does not support mp4 video formats
          </p>
        </video>

        {/* --------------- Overlay --------------- */}
        <Overlay params={{ handleVideoOnTap, muted }} />
      </article>
    </>
  );
};

export default Video;
