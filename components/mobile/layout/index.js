import NavBottom from "./NavBottom";
function MobileLayout({ children, TopNav, showBottomNav = true }) {
  return (
    <main className=" text-black bg-white dark:bg-black dark:text-white">
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
