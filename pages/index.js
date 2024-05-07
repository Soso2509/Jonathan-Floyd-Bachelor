import { createClient } from "contentful";
import Conserts from "../components/Conserts";
import Merch from "../components/Merch";
import Spotify from "../components/Spotify";
import Instagram from "../components/Instagram";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const konsert = await client.getEntries({ content_type: "concert" });
  const merch = await client.getEntries({ content_type: "merchItem" });

  return {
    props: {
      conserts: konsert.items,
      merchitems: merch.items,
    },
  };
}

export default function Index({ conserts, merchitems }) {
  console.log(merchitems);
  return (
    <>
      <h1>Live dates</h1>
      <div className="Window">

        {conserts.map((consert) => (
          <Conserts key={consert.sys.id} consert={consert} />
        ))}
      </div>

      <h1>Merch</h1>
      <div className="Window">
        {merchitems.map((item) => (
          <Merch key={item.sys.id} item={item} />
        ))}
      </div>

      <h1>Music</h1>
      <div className="SpotifyContainer">
        <Spotify />
      </div>

      <h1>Instagram</h1>
      <div className="InstaContiner">
        <Instagram />
      </div>
    </>
  )
}
