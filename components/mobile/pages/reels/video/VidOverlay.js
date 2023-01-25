import React, { useState } from "react";
import SoundIndicator from "./SoundIndicator";
import Loading from "components/general/reels/Loading";
import Buttons from "./Buttons";
import useSingleDoubleClick from "utils/hooks/useClick";

const Overlay = ({ params }) => {
  const [liked, setLiked] = useState(false);

  const {
    muteFn: mfn,
    muted,
    loading,
    setFullScreen: sfs,
    fullScreen: fs,
  } = params;

  function muteFn(e) {
    mfn();
  }

  function likeFn() {
    setLiked(!liked);
  }

  /* ----- using the double click hook ----- */
  const click = useSingleDoubleClick(muteFn, likeFn);
  function mute_like_fn(e) {
    // since the onclick is placed on the parent (vidOverlay wrapper), when other buttons inside the wrapper are clicked, this fuction is also fired. To prevent the behavior, the click function only runs when the element dataset is present.
    if (e.target?.dataset?.role) click(e);
  }

  return (
    <div
      onClick={mute_like_fn}
      data-role="vid_overlay"
      className="absolute top-0 bottom-0 right-0 left-0"
    >
      {/* ----------- Sound Indicator ----------- */}
      {!loading && <SoundIndicator muted={muted} />}

      {/* ------------ Video Loading ------------ */}
      <Loading loading={loading} />

      {/* - Buttons => like comment message etc - */}
      <Buttons params={{ fs, sfs, liked, setLiked }} />
    </div>
  );
};

export default Overlay;
