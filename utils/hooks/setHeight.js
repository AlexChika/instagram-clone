import React, { useEffect } from "react";

const SetHeight = (elementREf, sub = 44) => {
  // elementRef is an html element ref from useRef
  // 44 serves as the bottom navbar height

  console.log(elementREf);

  /* -- dynamic  Wrapper Height logic - */
  useEffect(() => {
    const refElement = elementREf.current;
    if (!refElement) return;
    console.log("I ran");

    let _height = window.innerHeight;
    refElement.style.height = `${_height - sub}px`;

    function handleScrollEvent() {
      if (_height === window.innerHeight) return;
      _height = window.innerHeight;
      refElement.style.height = `${_height - sub}px`;
      console.log(_height);
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [elementREf]); //dep is almost unnexessary
};

export default SetHeight;
