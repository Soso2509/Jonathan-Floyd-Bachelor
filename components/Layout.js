import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <Navbar />

      <div className="page-content">{children}</div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
