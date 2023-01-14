/* --------------------------------------- */
/*              Video Element              */
/* --------------------------------------- */

import React from "react";

const VideoEl = ({ src = "/insta-vid.mp4" }) => {
  return (
    <video data-vid="reels" loop className="w-full h-full ">
      <source src={src} type="video/mp4" />

      <p className="italic font-medium text-red-600">
        Your browser does not support mp4 video formats
      </p>
    </video>
  );
};

export default VideoEl;
