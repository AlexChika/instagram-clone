/* --------------------------------------- */
/*            Single Nav Header            */
/* --------------------------------------- */
// This is a nav bar component for light pages like single-video, single-photo, single-comment and etc

import React from "react";
import { useRouter } from "next/router";
import IconHOC from "components/general/IconHOC";
import { CaretLeftIcon, MessagingIcon } from "utils/icons";

// .....
const Nav = ({ title, showModal, sharebtn = false }) => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 h-11">
      <div className="flex justify-between px-4 w-full py-1 max-w-3xl mx-auto">
        <button onClick={() => router.back()} className="text-xs">
          {IconHOC(CaretLeftIcon, "none")}
        </button>

        <h1 className="flex-1 text-center text-lg font-medium">{title}</h1>

        {sharebtn && (
          <button onClick={() => showModal(true)}>
            {IconHOC(MessagingIcon, "none")}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
