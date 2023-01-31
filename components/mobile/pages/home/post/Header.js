import IconHOC from "components/general/IconHOC";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThreeDotsIcon, VerifiedIcon } from "utils/icons";
import { OptionsModal } from "../../reels/video/Buttons";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

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
          <p className="font-medium ">
            <span>Alex_stars &nbsp;</span>
          </p>
        </div>

        {/* dots Icon */}
        <button onClick={() => setShowModal(true)}>
          {IconHOC(ThreeDotsIcon, "none")}
        </button>
      </div>

      {/* ------------ Options ovrlay ------------ */}
      <OptionsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Header;

// name with verified badge
//  <p className="font-extrabold flex items-center">
//    <span>Alex_stars &nbsp;</span>

//    {true && (
//      <span>
//        <VerifiedIcon class="w-[20px] h-[20px]" />
//      </span>
//    )}
//  </p>;
