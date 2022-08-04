import { gql } from "@apollo/client";
import client from "./client";

const getStories = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query webStories {
          posts(orderBy: createdAt_DESC, first: 10) {
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

export default getStories;
