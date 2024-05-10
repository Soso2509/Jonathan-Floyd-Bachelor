import Image from "next/image";
import tiktok from "./SoMeIcons/icons8-tiktok-32.png"
import instagram from "./SoMeIcons/icons8-instagram-32.png"
import facebook from "./SoMeIcons/icons8-facebook-32.png"
import spotify from "./SoMeIcons/icons8-spotify-32.png"
import youtube from "./SoMeIcons/icons8-youtube-32.png"
import itunes from "./SoMeIcons/icons8-itunes-32.png"

export default function SoMeLinker() {
  return (
    <div className="someLinker">
      <a href="https://www.instagram.com/jonathanfloydofficial/" target="_blank">
        <Image
          src={instagram}
          className="SoMeIcon"
          alt="Instagram Icon/link"/>
      </a>

      <a href="https://www.facebook.com/jonathanfloydofficial/" target="_blank">
        <Image
          src={facebook}
          className="SoMeIcon"
          alt="Facebook Icon/link"/>
      </a>

      <a href="https://www.tiktok.com/@jonathanfloydofficial" target="_blank">
        <Image
          src={tiktok}
          className="SoMeIcon"
          alt="Tiktok Icon/link"/>
      </a>
      <a href="https://www.youtube.com/@jonathanfloydofficial" target="_blank">
        <Image
          src={youtube}
          className="SoMeIcon"
          alt="YouTube Icon/link"/>
      </a>

      <a href="https://open.spotify.com/artist/11kCkdHKt7MYt0nkyj8XjP?si=f0t8OQfLRm-dfvq5pvVvcA&nd=1&dlsi=fc2bb008f29c4284"  target="_blank">
        <Image
          src={spotify}
          className="SoMeIcon"
          alt="Spotify Icon/link"/>
      </a>

      <a href="https://music.apple.com/no/artist/jonathan-floyd/335319803" target="_blank">
      <Image
          src={itunes}
          className="SoMeIcon"
          alt="iTunes Icon/link"/>
      </a>
    </div>
  );
}
