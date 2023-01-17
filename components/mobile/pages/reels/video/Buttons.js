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
    <div className={`absolute bottom-0 right-0 left-0  flex justify-between`}>
      {/* video - details - wrap */}
      <div className="flex-[0.7] self-end"></div>

      {/* buttons - wrap*/}
      <div
        className={`flex-[0.3] max-w-[65px] self-end flex flex-col  ${video.buttons__wrapper}`}
      >
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
    <div className="w-100 mb-[30px] flex flex-col items-center">
      {liked ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleLiked}
        >
          <HeartIconRed class="w-[35px] h-[35px] " color="tomato" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleLiked}
        >
          <HeartIcon class="w-[35px] h-[35px] " color="white" />
        </button>
      )}
      <span className="text-white text-base font-light">{likes || "100k"}</span>
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
      <div className="w-100 mb-[30px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          //   onClick={handleLiked}
        >
          <CommentIcon class="w-[35px] h-[35px] " color="white" />
        </button>

        <span className=" text-white drop-shadow-md text-base font-light">
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
      <div className="w-100 mb-[20px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          onClick={handleNavigate}
        >
          <MessagingIcon class="w-[35px] h-[35px] " color="white" />
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
    <div className="w-100 mb-[20px] flex flex-col items-center">
      {fullScreen ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleToggleAspectRatio}
        >
          <AspectHalfIcon class="w-[35px] h-[35px] " color="white" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleToggleAspectRatio}
        >
          <AspectFullIcon class="w-[35px] h-[35px] " color="white" />
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
      <div className="w-100 mb-[20px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          onClick={() => setShowModal(true)}
        >
          <ThreeDotsIcon class="w-[35px] h-[35px]" color="white" />
        </button>
      </div>

      {/* <></> maybe modal here and overlay*/}
    </>
  );
};
