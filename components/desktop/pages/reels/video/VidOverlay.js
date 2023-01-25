import React from "react";
import Loading from "components/general/reels/Loading";
import PauseIndicator from "./PauseIndicator";
import SoundIndicator from "./SoundIndicator";
import VideoDetails from "./VideoDetails";

const Overlay = ({ params }) => {
  const { muteFn, muted, loading, play, playpause: pp } = params;

  function playpause(e) {
    // since the onclick is placed on the parent (vidOverlay wrapper), when other buttons inside the wrapper are clicked, this fuction is also fired. To prevent the behavior, the click function only runs when the element dataset is present.
    if (e.target?.dataset?.role) pp();
  }

  return (
    <div
      onClick={playpause}
      data-role="vid_overlay"
      className="absolute top-0 bottom-0 right-0 left-0 cursor-pointer flex"
    >
      {/* ----------- Sound Indicator ----------- */}
      <SoundIndicator params={{ muted, muteFn }} />

      {/* ------------ Video Loading ------------ */}
      <Loading loading={loading} />

      {/* ------------ Play Indicator ----------- */}
      <PauseIndicator play={play} />

      {/* ------ Video name and description ----- */}
      <VideoDetails />
    </div>
  );
};

export default Overlay;
