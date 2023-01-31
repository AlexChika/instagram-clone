import React from "react";
import Header from "./Header";
import Photo from "./Photo";
import Footer from "./Footer";

const PicturePost = () => {
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
    </>
  );
};

export default PicturePost;
//  <Photo src="https://images.pexels.com/photos/9898727/pexels-photo-9898727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />;

// <Photo src="https://images.pexels.com/photos/11534490/pexels-photo-11534490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />;
