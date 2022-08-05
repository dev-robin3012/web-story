import Image from "next/image";
import React from "react";
import Button from "../Button";

const AuthorCard = ({ author }) => {
  return (
    <>
      <div className="absolute top-5 w-full flex justify-center">
        <Image
          src={author.avatar.url}
          alt={author.name}
          unoptimized
          height="70px"
          width="70px"
          className="align-middle rounded-full"
        />
      </div>
      <div className="bg-black bg-opacity-30 text-white p-5 rounded-lg w-full text-center pt-10 shadow-lg">
        <h3 className="text-xl font-semibold text-shadow">{author.name}</h3>
        <p className="mb-3">{author.bio}</p>
        <Button label="Follow" variant="cancel" />
      </div>
    </>
  );
};

export default AuthorCard;
