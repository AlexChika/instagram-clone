import React from "react";
import ErrorPage from "next/error";
import { App } from "../_app";
// import MobileFlashScreen from "../../components/desktop/flashScreen";
// import DesktopFlashScreen from "../../components/mobile/flashScreen";
import FlashScreen from "../../components/general/FlashScreen";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileNewMessagePage from "../../components/mobile/pages/new-message";

const New = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileNewMessagePage />;

  if (!isMobile) return <div>hello world</div>;
};

export default New;

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
