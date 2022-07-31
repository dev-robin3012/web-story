import { gql } from "@apollo/client";
import client from "./client";

export const getPosts = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query MyQuery {
          posts {
            id
            title
            featured
            slug
            featuredImage {
              url
            }
            author {
              name
              avatar {
                url
              }
            }
            categories {
              name
              slug
            }
            content {
              markdown
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
