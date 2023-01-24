// Desktop.....
/*Hooks is used to dynamically set the height of an element to the visible browser height depending on screen width and account for if app-nav-bars are avalaible using the window.innerHeight aproach */

import React, { useEffect } from "react";

const SetHeight = (elementREf, sub = 44) => {
  // elementRef is an html element ref from useRef
  // 44 serves as the bottom navbar height

  /* -- dynamic  Wrapper Height logic - */
  useEffect(() => {
    function call() {
      const width = window.innerWidth;
      const element = elementREf.current;
      let _height = window.innerHeight;

      if (width < 768) {
        element.style.height = `${_height - 44}px`;
      } else {
        element.style.height = `${_height}px`;
      }
    }

    call(); //initial call on render

    function resizeHandler() {
      call();
    }

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [elementREf, sub]); //dep is almost unnexessary
};

export default SetHeight;
