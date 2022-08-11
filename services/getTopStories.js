import { gql } from "@apollo/client";
import client from "./client";

const getTopStories = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query storyWithComments {
          posts(where: { comments_some: {} }) {
            title
            slug
            featuredImage {
              url
            }
            author {
              name
            }
            comments {
              comment
            }
            createdAt
          }
        }
      `,
    });

    const mostCommented = await data.posts
      .slice()
      .sort((a, b) => {
        return b.comments.length - a.comments.length;
      })
      .slice(0, 2);
    return mostCommented;
  } catch (error) {
    console.log(error);
  }
};

export default getTopStories;
