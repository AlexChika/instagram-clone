/* --------------------------------------- */
/*      Picture and Video Posts Header     */
/* --------------------------------------- */
// This component is the Header for Video posts, picture posts and single video and picture post pages

import IconHOC from "components/general/IconHOC";
import Image from "next/image";
import Link from "next/link";
import { ThreeDotsIcon, VerifiedIcon } from "utils/icons";

const Header = ({ showModal, showExtras = false }) => {
  // .....................
  return (
    <>
      {/* -------------- Header... -------------- */}
      <div className="flex justify-between items-center px-4 border-b border-b-slate-300 dark:border-b-gray-700">
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
          <p className="font-medium flex items-center">
            <span>Alex_stars &nbsp;</span>

            {showExtras && (
              <>
                {true && (
                  <span className="mr-1">
                    <VerifiedIcon class="w-[14px] h-[14px]" />
                  </span>
                )}

                {false && (
                  <>
                    <span
                      aria-hidden
                      className="bg-black block dark:bg-white rounded-full w-[5px] h-[5px] mr-1"
                    ></span>
                    <span>Following</span>
                  </>
                )}
              </>
            )}
          </p>
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
