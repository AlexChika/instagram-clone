import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import Video from "../components/Video";
import Footer from "../components/Footer";

const SingleVideo = () => {
  const router = useRouter();
  const [muted, setMuted] = useState(true);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [id, setId] = useState(null);

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
    <div>
      <Nav title={"Video"} />
      <Header showExtras={true} />
      <Video
        id={id}
        muted={muted}
        muteFn={mutedFn}
        loading={loading}
        video={video}
        src="/insta-vid1.mp4"
      />
      <Footer />
    </div>
  );
};

export default SingleVideo;
