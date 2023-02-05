import React from "react";
import Header from "./Header";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "components/mobile/pages/general/Footer";

const Post = () => {
  return (
    <div>
      <>
        <Header />
        <div className="border dark:border-neutral-800 border-neutral-100 rounded">
          <Photo src="/test.jpg" />
        </div>
        <Footer />
      </>

      <>
        <Header />
        <Photo src="https://images.pexels.com/photos/11534490/pexels-photo-11534490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Footer />
      </>
    </div>
  );
};

export default Post;
