import { useState, useEffect, useRef } from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import getImage from "../../../utils/hooks/getImage";
import SearchResults from "./SearchResults";
import {
  PlusIcon,
  HeartIcon,
  PostIcon,
  StoryIcon,
  SearchIcon,
} from "../../../utils/icons";

// app => the header / top nav container
const { instaWordSvg } = getImage();
const HomeNavTop = () => {
  const inputElement = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [showResultsContainer, setShowResultsContainer] = useState(false);

  const handleSearch = (e) => {
    // other logic here
    setSearchValue(e.target.value);
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
    <nav className="flex justify-between py-2 sticky top-0 z-10 bg-white border-b border-b-slate-200 max-w-3xl mx-auto">
      {/* left - side => insta logo container*/}
      <div className="relative h-9 w-32 md:w-36 pt-10">
        <Image
          objectFit="cover"
          layout="fill"
          src={instaWordSvg}
          alt="insta brand logo"
        />
      </div>

      {/* right side icons */}
      <div className="relative flex justify-between items-center mr-6">
        {/* searchBar */}
        <div
          className={`${layout.searchBar} relative flex items-center w-[16.5rem] h-9 px-3 py-4 mr-4 rounded-md bg-gray-100`}
        >
          <SearchIcon
            className={`text-slate-300 cursor-pointer ${
              searchValue ? "hidden" : "block"
            }`}
          />
          <input
            arial-label="search bar"
            value={searchValue}
            onChange={handleSearch}
            onClick={() => setShowResultsContainer(true)}
            placeholder="Search"
            className="px-2"
            type="text"
            ref={inputElement}
          />

          <span role="button" aria-label="clear the search bar">
            x
          </span>

          <SearchResults show={showResultsContainer} />
        </div>

        <Link href="/somewhere" passHref>
          <a className="relative">
            <HeartIcon />
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
