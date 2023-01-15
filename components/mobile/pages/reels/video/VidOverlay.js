import React from "react";
import SoundIndicator from "./SoundIndicator";
import Loading from "./Loading";

const Overlay = ({ params }) => {
  const { handleVideoOnTap, muted, loading } = params;
  // const [originalSize, setOriginalSize] = useState(true);

  function handleAspectRatio(type) {
    const root = document.querySelector(":root");
    root.style.setProperty("--object-fit", type);
    console.log("i fired set");
  }

  return (
    <div
      onClick={handleVideoOnTap}
      className="absolute top-0 bottom-0 right-0 left-0"
    >
      {/* ----------- Sound Indicator ----------- */}
      {!loading && <SoundIndicator muted={muted} />}
      {/* ------------ Video Loading ------------ */}
      <Loading loading={loading} />
      <button
        onClick={() => handleAspectRatio("fill")}
        className="text-red-600 text-lg"
      >
        Fit Screen
      </button>{" "}
      <br />
      <button
        onClick={() => handleAspectRatio("contain")}
        className="text-red-600 text-lg"
      >
        Original
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
