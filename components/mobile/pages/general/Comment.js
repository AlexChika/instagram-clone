/* --------- A Comment Component --------- */
// This is a single comment component, used in the post-coment page and reels page
import IconHOC from "components/general/IconHOC";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HeartIcon, HeartIconRed } from "utils/icons";

// .........................
const Comment = ({ comment }) => {
  const [liked, setLiked] = useState(false);
  const [css, setCss] = useState("scale_sideways");

  let text =
    comment ||
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta tempore, accusamus debitis dolore minima distinctio reprehenderit in, quam aperiam error inventore. Dolores, ipsa eos!";

  useEffect(() => {
    setCss("scale_sideways");

    setTimeout(() => {
      setCss("");
    }, [400]);
  }, [liked]);

  return (
    <article className="flex justify-between items-start mt-5">
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
        onClick={() => setLiked(!liked)}
        className={`flex-[0.07] ${css} `}
      >
        {liked
          ? IconHOC(HeartIconRed, "none", "h-[15px] w-[15px] text-[red]")
          : IconHOC(HeartIcon, "none", "h-[15px] w-[15px] ")}
      </button>
    </article>
  );
};

export default Comment;
