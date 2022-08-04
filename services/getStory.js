import { gql } from "@apollo/client";
import client from "./client";

const getStory = async (slug) => {
  try {
    const { data } = await client.query({
      query: gql`
        query webStory {
          post(where: { slug: "${slug}" }) {
            id
            title
            content {
              markdown
            }
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
              slug
            }
            createdAt
          }
        }
      `,
    });
    return data;
  } catch (error) {
    console.log("single post fetch err:", error);
  }
};

export default getStory;
