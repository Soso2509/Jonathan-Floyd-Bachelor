import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";
import FooterImg from "./images/Mobil_bakgrunn4.png"
import Image from "next/image";


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