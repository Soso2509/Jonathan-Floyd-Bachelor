import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/Ikon_Thick_T_turquice_Liten.png";
import NewWindowIcon from "../public/SoMeIcons/icons8-open-in-new-window-16.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="disable-navbar navBarContainer">
      <div className="logo">
        <Link href="/">
          {pathname == "/" ? (
            <Image
              src={Logo}
              className="LogoIcon"
              alt="Jonathan floyd's F icon"
              loading="eager"
            />
          ) : (
            <Image
              src={Logo}
              className="LogoIcon activeLogo"
              alt="Jonathan floyd's F icon"
              loading="eager"
            />
          )}
        </Link>
      </div>
      <div className="navPages">
        {pathname == "/bio" ? (
          <Link className="active" href="/bio">
            Bio
          </Link>
        ) : (
          <Link href="/bio">Bio</Link>
        )}
        {pathname == "/media" ? (
          <Link className="active" href="/media">
            Media
          </Link>
        ) : (
          <Link href="/media">Media</Link>
        )}
        <div>
          <a
            href={"https://unitedstage.no/artister/jonathan-floyd/"}
            target="_blank"
            className="NewWindowIcon"
          >
            Booking
            <Image 
            src={NewWindowIcon} 
            alt="Opens link in new window"
            loading="eager" />
          </a>
        </div>
      </div>
    </nav>
  );
}
