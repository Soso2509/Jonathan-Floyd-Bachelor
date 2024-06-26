import Image from "next/image";
import tiktok from "../public/SoMeIcons/icons8-tiktok-96.png";
import instagram from "../public/SoMeIcons/icons8-instagram-96.png";
import facebook from "../public/SoMeIcons/icons8-facebook-96.png";
import spotify from "../public/SoMeIcons/icons8-spotify-96.png";
import youtube from "../public/SoMeIcons/icons8-youtube-96.png";
import itunes from "../public/SoMeIcons/icons8-itunes-96.png";

export default function SoMeLinker() {
  return (
    <div className="someLinker">
      <a
        href="https://www.instagram.com/jonathanfloydofficial/"
        target="_blank"
      >
        <Image src={instagram} className="SoMeIcon" alt="Instagram Icon/link" loading="eager"/>
      </a>

      <a href="https://www.facebook.com/jonathanfloydofficial/" target="_blank">
        <Image src={facebook} className="SoMeIcon" alt="Facebook Icon/link" loading="eager"/>
      </a>

      <a href="https://www.tiktok.com/@jonathanfloydofficial" target="_blank">
        <Image src={tiktok} className="SoMeIcon" alt="Tiktok Icon/link" loading="eager"/>
      </a>
      <a href="https://www.youtube.com/@jonathanfloydofficial" target="_blank">
        <Image src={youtube} className="SoMeIcon" alt="YouTube Icon/link" loading="eager"/>
      </a>

      <a
        href="https://open.spotify.com/artist/11kCkdHKt7MYt0nkyj8XjP?si=f0t8OQfLRm-dfvq5pvVvcA&nd=1&dlsi=fc2bb008f29c4284"
        target="_blank"
      >
        <Image src={spotify} className="SoMeIcon" alt="Spotify Icon/link" loading="eager"/>
      </a>

      <a
        href="https://music.apple.com/no/artist/jonathan-floyd/335319803"
        target="_blank"
      >
        <Image src={itunes} className="SoMeIcon" alt="iTunes Icon/link" loading="eager"/>
      </a>
    </div>
  );
}
