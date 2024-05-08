import Link from "next/link";
import SoMeLinker from "./SoMeLinker";

export default function Footer() {
  return <>
    <SoMeLinker />
    <p className="icon8">Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    <p>©JonathanFloyd</p>
    <p><Link href="/privacy">Privacy policy</Link> & <Link href="/accessibility">Accessibility statement</Link></p>
  </>;
}
