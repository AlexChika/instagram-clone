import React from "react";
import Name from "components/general/reels/Name";
import Captions from "components/general/reels/Captions";

const VideoDetails = () => {
  return (
    <div data-role="vid_overlay" className="w-full self-end text-white p-3">
      <Name />
      <Captions />
    </div>
  );
};

export default VideoDetails;
