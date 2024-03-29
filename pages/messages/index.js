import React from "react";
import { App } from "../_app";
// import MobileFlashScreen from "../../components/desktop/flashScreen";
// import DesktopFlashScreen from "../../components/mobile/flashScreen";
import FlashScreen from "../../components/general/FlashScreen";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileMessagesPage from "../../components/mobile/pages/messages";

const Messages = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileMessagesPage />;

  if (!isMobile) return <div>hello world</div>;
};

export default Messages;

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
