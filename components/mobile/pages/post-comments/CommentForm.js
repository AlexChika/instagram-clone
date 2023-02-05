import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const CommentForm = () => {
  const textBoxRef = useRef(null);
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setComment(e.currentTarget.textContent.trim());
  };

  useEffect(() => {
    let placeholder = "Add a comment";
    const textBox = textBoxRef.current;
    textBox.blur();

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
          ref={textBoxRef}
          onInput={handleInput}
          contentEditable
          className="text-left overflow-y-auto w-[calc(100%-50px)] min-h-[30px] max-h-[100px] outline-none font-normal text-gray-500"
        >
          Add a comment
        </h5>
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
