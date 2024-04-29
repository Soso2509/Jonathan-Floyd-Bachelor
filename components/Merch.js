import Image from "next/image";

export default function Merch({ item }) {
  const { itemName, itemLink, merchPicture } = item.fields;

  return (
    <div>
      <div className="featured">
        {merchPicture.fields.file.contentType == "video/mp4" ? (
          <iframe
            src={"https:" + merchPicture.fields.file.url+"?autostart=false"}
            frameborder="0"
            width="50%"
            height="500"
            title={merchPicture.fields.description}
            autoplay="off"
          />
        ) : (
          <Image
            className="merchImage"
            src={"https:" + merchPicture.fields.file.url}
            alt={merchPicture.fields.description}
            width={merchPicture.fields.file.details.image.width}
            height={merchPicture.fields.file.details.image.height}
          />
        )}
      </div>
      <div className="content">
        <h4>{itemName}</h4>
        <a href={itemLink}>Buy Here</a>
      </div>
    </div>
  );
}
