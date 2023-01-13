import NavBottom from "./NavBottom";
import layout from "./layout.module.css";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  console.log(TopNav);
  return (
    <main className="h-screen">
      {/* Top Navigation */}
      {TopNav && <TopNav />}

      {/* Page Content */}
      <section
        className={`${
          TopNav ? "" : "h-[calc(100vh-44px)] relative"
        } red max-w-3xl mx-auto`}
      >
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
