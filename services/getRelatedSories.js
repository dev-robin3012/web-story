import { gql } from "@apollo/client";
import client from "./client";

const getRelatedStories = async ({ slug, categories }) => {
  try {
    const { data } = await client.query({
      query: gql`
        query relatedStories {
          posts(
              where: { 
                slug_not: "${slug}",
                AND: { categories_some: { slug_in: [${categories}] } } 
              },
              orderBy: createdAt_DESC,
              first: 3
            ) {
              title
              categories {
                name
              }
          }
        }
      `,
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log("related stories fetching err:", error);
  }
};

export default getRelatedStories;
