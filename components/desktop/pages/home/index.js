import React, { useEffect, useState, useRef } from "react";
import DesktopLayout from "components/desktop/layout";
import HomeNavTop from "components/desktop/layout/HomeNavTop";
import Stories from "./stories";
import { App } from "pages/_app";
import Post from "./post.js";
import HomeEmoji from "components/general/home/HomeEmoji";
import OptionsModal from "../general/OptionsModal";

// ..........
const DesktopHomePage = () => {
  const { changeTheme } = App();

  // emoji states and refs
  const homePageRef = useRef(null);
  const [emoji, setEmoji] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [position, setPosition] = useState({});

  // options modal state
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // video states
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);

  const muteFn = () => {
    setMuted(!muted);
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
    <DesktopLayout NavTop={HomeNavTop}>
      <div className="flex justify-center items-center pb-14 md:pb-5">
        <section className="flex justify-center">
          {/* --------- main app components --------- */}
          <div
            ref={homePageRef}
            className="max-w-[470px] w-screen min-h-screen lg:mr-16 relative"
          >
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

            {/* universal options modal */}
            <OptionsModal
              showModal={showOptionsModal}
              setShowModal={setShowOptionsModal}
            />

            {/* universal emoji */}
            <HomeEmoji
              position={position}
              showEmoji={showEmoji}
              setEmoji={setEmoji}
            />
          </div>

          {/* side items like username, about and etc */}
          <div className="w-[320px] hidden lg:block">
            <section className="p-[10px] pb-[54px]">
              <h2 className="text-lg font-extrabold">App in progress 40%...</h2>
              <br />
              <h5 className="font-bold">Pages Ready for review</h5>
              <h4 className="font-medium">1. Reels 60%</h4>
              <h4 className="font-medium">1. Home 60%</h4>
              <h4 className="font-medium">2. Search 7%</h4>
              <h4 className="font-medium">3. Explore 10%</h4> <br />
              <h5 className="font-bold">steps to completion</h5>
              <h4 className="font-medium">1. Building Mobile components 40%</h4>
              <h4 className="font-medium">
                1. Building Desktop components 20%
              </h4>
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
                elephant, had been brought to the town, but none of them were
                aware of its shape and form. <br /> <br />
                Out of curiosity, they said:{" "}
                {
                  "We must inspect and know it by touch, of which we are capable"
                }
                . <br /> <br /> So, they sought it out, and when they found it
                they groped about it. <br /> <br />
                The first person, whose hand landed on the trunk, said,{" "}
                {"This being is like a thick snake"}. <br /> <br /> For another
                one whose hand reached its ear, it seemed like a kind of fan.{" "}
                <br /> <br /> As for another person, whose hand was upon its
                leg, said, the elephant is a pillar like a tree-trunk. <br />{" "}
                <br /> The blind man who placed his hand upon its side said the
                elephant, {"is a wall"}. Another who felt its tail, described it
                as a rope. <br />
                <br /> The last felt its tusk, stating the elephant is that
                which is hard, smooth and like a spear.
              </p>
              <h3 className="text-center font-bold underline text-red-400">
                conclusion
              </h3>
              <br />
              <p>
                The parable has been used to illustrate a range of truths and
                fallacies; broadly, the parable implies that {"one's "}
                subjective experience can be true, but that such experience is
                inherently limited by its failure to account for other truths or
                a totality of truth.
              </p>
              <br />
              <a
                className="text-purple-700 italic"
                href="https://en.wikipedia.org/wiki/Blind_men_and_an_elephant"
              >
                wikipedia source..
              </a>
            </section>
          </div>
        </section>
      </div>
    </DesktopLayout>
  );
};

export default DesktopHomePage;
// nstagram.com/stories/i_am_floxzy/3029843271119263591/
// https://www.instagram.com/stories/folasade_daini/3030030517274200384/
