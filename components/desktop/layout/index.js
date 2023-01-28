import layout from "./layout.module.css";
import NavBottom from "./NavBottom";
import SideBar from "./SideBar";

const DesktopLayout = ({ children, NavTop }) => {
  return (
    <main className={`${layout.main} h-screen`}>
      {/* side bar */}
      <div className={`${layout.sideBar} hidden md:block`}>
        <SideBar />
      </div>

      {/* top nav bar */}
      {NavTop && (
        <div className={`${layout.navTop} md:hidden sticky top-0 z-10`}>
          <NavTop />
        </div>
      )}

      {/* body */}
      <div className={`${layout.body} overflow-y-auto`}>{children}</div>

      {/* nav bottom */}
      <div className={`${layout.navBottom} md:hidden`}>
        <NavBottom />
      </div>
    </main>
  );
};

export default DesktopLayout;
