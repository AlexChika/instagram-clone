import React from "react";
import { SearchIcon } from "../../../utils/icons";
import { useRouter } from "next/router";

const SearchNavTop = () => {
  const route = useRouter();

  //Search box onclick
  function handleBtnClick() {
    route.push("/explore");
  }

  return (
    <nav className="sticky flex items-center justify-center top-0 z-10 bg-white border-b border-b-slate-300 px-4 h-11">
      <div className="max-w-3xl mx-auto flex items-center justify-center w-full">
        <div className="rounded flex w-full py-1 border border-slate-200 ">
          <span className="scale-50 pl-2">
            <SearchIcon className="text-slate-500" />
          </span>
          <input className="w-full" type="text" placeholder="Search" />
        </div>

        <button onClick={handleBtnClick} className="px-2 font-medium text-sm">
          Cancel
        </button>
      </div>
    </nav>
  );
};

export default SearchNavTop;
