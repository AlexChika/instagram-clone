import React, { useEffect } from "react";
import Router, { useRouter } from "next/router";
import Spinner from "components/general/Spinner";

const CommentRedirect = () => {
  // get id of post from the url adrress bar

  useEffect(() => {
    Router.push("/p/123"); //123 serves as id
  }, []); // redirects to the single post page of that post

  //if id is of a video post... the redirect to the singke video at reels/id/video

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Spinner />
    </div>
  );
};

export default CommentRedirect;
