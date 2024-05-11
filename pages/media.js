
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
      <div className="mediaContainer page-content">
        <div className="videoConteiner">
          <h1>Video</h1>
          <div className=" videoGalleri">
            {videos.map((mv, i) => (
            <div key={mv.sys.id} className={`video${i} video`}>
              <iframe
                className="YTvideo"
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
          </div>
          
        </div>
        

        <div className="indexElement">
          <h1>Bilder</h1>
          <div className="photoGalleri">
            {pictures.map((pic) => (
              <div className="GalleryItem" key={pic.fields.slug}>
                <Image
                  className="boxMedia"
                  src={"https:" + pic.fields.picture.fields.file.url}
                  alt={pic.fields.altText}
                  width={pic.fields.picture.fields.file.details.image.width}
                  height={pic.fields.picture.fields.file.details.image.height}
                />
                <div className="ImgText"><p>Picture taken by {pic.fields.photographer}</p></div>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </>
  );
}
