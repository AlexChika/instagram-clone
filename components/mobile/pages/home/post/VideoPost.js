import React from "react";
import Header from "../../components/Header";
import Video from "../../components/Video";
import Footer from "../../components/Footer";

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
