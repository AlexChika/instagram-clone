import Image from "next/image";
import { useState } from "react";
import Comments from "../general/Comments";

function ReelsComment({ showModal, setShowModal }) {
  const [comment, setComment] = useState("");
  function closePopUp(e) {
    if (e.target !== e.currentTarget) return;
    setShowModal(false);
  }

  const handleComment = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    setComment(e.currentTarget.textContent.trim());
  };

  // ,.......
  return (
    <div
      onClick={closePopUp}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] dark:bg-[#000000cc] z-[6] transition-all ${
        showModal ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {/* .....content starts...*/}
      <section
        className={`max-w-3xl left-[50%] translate-x-[-50%] dark:bg-neutral-800 bg-white text-black dark:text-white absolute w-full bottom-0 py-4 pb-[44px] rounded-t-xl transition-transform ${
          showModal ? "translate-y-[0%]" : "translate-y-[100%]"
        }`}
      >
        {/* ----------- dashed gray line ---------- */}
        <span
          aria-hidden
          className="block mx-auto w-12 h-1 bg-slate-200 dark:bg-neutral-700"
        ></span>

        {/* -------------- title here ------------- */}
        <h3 className="text-center mt-3 border-b-2 dark:border-b-neutral-700 border-b-gray-100 p-2 italic font-semibold">
          Comments
        </h3>

        {/* ----------- comments wrapper ---------- */}
        <div className="px-4 pb-[60px] h-[65vh] overflow-y-auto">
          <Comments />
        </div>

        {/* ------------- Comment box ------------- */}
        <form
          onSubmit={handleComment}
          className="dark:bg-neutral-800 border-y dark:border-neutral-700 fixed bottom-0 z-[11] bg-neutral-100 text-center w-full flex justify-around items-center p-2"
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
          <div className="bg-white dark:bg-black py-1 px-3 rounded-3xl w-[calc(100%-50px)] flex justify-around border border-neutral-200 dark:border-neutral-800">
            <h5
              onInput={handleInput}
              contentEditable
              className="text-left overflow-y-auto w-[calc(100%-50px)]  min-h-[30px] max-h-[100px] outline-none font-normal"
            ></h5>
            <button
              disabled={comment}
              className={` w-[50px] ${
                comment
                  ? "text-blue-600"
                  : "text-blue-100 dark:text-neutral-500"
              }`}
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ReelsComment;
