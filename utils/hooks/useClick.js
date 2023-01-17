// Hook enables the use of single click and a double click
/* --------------------------------------- */
/*    Single Click and Double click hook   */
/* --------------------------------------- */
import React, { useState, useEffect } from "react";

function useSingleDoubleClick(single, double, delay = 250) {
  const [count, setCount] = useState(0);
  let event;

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (count === 1) single(event);
      setCount(0);
    }, delay);

    if (count >= 2) double(event);

    return () => clearTimeout(timeout);
  }, [count]);

  return (e) => {
    event = e;
    setCount((prev) => prev + 1);
  };
}

export default useSingleDoubleClick;
