import { gql } from "@apollo/client";
import client from "./client";

const getComments = async (slug) => {
  try {
    const { data } = await client.query({
      query: gql`
      query comments {
        comments(where: {post_some: {slug_in:"${slug}"}}) {
                comment
                createdAt
                name
            }
        }`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getComments;
