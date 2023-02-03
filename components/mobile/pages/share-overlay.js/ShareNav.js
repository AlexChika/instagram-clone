import React from "react";
import IconHOC from "components/general/IconHOC";
import { CloseIcon } from "utils/icons";

// .....
const ShareNav = ({ setShowModal }) => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 h-11">
      <div className="flex justify-between px-4 w-full py-1 max-w-3xl mx-auto">
        <h1 className="flex-1 text-center text-lg font-medium">Share</h1>
        <button onClick={() => setShowModal(false)}>
          {IconHOC(CloseIcon, "none")}
        </button>{" "}
      </div>
    </nav>
  );
};

export default ShareNav;
