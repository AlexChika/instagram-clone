import React, { useRef, useEffect } from "react";
// emoji picker is imported in a useEffect because it runs browser apis javascript on next js server and leads to error . with the dynamic import, it runs only on the client

const Emoji = ({ setEmoji }) => {
  const ref = useRef(null);

  useEffect(() => {
    import("emoji-picker-element");

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
