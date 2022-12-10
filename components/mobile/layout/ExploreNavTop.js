import React, { useState } from "react";
import { SearchIcon } from "../../../utils/icons";
import { useRouter } from "next/router";

const ExploreNavTop = () => {
  const route = useRouter();

  //Search box onclick
  function handleClick() {
    route.push("/explore/search");
  }

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center bg-white border-b border-b-slate-300 px-4 h-11">
      <div
        onClick={handleClick}
        className="rounded flex justify-center w-full py-1 border border-slate-200 max-w-3xl mx-auto"
      >
        <span className="scale-50">
          <SearchIcon className="text-slate-500" />
        </span>
        <span className="text-slate-500">Search</span>
      </div>
    </nav>
  );
};

export default ExploreNavTop;
