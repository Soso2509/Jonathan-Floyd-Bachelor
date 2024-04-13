import { createClient } from "contentful";
import Conserts from "../components/Conserts";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "concert" });

  return {
    props: {
      conserts: res.items,
    },
  };
}

export default function Index({ conserts }) {
  return (
    <>
      <div className="ConsertWindow">
        {conserts.map((consert) => (
          <Conserts key={consert.sys.id} consert={consert} />
        ))}
      </div>
    </>
  );
}
