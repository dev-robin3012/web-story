import Link from "next/link";
import React from "react";

const FeaturedCard = () => {
  return (
    <div className="relative h-72">
      <div className="absolute h-full w-full rounded-lg shadow-md bg-cover bg-no-repeat bg-center bg-[url('https://www.webconfs.com/wp-content/uploads/2020/07/12825450d41e4fd6d2482c0920b7fe75.jpg')]" />
      <div className="absolute rounded-lg bg-center opacity-40 bg-gradient-to-b  from-[#444] via-[#111] to-black w-full h-full" />
      <div className="text-white px-3 absolute w-full h-full flex flex-col items-center justify-end gap-3 pb-7 text-center">
        <time className="drop-shadow-md font-semibold text-sm">Oct 20, 2022</time>
        <h3 className="text-2xl font-semibold line-clamp-2 cursor-pointer transition-all duration-300 hover:text-shadow ">
          <Link href="#blog-id">
            useId(), the new hook introduced in React 18 introduced in React 18
          </Link>
        </h3>
        <h5 className="text-base drop-shadow-md">Robin Dev</h5>
      </div>
    </div>
  );
};

export default FeaturedCard;
