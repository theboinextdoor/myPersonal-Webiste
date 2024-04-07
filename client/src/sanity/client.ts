import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: "qj0gc8qy",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const builder = imageUrlBuilder(client)
export function urlFor(source:any) {
  return builder.image(source)
}

// export async function getStaticProps(){
//   const project = await client.fetch('*[_type == "project"]');
//   return { props: { project } };
// };



