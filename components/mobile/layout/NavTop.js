import { useState, useEffect, useRef } from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import getImage from "../../../utils/hooks/getImage";
import {
  CaretDown,
  PlusIcon,
  HeartIcon,
  FavouritesIcon,
  FollowingIcon,
} from "../../../utils/icons";

// app => the header / top nav container
const { instaWordSvg } = getImage();
const NavTop = () => {
  const instaLogoCon = useRef(null);
  const [isDropDown, setIsDropDown] = useState(false);

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
        setIsDropDown(false);
      }
    }

    window.addEventListener("click", removeDRopDown);

    return () => {
      window.removeEventListener("click", removeDRopDown);
    };
  }, []);

  return (
    <nav className="border-b border-b-slate-200 max-w-3xl mx-auto">
      <div className="flex mx-auto justify-between py-1 relative">
        {/* left - side => insta logo container*/}
        <div
          ref={instaLogoCon}
          onClick={() => setIsDropDown(true)}
          className={`flex items-center cursor-pointer ${layout.pointerNone}`}
        >
          <div className="relative h-9 w-32 md:w-36 pt-10">
            <Image
              objectFit="cover"
              layout="fill"
              src={instaWordSvg}
              alt="insta brand logo"
            />
          </div>

          <span aria-hidden="true" className="-ml-2">
            <CaretDown />
          </span>
        </div>

        {/* right side icons */}
        <div className="flex justify-between items-center w-16  mr-6">
          <Link href="/somwhere" passHref>
            <a className={layout.pointerNone}>
              <PlusIcon />
            </a>
          </Link>

          <Link href="/somewhere" passHref>
            <a className={`relative ${layout.pointerNone}`}>
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

        {/* options links dropdown //-- position absolute */}
        <div
          className={`flex flex-col absolute top-[90%] left-[10px]  bg-white text-black p-1 z-[1] shadow  rounded-md transition origin-bottom ${
            isDropDown ? layout.showDropDown : layout.hideDropDown
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

export default NavTop;
