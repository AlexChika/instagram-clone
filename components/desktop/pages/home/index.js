import React from "react";
import DesktopLayout from "components/desktop/layout";
import HomeNavTop from "components/desktop/layout/HomeNavTop";

const DesktopHomePage = () => {
  return (
    <DesktopLayout NavTop={HomeNavTop}>
      <main className="justify-center items-center flex h-screen">
        <div>
          <h1>Desktop build in progress</h1> <br />
          <h3 className="font-semibold">
            Please use a mobile phone Or Chrome emultaors <br /> to view more
            progress on the mobile build
            <br />
          </h3>
        </div>
      </main>
    </DesktopLayout>
  );
};

export default DesktopHomePage;
