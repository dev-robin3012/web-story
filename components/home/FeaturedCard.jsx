import Link from "next/link";
import React from "react";

const FeaturedCard = ({ story }) => {
  return (
    <div className="relative h-72">
      <div
        className={`absolute h-full w-full rounded-lg shadow-lg`}
        style={{
          background: `url(${story.featuredImage.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute rounded-lg bg-center opacity-40 bg-gradient-to-b  from-[#444] via-[#111] to-black w-full h-full" />
      <div className="text-white px-3 absolute w-full h-full flex flex-col items-center justify-end gap-3 pb-7 text-center">
        <time className="drop-shadow-md font-semibold text-sm">Oct 20, 2022</time>
        <h3 className="text-2xl font-semibold line-clamp-2 cursor-pointer transition-all duration-300 text-shadow hover:text-[#6B58FA]">
          <Link href={`story/${story.slug}`}>{story.title}</Link>
        </h3>
        <h5 className="text-base drop-shadow-md">{story.author.name}</h5>
      </div>
    </div>
  );
};

export default FeaturedCard;
