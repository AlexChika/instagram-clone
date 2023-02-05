import React from "react";
import Header from "./Header";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "./Footer";

const PhotoPost = ({ emojis, setOptModal, setShrModal }) => {
  return (
    <>
      <Header showModal={setOptModal} />
      <Photo src="/test.jpg" />
      {/* <Footer emojis={emojis} showModal={setShrModal} /> */}
      <Footer emojis={emojis} />
    </>
  );
};

export default PhotoPost;
