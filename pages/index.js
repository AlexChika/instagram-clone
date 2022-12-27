import { useState, useEffect } from "react";
import MobileHomePage from "../components/mobile/pages/home";
import DesktopHomePage from "../components/desktop/pages/home";
import mobileCheck from "../utils/helpers/mobileCheck";
import FlashScreen from "../components/general/Flashscreen";
import { App } from "./_app";

export default function Home({ isMobile }) {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
    // return isMobile ? <MobileFlashScreen /> : <DesktopFlashScreen />;
  }

  if (timer >= 2 && isMobile) return <MobileHomePage />;

  if (timer >= 2 && !isMobile) return <DesktopHomePage />;
}

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
