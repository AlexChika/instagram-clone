import React from "react";
import Header from "./Header";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "./Footer";
import Video from "components/mobile/pages/general/Video";

const Post = ({
  muted,
  muteFn,
  loading,
  video,
  setOptModal,
  setShrModal,
  emojis,
}) => {
  return (
    <div>
      <>
        <Header showModal={setOptModal} />
        <div className="border dark:border-neutral-800 border-neutral-100 rounded">
          <Photo src="/test.jpg" />
        </div>
        <Footer emojis={emojis} />
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
        <Footer emojis={emojis} />
      </>

      <>
        <Header showModal={setOptModal} />
        <div className="border dark:border-neutral-800 border-neutral-100 rounded">
          <Video
            video={video}
            muted={muted}
            muteFn={muteFn}
            loading={loading}
            src="/insta-vid3.mp4"
          />
        </div>
        <Footer emojis={emojis} />
      </>

      <>
        <Header showModal={setOptModal} />
        <div className="border dark:border-neutral-800 border-neutral-100 rounded">
          <Photo src="https://images.pexels.com/photos/11534490/pexels-photo-11534490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <Footer emojis={emojis} />
      </>
      <>
        <Header showModal={setOptModal} />
        <div className="border dark:border-neutral-800 border-neutral-100 rounded">
          <Video
            video={video}
            muted={muted}
            muteFn={muteFn}
            loading={loading}
            src="/insta-vid.mp4"
          />
        </div>
        <Footer emojis={emojis} />
      </>
    </div>
  );
};

export default Post;
export { default as PhotoPost } from "./PhotoPost";
export { default as VideoPost } from "./VideoPost";
