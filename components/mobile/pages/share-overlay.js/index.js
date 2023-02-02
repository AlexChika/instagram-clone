/* --------------------------------------- */
/*               Share Modal               */
/* --------------------------------------- */
// this is the share modal for photo posts, video posts and reels videos post

// .......
import React from "react";
import ShareNav from "./ShareNav";

const ShareOverlay = ({ showModal, setShowModal }) => {
  if (showModal) {
    return (
      <div className="fixed z-[20] top-0 bottom-0 left-0 right-0 bg-white dark:bg-black">
        <ShareNav setShowModal={setShowModal} />
      </div>
    );
  }
};

export default ShareOverlay;
