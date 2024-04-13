import { createClient } from "contentful";
import Image from "next/image";
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
  };
}

export default function Bio({ bio }) {
  console.log(bio[0]);

  const { bioPhoto, title, slug, bioText } = bio[0].fields;
  return (
    <div>
      <Image
        className="consertImage"
        src={"https:" + bioPhoto.fields.file.url}
        width={bioPhoto.fields.file.details.image.width}
        height={bioPhoto.fields.file.details.image.height}
      />
      <h2>{title}</h2>
      <div>{documentToReactComponents(bioText)}</div>
    </div>
  );
}
