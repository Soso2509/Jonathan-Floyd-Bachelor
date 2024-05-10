
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
  return (
    <>
      <div className="mediaContainer">
        <h1>Video</h1>
        {videos.map((mv) => (
          <div key={mv.sys.id}>
            <iframe
              width="560"
              height="315"
              src={mv.fields.videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}

        <div className="indexElement">
          <h1>Bilder</h1>
          {pictures.map((pic) => (
            <div key={pic.fields.slug}>
              <Image
                className="boxMedia"
                src={"https:" + pic.fields.picture.fields.file.url}
                alt={pic.fields.altText}
                width={pic.fields.picture.fields.file.details.image.width}
                height={pic.fields.picture.fields.file.details.image.height}
              />
              <p>Picture taken by {pic.fields.photographer}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}
