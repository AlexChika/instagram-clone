import layout from "./layout.module.css";
import NavBottom from "./NavBottom";
import HomeNavTop from "./HomeNavTop";
import SideBar from "./SideBar";

const DesktopLayout = ({ children }) => {
  return (
    <main className={`${layout.main}`}>
      {/* side bar */}
      <div className={`${layout.sideBar} hidden md:block`}>
        <SideBar />
      </div>

      {/* top nav bar */}
      <div className={`${layout.navTop} md:hidden sticky top-0 z-10`}>
        <HomeNavTop />
      </div>

      {/* body */}
      <div className={`${layout.body} mb-[56px] md:mb-[0px] `}>{children}</div>

      {/* nav bottom */}
      <div className={`${layout.navBottom} md:hidden`}>
        <NavBottom />
      </div>
    </main>
  );
};

export default DesktopLayout;
