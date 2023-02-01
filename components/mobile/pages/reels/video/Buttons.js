/* --------------------------------------- */
/*All clickables and information on video body*/
/* --------------------------------------- */

import React, { useEffect, useState } from "react";
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
} from "utils/icons";

// ..............................
function Buttons({ params }) {
  const {
    fs: fullScreen,
    sfs: setFullScreen,
    liked,
    setLiked,
    showOptModal,
    showCmtModal,
  } = params;

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

        <Comment showModal={showCmtModal} />

        <Message />

        <Options showModal={showOptModal} />

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
const Comment = ({ showModal, params, comment = "1000" }) => {
  //   const { liked, setLiked, likes } = params;

  return (
    <>
      <div className="mb-[30px] flex flex-col items-center">
        <button className={`pointernone`} onClick={() => showModal(true)}>
          <CommentIcon class="w-[30px] h-[30px] " color="white" />
        </button>

        <p className="text-base drop-shadow-[1px_1px_0px_rgba(0,0,0,0.4)]">
          {comment || "10,000"}
        </p>
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
const Options = ({ showModal }) => {
  //   ......
  return (
    <>
      {/* .......  three dots icon */}
      <div className="mb-[20px] flex flex-col items-center">
        <button className={`pointernone`} onClick={() => showModal(true)}>
          <ThreeDotsIcon class="w-[30px] h-[30px]" color="white" />
        </button>
      </div>
    </>
  );
};
