import { createClient } from "contentful";
import Image from "next/image";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const pic = await client.getEntries({ content_type: "pictures" });
  const vid = await client.getEntries({
    content_type: "videos",
    order: "-fields.datePublished",
  }); //For decending order:'-fields.eventDate'

  return {
    props: {
      pictures: pic.items,
      videos: vid.items,
    },
    revalidate: 1,
  };
}

export default function Media({ videos, pictures }) {
  console.log(pictures);
  //console.log(pictures);

  return (
    <>
      <div className="bioContainer">
        <h1>Video</h1>

        <h1>Bilder</h1>
        {pictures.map((pic) => (
          <div key={pic.fields.slug} >
            <Image
              new
              className="boxMedia"
              src={"https:" + pic.fields.picture.fields.file.url}
              alt={pic.fields.alttext}
              width={pic.fields.picture.fields.file.details.image.width}
              height={pic.fields.picture.fields.file.details.image.height}
            />
          </div>
        ))}
      </div>
    </>
  );
}
