import React from "react";
import Header from "../../general/Header";
import Photo from "../../general/Photo";
import Footer from "../../general/Footer";
import Video from "../../general/Video";

const Post = ({ muted, muteFn, loading, video }) => {
  return (
    <>
      <>
        <Header />
        <Photo src="/test.jpg" />
        <Footer />
      </>
      <>
        <Header />
        <Photo src="/alex.png" />
        <Footer />
      </>
      <>
        <Header />
        <Photo src="https://images.pexels.com/photos/11534490/pexels-photo-11534490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Footer />
      </>
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
      <>
        <Header />
        <Video
          video={video}
          muted={muted}
          muteFn={muteFn}
          loading={loading}
          src="/insta-vid1.mp4"
        />
        <Footer />
      </>
      <>
        <Header />
        <Video
          video={video}
          muted={muted}
          muteFn={muteFn}
          loading={loading}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <Footer />
      </>
      <>
        <Header />
        <Photo src="https://images.pexels.com/photos/9898727/pexels-photo-9898727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Footer />
      </>
    </>
  );
};

export { default as PhotoPost } from "./PhotoPost";
export { default as VideoPost } from "./VideoPost";
export default Post; //for temporary test purpose
