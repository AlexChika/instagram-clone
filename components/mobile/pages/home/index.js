import React from "react";
import MobileLayout from "../../layout";
import HomeNavTop from "../../layout/HomeNavTop";
import { App } from "../../../../pages/_app";
// import { ListIcon, StoryIcon } from "../../../../utils/icons";
// app
const MobileHomePage = () => {
  const { changeTheme, theme } = App();

  return <MobileLayout showBottomNav={true} TopNav={HomeNavTop}></MobileLayout>;
};

export default MobileHomePage;
