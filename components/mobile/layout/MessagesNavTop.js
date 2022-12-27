import React, { useState, useRef } from "react";
import Image from "next/image";
import IconHOC from "../../general/IconHOC";
import tempImage from "../../../Assets/alex.png";
import {
  CaretDown,
  CaretLeftIcon,
  CheckIcon,
  EditIcon,
} from "../../../utils/icons";

const MessagesNavTop = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  function handleSwitchAccountPopUp() {
    setShowPopUp(true);
  }

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 h-11">
        <div className="flex justify-between px-3 pr-4 w-full py-1 max-w-3xl mx-auto">
          <span className="text-sm">{IconHOC(CaretLeftIcon, "none")}</span>

          <button
            onClick={handleSwitchAccountPopUp}
            className="flex items-center text-lg font-medium"
          >
            {"User's name"} &nbsp;
            {IconHOC(CaretDown, "none")}
          </button>

          <span>{IconHOC(EditIcon, "none")}</span>
        </div>
      </nav>

      <SwitchAccounts setShowPopUp={setShowPopUp} showPopUp={showPopUp} />
    </>
  );
};

export default MessagesNavTop;

function SwitchAccounts({ showPopUp, setShowPopUp }) {
  const switchRef = useRef(null);

  function closePopUp(e) {
    if (e.target === switchRef.current) {
      setShowPopUp(false);
    }
  }

  return (
    <main
      ref={switchRef}
      onClick={closePopUp}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-20 transition-all ${
        showPopUp ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* content */}
      <section
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-[#414040] bg-white d absolute w-full bottom-0 p-4 rounded-t-xl transition-transform ${
          showPopUp ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        <span
          aria-hidden
          className="block mx-auto w-10 h-1 bg-slate-200 dark:bg-gray-800"
        ></span>

        <h3 className="text-center mt-3 italic font-medium">Switch accounts</h3>

        <article className="py-10">
          {/* accounts */}
          <div className="flex justify-between items-center">
            {/* image container and name*/}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-2 cursor-pointer">
                <Image
                  className="rounded-full"
                  src={tempImage}
                  alt="user profile image"
                />
              </div>
              <span className="text-base font-medium">{"user's name"}</span>
            </div>

            <span>{IconHOC(CheckIcon, "none")}</span>
          </div>
        </article>

        <button className="text-blue-600 text-center w-full">
          Log into an existing Account
        </button>
      </section>
    </main>
  );
}
