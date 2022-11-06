import { useState, useEffect } from "react";
import MobileHomePage from "../components/mobile/pages/home";
import mobileCheck from "../utils/helpers/mobileCheck";

export default function Home({ isMobile }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer < 2) {
      setTimer(timer + 1);
    }
  }, [timer]);

  // splash screen delay
  if (timer < 2) return <div>splash</div>;

  if (timer >= 2 && isMobile) return <MobileHomePage />;

  if (timer >= 2 && !isMobile) return <>Hello desktop</>;
}

export const getServerSideProps = ({ req }) => {
  const UA = req.headers["user-agent"];
  const isMobile = mobileCheck(UA);
  return {
    props: {
      isMobile: isMobile,
    },
  };
};
