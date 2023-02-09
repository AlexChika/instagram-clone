import Comments from "components/mobile/pages/general/Comments";
import Header from "components/mobile/pages/general/Header";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "components/mobile/pages/general/PostPageFooter";
import React, { useState, useRef, useEffect } from "react";
import OptionsModal from "../general/OptionsModal";

function PhotoComments() {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  const photoWrapper = useRef(null);
  const commentWrapper = useRef(null);

  useEffect(() => {
    function call() {
      if (!photoWrapper.current || !commentWrapper.current) return;

      let height = photoWrapper.current?.getBoundingClientRect()?.height;

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
  }, []);

  return (
    <>
      {/* ---------- mobile screen size --------- */}
      <section className="bg-white dark:bg-black w-full min-[725px]:hidden pb-[44px] px-[10px] max-w-[725px] mx-auto overflow-y-auto max-h-[90%] hide__scroll__bar">
        <Header showExtras />
        <Photo src="/insta-icon-svg.svg" />
        <Footer />
      </section>

      {/* ---- Tablet and desktop screen size --- */}
      <section className="hidden min-[725px]:flex max-w-[815px] mx-auto mt-5 w-full bg-white dark:bg-black border border-slate-300 dark:border-neutral-700">
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
            {/* <Footer showModal={setShrOptModal} /> */}
            <Footer commentBox />
          </div>
        </article>
      </section>

      <OptionsModal
        showModal={showOptModal}
        setShowModal={setShowOptModal}
        currentPost
      />

      {/* <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} /> */}
    </>
  );
}

export default PhotoComments;
