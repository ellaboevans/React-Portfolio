import { createClient } from "@sanity/client";

export default createClient({
  projectId: "b25ey7x1",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
