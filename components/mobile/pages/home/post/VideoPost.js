import React from "react";
import Header from "../../general/Header";
import Video from "../../general/Video";
import Footer from "../../general/Footer";

const VideoPost = ({ muted, muteFn, loading, video }) => {
  return (
    <>
      <Header />
      <Video
        video={video}
        muted={muted}
        muteFn={muteFn}
        loading={loading}
        src="/insta-vid5.mp4"
      />
      <Footer />
    </>
  );
};

export default VideoPost;
