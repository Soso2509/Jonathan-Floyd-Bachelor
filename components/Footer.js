import Link from "next/link";
import SoMeLinker from "./SoMeLinker";

export default function Footer() {
  return <>
    <SoMeLinker />
    <p className="icon8">Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    <p>©2024JonathanFloyd</p>
    <p><Link href="/privacy" target="_blank">Privacy policy</Link> & <Link href="/accessibility" target="_blank">Accessibility statement</Link></p>
  </>;
}
