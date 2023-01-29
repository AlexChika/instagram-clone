import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconHOC from "components/general/IconHOC";
import tempImage from "Assets/alex.png";
import layout from "components/desktop/layout/layout.module.css";

import {
  InstaLogo,
  InstaIcon,
  ListIcon,
  HomeIcon,
  MessagingIcon,
  HeartIcon,
  SearchIcon,
  AvatarIcon,
  ReelsIcon,
} from "utils/icons";

const _Links = [
  {
    url: "/",
    icon: HomeIcon,
    name: "Home",
    path: "",
  },

  {
    url: "/search",
    icon: SearchIcon,
    name: "Search",
    path: "search",
  },
  {
    url: "/reels",
    icon: ReelsIcon,
    name: "Reels",
    path: "reels",
  },
  {
    url: "/profile/messages",
    icon: MessagingIcon,
    name: "Message",
    path: "message",
  },
  {
    url: "#",
    icon: HeartIcon,
    name: "Notification",
    path: "notification",
  },
];

const SideBar = () => {
  return (
    <div className="sticky left-0 h-screen flex flex-col justify-between py-10 pl-[1rem] xl:w-[250px] pr-4 xl:pr-8 border-r-[1px] border-gray-400">
      <section>
        {/* instagram logo screen from 1264px */}
        <Link href="/" passHref>
          <a className="hidden pl-2 xl:flex items-center">
            {IconHOC(InstaLogo, "/")}
          </a>
        </Link>

        {/*instagram logo screen from 768 and below 1264 */}
        <Link href="/" passHref>
          <a className="hidden md:flex xl:hidden items-center px-2 p-2">
            {IconHOC(InstaIcon, "/")}
          </a>
        </Link>

        {/* links container */}
        <div className="links mt-[2.4rem] w-full">
          {_Links.map((link) => {
            return (
              <Link key={link.name} href={link.url} passHref>
                <a
                  className={`link items-center flex mb-[12px] rounded-full xl:rounded-xl px-2 p-2 w-full xl:hover:bg-gray-100  dark:xl:hover:bg-neutral-900  ${layout.linkTextWrapper}`}
                >
                  {IconHOC(link.icon, link.path)}

                  <span
                    data-text={link.name}
                    className={`relative invisible xl:visible w-0 xl:w-auto capitalize pl-3 text-lg arrow ${layout.linkText}`}
                  >
                    {link.name}
                  </span>
                </a>
              </Link>
            );
          })}

          <Link href="/usernames" passHref>
            {true ? (
              <a
                aria-label="User avatar"
                className={`link flex items-center px-2 p-2 xl:hover:bg-gray-100 dark:xl:hover:bg-neutral-900 rounded-full xl:rounded-xl ${layout.linkTextWrapper}`}
              >
                <span className="flex relative h-[26px] w-[26px] rounded-full items-center justify-center">
                  <Image
                    className="rounded-full"
                    layout="fill"
                    alt="user image"
                    src={tempImage}
                  ></Image>
                </span>

                <span
                  data-text={"Profile" + " " + "Alex Chika"}
                  className={`relative invisible  xl:visible  w-0 xl:w-auto pl-3 text-lg arrow ${layout.linkText}`}
                >
                  Profile
                </span>
              </a>
            ) : (
              <a
                className={`link flex items-center px-2 p-2 xl:hover:bg-gray-100 dark:xl:hover:bg-neutral-900 rounded-full xl:rounded-xl ${layout.linkTextWrapper}`}
                aria-label="User avatar"
              >
                {IconHOC(AvatarIcon, "usernames")}
                <span
                  data-text={"Profile"}
                  className={`relative invisible  xl:visible w-0 xl:w-auto text-lg arrow ${layout.linkText}`}
                >
                  Profile
                </span>
              </a>
            )}
          </Link>
        </div>
      </section>

      {/* footer  */}
      <Link href="#" passHref>
        <a
          className={`flex items-center px-2 p-2 xl:hover:bg-gray-100 dark:xl:hover:bg-neutral-900 rounded-xl ${layout.linkTextWrapper}`}
        >
          {IconHOC(ListIcon, "none")}
          <span
            data-text="More"
            className={`relative invisible xl:visible w-0 xl:w-auto pl-3 text-lg arrow ${layout.linkText}`}
          >
            More
          </span>
        </a>
      </Link>
    </div>
  );
};

export default SideBar;
// > 1263px large side bar
// <= 1263 small side bar
// data-tooltip="press and hold, then drag"
