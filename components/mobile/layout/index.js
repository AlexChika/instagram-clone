import NavBottom from "./NavBottom";
import layout from "./layout.module.css";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main>
      {/* Top Navigation */}
      {TopNav && <TopNav />}

      {/* Page Content */}
      <section
        className={`relative top-0 bottom-0 right-0 left-0 max-w-3xl mx-auto`}
      >
        {children}
      </section>

      {/* bottom Navigation */}
      {showBottomNav && <NavBottom />}
    </main>
  );
}

export default MobileLayout;
