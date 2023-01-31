import React, { useEffect, useState } from "react";
import mobileCheck from "utils/helpers/mobileCheck";

const Notify = ({ notify }) => {
  const { state, text } = notify;
  const [h, setHeight] = useState(44); //height of Notify

  useEffect(() => {
    let _width = window.innerWidth;

    if (_width < 768) {
      setHeight(44);
    } else {
      setHeight(0);
    }
  }, [state]);

  return (
    <div
      className={`bg-neutral-900 text-white text-center fixed bottom-0 left-0 right-0 w-full min-h-[44px] z-[4] transition-transform flex justify-center items-center ${
        state
          ? h > 0
            ? "translate-y-[-44px]"
            : "translate-y-[0px]"
          : "translate-y-[44px]"
      }`}
    >
      {text}
    </div>
  );
};

export default Notify;
