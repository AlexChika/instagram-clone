import React from "react";
import { App } from "../_app";
// import MobileFlashScreen from "../../components/desktop/flashScreen";
// import DesktopFlashScreen from "../../components/mobile/flashScreen";
import FlashScreen from "../../components/general/FlashScreen";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileSearchPage from "../../components/mobile/pages/search";

const Search = ({ isMobile }) => {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobileSearchPage />;

  if (!isMobile) return <div>hello desktop</div>;
};

export default Search;

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
