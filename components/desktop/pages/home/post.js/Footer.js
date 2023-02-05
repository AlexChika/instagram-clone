/* --------------------------------------- */
/*      Picture and Video Posts Footer     */
/* --------------------------------------- */
// This component is the footer for Video posts, picture posts and single vide and picture post pages

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import IconHOC from "components/general/IconHOC";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  HeartIconRed,
  MessagingIcon,
} from "utils/icons";

const Footer = ({ showModal, usersComment = false }) => {
  const router = useRouter();

  const [animation, setAnimation] = useState("scale_sideways");
  const [fullComment, setFullComment] = useState(false);
  const [id, setId] = useState(null);
  const [liked, setLiked] = useState(false);

  function goToComments() {
    let url = `/p/${id}/comments`;
    router.push(url);
  }

  function likePost() {
    setLiked(!liked);
  }

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
      <section className="flex justify-between items-center px-4 py-3 mt-1">
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

        {/* --------- view comments button -------- */}
        <button className="text-neutral-500">view all {"20"} comments</button>

        {/* ------------- comment box ------------- */}
      </section>
    </>
  );
};

export default Footer;
