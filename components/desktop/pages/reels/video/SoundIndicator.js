import React from "react";
import { SpeakerOffIcon, SpeakerOnIcon } from "utils/icons";

const SoundIndicator = ({ params }) => {
  const { muted, muteFn } = params;
  return (
    <button
      onClick={muteFn}
      className="absolute top-[15px] right-[15px] p-[10px] rounded-full bg-[rgba(0,0,0,0.3)] "
    >
      {muted ? (
        <SpeakerOffIcon color="white" class="h-[15px] w-[15px]" />
      ) : (
        <SpeakerOnIcon color="white" class="h-[15px] w-[15px]" />
      )}
    </button>
  );
};

export default SoundIndicator;
