import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main className="h-screen">
      {/* Top Navigation */}
      {TopNav && <TopNav />}

      {/* Page Content */}
      <section className={`max-w-3xl mx-auto min-h-[100vh-44px] `}>
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}
// ${
//           showBottomNav ? "pb-[44px]" : "pb-[10px]"
//         }

export default MobileLayout;
