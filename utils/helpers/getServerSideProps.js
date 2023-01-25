import mobileCheck from "./mobileCheck";

const _getServerSideProps = ({ req }) => {
  const UA = req?.headers?.["user-agent"] || false;
  const isMobile = UA ? mobileCheck(UA) : true;
  return {
    props: {
      isMobile: isMobile,
    },
  };
};

export default _getServerSideProps;
