import Image from "next/image";
import React from "react";

const CommentCard = () => {
  return (
    <div className="flex gap-3 shadow-md rounded-lg p-3">
      <div className="h-12 w-12 mobile:w-16 relative border rounded-full overflow-hidden">
        <Image src="https://media.graphassets.com/RO9TYdSaQEmjISJdknWc" alt="" layout="fill" />
      </div>
      <div>
        <h4 className="text-xl">Person Name</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ex!</p>
        <div className="mt-3 space-x-5">
          <span className="cursor-pointer">Like</span> <span className="cursor-pointer">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
