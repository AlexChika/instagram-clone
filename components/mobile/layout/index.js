import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main>
      {/* Top Navigation */}
      <TopNav />

      {/* Page Content */}
      <section
        className={`max-w-3xl mx-auto ${
          showBottomNav ? "pb-[54px]" : "pb-[10px]"
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
