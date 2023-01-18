import React from "react";
import Link from "next/link";
import Image from "next/image";
import tempImage from "../../../Assets/alex.png";

import {
  HomeIcon,
  ExploreIcon,
  MessagingIcon,
  AvatarIcon,
  PlusIcon,
  ReelsIcon,
} from "../../../utils/icons";
import IconHOC from "../../general/IconHOC";

const _Links = [
  {
    url: "/",
    icon: HomeIcon,
    name: "Home",
    path: "",
  },
  {
    url: "/explore",
    icon: ExploreIcon,
    name: "Explore",
    path: "explore",
  },
  {
    url: "/reels",
    icon: ReelsIcon,
    name: "Reels",
    path: "reels",
  },
  {
    url: "#",
    icon: PlusIcon,
    name: "Create",
    path: "create",
  },
  {
    url: "messages",
    icon: MessagingIcon,
    name: "Message",
    path: "message",
  },
];

const NavBottom = () => {
  return (
    <div
      className="fixed z-10 bg-white dark:bg-black bottom-0 w-full justify-around flex items-center border-t border-t-slate-300 h-[44px] py-2 px-2"
      aria-label="navigation"
    >
      {_Links.map((link, index) => {
        return (
          <Link key={index} href={link.url} passHref>
            <a aria-label="Home Icon">{IconHOC(link.icon, link.path)}</a>
          </Link>
        );
      })}

      <Link href="/userNames" passHref>
        {true ? (
          <a
            aria-label="User avatar"
            className="relative h-[26px] w-[26px] rounded-full flex items-center justify-center"
          >
            <Image
              className="rounded-full"
              layout="fill"
              alt="user image"
              src={tempImage}
            ></Image>
          </a>
        ) : (
          <a aria-label="User avatar">{IconHOC(AvatarIcon, "userNames")}</a>
        )}
      </Link>
    </div>
  );
};

export default NavBottom;
