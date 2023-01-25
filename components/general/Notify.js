import React, { useEffect, useState } from "react";
import mobileCheck from "utils/helpers/mobileCheck";

const Notify = ({ notify }) => {
  const { state, text } = notify;
  const [h, setHeight] = useState(44);

  useEffect(() => {
    function call() {
      const ua = navigator.userAgent;
      const ismobile = ua ? mobileCheck(ua) : true;

      let width = window.innerWidth;

      if (ismobile) {
        setHeight(44);
      } else {
        let nav_bottom_height = width < 768 ? 44 : 0;
        setHeight(nav_bottom_height);
      }
    }

    call();

    function handleResize() {
      call();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-neutral-900 text-white text-center fixed bottom-0 left-0 right-0 w-full min-h-[44px] z-[5] transition-transform flex justify-center items-center ${
        state ? `translate-y-[-${h}px]` : `translate-y-[44px]`
      }`}
    >
      {text}
    </div>
  );
};

export default Notify;
