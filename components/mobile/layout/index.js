import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    //TODO check necessitty of height declaration
    <main className="min-h-screen">
      {/* Top Navigation */}
      {TopNav && <TopNav />}

      {/* Page Content */}
      <section
        className={`max-w-3xl mx-auto ${
          showBottomNav ? "pb-[44px]" : "pb-[10px]"
        }`}
      >
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}

export default MobileLayout;
