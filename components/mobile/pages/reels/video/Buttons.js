/* --------------------------------------- */
/*All clickables and information on video body*/
/* --------------------------------------- */

import React, { Component, useEffect, useState } from "react";
import IconHOC from "../../../../general/IconHOC";
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
} from "../../../../../utils/icons";
import Image from "next/image";
import Link from "next/link";

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
  const [css, setCss] = useState("like__scale");

  function handleLiked() {
    setLiked(!liked);
    // .... maybe call firebase here
  }

  useEffect(() => {
    setCss("like__scale");

    setTimeout(() => {
      setCss("");
    }, [400]);
  }, [liked]);

  return (
    <div className="mb-[30px] flex flex-col items-center">
      {liked ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          onClick={handleLiked}
        >
          <HeartIconRed class="w-[30px] h-[30px] " color="red" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          onClick={handleLiked}
        >
          <HeartIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      )}
      <p className="text-base">{likes || "100k"}</p>
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
        <button
          className={`${video.pointernone} `}
          onClick={() => setShowComment(true)}
        >
          <CommentIcon class="w-[30px] h-[30px] " color="white" />
        </button>

        <p className="text-base">{comment || "10,000"}</p>
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
        <button className={`${video.pointernone} `} onClick={handleNavigate}>
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
  const [css, setCss] = useState("like__scale");

  function handleToggleAspectRatio() {
    setFullScreen(!fullScreen);
  }

  useEffect(() => {
    setCss("like__scale");

    setTimeout(() => {
      setCss("");
    }, [400]);
  }, [fullScreen]);

  return (
    <div className="mb-[20px] flex flex-col items-center">
      {fullScreen ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          onClick={handleToggleAspectRatio}
        >
          <AspectHalfIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
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
  let postLink = "post link here >>>";

  //   ......
  return (
    <>
      <div className="mb-[20px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          onClick={() => setShowModal(true)}
        >
          <ThreeDotsIcon class="w-[30px] h-[30px]" color="white" />
        </button>
      </div>

      {/* ----------- options overlay ----------- */}
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          setShowModal(false);
        }}
        className={`absolute bg-[#000000cc] top-0 left-0 bottom-0 right-0 z-[3] transition-opacity flex justify-center items-center  ${
          showModal ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col items-center bg-white w-[250px] text-black rounded-xl overflow-hidden">
          <h4 className={`text-red-600 select-none ${video.options_btns}`}>
            Take Action
          </h4>

          <Link href="/post">
            <a className={video.options_btns}>Go to post</a>
          </Link>

          <button className={video.options_btns}>Share to</button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(postLink);
            }}
            className={video.options_btns}
          >
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
    </>
  );
};

/* ---- Name component/ reels act name --- */
const Name = () => {
  let handle = "Alex chika";
  return (
    <div className="flex items-center sticky z-[3]">
      <div className="h-[35px] w-[35px] relative mr-2">
        <Link href="/profile" passHref>
          <a>
            <Image
              layout="fill"
              src={"/alex.png"}
              alt={`${handle} profile image`}
              className="rounded-full"
            />
          </a>
        </Link>
      </div>

      <p className={`mr-2 ${video.bold}`}>{handle}</p>

      <p className="block h-[6px] w-[6px] rounded-full bg-white mr-2"></p>

      <button
        onClick={() => console.log("I was clicked")}
        className={`mr-2 ${video.pointernone}`}
      >
        <p className={video.bold}>Follow</p>
      </button>
    </div>
  );
};

/* ------- video details/ captions ------- */
const Captions = () => {
  const [seeMore, setSeeMore] = useState(false);

  let handle = "Alex chika";
  let caption =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nulla. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, nulla. ";

  return (
    <div className="mt-3">
      {/* ------------- caption text ------------ */}
      <div className="max-h-[250px] overflow-y-auto  sticky z-[3]">
        {seeMore ? (
          <>
            <p>{caption}</p>
          </>
        ) : (
          <>
            <p>
              {caption.substr(0, 25)}{" "}
              <button onClick={() => setSeeMore(true)} className="opacity-50">
                ...more
              </button>
            </p>
          </>
        )}
      </div>

      {/* --------- original audio texts -------- */}
      <div className="flex items-center my-3 sticky z-[3]">
        <span className="mr-2">
          <MusicIcon color={"#ffffff"} />
        </span>

        <p className="mr-2">{handle}</p>

        <p className="h-[3px] w-[3px] rounded-full bg-white mr-2"></p>

        <p>Original audio</p>
      </div>

      {/* ------------- overlay wrap ------------ */}
      <div
        onClick={() => setSeeMore(false)}
        className={`absolute bg-[#000000cc] bg-opacity-50 top-0 left-0 bottom-0 right-0 z-[0] transition-opacity ${
          seeMore ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
};

/* ------- A comments sub component ------- */
function CommentSection({ showComment, setShowComment }) {
  function closePopUp(e) {
    if (e.target !== e.currentTarget) return;
    setShowComment(false);
  }

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
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-[#414040] bg-white text-black dark:text-white absolute w-full bottom-0 py-4 pb-[44px] rounded-t-xl transition-transform ${
          showComment ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        {/* ----------- dashed gray line ---------- */}
        <span
          aria-hidden
          className="block mx-auto w-12 h-1 bg-slate-200 dark:bg-gray-800"
        ></span>

        {/* -------------- title here ------------- */}
        <h3 className="text-center mt-3 border-b-2 border-b-gray-600 p-2 italic font-semibold">
          Comments
        </h3>

        {/* ----------- comments wrapper ---------- */}
        <section className="px-4 py-3 h-[65vh] overflow-y-auto">
          {/* comments */}
          <div>
            <Comment />

            {/* replies wrapper*/}
            <div className="w-[85%] ml-auto mt-5">
              <button className={`${video.pointernone}`}>
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

        {/* ------------- Comment box ------------- */}
        <form className="dark:bg-gray-100 text-center w-full flex">
          <div className="w-8 h-8 max-w-[32px] rounded-full cursor-pointer relative flex-[0.15]">
            <Image
              className="rounded-full"
              layout="fill"
              src="/alex.png"
              alt="user profile image"
            />
          </div>
          <input type="text" />
        </form>
      </section>
    </div>
  );
}

/* --------- A Comment Component --------- */
const Comment = () => {
  const [liked, setLiked] = useState(false);
  const [css, setCss] = useState("like__scale");

  let text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta tempore, accusamus debitis dolore minima distinctio reprehenderit in, quam aperiam error inventore. Dolores, ipsa eos!";

  useEffect(() => {
    setCss("like__scale");

    setTimeout(() => {
      setCss("");
    }, [400]);
  }, [liked]);

  return (
    <article className="flex justify-between items-start mt-4">
      {/* image container*/}
      <Link href="/profile" passHref>
        <a className="w-8 h-8 max-w-[32px] rounded-full cursor-pointer relative flex-[0.15]">
          <Image
            className="rounded-full"
            layout="fill"
            src="/alex.png"
            alt="user profile image"
          />
        </a>
      </Link>

      {/* comment texts */}
      <div className="flex-[0.8] px-2">
        <h5 className="text-sm -mt-2">
          <span className="text-base font-medium">{"user's name"} &nbsp;</span>
          {text}
        </h5>

        {/* comment details */}
        <div className="flex text-sm opacity-50 mt-2">
          <span className="mr-3">7w</span>
          <span className="mr-3">100 likes</span>
          <button className="font-medium" data-role="button">
            reply
          </button>
        </div>
      </div>

      {/* like button  */}
      <button
        data-role="button"
        onClick={() => setLiked(!liked)}
        className={`flex-[0.07] ${video[css]} ${video.pointernone}`}
      >
        {liked
          ? IconHOC(HeartIconRed, "none", "h-[15px] w-[15px] text-[red]")
          : IconHOC(HeartIcon, "none", "h-[15px] w-[15px] ")}
      </button>
    </article>
  );
};
