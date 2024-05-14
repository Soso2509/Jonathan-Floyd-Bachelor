import { createClient } from "contentful";
import Image from "next/image";
import SoMeLinker from "../components/SoMeLinker";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Meta from "../components/Meta";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "biografi" });
  const head = await client.getEntries({ content_type: "header" });

  return {
    props: {
      bio: res.items,
      headers: head.items,
    },
    revalidate: 1,
  };
}

export default function Bio({ bio, headers }) {
  console.log(bio[0]);

  const { bioPhoto, pictureAltText, title, bioText } = bio[0].fields;
  return (
    <div className="bioPageConteiner page-content">
      <Meta header={headers} page=" - Bio" />
      <div className="bioContainer">
        <div className="grid-item">
          <Image
            className=" bioImg"
            src={"https:" + bioPhoto.fields.file.url}
            alt={pictureAltText}
            width={bioPhoto.fields.file.details.image.width}
            height={bioPhoto.fields.file.details.image.height}
          />
        </div>

        <div className="bioContent grid-item">
          <h1>{title}</h1>
          <SoMeLinker />
          <div>{documentToReactComponents(bioText)}</div>
        </div>
      </div>
    </div>
  );
}
