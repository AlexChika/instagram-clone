import React, { useState } from "react";
import IconHOC from "components/general/IconHOC";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MessagingIcon,
} from "utils/icons";

const Footer = ({ usersComment = false }) => {
  const [fullComment, setFullComment] = useState(false);

  let str =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, praesentium.";
  return (
    <>
      {/* -------------- icons wrap ------------- */}
      <section className="flex justify-between items-center px-4 py-3">
        <div>
          <button className="mr-3">{IconHOC(HeartIcon, "none")}</button>
          <button className="mr-3">{IconHOC(CommentIcon, "none")}</button>
          <button className="mr-3">{IconHOC(MessagingIcon, "none")}</button>
        </div>
        <button>{IconHOC(BookmarkIcon, "none")}</button>
      </section>

      {/* ---------- likes and comments --------- */}
      <section className="px-4 flex flex-col items-start mb-4">
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

        <button className="text-neutral-500">view all {"20"} comments</button>
        <span className="text-neutral-500 uppercase text-[11px]">
          3 hours ago
        </span>
      </section>
    </>
  );
};

export default Footer;
