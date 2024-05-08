import Image from "next/image";
import NewWindowIcon from './SoMeIcons/icons8-open-in-new-window-16.png'


export default function Merch({ item }) {
  const { itemName, itemLink, merchPicture } = item.fields;

  return (
    <div className="boxContainer">
      
      <div className="featured">
        {merchPicture.fields.file.contentType == "video/mp4" ? (
          <iframe
            className="boxMedia"
            src={"https:" + merchPicture.fields.file.url+"?autostart=false"}
            frameborder="0"
            width="50%"
            height="500"
            title={merchPicture.fields.description}
            autoplay="off"
          />
        ) : (
          <Image
            className="boxMedia merchMedia"
            src={"https:" + merchPicture.fields.file.url}
            alt={merchPicture.fields.description}
            width={merchPicture.fields.file.details.image.width}
            height={merchPicture.fields.file.details.image.height}
          />
        )}
      </div>
      <div className="boxContent">
        <h4>{itemName}</h4>
      </div>
        <a className="button" href={itemLink}>Buy here<Image
            src={NewWindowIcon}
            alt="Opens link in new window"
          /></a>
    </div>
  );
}
