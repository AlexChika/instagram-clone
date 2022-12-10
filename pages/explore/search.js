import React from "react";
import mobileCheck from "../../utils/helpers/mobileCheck";
import MobileSearchPage from "../../components/mobile/pages/search";

const Search = ({ isMobile }) => {
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
