import React from "react";
import Error from "next/error";
import { App } from "pages/_app";
import FlashScreen from "components/general/FlashScreen";
import _getServerSideProps from "utils/helpers/getServerSideProps";
import MobileSingleVideo from "components/mobile/pages/single-video";
import DesktopSingleVideo from "components/desktop/pages/single-video";

// ....................
const SingleVideoPage = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileSingleVideo />;

  if (!isMobile) return <DesktopSingleVideo />;
};

export default SingleVideoPage;
export const getServerSideProps = _getServerSideProps;
