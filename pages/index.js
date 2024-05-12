import { createClient } from "contentful";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";

import Conserts from "../components/Conserts";
import Merch from "../components/Merch";
import Spotify from "../components/Spotify";
import Instagram from "../components/Instagram";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const konsert = await client.getEntries({
    content_type: "concert",
    order: "fields.eventDate",
  }); //For decending order:'-fields.eventDate'
  const merch = await client.getEntries({ content_type: "merchItem" });
  const head = await client.getEntries({ content_type: "header" });

  return {
    props: {
      conserts: konsert.items,
      merchitems: merch.items,
      headers: head.items,
    },
    revalidate: 1,
  };
}

export default function Index({ conserts, merchitems, headers }) {
  return (
    <>
        <header>
          <Header header={headers} />
        </header>
        <Navbar />
        <HamburgerMenu />
      
        
      <div className="page-content">
        <div className="">
          <h1>Live dates</h1>
          {conserts.length == 0 ? (
            <h2>More to come</h2>
          ) : (
            <div className="photoGalleri Window">
              {conserts.map((consert) => (
                <Conserts key={consert.sys.id} consert={consert} />
              ))}
            </div>
          )}
        </div>

        <div className="indexElement">
          <h1>Merch</h1>
          {merchitems.length == 0 ? (
            <h2>More to come</h2>
          ) : (
            <div className="photoGalleri Window">
              {merchitems.map((item) => (
                <Merch key={item.sys.id} item={item} />
              ))}
            </div>
          )}
        </div>

        <div className="indexElement">
          <h1>Music</h1>
          <div className="SpotifyContainer">
            <Spotify />
          </div>
        </div>

        <div className="indexElement">
          <h1>Instagram</h1>
          <div className="InstaContiner">
            <Instagram />
          </div>
        </div>
      </div>
      
    </>
  );
}
