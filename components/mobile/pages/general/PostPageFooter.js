/* --------------------------------------- */
/*      Picture and Video Posts Footer     */
/* --------------------------------------- */
// This component is the footer for  post found in individual post pages of photo posts and video posts (single-photo and single-video pages)

// The Footer component is the footer for Video posts, picture posts found in the home page

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import IconHOC from "components/general/IconHOC";
import {
  BookmarkIcon,
  CommentIcon,
  EmojiIcon,
  HeartIcon,
  HeartIconRed,
  MessagingIcon,
} from "utils/icons";
import Emoji from "components/general/Emoji";

const PostPageFooter = ({ showModal, commentBox = false }) => {
  const router = useRouter();
  const [showEmoji, setShowEmoji] = useState(false);

  const [animation, setAnimation] = useState("scale_sideways");
  const [id, setId] = useState(null);
  const [liked, setLiked] = useState(false);

  //   comment box and emoji states and refs
  const emojiModalRef = useRef(null);
  const [comment, setComment] = useState(""); //user comment
  const [emoji, setEmoji] = useState(""); //emoji character

  function goToComments() {
    let url = `/p/${id}/comments`;
    router.push(url);
  }

  function likePost() {
    setLiked(!liked);
  }

  function handleEmoji(e) {
    setShowEmoji(!showEmoji); //toggle emoji element

    const el = e.target; //clicked button (emoji icon btn)
    const rect = el.getBoundingClientRect(); //button rect respect to window

    const elleft = rect.left; //buttons left positioning
    const eltop = rect.y; //buttons top positioning

    const h = 420; //modal height
    const w = 348; //modal width

    let top = eltop - h;
    let left = elleft;
    top = `${top}px`;
    left = `${left}px`;

    emojiModalRef.current.style.left = left;
    emojiModalRef.current.style.top = top;
  }

  const handleInput = (e, text) => {
    if (e) return setComment(e.target.value.trim());
    if (text) return setComment(text);
  };

  //   effects adds emoji to text box
  useEffect(() => {
    if (!emoji) return;
    let text = comment + emoji;
    handleInput(undefined, text);
    setEmoji("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emoji]);

  useEffect(() => {
    setAnimation("scale_sideways");

    setTimeout(() => {
      setAnimation("");
    }, [400]);
  }, [liked]);

  useEffect(() => {
    let { id: _id } = router.query;
    setId(_id);
  }, [router]); //there is gonna be another way of getting this id

  // useEffect(() => {
  //   // first

  //   return () => {
  //     // second
  //   }
  // }, [liked])//this will handle updating likes

  let str =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, praesentium.";
  return (
    <>
      {/* -------------- icons wrap ------------- */}
      <section className="flex justify-between items-center px-4 py-2 mt-1">
        <div>
          <button onClick={likePost} className={`mr-3 ${animation}`}>
            {liked
              ? IconHOC(HeartIconRed, "none", "text-red-500")
              : IconHOC(HeartIcon, "none")}
          </button>

          <button onClick={goToComments} className="mr-3">
            {IconHOC(CommentIcon, "none")}
          </button>

          <button onClick={() => showModal(true)} className="mr-3">
            {IconHOC(MessagingIcon, "none")}
          </button>
        </div>

        <button>{IconHOC(BookmarkIcon, "none")}</button>
      </section>

      {/* ---------- likes and comments --------- */}
      <section className="px-4 flex flex-col items-start py2">
        <span className="font-semibold">{"923,00"} likes</span>

        {/* ---------- view all comments ---------- */}
        <button onClick={goToComments} className="text-neutral-500">
          view all {"20"} comments
        </button>
        <span className="text-neutral-500 uppercase text-[11px]">
          3 hours ago
        </span>
      </section>

      {/* ------------- comment box ------------- */}
      {commentBox && (
        <div className="flex items-center px-3 border-t mt-2 border-t-slate-300 dark:border-t-neutral-700 w-full">
          <button onClick={handleEmoji}>
            {IconHOC(EmojiIcon, "none", "h-5 w-5")}
          </button>

          <textarea
            // rows="1.5"
            onChange={handleInput}
            value={comment}
            className="resize-none hide__scroll__bar p-0 w-full px-2 pt-4 "
            placeholder="Add a comment..."
          ></textarea>

          <button
            disabled={comment}
            className={`w-[50px] ${
              comment ? "text-blue-600" : "text-blue-200"
            }`}
            type="submit"
          >
            Post
          </button>
        </div>
      )}

      {/* ------------- emoji modal ------------- */}
      <div
        ref={emojiModalRef}
        className={`absolute ${showEmoji ? "block scale_sideways" : "hidden"}`}
      >
        <Emoji setEmoji={setEmoji} />
      </div>
    </>
  );
};

export default PostPageFooter;
// max-h-[80px] h-[40px] resize-none
