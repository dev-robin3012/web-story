import { gql } from "@apollo/client";
import client from "./client";

const putComment = async (props) => {
  const { name, email, comment, slug } = props;

  try {
    await client.mutate({
      mutation: gql`
        mutation putComment {
          createComment(
            data: {
              name:"${name}",
              email:"${email}",
              comment:"${comment}",
              post: { connect: {slug:"${slug}"} }
              }) {
              createdAt
              name
          }
        }
      `,
    });
    return { status: 201 };
  } catch (error) {
    console.log(error);
  }
};

export default putComment;
