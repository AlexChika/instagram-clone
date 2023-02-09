import DesktopLayout from "components/desktop/layout";
import Header from "components/mobile/pages/general/Header";
import Nav from "components/mobile/pages/general/Nav";
import React, { useState, useEffect, useRef } from "react";
import OptionsModal from "../general/OptionsModal";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "components/mobile/pages/general/PostPageFooter";
import Comments from "components/mobile/pages/general/Comments";
import { MorePost } from "../single-video";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  const photoWrapper = useRef(null);
  const commentWrapper = useRef(null);

  useEffect(() => {
    function call() {
      if (!photoWrapper.current || !commentWrapper.current) return;
      let height = photoWrapper.current.getBoundingClientRect().height;

      let commentHeight = height - 235;
      commentWrapper.current.style.height = `${commentHeight}px`;
    }

    let interval;
    let count = 0;
    interval = setInterval(() => {
      count++;

      if (count > 2) clearInterval(interval);
      call();
    }, 500);
  });

  // .......................
  return (
    <DesktopLayout>
      <div className="min-[725px]:w-[95%] max-w-[815px] mx-auto top-0 z-[5] sticky">
        <Nav title={"Post"} />
      </div>

      {/* ------------ mobile screens ----------- */}
      <section className="min-[725px]:hidden pb-[44px] max-w-[725px] mx-auto">
        <Header showModal={setShowOptModal} showExtras />
        <Photo src="/alex.png" />
        <Footer showModal={setShrOptModal} />
      </section>

      {/* ---------- tablet and desktop --------- */}
      <div className="px-5">
        <section className="hidden min-[725px]:flex max-w-[815px] mx-auto mt-5 w-full border border-slate-300 dark:border-neutral-700">
          {/* -------------- post photo ------------- */}
          <article
            ref={photoWrapper}
            className="w-[58%] min-h-[450px] self-center"
          >
            <Photo src="/insta-icon-svg.svg" />
            {/* <Photo src="/test.jpg" /> */}
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

        {/* ----- more posts from same account ---- */}
        <MorePost />
      </div>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      {/* <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} /> */}
    </DesktopLayout>
  );
};

export default SinglePhoto;
