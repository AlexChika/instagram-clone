/* --------------------------------------- */
/*        All buttons and clickables       */
/* --------------------------------------- */
// File contains all buttons component on the reels page

import React, { useState, useEffect, useRef } from "react";
import IconHOC from "components/general/IconHOC";
import { useRouter } from "next/router";
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

const Buttons = ({
  fullScreen,
  fullScreen_a,
  dispatch: d,
  liked,
  liked_a,
  setShowCommentModal,
  setShowOptionsModal,
}) => {
  return (
    <div>
      <Like params={{ liked, d, liked_a }} />

      <Comment showModal={setShowCommentModal} />

      <Message />

      <Options showModal={setShowOptionsModal} />

      <Aspect params={{ fullScreen, fullScreen_a, d }} />
    </div>
  );
};

export default Buttons;

/* --------------------------------------- */
/*              like component             */
/* --------------------------------------- */

const Like = ({ params }) => {
  const { liked, liked_a, d } = params;
  const [animation, setAnimation] = useState("scale_sideways");

  let likes;

  function handleLiked() {
    liked_a(d);
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
const Comment = ({ showModal, params, comment = "1000" }) => {
  //   const { liked, setLiked, likes } = params;

  return (
    <div className="mt-[25px] hover:opacity-50 flex flex-col items-center">
      <button onClick={() => showModal(true)}>
        {IconHOC(CommentIcon, "none", "w-[25px] h-[25px]")}
      </button>

      <p className="text-sm drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
        {comment || "10,000"}
      </p>
    </div>
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
const Options = ({ showModal }) => {
  //   ......
  return (
    <div className="mt-[20px] hover:opacity-50 flex flex-col items-center">
      <button className={`pointernone`} onClick={() => showModal(true)}>
        {IconHOC(ThreeDotsIcon, "none", "w-[30px] h-[30px]")}
      </button>
    </div>
  );
};

/* --------------------------------------- */
/*              Aspect component          */
/* --------------------------------------- */
const Aspect = ({ params }) => {
  const { fullScreen, fullScreen_a, d } = params;
  const [animation, setAnimation] = useState("scale_sideways");

  function handleToggleAspectRatio() {
    fullScreen_a(d);
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
