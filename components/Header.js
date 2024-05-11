import Image from "next/image";
import SoMeLinker from "./SoMeLinker";
import HeaderLogo from "./images/Logo-stor.png";

export default function Header({ header }) {
  const { headerImage, headerAltText } = header[0].fields;

  return (
    <>
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
        src={"https:" + headerImage.fields.file.url}
        className="HeaderImg"
        alt={headerAltText}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </>
  );
}
