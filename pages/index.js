import { createClient } from "contentful";
import Conserts from "../components/Conserts";
import Spotify from "../components/Spotify";
import Header from "../components/Header";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "concert" });

  return {
    props: {
      conserts: res.items,
    },
  };
}

export default function Index({ conserts }) {
  return (
    <>
      <header>
        <Header />
      </header>

      <h1>Concerts</h1>
      <div className="ConsertWindow">
        {conserts.map((consert) => (
          <Conserts key={consert.sys.id} consert={consert} />
        ))}
      </div>

      <h1>Music</h1>
      <div className="SpotifyContainer">
        <Spotify />
      </div>
    </>
  );
}


