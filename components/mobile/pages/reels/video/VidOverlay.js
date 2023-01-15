import React from "react";
import SoundIndicator from "./SoundIndicator";
import Loading from "./Loading";

const Overlay = ({ params }) => {
  const { muteFn, muted, loading, setFullScreen, fullScreen } = params;

  function handleAspectRatio() {
    setFullScreen(!fullScreen);
  }

  return (
    <div onClick={muteFn} className="absolute top-0 bottom-0 right-0 left-0">
      {/* ----------- Sound Indicator ----------- */}
      {!loading && <SoundIndicator muted={muted} />}
      {/* ------------ Video Loading ------------ */}
      <Loading loading={loading} />
      <button
        onClick={() => handleAspectRatio()}
        className="text-red-600 text-lg"
      >
        {fullScreen ? "Original" : "Fit Screen"}
      </button>
    </div>
  );
};

// const root = document.querySelector(':root');

// // set css variable
// root.style.setProperty('--my-color', 'blue');

// // to get css variable from :root
// const color = getComputedStyle(root).getPropertyValue('--my-color'); // blue

export default Overlay;
