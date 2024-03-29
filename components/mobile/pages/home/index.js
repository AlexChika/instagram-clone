import React, { useEffect, useState, useRef } from "react";
import MobileLayout from "../../layout";
import HomeNavTop from "components/mobile/layout/HomeNavTop";
import Stories from "./stories";
import { App } from "pages/_app";
import Post from "./post";
import OptionsModal from "../general/OptionsModal";
import ShareOverlay from "../share-overlay.js";
import HomeEmoji from "components/general/home/HomeEmoji";

// app........
const MobileHomePage = () => {
  const { changeTheme, theme } = App();

  // emoji states and refs
  const homePageRef = useRef(null);
  const [emoji, setEmoji] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [position, setPosition] = useState({});

  // video states
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);

  // options modal state
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const muteFn = () => {
    setMuted(!muted);
    console.log("I fired");
  };

  function handleWaiting() {
    setLoading(true);
  }

  function handlePlaying() {
    setLoading(false);
  }

  /* ------- autoplay observer logic ------- */
  useEffect(() => {
    const vid = [...document.querySelectorAll(`[data-vid="video-post"]`)];
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
          setCurrentVideo(entry.target);
          if (!entry.target?.dataset?.stop) entry.target.play();
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
    const vid = [...document.querySelectorAll(`[data-vid="video-post"]`)];

    vid.forEach((vid) => {
      vid.muted = muted;
    });
  }, [muted]);

  // emoji effect
  useEffect(() => {
    if (!emoji) return;
    const { setEmoji: set } = position;
    if (set) {
      set(emoji);
      setEmoji("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emoji]);

  return (
    <MobileLayout showBottomNav={true} NavTop={HomeNavTop}>
      <section ref={homePageRef} className="max-w-[650px] mx-auto relative">
        <Stories />

        <Post
          video={currentVideo}
          loading={loading}
          muted={muted}
          muteFn={muteFn}
          setOptModal={setShowOptionsModal}
          setShrModal={setShowShareModal}
          emojis={{
            showEmoji,
            setShowEmoji,
            setPosition,
            homePageRef,
          }}
        />

        {/* universal emoji */}
        <HomeEmoji
          position={position}
          showEmoji={showEmoji}
          setEmoji={setEmoji}
        />

        <section className="p-[10px] pb-[54px]">
          <h2 className="text-lg font-extrabold">App in progress 35%...</h2>
          <br />
          <h5 className="font-bold">Pages Ready for review</h5>
          <h4 className="font-medium">1. Reels 60%</h4>
          <h4 className="font-medium">1. Home 60%</h4>
          <h4 className="font-medium">2. Search 7%</h4>
          <h4 className="font-medium">3. Explore 10%</h4> <br />
          <h5 className="font-bold">steps to completion</h5>
          <h4 className="font-medium">1. Building Mobile components 40%</h4>
          <h4 className="font-medium">1. Building Desktop components 20%</h4>
          <h4 className="font-medium">2. implementing the backend 7%</h4>
          <h4 className="font-medium">3. connecting the dots 10%</h4>
          <br />
          <button
            className="text-blue-600 font-bold italic border-2 border-blue-600 border-solid p-1 mx-auto block"
            onClick={changeTheme}
          >
            change theme
          </button>
          <br />
          <h3 className="text-center font-bold underline text-red-400">
            A short Story
          </h3>
          <br />
          <p>
            A group of blind men heard that a strange animal, called an
            elephant, had been brought to the town, but none of them were aware
            of its shape and form. <br /> <br />
            Out of curiosity, they said:{" "}
            {
              "We must inspect and know it by touch, of which we are capable"
            }. <br /> <br /> So, they sought it out, and when they found it they
            groped about it. <br /> <br />
            The first person, whose hand landed on the trunk, said,{" "}
            {"This being is like a thick snake"}. <br /> <br /> For another one
            whose hand reached its ear, it seemed like a kind of fan. <br />{" "}
            <br /> As for another person, whose hand was upon its leg, said, the
            elephant is a pillar like a tree-trunk. <br /> <br /> The blind man
            who placed his hand upon its side said the elephant, {"is a wall"}.
            Another who felt its tail, described it as a rope. <br />
            <br /> The last felt its tusk, stating the elephant is that which is
            hard, smooth and like a spear.
          </p>
          <h3 className="text-center font-bold underline text-red-400">
            conclusion
          </h3>
          <br />
          <p>
            The parable has been used to illustrate a range of truths and
            fallacies; broadly, the parable implies that {"one's "}subjective
            experience can be true, but that such experience is inherently
            limited by its failure to account for other truths or a totality of
            truth.
          </p>
          <br />
          <a
            className="text-purple-700 italic"
            href="https://en.wikipedia.org/wiki/Blind_men_and_an_elephant"
          >
            wikipedia source..
          </a>
        </section>
      </section>

      <OptionsModal
        showModal={showOptionsModal}
        setShowModal={setShowOptionsModal}
      />

      <ShareOverlay
        showModal={showShareModal}
        setShowModal={setShowShareModal}
      />
    </MobileLayout>
  );
};

export default MobileHomePage;
