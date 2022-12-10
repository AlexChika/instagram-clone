import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main>
      {/* Top Navigation */}
      <TopNav />

      {/* Page Content */}
      <section
        className={
          showBottomNav
            ? "pb-[54px] max-w-3xl mx-auto"
            : "pb-[10px] max-w-3xl mx-auto"
        }
      >
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}

export default MobileLayout;
