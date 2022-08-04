import { gql } from "@apollo/client";
import client from "./client";

const getStoriesByCategory = async (category) => {
  try {
    const { data } = await client.query({
      query: gql`
            query webStories {
                posts(where: {categories_some: {slug: "${category}"}}) {
                    id
                    title
                    slug
                    featuredImage {
                        url
                    }
                    author{
                        name
                        avatar{
                            url
                        }
                    }
                    createdAt
                }
            }`,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getStoriesByCategory;
