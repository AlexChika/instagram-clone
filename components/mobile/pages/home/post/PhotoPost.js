import React from "react";
import Header from "../../general/Header";
import Photo from "../../general/Photo";
import Footer from "../../general/Footer";

const PhotoPost = ({ setOptModal, setShrModal }) => {
  return (
    <>
      <Header showModal={setOptModal} />
      <Photo src="/test.jpg" />
      <Footer showModal={setShrModal} />
    </>
  );
};

export default PhotoPost;
