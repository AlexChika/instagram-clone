/*Hooks is used to dynamically set the height of an element to the visible browser height excluding browser nav bars using the window.innerHeight aproach */

import React, { useEffect } from "react";

const SetHeight = (elementREf, sub = 44) => {
  // elementRef is an html element ref from useRef
  // 44 serves as the bottom navbar height

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

    refElement.addEventListener("scroll", handleScrollEvent);

    return () => {
      refElement.removeEventListener("scroll", handleScrollEvent);
    };
  }, [elementREf, sub]); //dep is almost unnexessary
};

export default SetHeight;
