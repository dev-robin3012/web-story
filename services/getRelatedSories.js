import { gql } from "@apollo/client";
import client from "./client";

const getRelatedStories = async () => {
  const slug = "why-you-shouldnt-always-use-usestate";
  const categories = ["react", "javascript"];

  try {
    const { data } = await client.query({
      query: gql`
            query relatedStories{
                posts(
                  where: {slug_not: "${slug}", 
                  AND: {categories_some: {slug_in: ${categories}}}}
                ) {
                  title
                  categories {
                    name
                  }
                }
              }`,
    });
    console.log(data);
  } catch (error) {
    console.log("related stories fetching err:", error);
  }
};

export default getRelatedStories;
