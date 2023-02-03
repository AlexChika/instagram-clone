import React, { useState, useEffect } from "react";
import Header from "../general/Header";
import Nav from "../general/Nav";
import { useRouter } from "next/router";
import Video from "../general/Video";
import Footer from "../general/Footer";
import OptionsModal from "../general/OptionsModal";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";

const SingleVideo = () => {
  const router = useRouter();
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [id, setId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

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
  }, [muted, id]);

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
  }, [id]);

  return (
    <MobileLayout showBottomNav>
      <section className="max-w-3xl mx-auto pb-14 md:pb-3">
        <Nav title={"Video"} />
        <Header showModal={setShowModal} showExtras={true} />
        <Video
          id={id}
          muted={muted}
          muteFn={mutedFn}
          loading={loading}
          video={video}
          src="/insta-vid1.mp4"
        />
        <Footer showModal={setShrOptModal} />{" "}
      </section>

      <OptionsModal showModal={showModal} setShowModal={setShowModal} />

      <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} />
    </MobileLayout>
  );
};

export default SingleVideo;
