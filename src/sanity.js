import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_Project_ID,
  dataset: process.env.REACT_APP_DATA_SET,
  useCdn: true,
});
