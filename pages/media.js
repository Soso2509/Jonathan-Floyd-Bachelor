import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const bilder = await client.getEntries({ content_type: "gallery" });
  const video = await client.getEntries({ content_type: "videos" });

  return {
    props: {
      gallery: bilder.items,
      videos: video.items,
    },
    revalidate: 1
  };
}

export default function Media() {

  return (
    <>
      <div className="mediaContainer">
        <h1>Video</h1>

        <h1>Bilder</h1>
      </div>
    </>
  );
}
