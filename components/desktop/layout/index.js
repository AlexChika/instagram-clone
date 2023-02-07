import layout from "./layout.module.css";
import NavBottom from "./NavBottom";
import SideBar from "./SideBar";

const DesktopLayout = ({ children, NavTop, showBottomNav = true }) => {
  return (
    <>
      {/* top nav bar */}
      {NavTop && (
        <div
          className={`${layout.navTop} sticky md:hidden right-0 left-0 top-0 z-10`}
        >
          <NavTop />
        </div>
      )}

      <main className="flex flex-col md:flex-row">
        <SideBar />

        <div className={`w-full`}>{children}</div>
      </main>

      {/* nav bottom */}
      {showBottomNav && (
        <div className={`md:hidden`}>
          <NavBottom />
        </div>
      )}
    </>
  );
};

export default DesktopLayout;
