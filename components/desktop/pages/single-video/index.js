import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import DesktopLayout from "components/desktop/layout";
import Header from "components/mobile/pages/general/Header";
import Nav from "components/mobile/pages/general/Nav";
import OptionsModal from "../general/OptionsModal";
// import ShareOverlay from "../share-overlay.js";
import Footer from "components/mobile/pages/general/PostPageFooter";
import Comments from "components/mobile/pages/general/Comments";
import Video from "components/mobile/pages/general/Video";
import Link from "next/link";
import Image from "next/image";
import IconHOC from "components/general/IconHOC";
import { ReelsWhiteIcon, CommentIcon, HeartIcon } from "utils/icons";

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

  // .......................
  return (
    <DesktopLayout>
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
          {/* <Footer showModal={setShrOptModal} /> */}
          <Footer />
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
                {/* <Footer showModal={setShrOptModal} /> */}
                <Footer commentBox />
              </div>
            </article>
          </section>
        )}

        {/* ----- more posts from same account ---- */}
        <MorePost />
      </div>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      {/* <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} /> */}
    </DesktopLayout>
  );
};

export default SingleVideo;

function MorePost() {
  return (
    <section className="max-w-[815px] mx-auto pt-10 my-10 border-t border-t-slate-300 dark:border-t-neutral-700">
      <p className="mb-3">
        <span className="opacity-50 mr-1">More posts from</span>
        <span className="font-semi-bold">{"dev_arise"}</span>
      </p>

      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((data, ind) => {
          return <MorePostCard key={ind} ind={ind} />;
        })}
      </div>
    </section>
  );
}

function MorePostCard({ ind, src }) {
  useEffect(() => {
    //   first check if link is video or post photo and manipulate the link

    return () => {
      // second
    };
  }, []);

  return (
    <Link href={`/reels/${ind}/video`} passHref>
      <a className="relative aspect-square group">
        <Image layout="fill" src="/test.jpg" alt="some text here" />

        <div className="bg-[rgba(0,0,0,0.2)] absolute top-0 bottom-0 left-0 right-0 z-[2] flex justify-center items-center invisible group-hover:visible">
          <div className="flex">
            <span className="text-white flex items-center font-bold mr-2">
              {IconHOC(HeartIcon, "none", "text-white mr-1")} {"300"}
            </span>

            <span className="text-white flex items-center font-bold ml-2">
              {IconHOC(CommentIcon, "none", "text-white mr-1")} {"300"}
            </span>
          </div>
        </div>

        {/* if card is  a video */}
        <span className="absolute z-[3] top-[10px] left-[10px]">
          {IconHOC(ReelsWhiteIcon, "none", "drop-shadow-lg")}
        </span>
      </a>
    </Link>
  );
}

export { MorePost };
