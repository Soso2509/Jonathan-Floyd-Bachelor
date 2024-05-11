import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";


export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className="layout">
      {pathname == "/" ? (
        <>

        </>
      ) : (
        <>
          <Navbar />
          <HamburgerMenu />
        </>
      )}
      <div>{children}</div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}