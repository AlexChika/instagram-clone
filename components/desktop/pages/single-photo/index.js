import DesktopLayout from "components/desktop/layout";
import Header from "components/mobile/pages/general/Header";
import Nav from "components/mobile/pages/general/Nav";
import React, { useState } from "react";
import OptionsModal from "../general/OptionsModal";
import Photo from "components/mobile/pages/general/Photo";
import Footer from "components/mobile/pages/general/PostPageFooter";
import Comments from "components/mobile/pages/general/Comments";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  // .......................
  return (
    <DesktopLayout>
      {/* ---------------- mobile --------------- */}
      <div className="min-[725px]:w-[95%] max-w-[815px] mx-auto top-0 z-[5] sticky">
        <Nav title={"Post"} />
      </div>

      {/* <div className="md:hidden">
        <Nav title={"Post"} />
      </div> */}

      {/* ------------ mobile screens ----------- */}
      <section className="min-[725px]:hidden pb-[44px] max-w-[725px] mx-auto">
        <Header showModal={setShowOptModal} showExtras />
        <Photo src="/alex.png" />
        {/* <Footer showModal={setShrOptModal} /> */}
        <Footer />
      </section>

      {/* ---------- tablet and desktop --------- */}
      <div className="flex justify-center">
        <section className="hidden min-[725px]:block max-w-[815px] w-[95%] my-5 border border-slate-300 dark:border-neutral-700">
          {/* ----------------- post ---------------- */}
          <article className="flex">
            <div className="w-[58%] min-h-[450px]  self-center">
              <Photo src="https://images.pexels.com/photos/9898727/pexels-photo-9898727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>

            <div className="w-[42%] max-h-[inherit]">
              <Header showModal={setShowOptModal} showExtras />

              <div className="overflow-y-auto hide__scroll__bar max-h-[400px] px-4 border-b border-b-slate-300 dark:border-b-neutral-700">
                <Comments />
              </div>

              <div className="border-b border-b-slate-300 dark:border-b-neutral-700">
                {/* <Footer showModal={setShrOptModal} /> */}
                <Footer />
              </div>

              <div>{/*  */}</div>
            </div>
          </article>

          {/* ----- more posts from same account ---- */}
        </section>
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
// border-t-slate-300 dark:border-t-gray-700
