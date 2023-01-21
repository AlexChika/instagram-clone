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
  MusicIcon,
} from "../../../../../utils/icons";
import Image from "next/image";
import Link from "next/link";

function Buttons({ params }) {
  const { fs: fullScreen, sfs: setFullScreen, liked, setLiked } = params;

  //   ......
  return (
    <div
      className={`absolute bottom-0 right-0 top-0 left-0 flex justify-between text-white ${video.buttons__wrapper}`}
    >
      {/* video - details - wrap */}
      <div className={`flex-[0.8] pl-3 self-end`}>
        <Name />

        <Captions />
      </div>

      {/* buttons - wrap*/}
      <div className={`flex-[0.2] max-w-[65px] self-end flex flex-col`}>
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
    <div className="mb-[30px] flex flex-col items-center">
      {liked ? (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
          onClick={handleLiked}
        >
          <HeartIconRed class="w-[30px] h-[30px] " color="tomato" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
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
/*              Commnet component          */
/* --------------------------------------- */
const Comment = ({ params, comment = "1000" }) => {
  //   const { liked, setLiked, likes } = params;
  const [showComment, setShowComment] = useState(false);

  return (
    <>
      <div className="mb-[30px] flex flex-col items-center">
        <button
          className={`${video.pointernone} `}
          data-role="button"
          //   onClick={handleLiked}
        >
          <CommentIcon class="w-[30px] h-[30px] " color="white" />
        </button>

        <p className="text-base">{comment || "10,000"}</p>
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
        <button
          className={`${video.pointernone} `}
          data-role="button"
          onClick={handleNavigate}
        >
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
          data-role="button"
          onClick={handleToggleAspectRatio}
        >
          <AspectHalfIcon class="w-[30px] h-[30px] " color="white" />
        </button>
      ) : (
        <button
          className={`${video.pointernone} ${video[css]}`}
          data-role="button"
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
          data-role="button"
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
        data-role="button"
        className={`absolute bg-gray-900 bg-opacity-50 top-0 left-0 bottom-0 right-0 z-[3] transition-opacity flex justify-center items-center  ${
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
            data-role="button"
            onClick={() => {
              navigator.clipboard.writeText(postLink);
            }}
            className={video.options_btns}
          >
            Copy link
          </button>

          <button
            onClick={() => setShowModal(false)}
            data-role="button"
            className={video.options_btns}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

/* ------------ Name componnt ------------ */
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
        data-role="button"
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
              <button
                data-role="button"
                onClick={() => setSeeMore(true)}
                className="opacity-50"
              >
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
        data-role="button"
        className={`absolute bg-gray-900 bg-opacity-50 top-0 left-0 bottom-0 right-0 z-[0] transition-opacity ${
          seeMore ? "visible opacity-[1]" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
};
