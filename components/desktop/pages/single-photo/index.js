import DesktopLayout from "components/desktop/layout";
import Header from "components/mobile/pages/general/Header";
import Nav from "components/mobile/pages/general/Nav";
import React, { useState } from "react";

const SinglePhoto = () => {
  const [showOptModal, setShowOptModal] = useState(false);
  const [showShrModal, setShrOptModal] = useState(false);
  return (
    <DesktopLayout>
      {/* ---------------- mobile --------------- */}
      <div className="red ">
        <Nav title={"Post"} />
        <div className="mt-[44px]">
          <Header showExtras />
        </div>
      </div>

      {/* ---------- tablet and desktop --------- */}
      {/* <div className="blue"></div> */}
    </DesktopLayout>
  );
};

export default SinglePhoto;
