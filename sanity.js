import sanityClient, { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = SanityClient({
  projectId: "k027eqo4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
