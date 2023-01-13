import React from "react";
import SoundIndicator from "./SoundIndicator";
import Loading from "./Loading";

const Overlay = ({ params }) => {
  const { handleVideoOnTap, muted, loading } = params;

  return (
    <div
      onClick={handleVideoOnTap}
      className="absolute top-0 green bottom-0 right-0 left-0"
    >
      {/* ----------- Sound Indicator ----------- */}
      {!loading && <SoundIndicator muted={muted} />}

      {/* ------------ Video Loading ------------ */}
      <Loading loading={loading} />
    </div>
  );
};

export default Overlay;
