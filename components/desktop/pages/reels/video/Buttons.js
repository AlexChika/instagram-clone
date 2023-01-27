/* --------------------------------------- */
/*        All buttons and clickables       */
/* --------------------------------------- */
// File contains all buttons component on the reels page and modals accompanying those buttons

import React, { useState, useEffect, useRef } from "react";
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
  FollowIcon,
  FollowingIcon,
  HeartIcon,
  HeartIconRed,
  LinkIcon,
  MessagingIcon,
  MessengerIcon,
  RightCurvedArrowIcon,
  ThreeDotsIcon,
  TwitterIcon,
  VerifiedIcon,
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
import Emoji from "components/general/Emoji";

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
    <div className="mt-[25px] hover:opacity-50 flex flex-col items-center">
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
      <div className="mt-[25px] hover:opacity-50 flex flex-col items-center">
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
      <div className="mt-[20px] hover:opacity-50 flex flex-col items-center">
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
      <div className="mt-[20px] hover:opacity-50 flex flex-col items-center">
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
    <div className="mt-[20px] hover:opacity-50 flex flex-col items-center">
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
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[5] transition-opacity flex justify-center items-center ${
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
  const [comment, setComment] = useState(""); //comment text
  const [emoji, setEmoji] = useState(""); //conmment emojis

  const [showEmoji, setShowEmoji] = useState(false); //emoji modal
  const modalRef = useRef(null); ///comment section modal
  const emojiModalRef = useRef(null); // emoji container ref
  const textBoxRef = useRef(null); //comment text box ref

  // funcs .......
  function closePopUp(e) {
    if (e.target !== e.currentTarget) return;
    setShowComment(false);
    setShowEmoji(false);
  }

  const handleComment = (e) => {
    e.preventDefault();
  };

  const handleInput = (e, text) => {
    if (e) return setComment(e.currentTarget.textContent.trim());
    if (text) return (textBoxRef.current.textContent = text);
  };

  function handleEmoji(e) {
    setShowEmoji(!showEmoji);

    const el = e.target; //clicked button (emoji icon btn)
    const rect = el.getBoundingClientRect(); //button rect respect to window
    const elleft = rect.left; //buttons left positioning
    const eltop = rect.y; //buttons top positioning
    const elright = elleft + rect.width; //buttons right positioning
    const sh = window.innerHeight;
    const sw = window.innerWidth;
    const h = 420; //modal height
    const w = 348; //modal width
    const freeRightWidth = sw - elright; //right screen space from emoji btn

    const modal = emojiModalRef.current;
    let left;
    let top;

    left = freeRightWidth > w ? elright : elright - w;
    top = eltop > h ? eltop - h : eltop - h / 2;

    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;
  }

  useEffect(() => {
    if (!emoji) return;
    let text = comment + emoji;
    handleInput(undefined, text);
    setComment(text);
    setEmoji("");
    console.log("i run just once", emoji);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emoji]);

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
        ref={modalRef}
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
        {true ? (
          <>
            <section
              onClick={(e) => {
                setShowEmoji(false);
              }}
              className="px-4 pb-[70px] h-[60vh] overflow-y-auto "
            >
              <div>
                <Comment wrapper={modalRef} />

                {/* replies wrapper*/}
                <div className="w-[85%] ml-auto mt-5">
                  <button className="font-bold text-sm opacity-50">
                    <span>__</span>
                    <span> view replies ({"6"})</span>
                  </button>

                  {/* replies */}
                  <div className="mt-2">
                    <Comment wrapper={modalRef} />
                    <Comment wrapper={modalRef} />
                    <Comment wrapper={modalRef} />
                    <Comment wrapper={modalRef} />
                    <Comment wrapper={modalRef} />
                  </div>
                </div>
              </div>
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
        <form
          onSubmit={handleComment}
          className="absolute bg-inherit bottom-0 z-[11] text-center w-full flex justify-around items-center p-3"
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
              ref={textBoxRef}
              contentEditable
              className="text-left max-w- overflow-y-auto w-[calc(100%-50px)] text-black min-h-[30px] max-h-[100px] outline-none font-normal"
            ></h5>

            <button
              disabled={!comment}
              className={`w-[50px] text-blue-600 ${
                comment ? "visible" : "invisible"
              }`}
              type="submit"
            >
              Post
            </button>

            <button onClick={handleEmoji} className="text-black pointernone">
              <EmojiIcon />
            </button>
          </div>
        </form>
      </section>

      {/* emoji box */}
      <div
        ref={emojiModalRef}
        className={`fixed w-[90%] max-w-[348px] h-[400px drop-shadow-2xl ${
          showEmoji ? "scale_sideways" : ""
        }`}
      >
        {showEmoji && <Emoji setEmoji={setEmoji} />}
      </div>
    </div>
  );
}

/* --------- A Comment Component --------- */
const Comment = ({ wrapper }) => {
  const userModalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [css, setCss] = useState("scale_sideways");

  let name = "alex_chika";

  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta tempore, accusamus debitis dolore minima distinctio reprehenderit in, quam aperiam error inventore. Dolores, ipsa eos!";

  function handleMouseOver(e) {
    // this aproach was taking because user pop up modal refused to be positioned relative to the browser window rather was positioned relative to the comment modal.

    // To achieve positioning , we get the rect of the comment modal relative to browser window and rect of the hovered element inside the comment modal and subtract the difference

    // Wrapper container
    let wrap = wrapper.current;
    let wrapRect = wrap.getBoundingClientRect();

    // hovered element
    // all positioning are relative to the comment modal
    let el = e.target; //element beign hovered....
    let elRect = el.getBoundingClientRect();
    let elTop = elRect.y - wrapRect.y; //elements top position from comment modal
    let left = elRect.left - wrapRect.left;
    let sh = window.innerHeight; // screen height
    let spaceLeft = sh - (elRect.y + elRect.height); //downward space or height from the bottom of hovered element to screen bottom

    // pop up modal position
    const popup = userModalRef.current;
    let h = 360; // modals total height
    let top; //modals css top position

    let aboveEl = elTop - h; //positioned above hovered el
    let belowEl = elTop + elRect.height; //positioned below

    top = spaceLeft > h ? belowEl : aboveEl;
    // setShowModal(true);
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  }

  useEffect(() => {
    setCss("scale_sideways");

    setTimeout(() => {
      setCss("");
    }, [400]);
  }, [liked]);

  /* ----------- Comment wrapper ----------- */
  return (
    <article className={`flex mt-3 ${video.comment_wrapper}`}>
      {/* image container*/}
      <Link href="/profile" passHref>
        <a
          onMouseOver={handleMouseOver}
          className={`w-8 h-8 max-w-[32px] rounded-full cursor-pointer relative mr-2 ${video.user_image_name}`}
        >
          <Image
            className="rounded-full"
            layout="fill"
            src="/alex.png"
            alt="user profile image"
          />
        </a>
      </Link>

      {/* name date and comment */}
      <div className="-mt-2 flex-1 px-2">
        {/* --------- Name and date -------- */}
        <div className="flex">
          <h5
            onMouseOver={handleMouseOver}
            className={`mr-2 font-bold text-neutral-500 dark:text-white flex items-center ${video.user_image_name}`}
          >
            <span> {name} &nbsp;</span>
            {true && (
              <span>
                <VerifiedIcon class="w-[15px] h-[15px]" />
              </span>
            )}
          </h5>
          <span className="opacity-50 mr-2">{"3w"}</span>
        </div>

        {/* comment text */}
        <h5 className="text-sm">{text}</h5>
      </div>

      {/* like button  */}
      <button
        onClick={() => setLiked(!liked)}
        className={`w-8 flex flex-col items-center ${css} `}
      >
        {liked
          ? IconHOC(HeartIconRed, "none", "h-[20px] w-[20px] text-[red]")
          : IconHOC(HeartIcon, "none", "h-[20px] w-[20px] text-neutral-500 ")}

        <span className="text-[12px]">365</span>
      </button>

      {/* -------- user detail card modal ------- */}
      <div
        ref={userModalRef}
        className={`absolute flex justify-center items-center z-[12] max-w-[360px] w-[90%] h-[360px] p-2 ${video.user_detail_modal}`}
      >
        {/* ------------ contente here ------------ */}
        <div className="w-full h-full drop-shadow-2xl rounded-xl bg-white dark:bg-black py-3">
          {/* users dp and name */}
          <div className="flex items-center px-3 py-2">
            {/* image container*/}
            <Link href="/profile" passHref>
              <a
                onMouseOver={handleMouseOver}
                className={`w-14 h-14 max-w-[56px] rounded-full cursor-pointer relative mr-2 ${video.user_image_name}`}
              >
                <Image
                  className="rounded-full"
                  layout="fill"
                  src="/alex.png"
                  alt="user profile image"
                />
              </a>
            </Link>

            {/* users name and username */}
            <div>
              <p className="font-extrabold flex items-center">
                <span>Alex_stars &nbsp;</span>

                {true && (
                  <span>
                    <VerifiedIcon class="w-[20px] h-[20px]" />
                  </span>
                )}
              </p>
              <p className="text-neutral-500 text -mt-1 dark:text-white font-semibold">
                Alex Chika
              </p>
            </div>
          </div>

          {/* counters */}
          <div className="flex justify-between mt-2 py-2 px-8">
            <div className="flex flex-col items-center">
              <span className="font-bold">{"445"}</span>
              <span className="text-sm">Post</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{"1600"}</span>
              <span className="text-sm">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">{"500"}</span>
              <span className="text-sm">Following</span>
            </div>
          </div>

          {/* Recent Posts Images */}
          <div className="flex justify-between mt-2">
            <Link href={"/reels"} passHref>
              <a className="w-[120px] h-[120px] relative">
                <Image layout="fill" alt="post name" src="/alex.png" />
              </a>
            </Link>
            <Link href={"/reels"} passHref>
              <a className="w-[120px] h-[120px] relative">
                <Image layout="fill" alt="post name" src="/alex.png" />
              </a>
            </Link>
            <Link href={"/reels"} passHref>
              <a className="w-[120px] h-[120px] relative">
                <Image layout="fill" alt="post name" src="/alex.png" />
              </a>
            </Link>
          </div>

          {/* follow button */}
          <button className="pointernone flex justify-center items-center w-[90%] mt-3 mx-auto text-white p-[4px] bg-blue-500 rounded-xl">
            <FollowIcon /> &nbsp;
            <span className="font-bold">Follow</span>
          </button>
        </div>
      </div>
    </article>
  );
};
