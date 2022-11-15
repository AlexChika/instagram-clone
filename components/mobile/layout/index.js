import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main className="max-w-3xl mx-auto">
      {/* Top Navigation */}
      <TopNav />

      {/* Page Content */}
      <section className={showBottomNav ? "pb-[54px] px-3" : "pb-[10px] px-3"}>
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}

export default MobileLayout;
