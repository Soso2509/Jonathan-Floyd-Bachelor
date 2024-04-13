import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "concert" });

  return {
    props:{
      conserts:res.items
    }
  }
}

export default function Index({conserts}) {
  console.log(conserts)
  return <div className="recipe-list">
    {conserts.map(consert =>(
      <div key ={consert.sys.id}>
        <h1>{consert.fields.eventName}</h1>
       {consert.fields.eventDate}
        </div>
    ))}
  </div>;
}
