import React from "react";
import Nav from "../components/Nav";
import CommentForm from "./CommentForm";
import Comments from "../components/Comments";
import MobileLayout from "components/mobile/layout";

const PostComments = () => {
  return (
    <MobileLayout showBottomNav>
      <section className="max-w-3xl mx-auto pb-14 md:pb-3">
        {/* ----------- Nav bar heading ----------- */}
        <Nav title={"Comments"} sharebtn />

        {/* ------------ Form input box ----------- */}
        <CommentForm />

        {/* --------------- Comments -------------- */}
        <div className="px-5">
          <Comments />
        </div>
      </section>
    </MobileLayout>
  );
};

export default PostComments;
