/* --------------------------------------- */
/*All clickables and information on video body*/
/* --------------------------------------- */

import React, { useEffect, useState } from "react";
import { App } from "pages/_app";
import IconHOC from "components/general/IconHOC";
import Spinner from "components/general/Spinner";
import Name from "components/general/reels/Name";
import Captions from "components/general/reels/Captions";
import { useRouter } from "next/router";
import video from "./video.module.css";
import {
  HeartIcon,
  HeartIconRed,
  CommentIcon,
  MessagingIcon,
  AspectFullIcon,
  AspectHalfIcon,
  ThreeDotsIcon,
  MusicIcon,
  FacebookIcon,
  MessengerIcon,
  WhatsappIcon,
  TwitterIcon,
  EmailIcon,
  LinkIcon,
  RightCurvedArrowIcon,
} from "utils/icons";
import Image from "next/image";
import Link from "next/link";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import Comment from "../../general/Comment";

function Buttons({ params }) {
  const { fs: fullScreen, sfs: setFullScreen, liked, setLiked } = params;

  //   ......
  return (
    <div
      className={`absolute bottom-0 top-0 right-0 left-0 flex justify-between text-white ${video.buttons__wrapper}`}
      data-role="vid_overlay"
    >
      {/* video - details - wrap */}
      <div data-role="vid_overlay" className={`flex-[0.8] pl-3 self-end`}>
        <Name />

        <Captions />
      </div>

      {/* buttons - wrap*/}
      <div
        data-role="vid_overlay"
        className={`flex-[0.2] max-w-[65px] self-end flex flex-col`}
      >
        <Like params={{ liked, setLiked }} />

        <Comments />

        <Message />

        <Options />

        <Aspect params={{ fullScreen, setFullScreen }} />
      </div>
    </div>
  );
}

export default Buttons;

/* --------------------------------------- */
/*              like component             */
/* --------------------------------------- */
const Like = ({ params }) => {
  const { liked, setLiked, likes } = params;
  const [animation, setAnimation] = useState("scale_sideways");

  function handleLiked() {
    setLiked(!liked);
    // .... maybe call firebase here
  }

  useEffect(() => {
    setAnimation("scale_sideways");

    setTimeout(() => {
      setAnimation("");
    }, [400]);
  }, [liked]);

  return (
    <div className="mb-[30px] flex flex-col items-center">
      {liked ? (
        <button className={`pointernone ${animation}`} onClick={handleLiked}>
          <HeartIconRed class="w-[30px] h-[30px] " color="red" />
        </button>
      ) : (
        <button className={`pointernone ${animation}`} onClick={handleLiked}>
          <HeartIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      )}
      <p className="text-base drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
        {likes || "100k"}
      </p>
    </div>
  );
};

/* --------------------------------------- */
/*              Comment component          */
/* --------------------------------------- */
const Comments = ({ params, comment = "1000" }) => {
  //   const { liked, setLiked, likes } = params;
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <div className="mb-[30px] flex flex-col items-center">
        <button className={`pointernone`} onClick={() => setShowComment(true)}>
          <CommentIcon class="w-[30px] h-[30px] " color="white" />
        </button>

        <p className="text-base drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          {comment || "10,000"}
        </p>
      </div>

      {/* ----------- comment section ----------- */}
      <CommentSection
        setShowComment={setShowComment}
        showComment={showComment}
      />
    </>
  );
};

/* --------------------------------------- */
/*              Message component          */
/* --------------------------------------- */
const Message = () => {
  const router = useRouter();
  function handleNavigate() {
    router.push("/messages");
  }

  //   ......
  return (
    <>
      <div className="mb-[20px] flex flex-col items-center">
        <button className={`pointernone`} onClick={handleNavigate}>
          <MessagingIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      </div>
    </>
  );
};

/* --------------------------------------- */
/*              Aspect component          */
/* --------------------------------------- */
const Aspect = ({ params }) => {
  const { fullScreen, setFullScreen } = params;
  const [animation, setAnimation] = useState("scale_sideways");

  function handleToggleAspectRatio() {
    setFullScreen(!fullScreen);
  }

  useEffect(() => {
    setAnimation("scale_sideways");

    setTimeout(() => {
      setAnimation("");
    }, [400]);
  }, [fullScreen]);

  return (
    <div className="mb-[20px] flex flex-col items-center">
      {fullScreen ? (
        <button
          className={`pointernone ${animation}`}
          onClick={handleToggleAspectRatio}
        >
          <AspectHalfIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      ) : (
        <button
          className={`pointernone ${animation}`}
          onClick={handleToggleAspectRatio}
        >
          <AspectFullIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      )}
    </div>
  );
};

/* --------------------------------------- */
/*              Options component          */
/* --------------------------------------- */
const Options = () => {
  const [showModal, setShowModal] = useState(false);

  //   ......
  return (
    <>
      {/* .......  three dots icon */}
      <div className="mb-[20px] flex flex-col items-center">
        <button className={`pointernone`} onClick={() => setShowModal(true)}>
          <ThreeDotsIcon class="w-[30px] h-[30px]" color="white" />
        </button>
      </div>

      {/* ----------- options overlay----------- */}
      {/* this is the first overlay of buttons like share to,copylink,cancel etc */}
      <OptionsModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

/* --------- An options sub Modal -------- */
function OptionsModal({ showModal, setShowModal, children }) {
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
        className={`fixed bg-[#000000cc] top-0 left-0 bottom-0 right-0 z-[3] transition-opacity flex justify-center items-center  ${
          showModal ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      >
        {/* modal starts here.... */}
        <div
          className={`flex flex-col items-center bg-white dark:bg-neutral-800 text-black dark:text-white min-w-[250px] w-[80%] m8x-w-[360px] rounded-xl overflow-hidden ${
            showModal ? "scale_down" : ""
          }`}
        >
          <h4
            className={`text-red-500 select-none border-b-2 dark:border-neutral-700 border-gray-100 font-bold py-3 text-center w-full`}
          >
            Take Action
          </h4>

          {children}

          <Link href="/post">
            <a className={video.options_btns}>
              <span className="dark:border-neutral-700 border-gray-100">
                Go to post
              </span>
            </a>
          </Link>

          <button
            className={video.options_btns}
            onClick={() => {
              setShareModal(true);
            }}
          >
            <span className="dark:border-neutral-700 border-gray-100">
              Share to...
            </span>
          </button>

          <button onClick={copyLink} className={video.options_btns}>
            <span className="dark:border-neutral-700 border-gray-100">
              Copy link
            </span>
          </button>

          <button
            onClick={() => setShowModal(false)}
            className={video.options_btns}
          >
            <span className="dark:border-neutral-700 border-gray-100">
              Cancel
            </span>
          </button>
        </div>
      </div>

      <ShareModal params={{ shareModal, setShareModal, setShowModal }} />
    </>
  );
}

/* ------- A comments sub component ------- */
function CommentSection({ showComment, setShowComment }) {
  const [comment, setComment] = useState("");
  function closePopUp(e) {
    if (e.target !== e.currentTarget) return;
    setShowComment(false);
  }

  const handleComment = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setComment(e.currentTarget.textContent.trim());
  };

  // ,.......
  return (
    <div
      onClick={closePopUp}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[5] transition-all ${
        showComment ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* .....content starts...*/}
      <section
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-neutral-800 bg-white text-black dark:text-white absolute w-full bottom-0 py-4 pb-[44px] rounded-t-xl transition-transform ${
          showComment ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        {/* ----------- dashed gray line ---------- */}
        <span
          aria-hidden
          className="block mx-auto w-12 h-1 bg-slate-200 dark:bg-neutral-700"
        ></span>

        {/* -------------- title here ------------- */}
        <h3 className="text-center mt-3 border-b-2 dark:border-b-neutral-700 border-b-gray-100 p-2 italic font-semibold">
          Comments
        </h3>

        {/* ----------- comments wrapper ---------- */}
        {true ? (
          <>
            <section className="px-4 pb-[60px] h-[65vh] overflow-y-auto">
              {/* comments */}
              <div>
                <Comment />

                {/* replies wrapper*/}
                <div className="w-[85%] ml-auto mt-5">
                  <button>
                    <span>__</span>
                    <span> view replies ({"6"})</span>
                  </button>

                  {/* replies */}
                  <div>
                    <Comment />
                    <Comment />
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="h-[65vh] flex justify-center items-center">
              <Spinner />
            </div>
          </>
        )}

        {/* ------------- Comment box ------------- */}
        <form
          onSubmit={handleComment}
          className="dark:bg-neutral-800 border-y dark:border-neutral-700 fixed bottom-0 z-[11] bg-neutral-100 text-center w-full flex justify-around items-center p-2"
        >
          {/* image icon */}
          <div className="w-8 h-8 max-w-[32px] rounded-full cursor-pointer relative">
            <Image
              className="rounded-full"
              layout="fill"
              src="/alex.png"
              alt="user profile image"
            />
          </div>

          {/* input container */}
          <div className="bg-white dark:bg-black py-1 px-3 rounded-3xl w-[calc(100%-50px)] flex justify-around">
            <h5
              onInput={handleInput}
              contentEditable
              className="text-left max-w- overflow-y-auto w-[calc(100%-50px)]  min-h-[30px] max-h-[100px] outline-none font-normal"
            ></h5>
            <button
              disabled={comment}
              className={` w-[50px] ${
                comment ? "text-blue-600" : "text-blue-200"
              }`}
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

/* ------- An OptionsModal (...) sub component ------- */
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
        <section className="max-h-[71vh] overflow-y-auto">
          <Link href="/messages" passHref>
            <a className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
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
            <span className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(EmailIcon, "none")}</span>
              <h5>Share via Email</h5>
            </span>
          </EmailShareButton>

          <button
            className={`dark:hover:bg-gray-600 ${video.share_btns} `}
            onClick={copyLink}
          >
            <span className="mr-5">{IconHOC(LinkIcon, "none")}</span>
            <h5>Copy link</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 ${video.share_btns} `}
            onClick={seeAll}
          >
            <span className="mr-5">
              {IconHOC(RightCurvedArrowIcon, "none")}
            </span>
            <h5>See all</h5>
          </button>

          <button
            className={`dark:hover:bg-gray-600 ${video.share_btns} `}
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

export { OptionsModal };
