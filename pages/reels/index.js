import React from "react";
import Error from "next/error";
import { App } from "pages/_app";
import FlashScreen from "components/general/FlashScreen";
import MobileReelsPage from "components/mobile/pages/reels";
import DesktopReelsPage from "components/desktop/pages/reels";
import _getServerSideProps from "utils/helpers/getServerSideProps";

const Reels = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileReelsPage />;

  if (!isMobile) return <DesktopReelsPage />;
};

export default Reels;

export const getServerSideProps = _getServerSideProps;
