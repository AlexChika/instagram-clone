import React from "react";
import { App } from "../_app";
import MobileFlashScreen from "../../components/desktop/flashScreen";
import DesktopFlashScreen from "../../components/mobile/flashScreen";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileExplorePage from "../../components/mobile/pages/explore";

const Explore = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return isMobile ? <MobileFlashScreen /> : <DesktopFlashScreen />;
  }

  if (isMobile) return <MobileExplorePage />;

  if (!isMobile) return <div>hello world</div>;
};

export default Explore;

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
