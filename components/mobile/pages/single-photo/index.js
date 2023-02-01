import React from "react";
import Photo from "../general/Photo";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Nav from "../general/Nav";

const SinglePhoto = () => {
  return (
    <div>
      <Nav title={"Photo"} />
      <Header showExtras={true} />
      <Photo src="/alex.png" />
      <Footer />
    </div>
  );
};

export default SinglePhoto;
