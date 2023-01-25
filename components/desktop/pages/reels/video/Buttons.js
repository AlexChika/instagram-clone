import React, { useState, useEffect } from "react";
import IconHOC from "components/general/IconHOC";
import video from "./video.module.css";
import { useRouter } from "next/router";
import { App } from "pages/_app";
import Link from "next/link";
import {
  AspectFullIcon,
  AspectHalfIcon,
  CommentIcon,
  EmailIcon,
  EmojiIcon,
  FacebookIcon,
  HeartIcon,
  HeartIconRed,
  LinkIcon,
  MessagingIcon,
  MessengerIcon,
  RightCurvedArrowIcon,
  ThreeDotsIcon,
  TwitterIcon,
  WhatsappIcon,
} from "utils/icons";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import Image from "next/image";
import Spinner from "components/general/Spinner";

const Buttons = ({ params }) => {
  const { fullScreen, setFullScreen } = params;
  return (
    <div>
      <Like />

      <Comments />

      <Message />

      <Options />

      <Aspect params={{ fullScreen, setFullScreen }} />
    </div>
  );
};

export default Buttons;

/* --------------------------------------- */
/*              like component             */
/* --------------------------------------- */

const Like = ({ params }) => {
  const [liked, setLiked] = useState(false);
  const [animation, setAnimation] = useState("scale_sideways");

  let likes;

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
    <div className="mt-[25px] flex flex-col items-center">
      {liked ? (
        <button className={` ${animation}`} onClick={handleLiked}>
          {IconHOC(HeartIconRed, "none", "w-[25px] h-[25px] text-red-600")}
        </button>
      ) : (
        <button className={`${animation}`} onClick={handleLiked}>
          {IconHOC(HeartIcon, "none", "w-[25px] h-[25px]")}
        </button>
      )}
      <p className="text-sm">{likes || "100k"}</p>
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
      <div className="mt-[25px] flex flex-col items-center">
        <button onClick={() => setShowComment(true)}>
          {IconHOC(CommentIcon, "none", "w-[25px] h-[25px]")}
        </button>

        <p className="text-sm drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
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
      <div className="mt-[20px] flex flex-col items-center">
        <button className={`pointernone`} onClick={handleNavigate}>
          {IconHOC(MessagingIcon, "none", "w-[25px] h-[25px]")}
        </button>
      </div>
    </>
  );
};

/* --------------------------------------- */
/*              Options component          */
/* --------------------------------------- */
const Options = () => {
  const { notify } = App();
  const [showModal, setShowModal] = useState(false);
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
      {/* .......  three dots icon */}
      <div className="mt-[20px] flex flex-col items-center">
        <button className={`pointernone`} onClick={() => setShowModal(true)}>
          {IconHOC(ThreeDotsIcon, "none", "w-[30px] h-[30px]")}
        </button>
      </div>

      {/* ----------- options overlay----------- */}
      {/* this is the first overlay of buttons like share to,copylink,cancel etc */}
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setShowModal(false);
        }}
        className={`absolute bg-[#000000cc] top-0 left-0 bottom-0 right-0 z-[3] transition-opacity flex justify-center items-center  ${
          showModal ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      >
        {/* modal starts here.... */}
        <div
          className={`flex flex-col items-center bg-white w-[250px] sm:w-[350px] text-black rounded-xl overflow-hidden ${
            showModal ? "scale_down" : ""
          }`}
        >
          <h4 className={`text-red-600 select-none ${video.options_btns}`}>
            Take Action
          </h4>

          <Link href="/post">
            <a className={video.options_btns}>Go to post</a>
          </Link>

          <button
            onClick={() => {
              setShareModal(true);
            }}
            className={video.options_btns}
          >
            Share to...
          </button>

          <button onClick={copyLink} className={video.options_btns}>
            Copy link
          </button>

          <button
            onClick={() => setShowModal(false)}
            className={video.options_btns}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* ---------- shareModal 0verlay --------- */}
      {/* this is the second overlay when "share to" button is clicked */}
      <ShareModal params={{ shareModal, setShareModal, setShowModal }} />
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
    <div className="mt-[20px] flex flex-col items-center">
      {fullScreen ? (
        <button className={`${animation}`} onClick={handleToggleAspectRatio}>
          {IconHOC(AspectHalfIcon, "none", "w-[25px] h-[25px]")}
        </button>
      ) : (
        <button className={`${animation}`} onClick={handleToggleAspectRatio}>
          {IconHOC(AspectFullIcon, "none", "w-[25px] h-[25px]")}
        </button>
      )}
    </div>
  );
};

/* --------------------------------------- */
/*              Sub Components             */
/* --------------------------------------- */

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
      className={`fixed blue top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[5] transition-opacity flex justify-center items-center ${
        shareModal ? "opacity-1 visible" : "opacity-0 invisible"
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
            <button className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(FacebookIcon, "none")}</span>
              <h5>Share to Facebook</h5>
            </button>
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={url}
            appId={"851802459409408"}
            blankTarget={true}
            style={{ width: "100%" }}
          >
            <button className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(MessengerIcon, "none")}</span>
              <h5>Share to Messenger</h5>
            </button>
          </FacebookMessengerShareButton>

          <WhatsappShareButton
            style={{ width: "100%" }}
            url={url}
            title={title}
            blankTarget={true}
            separator=":: "
          >
            <button className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(WhatsappIcon, "none")}</span>
              <h5>Share to WhatsApp</h5>
            </button>
          </WhatsappShareButton>

          <TwitterShareButton
            style={{ width: "100%" }}
            url="https://insta-cloned.vercel.app/reels"
            hashtags={["InstaCloned", "Instagram", "Tech"]}
            title="post tilte here"
            blankTarget={true}
          >
            <button className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(TwitterIcon, "none")}</span>
              <h5>Share to Twitter</h5>
            </button>
          </TwitterShareButton>

          <EmailShareButton
            url={url}
            subject={title}
            body={body}
            blankTarget={true}
            style={{ width: "100%" }}
          >
            <button className={`dark:hover:bg-gray-600 ${video.share_btns} `}>
              <span className="mr-5">{IconHOC(EmailIcon, "none")}</span>
              <h5>Share via Email</h5>
            </button>
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
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[5] transition-all flex justify-center items-center ${
        showComment ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* .....content starts...*/}
      <section
        className={`w-[90%] max-w-[600px] dark:bg-[#414040] bg-white text-black dark:text-white rounded-xl relative ${
          showComment ? "scale_down" : ""
        }`}
      >
        {/* -------------- title here ------------- */}
        <h3 className="border-b-2 dark:border-b-gray-600 border-b-gray-100 italic p-2 relative text-center">
          <span className="text-center font-semibold">Comments</span>
          <button
            className="text-xl font-bold px-2 absolute right-[20px]"
            onClick={() => setShowComment(false)}
          >
            X
          </button>
        </h3>
        {/* ----------- comments wrapper ---------- */}
        {false ? (
          <>
            <section className="px-4 pb-[60px] h-[60vh] overflow-y-auto ">
              helloooo
            </section>
          </>
        ) : (
          <>
            <div className="h-[60vh] flex justify-center items-center">
              <Spinner />
            </div>
          </>
        )}
        {/* ------------- Comment box ------------- */}
        {/* bg-neutral-200 dark:bg-neutral-500 */}
        <form
          onSubmit={handleComment}
          className="absolute bottom-0 z-[11] text-center w-full flex justify-around items-center p-3"
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
          <div className="bg-white py-1 px-3 rounded-3xl w-[calc(100%-50px)] flex justify-around border-neutral-300 border-2">
            <h5
              onInput={handleInput}
              contentEditable
              className="text-left max-w- overflow-y-auto w-[calc(100%-50px)] text-black min-h-[30px] max-h-[100px] outline-none font-normal"
            ></h5>

            <button
              disabled={comment}
              className={`w-[50px] text-blue-600 ${
                comment ? "visible" : "invisible"
              }`}
              type="submit"
            >
              Post
            </button>

            <button className="text-black">
              <EmojiIcon />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

// {/* <section className="px-4 pb-[60px] h-[65vh] overflow-y-auto">
//   {/* comments */}
//   <div>
//     <Comment />

//     {/* replies wrapper*/}
//     <div className="w-[85%] ml-auto mt-5">
//       <button>
//         <span>__</span>
//         <span> view replies ({"6"})</span>
//       </button>

//       {/* replies */}
//       <div>
//         <Comment />
//         <Comment />
//       </div>
//     </div>
//   </div>
// </section>; */}
