import { gql } from "@apollo/client";
import client from "./client";

const getCategories = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query categories {
          categories {
            id
            name
            slug
          }
        }
      `,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCategories;
