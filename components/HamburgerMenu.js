import React, { useState } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/Ikon_Thick_T_turquice_Liten.png";
import NewWindowIcon from "../public/SoMeIcons/icons8-open-in-new-window-16.png";

const HamburgerMenu = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visable");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="navContainer disable-hamburger">
      <nav className="burger">
        <div className="logo">
          <Link href="/">
            <Image
              src={Logo}
              className="LogoFull"
              alt="Jonathan floyd's F icon"
            />
          </Link>
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="hamburgerLinks">
          <Link href="/">Home</Link>

          <Link href="/bio" onClick={updateMenu}>
            Bio
          </Link>

          <Link href="/media" onClick={updateMenu}>
            Media
          </Link>

          <div>
            <a
              href={"https://unitedstage.no/artister/jonathan-floyd/"}
              target="_blank"
              className="NewWindowIcon"
              onClick={updateMenu}
            >
              Booking
              <Image src={NewWindowIcon} alt="Opens link in new window" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
