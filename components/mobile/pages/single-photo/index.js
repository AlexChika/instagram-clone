import React, { useState } from "react";
import Photo from "../general/Photo";
import Header from "../general/Header";
import Footer from "../general/Footer";
import Nav from "../general/Nav";
import OptionsModal from "../general/OptionsModal";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);

  // ..............
  return (
    <MobileLayout showBottomNav>
      <section className="max-w-[735px] mx-auto pb-14 md:pb-3">
        <Nav title={"Post"} />
        <Header showModal={setShowOptModal} showExtras={true} />
        <Photo src="/alex.png" />
        <Footer showModal={setShrOptModal} />
      </section>

      <OptionsModal showModal={showOptModal} setShowModal={setShowOptModal} />

      <ShareOverlay showModal={showShrModal} setShowModal={setShrOptModal} />
    </MobileLayout>
  );
};

export default SinglePhoto;
