/* --------------------------------------- */
/*              Options component          */
// used at the home page and reel pages

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
  CloseIcon,
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
import { useRouter } from "next/router";

/*
Parameter Description
1 postData : a data object containing info about the particular post being clicked on when the options button is clicked

2 showModal: a state that shows or hodes the option modal

3 setShowModal: a set state function that sets the state of the option modal

4 reels: a boolean that determines if this options modal is used in a reels page. this is to hide some buttons in the modal that are irrelevant in the reels page

4 current post: a boolean that hides the go to post button whenever we are in an individual post page since this moda is used also in the individual post page
*/

/* --------------------------------------- */
const OptionsModal = ({
  postData = {},
  showModal,
  setShowModal,
  reels = false,
  currentPost = false,
}) => {
  const { notify } = App();
  const router = useRouter();
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

  function goToPost() {
    // post data or current post could be universal obj accessible to headers
    // const { id } = postData;
    let _id = "12345"; //temp id
    router.push(`/p/${_id}`);
  }

  //   ......
  return (
    <>
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
          className={`flex flex-col items-center  bg-white dark:bg-neutral-800 text-black dark:text-white min-w-[250px] w-[80%] max-w-[360px] rounded-xl overflow-hidden ${
            showModal ? "scale_down" : ""
          }`}
        >
          <h4
            className={`text-red-500 select-none font-bold dark:border-neutral-700 border-gray-100 w-full text-center h-full block py-3 border-b border-0`}
          >
            Take Action
          </h4>

          {!reels && (
            <>
              <button className="w-full text-center font-bold">
                <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b border-0 text-red-500">
                  UnFollow
                </span>
              </button>

              <button className="w-full text-center">
                <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b border-0">
                  Add to favourites
                </span>
              </button>
            </>
          )}

          {!currentPost && (
            <button onClick={goToPost} className="w-full text-center">
              <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b border-0">
                Go to post
              </span>
            </button>
          )}

          <button
            onClick={() => {
              setShareModal(true);
            }}
            className={"w-full text-center"}
          >
            <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b border-0">
              Share to...
            </span>
          </button>

          <button onClick={copyLink} className="w-full text-center">
            <span className="dark:border-neutral-700 border-gray-100 h-full block py-3 border-b border-0">
              Copy link
            </span>
          </button>

          <button
            onClick={() => setShowModal(false)}
            className="w-full text-center"
          >
            <span className="h-full block py-3">Cancel</span>
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
        className={`absolute bg-white dark:bg-neutral-800 text-black dark:text-white min-w-[250px] w-[80%] max-w-[360px] rounded-xl ${
          shareModal ? "scale_down" : ""
        }`}
      >
        {/* -------------- title here ------------- */}
        <h3 className="border-b-2 dark:border-b-gray-600 border-b-gray-100 italic p-2 relative text-center">
          <span className="text-center font-semibold">Share to...</span>
          <button
            className="font-bold px-2 absolute right-[20px]"
            onClick={() => {
              setShareModal(false);
              setShowModal(false);
            }}
          >
            {IconHOC(CloseIcon, "none", "w-5 h-5")}
          </button>
        </h3>

        {/* ----------- buttons wrapper ---------- */}
        <section className="pb-3 h-[50vh] overflow-y-auto">
          <Link href="/messages" passHref>
            <a
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
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
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
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
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
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
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
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
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
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
              className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50`}
            >
              <span className="mr-5">{IconHOC(EmailIcon, "none")}</span>
              <h5>Share via Email</h5>
            </span>
          </EmailShareButton>

          <button
            className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
            onClick={copyLink}
          >
            <span className="mr-5">{IconHOC(LinkIcon, "none")}</span>
            <h5>Copy link</h5>
          </button>

          <button
            className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
            onClick={seeAll}
          >
            <span className="mr-5">
              {IconHOC(RightCurvedArrowIcon, "none")}
            </span>
            <h5>See all</h5>
          </button>

          <button
            className={`dark:hover:bg-black w-full px-4 py-3 flex items-center mt-3 hover:bg-gray-50 `}
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
