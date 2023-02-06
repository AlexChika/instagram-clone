import React from "react";
import Header from "../../general/Header";
import Photo from "../../general/Photo";
import Footer from "../../general/Footer";

const PhotoPost = ({ emojis, setOptModal, setShrModal }) => {
  return (
    <>
      <Header showModal={setOptModal} />
      <Photo src="/test.jpg" />
      <Footer commentBox emojis={emojis} showModal={setShrModal} />
    </>
  );
};

export default PhotoPost;
