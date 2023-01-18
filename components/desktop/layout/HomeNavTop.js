import { useState, useEffect, useRef } from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import IconHOC from "../../general/IconHOC";
import SearchResults from "./SearchResults";
import { HeartIcon, SearchIcon, InstaLogo } from "../../../utils/icons";

// app => the header / top nav container
const HomeNavTop = () => {
  const inputElement = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [showResultsContainer, setShowResultsContainer] = useState(false);

  const handleSearch = (e) => {
    // other logic here
    setSearchValue(e.target.value);
  };

  const handleClearSearchBar = () => {
    setSearchValue("");
    setShowResultsContainer("false");
  };

  //   temporal
  const isNotification = true;

  // effect for results container dropdown
  useEffect(() => {
    function showResults(e) {
      if (e.target !== inputElement.current) {
        setShowResultsContainer(false);
      }
    }

    window.addEventListener("click", showResults);

    return () => {
      window.removeEventListener("click", showResults);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 max-w-3xl mx-auto">
      {/* left - side => insta logo container*/}
      <Link href="/" passHref>
        <a className="">{IconHOC(InstaLogo, "/")}</a>
      </Link>

      {/* right side icons */}
      <div className="relative flex justify-between items-center">
        {/* searchBar */}
        <div
          className={`${layout.searchBar} relative flex items-center w-[16.5rem] h-9 px-3 py-4 mr-4 rounded-md bg-gray-100 dark:bg-white`}
        >
          <SearchIcon
            class={`text-slate-300 cursor-pointer ${
              searchValue ? "hidden" : "block"
            }`}
          />

          <input
            arial-label="search bar"
            value={searchValue}
            onChange={handleSearch}
            onClick={() => setShowResultsContainer(true)}
            placeholder="Search"
            className="px-2 dark:placeholder:text-black dark:text-black"
            type="text"
            ref={inputElement}
          />

          {/* cleaer search bar */}
          <span
            className={`h-5 w-5 text-xs bg-gray-300  dark:text-white text-slate-100 rounded-[50%] flex items-center justify-center ${
              searchValue ? "flex" : "hidden"
            }`}
            role="button"
            aria-label="clear the search bar"
            onClick={handleClearSearchBar}
          >
            X
          </span>

          {/* search results container*/}
          <SearchResults show={showResultsContainer} />
        </div>

        {/* heart icon  */}
        <Link href="/somewhere" passHref>
          <a className="relative">
            {IconHOC(HeartIcon, "/somewhere")}

            <span
              aria-hidden="true"
              className={`absolute h-[9px] w-[9px] rounded-full bg-red-500 top-0 right-0 ${
                isNotification ? "block" : "hidden"
              }`}
            ></span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavTop;
// ${
//                 plusIconDropDown ? layout.showDropDown : layout.hideDropDown
//               }
