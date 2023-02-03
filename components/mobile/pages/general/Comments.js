/* --------------------------------------- */
/*   An assembly of comments and replies   */
/* --------------------------------------- */
// a comments comonent for post comment page and reels comment modal that assembles comments and it replies.

import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import Spinner from "components/general/Spinner";

const Comments = ({ commentsArray }) => {
  let comments = commentsArray || [
    {
      comment: "some frst reply with funky texts",
      subComments: [
        { comment: "other replies to humour" },
        { comment: "more replies here and there" },
        { comment: "some more replies hmmmmmm" },
        { comment: "additional replies out of context" },
      ],
    },
    {
      comment: "another line of comment from a kind man",
      subComments: [],
    },
    {
      comment: "just some more replies from a truh persperctive",
      subComments: [],
    },
    {
      comment: "A funny annoying replies from an ignorant lady",
      subComments: [
        {
          comment: "hahhahhaa keep deceiving yourself ...",
        },
        {
          comment: "not funny bro . why would you call me an idiot",
        },
        {
          comment:
            "get a life. idiot!... some one is loosing some serious patience here and there",
        },
      ],
    },
  ];

  return (
    <>
      {comments?.length > 0 ? (
        <div>
          {comments.map((obj, index) => {
            const { comment, subComments } = obj;
            return (
              <div key={index}>
                <Comment comment={comment} />

                <SubComments subComments={subComments} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[65vh] flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Comments;

function SubComments({ subComments }) {
  const [viewReplies, setViewReplies] = useState(0);
  const [remainingReplies, setRemainingReplies] = useState(subComments.length);

  function handleViewReply() {
    let replies = viewReplies;
    replies = Math.min(viewReplies + 5, subComments.length);
    setViewReplies(replies);
  }

  useEffect(() => {
    let remaining = subComments.length - viewReplies;
    setRemainingReplies(remaining);
  }, [viewReplies, subComments]);

  //   .................
  return (
    <>
      {subComments.length > 0 && (
        <div className="w-[85%] ml-auto mt-5">
          <button onClick={handleViewReply}>
            <span>__</span>
            <span className="opacity-50">
              view replies ({remainingReplies})
            </span>
          </button>

          {/* replies */}
          {viewReplies > 0 && (
            <div>
              {subComments.slice(0, viewReplies).map((obj, ind) => {
                const { comment } = obj;
                return <Comment key={ind} comment={comment} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
