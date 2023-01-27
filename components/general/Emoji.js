import React, { useRef, useEffect } from "react";
import "emoji-picker-element";
// import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

// emoji-picker-element will use "Twemoji Mozilla" and fall back to other fonts for non-flag emoji

const Emoji = ({ setEmoji }) => {
  const ref = useRef(null);
  // polyfillCountryFlagEmojis("Twemoji Mozilla");

  useEffect(() => {
    const el = ref.current;

    function emojiClick(e) {
      const emoji = e?.detail?.emoji?.unicode;
      emoji ? setEmoji(emoji) : setEmoji("");
    }

    el.addEventListener("emoji-click", emojiClick);
    // el.skinToneEmoji = "👍";

    return () => {
      el.removeEventListener("emoji-click", emojiClick);
    };
  }, [setEmoji]);

  return React.createElement("emoji-picker", { ref });
};

export default Emoji;
