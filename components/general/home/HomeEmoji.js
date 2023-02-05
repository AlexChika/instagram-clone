import Emoji from "components/general/Emoji";
import React, { useEffect, useRef } from "react";

const HomeEmoji = ({ showEmoji, setEmoji, position }) => {
  const emojiModalRef = useRef(null);

  useEffect(() => {
    const emojiModal = emojiModalRef.current;
    const { top, left } = position;
    emojiModal.style.top = top;
    emojiModal.style.left = left;
  }, [position]);

  return (
    <div
      ref={emojiModalRef}
      className={`absolute w-[90%] max-w-[348px] h-[400px]  drop-shadow-2xl ${
        showEmoji ? "scale_sideways block" : "hidden"
      }`}
    >
      {showEmoji && <Emoji setEmoji={setEmoji} />}
    </div>
  );
};

export default HomeEmoji;
