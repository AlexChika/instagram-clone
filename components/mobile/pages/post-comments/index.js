import React, { useState } from "react";
import Nav from "../general/Nav";
import CommentForm from "./CommentForm";
import Comments from "../general/Comments";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";

const PostComments = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  return (
    <MobileLayout showBottomNav>
      <section className="max-w-3xl mx-auto pb-14 md:pb-3">
        {/* ----------- Nav bar heading ----------- */}
        <Nav title={"Comments"} sharebtn showModal={setShowShareModal} />

        {/* ------------ Form input box ----------- */}
        <CommentForm />

        {/* --------------- Comments -------------- */}
        <div className="px-5">
          <Comments />
        </div>
      </section>

      <ShareOverlay
        showModal={showShareModal}
        setShowModal={setShowShareModal}
      />
    </MobileLayout>
  );
};

export default PostComments;
