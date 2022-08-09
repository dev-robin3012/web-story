import Image from "next/image";
import React from "react";

const CommentCard = ({ data }) => {
  return (
    <div className="flex gap-3 shadow-md rounded-lg p-3">
      <div className="h-12 w-12 mobile:w-16 relative border rounded-full overflow-hidden">
        <Image src="/dummy-visitor.png" alt="" layout="fill" />
      </div>
      <div>
        <h4 className="text-xl">{data.name}</h4>
        <p>{data.comment}</p>
        <div className="mt-3 space-x-5">
          <span className="cursor-pointer">Like</span> <span className="cursor-pointer">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
