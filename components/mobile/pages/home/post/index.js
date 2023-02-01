import React from "react";
import Header from "../../components/Header";
import Photo from "../../components/Photo";
import Footer from "../../components/Footer";
import Video from "../../components/Video";

const Post = ({ muted, muteFn, loading, video, setOptModal }) => {
  return (
    <>
      <>
        <Header showModal={setOptModal} />
        <Photo src="/test.jpg" />
        <Footer />
      </>
      <>
        <Header showModal={setOptModal} />
        <Photo src="/alex.png" />
        <Footer />
      </>
      <>
        <Header showModal={setOptModal} />
        <Photo src="https://images.pexels.com/photos/11534490/pexels-photo-11534490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Footer />
      </>
      <>
        <Header showModal={setOptModal} />
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
        <Header showModal={setOptModal} />
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
        <Header showModal={setOptModal} />
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
        <Header showModal={setOptModal} />
        <Photo src="https://images.pexels.com/photos/9898727/pexels-photo-9898727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Footer />
      </>
    </>
  );
};

export { default as PhotoPost } from "./PhotoPost";
export { default as VideoPost } from "./VideoPost";
export default Post; //for temporary test purpose
