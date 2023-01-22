import React from "react";

const Notify = ({ notify }) => {
  const { state, text } = notify;
  return (
    <div
      className={`bg-neutral-900 text-white text-center fixed bottom-0 left-0 right-0 w-full min-h-[44px] z-[5] transition-transform flex justify-center items-center ${
        state ? "translate-y-[-44px]" : "translate-y-[44px]"
      }`}
    >
      {text}
    </div>
  );
};

export default Notify;
