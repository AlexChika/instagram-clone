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
      <div className="fixed z-[20] top-0 bottom-0 left-0 right-0 bg-white dark:bg-neutral-800">
        <ShareNav setShowModal={setShowModal} />

        {/* -------------- Form input ------------- */}
        {/* <form action="">form here</form> */}

        <section className="h-[80vh] flex-col flex justify-center items-center">
          <h2>App in progress</h2>
          <p> searcch content here</p>
        </section>

        {/* ------------- Send button ------------- */}
        <button
          className={`absolute left-[50%] translate-x-[-50%] bottom-[15px] rounded-xl p-2 w-[80%] ${
            false ? "bg-blue-600 text-white" : "bg-blue-500 text-neutral-300"
          }`}
        >
          Send
        </button>
      </div>
    );
  }
};

export default ShareOverlay;
