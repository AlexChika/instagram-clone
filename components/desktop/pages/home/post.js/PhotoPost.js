import React from "react";
import Header from "./Header";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "./Footer";

const PhotoPost = ({ emojis, setCmtModal, setOptModal, setShrModal }) => {
  return (
    <>
      <Header showModal={setOptModal} />
      <Photo src="/test.jpg" />
      <Footer
        shareModal={setShrModal}
        commentModal={setCmtModal}
        emojis={emojis}
      />
    </>
  );
};

export default PhotoPost;
