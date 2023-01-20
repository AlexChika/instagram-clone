import { useState, useEffect } from "react";
import MobileHomePage from "../components/mobile/pages/home";
import DesktopHomePage from "../components/desktop/pages/home";
import mobileCheck from "../utils/helpers/mobileCheck";
// import MobileFlashScreen from "../components/mobile/flashScreen";
// import DesktopFlashScreen from "../components/desktop/flashScreen";
import FlashScreen from "../components/general/FlashScreen";
import { App } from "./_app";

export default function Home({ isMobile }) {
  const { timer } = App();

  // return <DesktopFlashScreen />;
  // return <MobileFlashScreen />;

  // // test....1 passed
  // return isMobile ? <h1>Mobile</h1> : <h1>Desktop</h1>;

  // test 2 ..
  return <MobileHomePage />;

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (timer >= 2 && isMobile) return <MobileHomePage />;

  if (timer >= 2 && !isMobile) return <DesktopHomePage />;
}

export const getServerSideProps = ({ req }) => {
  const UA = req?.headers?.["user-agent"] || false;
  const isMobile = UA ? mobileCheck(UA) : true;
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
