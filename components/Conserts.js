import Image from "next/image";
import moment from "moment";
import "moment/locale/en-gb";
import NewWindowIcon from './SoMeIcons/icons8-open-in-new-window-16.png'


export default function Conserts({ consert }) {
  const {
    eventName,
    eventDate,
    eventLocationLink,
    eventPlaceName,
    eventHeader,
    pictureAltText,
    ticketsLink,
  } = consert.fields;

  moment.locale("en-gb");
  return (
    <div className="boxContainer">
      <div className="featured">
        <Image
          className="boxMedia"
          src={"https:" + eventHeader.fields.file.url}
          alt={pictureAltText}
          width={eventHeader.fields.file.details.image.width}
          height={eventHeader.fields.file.details.image.height}
        />
      </div>
      <div className="boxContent">
        <h4>{eventName}</h4>
        <p>
          At <a href={eventLocationLink} target="_blank">{eventPlaceName}</a>
        </p>
        <p>{moment(eventDate).format("LLL")}</p>
      </div>
        <a className="button" href={ticketsLink} target="_blank">Tickets
        <Image
            src={NewWindowIcon}
            alt="Opens link in new window"
          />
        </a>
    </div>
  );
}


