import Image from "next/image";
import Link from "next/link";
import Logo from '../components/images/Ikon_Thick_W.png'

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
          src={Logo}
          className="LogoIcon"
          alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="navPages">
        <Link href="/bio">Bio</Link>
      <Link href="/media">Media</Link>
      <a
        href={"https://unitedstage.no/artister/jonathan-floyd/"}
        target="_blank"
      >
        Booking
      </a>
      </div>
      
    </nav>
  );
}
