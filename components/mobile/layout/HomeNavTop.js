import { useState, useEffect, useRef } from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import {
  CaretDown,
  PlusIcon,
  HeartIcon,
  FavouritesIcon,
  FollowingIcon,
  PostIcon,
  StoryIcon,
  InstaLogo,
} from "../../../utils/icons";

// app => the header / top nav container
const HomeNavTop = () => {
  const instaLogoCon = useRef(null);
  const plusIconCon = useRef(null);
  const [logoDropDown, setLogoDropDown] = useState(false);
  const [plusIconDropDown, setPlusIconDropDown] = useState(false);

  //   temporal
  const isNotification = true;

  const testClick = (e) => {
    console.log("I was clicked");
    console.log(e.target);
  };

  //   effect for navbar dropdown
  useEffect(() => {
    function removeDRopDown(e) {
      if (e.target !== instaLogoCon.current) {
        setLogoDropDown(false);
      }

      if (e.target !== plusIconCon.current) {
        setPlusIconDropDown(false);
      }
    }
    window.addEventListener("click", removeDRopDown);

    return () => {
      window.removeEventListener("click", removeDRopDown);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-b-slate-200 max-w-3xl mx-auto">
      <div className="flex mx-auto justify-between items-center py-2 relative">
        {/* left - side => insta logo container*/}
        <div
          ref={instaLogoCon}
          onClick={() => setLogoDropDown(true)}
          className={`flex items-center cursor-pointer group px-4 ${layout.pointerNone}`}
        >
          <div>
            <InstaLogo />
          </div>

          <span
            aria-hidden="true"
            className=" group-hover:visible invisible pl-2"
          >
            <CaretDown />
          </span>
        </div>

        {/* right side icons */}
        <div className="relative flex justify-between items-center w-16 mr-6">
          <span
            className="cursor-pointer"
            onClick={() => setPlusIconDropDown(true)}
            ref={plusIconCon}
          >
            <PlusIcon className={"pointer-events-none"} />

            {/*plusIcon dropdown menu */}
            <span
              style={{ "--translate-x": "-50%" }}
              className={`flex flex-col absolute top-[90%] left-[16px] bg-white text-black p-1 z-[1] shadow rounded-md transition origin-bottom ${
                plusIconDropDown ? layout.showDropDown : layout.hideDropDown
              }`}
            >
              <button
                type="button"
                className="flex justify-between items-center text-base py-1 px-2"
              >
                <span className="pr-7">post</span>
                <PostIcon />
              </button>

              <button
                type="button"
                className="flex justify-between items-center text-base py-1 px-2"
              >
                <span className="pr-7">Story</span>
                <StoryIcon />
              </button>
            </span>
            {/*end of plusIcon dropdown menu */}
          </span>

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

        {/* logo dropdown menu //-- position absolute */}
        <div
          style={{ "--translate-x": "0" }}
          className={`flex flex-col absolute top-[90%] left-[10px]  bg-white text-black p-1 z-[1] shadow  rounded-md transition origin-bottom ${
            logoDropDown ? layout.showDropDown : layout.hideDropDown
          }`}
        >
          <span className="py-1 px-2 block ">
            <Link href="/someweher/following">
              <a className="flex justify-between items-center text-base">
                <span className="pr-7">Following</span>
                <FollowingIcon />
              </a>
            </Link>
          </span>

          <span className="py-1 px-2">
            <Link href="/someweher/Favourites">
              <a className="flex justify-between items-center text-base">
                <span className="pr-7">Favorites</span>
                <FavouritesIcon />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavTop;
