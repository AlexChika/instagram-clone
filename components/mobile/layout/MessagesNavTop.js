import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  function handleSwitchAccountPopUp() {
    setShowPopUp(true);
  }

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-center bg-white dark:bg-black border-b border-b-slate-300 dark:border-b-gray-700 h-11">
        <div className="flex justify-between px-3 pr-4 w-full py-1 max-w-3xl mx-auto">
          <button onClick={() => router.back()} className="text-xs">
            {IconHOC(CaretLeftIcon, "none")}
          </button>

          <button
            onClick={handleSwitchAccountPopUp}
            className="flex items-center text-lg font-medium"
          >
            {"user's name"} &nbsp;
            {IconHOC(CaretDown, "none")}
          </button>

          <button onClick={() => router.push("/messages/new")}>
            {IconHOC(EditIcon, "none")}
          </button>
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

  // TODO : change transition-all to opacity

  return (
    <div
      ref={switchRef}
      onClick={closePopUp}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-20 transition-all ${
        showPopUp ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* ------- content starts ........* ------ */}
      <section
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-[#414040] bg-white d absolute w-full bottom-0 p-4 rounded-t-xl transition-transform ${
          showPopUp ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        {/* ------------- dashed line ------------- */}
        <span
          aria-hidden
          className="block mx-auto w-12 h-1 bg-slate-200 dark:bg-gray-800"
        ></span>

        {/* -------------- Title here ------------- */}
        <h3 className="text-center mt-3 italic font-medium border-b-2 dark:border-b-gray-600 border-b-gray-100 py-2">
          Switch accounts
        </h3>

        {/* ----------- accounts wrapper ---------- */}
        <article className="py-5 max-h-[70vh] overflow-y-auto">
          {/* account */}
          <div className="flex justify-between items-center mb-3">
            {/* image container and name*/}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-2 cursor-pointer">
                <Image
                  className="rounded-full"
                  src={tempImage}
                  alt="user profile image"
                />
              </div>
              <span className="text-base">{"user's name"}</span>
            </div>

            <span>{IconHOC(CheckIcon, "none")}</span>
          </div>
        </article>

        <button className="text-blue-600 text-center w-full">
          Log into an existing Account
        </button>
      </section>
    </div>
  );
}
