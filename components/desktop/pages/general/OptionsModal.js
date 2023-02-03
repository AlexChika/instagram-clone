/* --------------------------------------- */
/*              Options component          */

import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import Link from "next/link";
import { App } from "pages/_app";
import { useState } from "react";
import {
  EmailIcon,
  FacebookIcon,
  LinkIcon,
  MessagingIcon,
  MessengerIcon,
  RightCurvedArrowIcon,
  TwitterIcon,
  WhatsappIcon,
} from "utils/icons";
import IconHOC from "components/general/IconHOC";

/* --------------------------------------- */
const OptionsModal = ({ showModal, setShowModal }) => {
  const { notify } = App();
  const [shareModal, setShareModal] = useState(false);

  function copyLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("post url here");
      notify("Copied to clipboard");
    } else {
      notify("Sorry ...copy not supported on your browser");
    }

    setShowModal(false);
  }

  //   ......
  return (
    <>
      {/* this is the first overlay of buttons like share to,copylink,cancel etc */}
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setShowModal(false);
        }}
        className={`fixed bg-[#000000cc] top-0 left-0 bottom-0 right-0 z-[5] flex justify-center items-center  ${
          showModal ? "flex" : "hidden"
        }`}
      >
        {/* modal starts here.... */}
        <div
          className={`flex flex-col items-center bg-white w-[250px] sm:w-[350px] text-black rounded-xl overflow-hidden ${
            showModal ? "scale_down" : ""
          }`}
        >
          <h4
            className={`text-red-600 select-none dark:border-neutral-700 border-gray-100 w-full text-center h-full block py-3 border-b-2 border-0`}
          >
            Take Action
          </h4>

          <Link href="/post">
            <a className="w-full text-center">
              <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b-2 border-0">
                Go to post
              </span>
            </a>
          </Link>

          <button
            onClick={() => {
              setShareModal(true);
            }}
            className={"w-full text-center"}
          >
            <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b-2 border-0">
              Share to...
            </span>
          </button>

          <button onClick={copyLink} className="w-full text-center">
            <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b-2 border-0">
              Copy link
            </span>
          </button>

          <button
            onClick={() => setShowModal(false)}
            className="w-full text-center"
          >
            <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b-2 border-0">
              Cancel
            </span>
          </button>
        </div>
      </div>

      {/* ---------- shareModal 0verlay --------- */}
      {/* this is the second overlay when "share to" button is clicked */}
      <ShareModal params={{ shareModal, setShareModal, setShowModal }} />
    </>
  );
};

export default OptionsModal;

/* --ShareModal an options sub component-- */
function ShareModal({ params }) {
  const { notify } = App();
  const { shareModal, setShareModal, setShowModal } = params;

  let url = "https://insta-cloned.vercel.app/reels";
  let title = " post tiltle here";
  let body = "post details here";

  // close modal function
  function closePopUp(e) {
    if (e.target !== e.currentTarget) return;
    setShareModal(false);
  }

  // Buttons functions....
  function seeAll() {
    if (navigator.share) {
      navigator.share({
        title: "Post Title here",
        url: "https://insta-cloned.vercel.app",
        text: "post description here",
      });
    } else {
      notify("Sorry... share options exhausted");
    }
  }

  function copyLink() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("post url here");
      notify("Copied to clipboard");
    } else {
      notify("Sorry ...copy not supported on your browser");
    }
    setShareModal(false);
  }

  // ,.......wrapper (gray bg)
  return (
    <div
      onClick={closePopUp}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[5] flex justify-center items-center ${
        shareModal ? "flex" : "hidden"
      }`}
    >
      {/* .....content starts...*/}
      <section
        className={`absolute w-[90%] max-w-[400px] dark:bg-[#414040] bg-white text-black dark:text-white rounded-xl ${
          shareModal ? "scale_down" : ""
        }`}
      >
        {/* -------------- title here ------------- */}
        <h3 className="border-b-2 dark:border-b-gray-600 border-b-gray-100 italic p-2 relative text-center">
          <span className="text-center font-semibold">Share to...</span>
          <button
            className="text-xl font-bold px-2 absolute right-[20px]"
            onClick={() => {
              setShareModal(false);
              setShowModal(false);
            }}
          >
            X
          </button>
        </h3>

        {/* ----------- buttons wrapper ---------- */}
        <section className="pb-3 h-[50vh] overflow-y-auto">
          <Link href="/messages" passHref>
            <a
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(MessagingIcon, "none")}</span>
              <h5>Share to Direct</h5>
            </a>
          </Link>

          <FacebookShareButton
            style={{ width: "100%" }}
            hashtag="instagram"
            quote={body}
            url={url}
            blankTarget={true}
          >
            <span
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(FacebookIcon, "none")}</span>
              <h5>Share to Facebook</h5>
            </span>
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={url}
            appId={"851802459409408"}
            blankTarget={true}
            style={{ width: "100%" }}
          >
            <span
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(MessengerIcon, "none")}</span>
              <h5>Share to Messenger</h5>
            </span>
          </FacebookMessengerShareButton>

          <WhatsappShareButton
            style={{ width: "100%" }}
            url={url}
            title={title}
            blankTarget={true}
            separator=":: "
          >
            <span
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(WhatsappIcon, "none")}</span>
              <h5>Share to WhatsApp</h5>
            </span>
          </WhatsappShareButton>

          <TwitterShareButton
            style={{ width: "100%" }}
            url="https://insta-cloned.vercel.app/reels"
            hashtags={["InstaCloned", "Instagram", "Tech"]}
            title="post tilte here"
            blankTarget={true}
          >
            <span
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(TwitterIcon, "none")}</span>
              <h5>Share to Twitter</h5>
            </span>
          </TwitterShareButton>

          <EmailShareButton
            url={url}
            subject={title}
            body={body}
            blankTarget={true}
            style={{ width: "100%" }}
          >
            <span
              className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(EmailIcon, "none")}</span>
              <h5>Share via Email</h5>
            </span>
          </EmailShareButton>

          <button
            className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
            onClick={copyLink}
          >
            <span className="mr-5">{IconHOC(LinkIcon, "none")}</span>
            <h5>Copy link</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
            onClick={seeAll}
          >
            <span className="mr-5">
              {IconHOC(RightCurvedArrowIcon, "none")}
            </span>
            <h5>See all</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
            onClick={() => {
              setShareModal(false);
              setShowModal(false);
            }}
          >
            <span className="mr-10"></span>
            <h5 className="text-blue-400">Cancel</h5>
          </button>
        </section>
      </section>
    </div>
  );
}