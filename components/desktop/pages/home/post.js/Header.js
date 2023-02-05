/* --------------------------------------- */
/*      Picture and Video Posts Header     */
/* --------------------------------------- */
// This component is the Header for Video posts, picture posts and single video and picture post pages

import IconHOC from "components/general/IconHOC";
import Image from "next/image";
import Link from "next/link";
import { ThreeDotsIcon, VerifiedIcon } from "utils/icons";

const Header = ({ showModal }) => {
  // .....................
  return (
    <>
      {/* -------------- Header... -------------- */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center py-2">
          {/* image... container*/}
          <Link href="/profile" passHref>
            <a
              className={`w-10 h-10 rounded-full cursor-pointer relative mr-2 `}
            >
              <Image
                className="rounded-full"
                layout="fill"
                src="/alex.png"
                alt="user profile image"
              />
            </a>
          </Link>

          {/* insta ... username */}
          <p className="font-medium flex items-center mr-2">dev_arise</p>

          <span
            className="self-center mr-2 h-1 w-1 rounded-full dark:bg-neutral-300 bg-neutral-400"
            aria-hidden
          ></span>

          <span className="dark:text-neutral-300 text-neutral-400">{"3h"}</span>
        </div>

        {/* dots Icon */}
        <button onClick={() => showModal(true)}>
          {IconHOC(ThreeDotsIcon, "none")}
        </button>
      </div>
    </>
  );
};

export default Header;
