import React, { useEffect, useState, useRef, useReducer } from "react";
import style from "./video.module.css";
import VideoEl from "components/general/reels/VideoEl";
import Overlay from "./VidOverlay";
import Buttons from "./Buttons";
import reducer from "./reducer";
import { a } from "./reducer";

const init_state = {
  // video parent state....
  fullscreen: true,
  play: true,
  showBtns: false,

  //like ......
  liked: false,
  likes: 0,
  // comments
  comments: 0,
}; //initial video state

const Video = (props) => {
  const {
    muted,
    muteFn,
    loading,
    url,
    video,
    setShowCommentModal,
    setShowOptionsModal,
  } = props;
  const [s, dispatch] = useReducer(reducer, init_state);
  const wapperRef = useRef(null);

  function playpause() {
    a.play(dispatch, video);
  }

  /* ------- autoplay observer logic ------- */
  useEffect(() => {
    const vidEl = wapperRef.current;

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    function observerHandler(entries, observer) {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          setTimeout(() => {
            a.showButtons(dispatch, true);
          }, 260);
        } else {
          a.showButtons(dispatch, false);
        }
      });
    }

    let observer = new IntersectionObserver(observerHandler, options);

    observer.observe(vidEl);

    return () => {};
  }, []);

  return (
    <article
      ref={wapperRef}
      className={`my-[16px] flex justify-between mx-auto ${style.video__wrapper}`}
    >
      <div className="flex-[1] relative">
        <VideoEl fullScreen={s.fullscreen} src={url} />
        <Overlay params={{ loading, playpause, play: s.play, muteFn, muted }} />
      </div>

      <div className={`w-[60px] self-end`}>
        <Buttons
          fullScreen={s.fullscreen}
          fullScreen_a={a.fullscreen}
          dispatch={dispatch}
          liked={s.liked}
          liked_a={a.liked}
          setShowCommentModal={setShowCommentModal}
          setShowOptionsModal={setShowOptionsModal}
        />
        {/* {s.showBtns && (
        )} */}
      </div>
    </article>
  );
};

export default Video;
