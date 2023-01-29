// Mobile....
/*Hooks is used to dynamically set the height of an element to the visible browser height excluding browse-nav-bars using the window.innerHeight aproach */

import React, { useEffect } from "react";

const SetHeight = (elementREf, sub = 44) => {
  // elementRef is an html element ref from useRef
  // 44 serves as the bottom navbar height

  /* -- dynamic  Wrapper Height logic - */
  useEffect(() => {
    const refElement = elementREf.current;
    if (!refElement) return;

    function set(_height) {
      if (window.innerWidth > 767) {
        refElement.style.height = `${_height}px`;
      } else {
        refElement.style.height = `${_height - sub}px`;
      }
    }

    let _height = window.innerHeight;
    set(_height); //initial set on render

    function handleScrollEvent() {
      console.log("i ran scrolls");
      if (_height === window.innerHeight) return;
      _height = window.innerHeight;
      set(_height);
    }

    function handleResizeEvent() {
      console.log("I ran resuiz");
      _height = window.innerHeight;
      set(_height);
    }

    refElement.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("resize", handleResizeEvent);

    return () => {
      refElement.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, [elementREf, sub]); //dep is almost unnexessary
};

export default SetHeight;
