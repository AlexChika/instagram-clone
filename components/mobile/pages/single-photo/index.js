import React, { useState, useEffect, useRef } from "react";
import Photo from "../general/Photo";
import Header from "../general/Header";
import Footer from "../general/PostPageFooter";
import Nav from "../general/Nav";
import OptionsModal from "../general/OptionsModal";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";
import Comments from "../general/Comments";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  const photoWrapper = useRef(null);
  const commentWrapper = useRef(null);

  useEffect(() => {
    function call() {
      let height = photoWrapper.current.getBoundingClientRect().height;

      let commentHeight = height - 235;
      commentWrapper.current.style.height = `${commentHeight}px`;
    }

    let interval;
    let count = 1;
    interval = setInterval(() => {
      count++;

      if (count > 2) clearInterval(interval);
      call();
    }, 500);
  });
  // ..............
  return (
    <MobileLayout showBottomNav>
      <div className="min-[725px]:w-[95%] max-w-[815px] mx-auto top-0 z-[5] sticky">
        <Nav title={"Post"} />
      </div>

      {/* ------------ mobile screens ----------- */}
      <section className="min-[725px]:hidden pb-[54px] max-w-[725px] mx-auto">
        <Header showModal={setShowOptModal} showExtras />
        <Photo src="/alex.png" />
        <Footer showModal={setShrOptModal} />
      </section>

      {/* ---------- tablet and desktop --------- */}
      <div className="px-5 pb-2">
        <section className="hidden min-[725px]:flex max-w-[815px] mx-auto mt-5 w-full border border-slate-300 dark:border-neutral-700">
          {/* -------------- post photo ------------- */}
          <article
            ref={photoWrapper}
            className="w-[58%] min-h-[450px] self-center"
          >
            <Photo src="/insta-icon-svg.svg" />
          </article>

          {/* ------------- post details ------------ */}
          <article className="w-[42%] border-l border-l-slate-300 dark:border-l-gray-700">
            <Header showModal={setShowOptModal} showExtras />

            {/* ------------ post comments ------------ */}
            <div
              ref={commentWrapper}
              className="overflow-y-auto hide__scroll__bar px-4 py-1 border-b border-b-slate-300 dark:border-b-neutral-700"
            >
              <Comments />
            </div>

            <div className="border-b border-b-slate-300 dark:border-b-neutral-700">
              <Footer commentBox showModal={setShrOptModal} />
            </div>
          </article>
        </section>
      </div>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} />
    </MobileLayout>
  );
};

export default SinglePhoto;
