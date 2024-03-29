import React from "react";
import Error from "next/error";
import { App } from "pages/_app";
import FlashScreen from "components/general/FlashScreen";
import _getServerSideProps from "utils/helpers/getServerSideProps";
import MobileSinglePhoto from "components/mobile/pages/single-photo";
import DesktopSinglePhoto from "components/desktop/pages/single-photo";

// ....................
const SinglePhotoPage = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileSinglePhoto />;

  if (!isMobile) return <DesktopSinglePhoto />;
};

export default SinglePhotoPage;
export const getServerSideProps = _getServerSideProps;
