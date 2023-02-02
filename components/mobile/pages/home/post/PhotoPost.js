import React from "react";
import Header from "../../components/Header";
import Photo from "../../components/Photo";
import Footer from "../../components/Footer";

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
