import React from "react";
import Error from "next/error";
import { App } from "pages/_app";
import FlashScreen from "components/general/FlashScreen";
import _getServerSideProps from "utils/helpers/getServerSideProps";
import MobilePostComments from "components/mobile/pages/post-comments";
import { DesktopPostComments } from "components/desktop/pages/post-comments";

const Comments = ({ isMobile }) => {
  // ....................
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (isMobile) return <MobilePostComments />;

  if (!isMobile) return <DesktopPostComments />;
};

export default Comments;
export const getServerSideProps = _getServerSideProps;
