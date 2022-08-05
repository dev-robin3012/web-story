import React, { useContext, useRef } from "react";
import { ModalContext } from "../../layout";
import Button from "../Button";

const CommentForm = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const form = useRef("");

  let loggedUser;
  if (typeof window !== "undefined") {
    loggedUser = localStorage.getItem("user");
  }

  const handleSubmit = async (e) => {
    console.log(form.current.comment.value);
    e.preventDefault();
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-3 pt-3">
      <textarea
        name="comment"
        id="comment"
        rows="5"
        placeholder="Add your opinion"
        className="w-full border rounded-lg p-3 text-xl outline-blue-600"
        onClick={() => !loggedUser && setOpenModal(true)}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};

export default CommentForm;
