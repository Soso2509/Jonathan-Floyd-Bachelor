import Image from "next/image";


export default function Conserts({ consert }) {
  const {
    eventName,
    eventDate,
    eventLocationLink,
    eventPlaceName,
    eventHeader,
    ticketsLink,
  } = consert.fields;

 
  return (
    <div>
      <div className="featured">
        <Image
          className="consertImage"
          src={"https:" + eventHeader.fields.file.url}
          width={eventHeader.fields.file.details.image.width}
          height={eventHeader.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <h4>{eventName}</h4>
        <p>
          At <a href={eventLocationLink}>{eventPlaceName}</a>
        </p>
        <p>{moment(eventDate).format("LLL")}</p>
        <a href={ticketsLink}>Tickets</a>
      </div>
    </div>
  );
}