import React from "react";
import Error from "next/error";
import { App } from "../_app";
import MobileFlashScreen from "../../components/desktop/flashScreen";
import DesktopFlashScreen from "../../components/mobile/flashScreen";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileReelsPage from "../../components/mobile/pages/reels";

const Reels = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return isMobile ? <MobileFlashScreen /> : <DesktopFlashScreen />;
  }

  if (isMobile) return <MobileReelsPage />;

  if (!isMobile) return <Error title="This page does not exist" />;
};

export default Reels;

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
