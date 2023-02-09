import { CloseIcon } from "utils/icons";
import VideoComments from "./VideoComments";
import PhotoComments from "./PhotoComments";
let url =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000/"
    : "https://insta-cloned/";

const PostComments = ({ postData, showModal, setShowModal }) => {
  function closeModal(e) {
    if (e.target !== e.currentTarget) return;
    let state = {};
    let title = "Instagram cloned | A complete Instagram clone";
    window.history.pushState(state, title, url);
    setShowModal(false);
  }

  // somme calc
  return (
    <div
      className={`fixed items-center justify-center left-0 bottom-0 right-0 top-0 z-50 bg-[#000000cc] ${
        showModal ? "flex" : "hidden"
      }`}
    >
      <>
        <button
          onClick={closeModal}
          className="absolute right-[15px] top-[15px] pointernone p-2"
        >
          {<CloseIcon color="white" />}
        </button>

        {showModal && <VideoComments />}
      </>
    </div>
  );
};

export default PostComments;
