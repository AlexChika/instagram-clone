import React, { useState } from "react";
import Photo from "../components/Photo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import OptionsModal from "../components/OptionsModal";
import MobileLayout from "components/mobile/layout";
import ShareOverlay from "../share-overlay.js";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);
  return (
    <MobileLayout showBottomNav>
      <section className="max-w-3xl mx-auto pb-14 md:pb-3">
        <Nav title={"Photo"} />
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
