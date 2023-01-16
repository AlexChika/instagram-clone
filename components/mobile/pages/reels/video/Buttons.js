/* --------------------------------------- */
/*All clickables and information on video body*/
/* --------------------------------------- */

import React, { useEffect, useState } from "react";
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
} from "../../../../../utils/icons";

function Buttons({ params }) {
  const { fs: fullScreen, sfs: setFullScreen, liked, setLiked } = params;

  //   function
  // h-[60%]

  //   ......
  return (
    <div
      className={`absolute bottom-0 right-0 left-0  flex justify-between ${video.buttons__wrapper}`}
    >
      {/* video - details - wrap */}
      <div className="flex-[0.7] self-end"></div>

      {/* buttons - wrap*/}
      <div className="flex-[0.3] max-w-[65px] self-end flex flex-col">
        <Like params={{ liked, setLiked }} />

        <Comment />

        <Message />

        <Options />

        <Aspect params={{ fullScreen, setFullScreen }} />
      </div>
    </div>
  );
}

export default Buttons;
// -webkit-user-select: none;
// word-break: break-word;
// cursor: pointer;
// word-wrap: break-word;
// data-role="button"

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
    <div className="w-100 mb-[25px] flex flex-col items-center">
      {liked ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleLiked}
        >
          <HeartIconRed class="w-[30px] h-[30px] shadow-sm" color="tomato" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleLiked}
        >
          <HeartIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
        </button>
      )}
      <span className="shadow-sm text-base font-light">{likes || "100k"}</span>
    </div>
  );
};

/* --------------------------------------- */
/*              Commnet component          */
/* --------------------------------------- */
const Comment = ({ params, comment = "1000" }) => {
  //   const { liked, setLiked, likes } = params;
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <div className="w-100 mb-[25px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          //   onClick={handleLiked}
        >
          <CommentIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
        </button>

        <span className="shadow-sm text-base font-light">
          {comment || "10,000"}
        </span>
      </div>
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
      <div className="w-100 mb-[15px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          onClick={handleNavigate}
        >
          <MessagingIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
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
    <div className="w-100 mb-[15px] flex flex-col items-center">
      {fullScreen ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleToggleAspectRatio}
        >
          <AspectFullIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleToggleAspectRatio}
        >
          <AspectHalfIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
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
      <div className="w-100 mb-[15px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          onClick={() => setShowModal(true)}
        >
          <ThreeDotsIcon class="w-[30px] h-[30px] shadow-sm" color="white" />
        </button>
      </div>

      {/* <></> maybe modal here and overlay*/}
    </>
  );
};
