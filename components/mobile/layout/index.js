import NavBottom from "./NavBottom";
function MobileLayout({ children, top, showBottomNav = true }) {
  return (
    <main>
      {/* Top Navigation */}
      {top}

      {/* Page Content */}
      <section className={showBottomNav ? "pb-[54px]" : "pb-[10px]"}>
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}

export default MobileLayout;
