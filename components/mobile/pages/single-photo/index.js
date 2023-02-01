import React from "react";
import Photo from "../components/Photo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

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
