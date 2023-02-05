/* --------------------------------------- */
/*              Options modal              */
/* --------------------------------------- */
// this components contains options such as share, copy and etc used in the apps home page , reels page and single post, single video and post's-comment pages.

import { useState } from "react";
import { App } from "pages/_app";
import Link from "next/link";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
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
import general from "./general.module.css";
import IconHOC from "components/general/IconHOC";

// .........................
function OptionsModal({ showModal, setShowModal, reels = false }) {
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

  return (
    <>
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setShowModal(false);
        }}
        className={`fixed bg-[#000000cc] top-0 left-0 bottom-0 right-0 z-[3] flex justify-center items-center  ${
          showModal ? "flex" : "hidden"
        }`}
      >
        {/* modal starts here.... */}
        <div
          className={`flex flex-col items-center bg-white dark:bg-neutral-800 text-black dark:text-white min-w-[250px] w-[80%] max-w-[360px] rounded-xl overflow-hidden ${
            showModal ? "scale_down" : ""
          }`}
        >
          <h4
            className={`text-red-500 select-none border-b dark:border-neutral-700 border-gray-100 font-bold py-3 text-center w-full`}
          >
            Take Action
          </h4>

          {!reels && (
            <>
              <button className={general.options_btns}>
                <span className="dark:border-neutral-700 border-gray-100 text-red-500 font-bold">
                  UnFollow
                </span>
              </button>

              <button className={general.options_btns}>
                <span className="dark:border-neutral-700 border-gray-100">
                  Add to favourites
                </span>
              </button>
            </>
          )}

          <Link href="/post">
            <a className={general.options_btns}>
              <span className="dark:border-neutral-700 border-gray-100">
                Go to post
              </span>
            </a>
          </Link>

          <button
            className={general.options_btns}
            onClick={() => {
              setShareModal(true);
            }}
          >
            <span className="dark:border-neutral-700 border-gray-100">
              Share to...
            </span>
          </button>

          <button onClick={copyLink} className={general.options_btns}>
            <span className="dark:border-neutral-700 border-gray-100">
              Copy link
            </span>
          </button>

          <button
            onClick={() => setShowModal(false)}
            className={general.options_btns}
          >
            <span className="border-transparent">Cancel</span>
          </button>
        </div>
      </div>

      <ShareModal params={{ shareModal, setShareModal, setShowModal }} />
    </>
  );
}

export default OptionsModal;

function ShareModal({ params }) {
  const { notify } = App();
  const { shareModal, setShareModal } = params;

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
        text: "post description",
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
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[6] transition-opacity ${
        shareModal ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* .....content starts...*/}
      <section
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-neutral-800 bg-white text-black dark:text-white absolute w-full bottom-0 py-4 pb-[10px] rounded-t-xl transition-transform ${
          shareModal ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        {/* ----------- dashed gray line ---------- */}
        <span
          aria-hidden
          className="block mx-auto w-12 h-1 bg-slate-200 dark:bg-neutral-700"
        ></span>

        {/* -------------- title here ------------- */}
        <h3 className="text-center mt-3 border-b dark:border-b-neutral-700 border-b-gray-100 p-2 italic font-semibold">
          Share to...
        </h3>

        {/* ----------- buttons wrapper ---------- */}
        <section className="max-h-[71vh] overflow-y-auto px-3">
          <Link href="/messages" passHref>
            <a className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${general.share_btns} `}>
              <span className="mr-5">{IconHOC(EmailIcon, "none")}</span>
              <h5>Share via Email</h5>
            </span>
          </EmailShareButton>

          <button
            className={`dark:hover:bg-gray-600 ${general.share_btns} `}
            onClick={copyLink}
          >
            <span className="mr-5">{IconHOC(LinkIcon, "none")}</span>
            <h5>Copy link</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 ${general.share_btns} `}
            onClick={seeAll}
          >
            <span className="mr-5">
              {IconHOC(RightCurvedArrowIcon, "none")}
            </span>
            <h5>See all</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 ${general.share_btns} `}
            onClick={() => setShareModal(false)}
          >
            <span className="mr-10"></span>
            <h5 className="text-blue-400">Cancel</h5>
          </button>
        </section>
      </section>
    </div>
  );
}
