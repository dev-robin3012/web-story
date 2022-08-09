import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../layout";
import putComment from "../../services/putComment";
import Button from "../Button";

const CommentForm = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const [authenticated, setAuthenticated] = useState(null);

  const router = useRouter();
  const form = useRef({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = authenticated;
    const data = { name, email, comment: form.current.comment.value, slug: router.query.slug };

    const { status } = await putComment(data);
    if (status === 201) {
      form.current.comment.value = "";
      alert("Your comment is waiting for admin's permission. Thank's for your opinion.");
    }
  };

  useEffect(() => {
    const visitor = localStorage.getItem("web_story:user");
    setAuthenticated(JSON.parse(visitor));
  }, [openModal]);

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-3 pt-3">
      <textarea
        readOnly={!authenticated}
        name="comment"
        id="comment"
        rows="5"
        placeholder="Add your opinion"
        className={`w-full border rounded-lg p-3 text-xl ${
          !authenticated ? "outline-none" : "outline-blue-600"
        }`}
        onClick={() => !authenticated && setOpenModal(true)}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};

export default CommentForm;
