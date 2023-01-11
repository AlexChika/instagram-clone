import React from "react";
import SoundIndicator from "./SoundIndicator";

const Overlay = ({ params }) => {
  const { handleVideoOnTap, muted } = params;

  return (
    <div
      onClick={handleVideoOnTap}
      className="absolute top-0 bottom-0 right-0 left-0 red"
    >
      {/* ----------- Sound Indicator ----------- */}
      <SoundIndicator muted={muted} />
    </div>
  );
};

export default Overlay;

// import React from "react";

// const Overlay = ({params}) => {
//     const { handleVideoOnTap } = params;

// };

// export default Overlay;

// onClick={handleVideoOnTap}
/* --------------------------------------- */
/*              video overlay              */
/* --------------------------------------- */
