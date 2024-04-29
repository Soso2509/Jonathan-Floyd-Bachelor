import Image from "next/image";
import moment from "moment";
import 'moment/locale/en-gb';

export default function Conserts({ consert }) {
  const {
    eventName,
    eventDate,
    eventTime,
    slug,
    eventHeader,
    eventLocation,
    ticketsLink,
  } = consert.fields;

  moment.locale('en-gb')
  return (
    <div className="concertContainer">
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
        <p className="consertDate">{moment(eventDate).format("LLL")}</p>
        <a href={ticketsLink}>Tickets</a>
      </div>
    </div>
  );
}


