import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "biografi" });

  return {
    props:{
      bio:res.items
    }
  }
}


export default function Bio({bio}) {
  console.log(bio[0])

  const { photo, title, slug, biografi } =
    bio[0].fields;
    return (
      <div className="recipe-list">
        {title}
      </div>
    )
  }