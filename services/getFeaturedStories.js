import { gql } from "@apollo/client";
import client from "./client";

const getFeaturedStories = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query featuredStories {
          posts(where: { featured: true }, orderBy: publishedAt_DESC, first: 6) {
            id
            slug
            title
            featuredImage {
              url
            }
            author {
              name
              avatar {
                url
              }
            }
            createdAt
          }
        }
      `,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getFeaturedStories;
