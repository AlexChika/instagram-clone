import React from "react";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileExplorePage from "../../components/mobile/pages/explore";

const Explore = ({ isMobile }) => {
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
