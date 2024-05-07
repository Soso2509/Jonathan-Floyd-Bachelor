import Image from "next/image";
import SoMeLinker from "./SoMeLinker";
import HeaderImg from "./images/Space-heads.jpeg"
import HeaderLogo from "./images/Logo-stor.png"

export default function Header() {
  return <>
  <div className="headerConteiner">
    <div className="headerElementer">
    <Image
      src={HeaderLogo}
      className="HeaderLogo"
      alt="Header Logo som sier Jonatan Floyd"
    />
      <SoMeLinker />
    </div>
  </div>

  
  <Image
    src={HeaderImg}
    className="HeaderImg"
    alt="Header Img"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
  />
 </>;
}
