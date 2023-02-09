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
let base =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://insta-cloned";

const Footer = ({ emojis, shareModal, commentModal, usersComment = true }) => {
  const { showEmoji, setShowEmoji, setPosition, homePageRef } = emojis;

  const router = useRouter();
  const [animation, setAnimation] = useState("scale_sideways");
  const [fullComment, setFullComment] = useState(false);
  const [id, setId] = useState(null);
  const [liked, setLiked] = useState(false);

  //   comment box and emoji states and refs
  const textBoxRef = useRef(null);
  const [comment, setComment] = useState(""); //user comment
  const [emoji, setEmoji] = useState(""); //emoji character

  function goToComments() {
    let state = {};
    let id = 123;
    let title = "post title here";
    const url = `${base}/p/${id}`;
    console.log(url);
    window.history.pushState(state, title, url);

    commentModal(true);
  }

  function likePost() {
    setLiked(!liked);
  }

  const handleInput = (e, text) => {
    if (e) return setComment(e.currentTarget.textContent.trim());
    if (text) return (textBoxRef.current.textContent = text);
  };

  //   effects adds emoji to text box
  useEffect(() => {
    if (!emoji) return;
    let text = comment + emoji;
    handleInput(undefined, text);
    setComment(text);
    setEmoji("");
    console.log("i run just once", emoji);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emoji]);

  function handleEmoji(e) {
    setShowEmoji(!showEmoji); //toggle emoji element
    textBoxRef.current.focus();

    const el = e.target; //clicked button (emoji icon btn)
    const rect = el.getBoundingClientRect(); //button rect respect to window
    const homeEl = homePageRef.current; //homepage wrapper
    const homeRect = homeEl.getBoundingClientRect();

    const elleft = rect.left - homeRect.left; //buttons left positioning
    const eltop = rect.y - homeRect.y; //buttons top positioning
    const elright = elleft + rect.width; //buttons right positioning

    const sh = window.innerHeight;
    const sw = window.innerWidth;
    const h = 420; //modal height
    const w = 348; //modal width
    const freeRightWidth = sw - elright; //right screen space from emoji btn

    // const modal = emojiModalRef.current;
    let left;
    let top;

    left = freeRightWidth > w ? elright : elright - w;
    top = eltop > h ? eltop - h : eltop - h / 2;

    console.log(eltop, "top");

    top = `${top}px`;
    left = `${left}px`;

    setPosition({ top, left, setEmoji });
  }

  useEffect(() => {
    let placeholder = "Add a comment";
    const textBox = textBoxRef.current;
    textBox.textContent = "Add a comment";

    function onFocus(e) {
      const value = e.target.textContent;
      value === placeholder &&
        ((e.target.textContent = ""), e.target.classList.add("color"));
    }

    function onBlur(e) {
      const value = e.target.textContent;
      value === "" &&
        ((e.target.textContent = placeholder),
        e.target.classList.remove("color"));
    }

    textBox.addEventListener("focus", onFocus);
    textBox.addEventListener("blur", onBlur);

    return () => {
      textBox.removeEventListener("focus", onFocus);
      textBox.removeEventListener("blur", onBlur);
    };
  }, []);

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
      <section className="flex justify-between items-center py-3 mt-1">
        <div>
          <button onClick={likePost} className={`mr-3 ${animation}`}>
            {liked
              ? IconHOC(HeartIconRed, "none", "text-red-500")
              : IconHOC(HeartIcon, "none")}
          </button>

          <button onClick={goToComments} className="mr-3">
            {IconHOC(CommentIcon, "none")}
          </button>

          <button onClick={() => shareModal(true)} className="mr-3">
            {IconHOC(MessagingIcon, "none")}
          </button>
        </div>

        <button>{IconHOC(BookmarkIcon, "none")}</button>
      </section>

      {/* ---------- likes and comments --------- */}
      <section className="flex flex-col items-start mb-4">
        <button className="font-semibold">{"923,00"} likes</button>

        {/* ------------- UserComment  ------------ */}
        {usersComment && (
          <div>
            <span className="font-semibold">{"User's_name"} &nbsp;</span>
            {fullComment ? (
              <span>{str}</span>
            ) : (
              <span>
                {str.substring(0, 50)} <br />
                <button
                  onClick={() => setFullComment(true)}
                  className="text-neutral-500"
                >
                  ...more
                </button>
              </span>
            )}
          </div>
        )}

        {/* --------- view comments button -------- */}
        <button className="text-neutral-500">view all {"20"} comments</button>

        {/* ------------- comment box ------------- */}
        <div className="hidden md:block border-b border-b-neutral-200 dark:border-b-neutral-800 mt-1 w-full">
          <div className="bg-white dark:bg-black py-1 rounded-3xl flex justify-around">
            <h5
              ref={textBoxRef}
              onInput={handleInput}
              contentEditable
              className="text-left overflow-y-auto w-[calc(100%-50px)] min-h-[30px] max-h-[100px] outline-none font-normal text-gray-500"
            ></h5>

            <button
              disabled={comment}
              className={`w-[50px] ${
                comment ? "text-blue-600 opacity-1" : "opacity-0"
              }`}
              type="submit"
            >
              Post
            </button>

            <button onClick={handleEmoji} className="pointernone">
              {IconHOC(EmojiIcon, "none", "h-4 w-4 opacity-50")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
