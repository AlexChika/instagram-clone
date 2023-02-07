import NavBottom from "./NavBottom";
import SideBar from "./SideBar";
function MobileLayout({ children, NavTop, showBottomNav = true }) {
  return (
    <>
      {/*   ------ Top Navigation ... nav bar ----- */}
      {NavTop && (
        <div className={`md:hidden sticky left-0 right-0 top-0 z-10`}>
          <NavTop />
        </div>
      )}

      <main className={`flex flex-col md:flex-row`}>
        {/* ${layout.sideBar} */}
        <SideBar />

        {/* Page Content */}
        <div className={`w-full`}>{children}</div>
      </main>

      {/* bottom Navigation */}
      {showBottomNav && (
        <div className={`md:hidden`}>
          <NavBottom />
        </div>
      )}
    </>
  );
}

export default MobileLayout;
