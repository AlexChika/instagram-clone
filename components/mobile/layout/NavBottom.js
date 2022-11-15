import React from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import tempIMage from "../../../Assets/alex.png";
import {
  HomeIcon,
  SearchIcon,
  ReelsIcon,
  MessagingIcon,
  AvatarIcon,
} from "../../../utils/icons";

const NavBottom = () => {
  return (
    <div
      className="fixed z-10 bg-white bottom-0 w-full justify-around flex items-center border-t border-b-slate-300 h-[44px] py-2 px-2"
      aria-label="navigation"
    >
      <Link href="/" passHref>
        <a aria-label="Home Icon">
          <HomeIcon active={true} />
        </a>
      </Link>

      <Link href="/explore" passHref>
        <a aria-label="Search icon">
          <SearchIcon />
        </a>
      </Link>

      <Link href="/reels" passHref>
        <a aria-label="reels Icon">
          <ReelsIcon />
        </a>
      </Link>

      <Link href="/direact-messaging" passHref>
        <a aria-label="Messaging icon">
          <MessagingIcon />
        </a>
      </Link>

      <Link href="/userNames" passHref>
        {true ? (
          <a
            aria-label="User avatar"
            className="relative h-[26px] w-[26px] rounded-full flex items-center justify-center"
          >
            <Image
              className="rounded-full"
              layout="fill"
              src={tempIMage}
              alt="user image"
            ></Image>
          </a>
        ) : (
          <a aria-label="User avatar">
            <AvatarIcon />
          </a>
        )}
      </Link>
    </div>
  );
};

export default NavBottom;
