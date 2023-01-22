import React from "react";
import general from "./general.module.css";

const Spinner = ({ class: cs, sm = false, stop = false }) => {
  return (
    <div
      className={`${cs} ${general.spinner} ${sm ? general.sm : null} ${
        stop ? general.stop : null
      }`}
    >
      <span></span>
    </div>
  );
};

export default Spinner;
