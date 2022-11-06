import React from "react";
import NavBottom from "./NavBottom";
import HomeNavTop from "./HomeNavTop";

const DesktopLayout = ({ children }) => {
  return (
    <main>
      {/* Top Nav */}
      <HomeNavTop />
      {/* side Bar */}
      {/* content  */}
      {children}
      {/* bottom Nav */}
      <NavBottom />
    </main>
  );
};

export default DesktopLayout;
