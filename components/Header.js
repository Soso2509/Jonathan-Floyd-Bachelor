import Image from "next/image";
import SoMeLinker from "./SoMeLinker";
import HeaderImg from "./images/Space-heads.jpeg"

export default function Header() {
  return <header>
  <h1>Jonathan Floyd</h1>
  <SoMeLinker />
  <Image
    src={HeaderImg}
    className="HeaderImg"
    alt="Header Img"
  />
 </header>;
}
