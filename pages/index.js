import MobileHomePage from "components/mobile/pages/home";
import DesktopHomePage from "components/desktop/pages/home";
import FlashScreen from "components/general/FlashScreen";
import { App } from "pages/_app";
import _getServerSideProps from "utils/helpers/getServerSideProps";

export default function Home({ isMobile }) {
  const { timer } = App();

  // splash screen delay
  if (timer < 2) {
    return <FlashScreen />;
  }

  if (timer >= 2 && isMobile) return <MobileHomePage />;

  if (timer >= 2 && !isMobile) return <DesktopHomePage />;
}

export const getServerSideProps = _getServerSideProps;
