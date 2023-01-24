import React, { useRef, useState, useEffect } from "react";
import general from "./general.module.css";

const Spinner = ({ class: cs, sm = false, stop = false }) => {
  const spinnerRef = useRef(null);
  const [interval, setInterVal] = useState("");

  useEffect(() => {
    let speed = "0.35s";

    if (stop) {
      clearInterval(interval);
      return;
    }

    let _interval = setInterval(() => {
      speed = speed === "0.35s" ? "0.2s" : "0.35s";
      spinnerRef?.current?.style?.setProperty("--rotate-speed", speed) || null;
    }, 1000);

    setInterVal(_interval);

    return () => clearInterval(_interval);
  }, [stop]);

  return (
    <div
      ref={spinnerRef}
      className={`${cs} ${general.spinner} ${sm ? general.sm : null} ${
        stop ? general.stop : null
      }`}
    >
      <span></span>
    </div>
  );
};

export default Spinner;
