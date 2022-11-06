import { useState, useEffect } from "react";
import MobileHomePage from "../components/mobile/pages/home";
import DesktopHomePage from "../components/desktop/pages/home";
import mobileCheck from "../utils/helpers/mobileCheck";
import DesktopFlashScreen from "../components/desktop/flashScreen";
import MobileFlashScreen from "../components/mobile/flashScreen";

export default function Home({ isMobile }) {
  const [timer, setTimer] = useState(0);

  // splash screen effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer < 2) {
        setTimer(timer + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  // splash screen delay
  if (timer < 2) {
    return isMobile ? <MobileFlashScreen /> : <DesktopFlashScreen />;
  }

  if (timer >= 2 && isMobile) return <MobileHomePage />;

  if (timer >= 2 && !isMobile) return <DesktopHomePage />;
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
