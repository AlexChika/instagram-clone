import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "components/mobile/pages/general/Header";
import Video from "components/mobile/pages/general/Video";
import Footer from "components/mobile/pages/general/PostPageFooter";
import Comments from "components/mobile/pages/general/Comments";
import OptionsModal from "../general/OptionsModal";

function VideoComments() {
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

  console.log(video);

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
    const videos = [...document.querySelectorAll(`[data-id="video_comments"]`)];

    videos.forEach((video) => {
      video.muted = muted;
    });
  }, [muted]);

  /* -------- video event listeners -------- */
  useEffect(() => {
    const videos = [...document.querySelectorAll(`[data-id="video_comments"]`)];

    videos.forEach((video) => {
      video.pause();
      video.addEventListener("playing", handlePlaying);
      video.addEventListener("waiting", handleWaiting);
    });

    video?.play(); //video set on the state

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("playing", handlePlaying);
        video.removeEventListener("waiting", handleWaiting);
      });
    };
  }, [video]);

  //   effect sets the height of
  useEffect(() => {
    function call() {
      if (!VideoWrapper.current || !commentWrapper.current) return;
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
    const videos = [...document.querySelectorAll(`[data-id="video_comments"]`)];

    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth < 725) {
        setVideo(videos[0]);
      } else {
        setVideo(videos[1]);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="overflow-y-auto max-h-[90%] hide__scroll__bar">
        {/* ------------ mobile screens ----------- */}
        <section className="bg-white dark:bg-black min-[725px]:hidden pb-[44px] max-w-[725px] mx-auto ">
          <Header showModal={setShowOptModal} showExtras />
          <Video
            id={"video_comments"}
            muted={muted}
            muteFn={mutedFn}
            loading={loading}
            video={video}
            src="/insta-vid1.mp4"
          />
          {/* <Footer showModal={setShrOptModal} /> */}
          <Footer />
        </section>

        {/* ---------- tablet and desktop --------- */}
        <div className="px-5">
          <section className="bg-white dark:bg-black hidden min-[725px]:flex max-w-[815px] mx-auto mt-5 w-full border border-slate-300 dark:border-neutral-700">
            {/* -------------- post video ------------- */}
            <article
              ref={VideoWrapper}
              className="w-[58%] min-h-[450px] flex items-center justify-center self-center"
            >
              <Video
                id={"video_comments"}
                muted={muted}
                muteFn={mutedFn}
                loading={loading}
                video={video}
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
                {/* <Footer showModal={setShrOptModal} /> */}
                <Footer commentBox />
              </div>
            </article>
          </section>
        </div>
      </section>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      {/* <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} /> */}
    </>
  );
}

export default VideoComments;
