import Image from "next/image";
import SoMeLinker from "./SoMeLinker";
import HeaderLogo from "../public/images/Logo-stor.png";

export default function Header({ header }) {
  const { headerImage, headerAltText, slug } = header[0].fields;

  return (
    <>
      <div className="headerConteiner">
        <div className="headerElementer">
          <Image
            src={HeaderLogo}
            className="HeaderLogo"
            alt="Header Logo som sier Jonatan Floyd"
            loading="eager"
          />
          <SoMeLinker />
        </div>
      </div>

      <Image
        key={slug}
        src={"https:" + headerImage.fields.file.url}
        className="HeaderImg"
        alt={headerAltText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="eager"
      />
    </>
  );
}
