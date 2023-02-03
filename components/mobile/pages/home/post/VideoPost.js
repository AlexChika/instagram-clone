import React from "react";
import Header from "../../general/Header";
import Video from "../../general/Video";
import Footer from "../../general/Footer";

const VideoPost = ({
  src,
  setShrModal,
  setOptModal,
  muted,
  muteFn,
  loading,
  video,
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
      <Footer showModal={setShrModal} />
    </>
  );
};

export default VideoPost;
