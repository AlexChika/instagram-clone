import React from "react";
import general from "./general.module.css";

const Spinner = ({ style, sm = false, stop = false }) => {
  return (
    <div
      className={`${general.spinner} ${sm ? general.sm : null} ${
        stop ? general.stop : null
      }`}
      style={style}
    >
      <span></span>
    </div>
  );
};

export default Spinner;
