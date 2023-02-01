import Image from "next/image";
import React, { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setComment(e.currentTarget.textContent.trim());
  };

  //   ...................
  return (
    <form
      onSubmit={handleComment}
      className="dark:bg-neutral-800 border-y dark:border-neutral-700 bg-neutral-100 text-center w-full flex justify-around items-center p-2"
    >
      {/* image icon */}
      <div className="w-8 h-8 max-w-[32px] rounded-full cursor-pointer relative">
        <Image
          className="rounded-full"
          layout="fill"
          src="/alex.png"
          alt="user profile image"
        />
      </div>

      {/* input container */}
      <div className="bg-white dark:bg-black py-1 px-3 rounded-3xl w-[calc(100%-50px)] flex justify-around  border border-neutral-200 dark:border-neutral-800">
        <h5
          onInput={handleInput}
          contentEditable
          className="text-left max-w- overflow-y-auto w-[calc(100%-50px)] min-h-[30px] max-h-[100px] outline-none font-normal"
        ></h5>
        <button
          disabled={comment}
          className={` w-[50px] ${
            comment ? "text-blue-600" : "text-blue-100 dark:text-neutral-500"
          }`}
          type="submit"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
