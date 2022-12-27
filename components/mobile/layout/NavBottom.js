import React from "react";
import layout from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import tempIMage from "../../../Assets/alex.png";
import IconHOC from "../../general/IconHOC";
import {
  HomeIcon,
  SearchIcon,
  ReelsIcon,
  MessagingIcon,
  AvatarIcon,
} from "../../../utils/icons";

const _Links = [
  {
    url: "/",
    icon: HomeIcon,
    name: "Home",
    path: "",
  },

  {
    url: "/explore",
    icon: SearchIcon,
    name: "Search",
    path: "explore",
  },
  {
    url: "/reels",
    icon: ReelsIcon,
    name: "Reels",
    path: "reels",
  },
  {
    url: "/messages",
    icon: MessagingIcon,
    name: "Messages",
    path: "messages",
  },
];
// border - b - slate - 300;
const NavBottom = () => {
  return (
    <div
      className="fixed z-10 bg-white dark:bg-black bottom-0 w-full border-t border-t-slate-300 dark:border-t-gray-700 h-[44px] py-2 px-5 md:px-0"
      aria-label="navigation"
    >
      <div className="justify-between flex items-center max-w-3xl mx-auto">
        {_Links.map((link, index) => {
          return (
            <Link key={index} href={link.url} passHref>
              <a aria-label={link.name + "icon"}>
                {IconHOC(link.icon, link.path)}
              </a>
            </Link>
          );
        })}

        <Link href="/user" passHref>
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
            <a aria-label="User avatar">{IconHOC(AvatarIcon, "user")}</a>
          )}
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
