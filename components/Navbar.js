import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <h1>Jonathan Floyd</h1>
        </Link>
      </div>
      <Link href="/bio">Bio</Link>
      <Link href="/media">Media</Link>
      <a
        href={"https://unitedstage.no/artister/jonathan-floyd/"}
        target="_blank"
      >
        Booking
      </a>
    </nav>
  );
}
