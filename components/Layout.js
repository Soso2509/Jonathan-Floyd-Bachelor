import { usePathname } from "next/navigation";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <div className="layout">
      {pathname == "/" ? (
        <>
          <header>
            <Header />
          </header>
          {/* <Navbar /> */}
          <HamburgerMenu />
        </>
      ) : (
        //<Navbar />
        <HamburgerMenu />
      )}
      <div className="page-content">{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}