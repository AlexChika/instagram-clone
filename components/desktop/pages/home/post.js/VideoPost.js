import Video from "components/mobile/pages/general/Video";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const VideoPost = ({
  src,
  setShrModal,
  setOptModal,
  muted,
  muteFn,
  loading,
  video,
  emojis,
}) => {
  return (
    <>
      <Header showModal={setOptModal} />
      <Video
        video={video}
        muted={muted}
        muteFn={muteFn}
        loading={loading}
        src="/insta-vid5.mp4"
      />
      {/* <Footer emojis={emojis} showModal={setShrModal} /> */}
      <Footer emojis={emojis} />
    </>
  );
};

export default VideoPost;
