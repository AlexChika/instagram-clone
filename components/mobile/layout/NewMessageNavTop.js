import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import IconHOC from "../../general/IconHOC";
import { CaretLeftIcon } from "../../../utils/icons";

const NewMessageNavTop = () => {
  const router = useRouter();

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 h-11">
        <div className="flex justify-between px-3 pr-4 w-full py-1 max-w-3xl mx-auto">
          <button onClick={() => router.push("/messages")} className="text-xs">
            {IconHOC(CaretLeftIcon, "none")}
          </button>

          <span className="flex items-center text-lg font-medium">
            New message
          </span>

          <span className="text-blue-500">Next</span>
        </div>
      </nav>
    </>
  );
};

export default NewMessageNavTop;
