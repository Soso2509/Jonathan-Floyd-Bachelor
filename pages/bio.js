import { createClient } from "contentful";
import Image from "next/image";
import SoMeLinker from "../components/SoMeLinker";


import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "biografi" });

  return {
    props: {
      bio: res.items,
    },
    revalidate: 1,
  };
}

export default function Bio({ bio }) {
  console.log(bio[0]);

  const { bioPhoto, title, slug, bioText } = bio[0].fields;
  return (
    <>
      <div className="bioContainer">
        <Image
          className="boxMedia bioImg"
          src={"https:" + bioPhoto.fields.file.url}
          width={bioPhoto.fields.file.details.image.width}
          height={bioPhoto.fields.file.details.image.height}
        />
        <div className="bioContent">
          <h1>{title}</h1>
          <SoMeLinker/>
          <div>{documentToReactComponents(bioText)}</div>
        </div>
      </div>
    </>
  );
}
