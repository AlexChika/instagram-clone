import React, { useState, useRef, useEffect } from "react";
import Header from "components/mobile/pages/general/Header";
import { CloseIcon } from "utils/icons";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "components/mobile/pages/general/PostPageFooter";
import OptionsModal from "../general/OptionsModal";
import Comments from "components/mobile/pages/general/Comments";
import PhotoComments from "./PhotoComments";

const PostComments = ({ postData, showModal, setShowModal }) => {
  // somme calc

  return (
    <div className="fixed flex items-center justify-center left-0 bottom-0 right-0 top-0 z-50 bg-[#000000cc]">
      <>
        <button className="absolute right-[20px] top-[20px]">
          {<CloseIcon color="white" />}
        </button>

        <PhotoComments />
      </>
    </div>
  );
};

export default PostComments;

{
  /* <Error title="Sorry this page does not exist.." />; */
}
