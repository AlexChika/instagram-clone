import React from "react";
import Link from "next/link";
import Image from "next/image";
import layout from "./layout.module.css";
import getImage from "../../../utils/hooks/getImage";
import {
  InstaLogo,
  InstaIcon,
  ListIcon,
  HomeIcon,
  ExploreIcon,
  MessagingIcon,
  HeartIcon,
  PlusIcon,
  SearchIcon,
} from "../../../utils/icons";

const _Links = [
  {
    url: "/",
    icon: <HomeIcon />,
    name: "Home",
  },
  {
    url: "/search",
    icon: <SearchIcon />,
    name: "Search",
  },
  {
    url: "/explore",
    icon: <ExploreIcon />,
    name: "Explore",
  },
  {
    url: "/profile/messages",
    icon: <MessagingIcon />,
    name: "Message",
  },
  {
    url: "#",
    icon: <HeartIcon />,
    name: "Notification",
  },

  {
    url: "#",
    icon: <PlusIcon />,
    name: "Create",
  },
];

const SideBar = () => {
  return (
    <div className="sticky h-screen flex flex-col justify-between py-10 pl-[1.32rem] pr-24 blue">
      <section>
        {/* instagram logo screen from 1264px */}
        <Link href="/" passHref>
          <a className="hidden xl:inline">
            <InstaLogo />
          </a>
        </Link>

        {/*instagram logo screen from 768 and below 1264 */}
        <Link href="/" passHref>
          <a className="hidden md:inline xl:hidden">
            <InstaIcon />
          </a>
        </Link>

        {/* links container */}
        <div className="links mt-[3.18rem]">
          {_Links.map((link) => {
            return (
              <Link
                key={link.name}
                className="relative"
                href={link.url}
                passHref
                active={true}
              >
                <a className="link flex mb-[32px]">
                  {link.icon}

                  <span
                    className={`capitalize pl-3 text-lg ${
                      false ? "font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </section>

      {/* footer  */}
      <div className="footer">
        <ListIcon />
      </div>
    </div>
  );
};

export default SideBar;
// > 1263px large side bar
// <= 1263 small side bar
// data-tooltip="press and hold, then drag"
