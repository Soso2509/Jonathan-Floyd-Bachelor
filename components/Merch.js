import Image from "next/image";
import NewWindowIcon from "./SoMeIcons/icons8-open-in-new-window-16.png";

export default function Merch({ item }) {
  const { itemName, itemLink, merchPicture, pictureAltText } = item.fields;

  return (
    <div className="boxContainer">
      <div className="featured">
        <Image
          className="boxMedia"
          src={"https:" + merchPicture.fields.file.url}
          alt={pictureAltText}
          width={merchPicture.fields.file.details.image.width}
          height={merchPicture.fields.file.details.image.height}
        />
      </div>
      <div className="boxContent">
        <h4>{itemName}</h4>
      </div>
      <a className="button" href={itemLink} target="_blank">
        Buy Here
        <Image src={NewWindowIcon} alt="Opens link in new window" />
      </a>
    </div>
  );
}
