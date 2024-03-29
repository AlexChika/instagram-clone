import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "../general/Header";
import Nav from "../general/Nav";
import Video from "../general/Video";
import Footer from "../general/PostPageFooter";
import Comments from "../general/Comments";
import OptionsModal from "../general/OptionsModal";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";

const SingleVideo = () => {
  const router = useRouter();

  // video states
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [id, setId] = useState(null);

  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  const VideoWrapper = useRef(null);
  const commentWrapper = useRef(null);
  const [width, setWidth] = useState(null);

  function mutedFn() {
    setMuted(!muted);
  }

  function handlePlaying() {
    setLoading(false);
  }

  function handleWaiting() {
    setLoading(true);
  }

  //   Get video id effect
  useEffect(() => {
    const { id: _id } = router.query;
    setId(_id);
  }, [router]);

  //   mute and unmute fn
  useEffect(() => {
    const _video = document.querySelector(`[data-id="${id}"]`);
    if (_video) {
      _video.muted = muted;
    }
  }, [muted, id, width]);

  /* -------- video event listeners -------- */
  useEffect(() => {
    const _video = document.querySelector(`[data-id="${id}"]`);

    if (!_video) return;
    setVideo(_video);

    _video.play();

    _video.addEventListener("playing", handlePlaying);
    _video.addEventListener("waiting", handleWaiting);

    return () => {
      _video.removeEventListener("playing", handlePlaying);
      _video.removeEventListener("waiting", handleWaiting);
    };
  }, [id, width]);

  //   effect sets the height of
  useEffect(() => {
    function call() {
      if (width < 725) return;

      let height = VideoWrapper.current?.getBoundingClientRect()?.height;

      let commentHeight = height - 235;
      commentWrapper.current.style.height = `${commentHeight}px`;
    }

    let interval;
    let count = 0;
    interval = setInterval(() => {
      count++;

      if (count > 2) clearInterval(interval);
      call();
    }, 500);
  }, [width]);

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileLayout showBottomNav>
      <div className="min-[725px]:w-[95%] max-w-[815px] mx-auto top-0 z-[5] sticky">
        <Nav title={"Video"} />
      </div>

      {/* ------------ mobile screens ----------- */}
      {width < 725 && (
        <section className="min-[725px]:hidden pb-[44px] max-w-[725px] mx-auto">
          <Header showModal={setShowOptModal} showExtras />
          <Video
            id={id}
            muted={muted}
            muteFn={mutedFn}
            loading={loading}
            video={video}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <Footer showModal={setShrOptModal} />
        </section>
      )}

      {/* ---------- tablet and desktop --------- */}
      <div className="px-5">
        {width > 725 && (
          <section className="hidden min-[725px]:flex max-w-[815px] mx-auto mt-5 w-full border border-slate-300 dark:border-neutral-700">
            {/* -------------- post video ------------- */}
            <article
              ref={VideoWrapper}
              className="w-[58%] min-h-[450px] flex items-center justify-center self-center"
            >
              <Video
                id={id}
                muted={muted}
                muteFn={mutedFn}
                loading={loading}
                video={video}
                //   src="/insta-vid1.mp4"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              />
            </article>

            {/* ------------- post details ------------ */}
            <article className="w-[42%] border-l border-l-slate-300 dark:border-l-gray-700 ">
              <Header showModal={setShowOptModal} showExtras />

              {/* ------------ post comments ------------ */}
              <div
                ref={commentWrapper}
                className="overflow-y-auto hide__scroll__bar px-4 py-1 border-b border-b-slate-300 dark:border-b-neutral-700"
              >
                <Comments />
              </div>

              <div className="border-b border-b-slate-300 dark:border-b-neutral-700">
                <Footer commentBox showModal={setShrOptModal} />
              </div>
            </article>
          </section>
        )}
      </div>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} />
    </MobileLayout>
  );
};

export default SingleVideo;
