import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b shadow sticky top-0 bg-white">
      <div className="container mx-auto py-2 px-2 md:px-0 flex items-center justify-between">
        <Image src="/logo.png" alt="logo" height={50} width={200} />

        <button className="bg-[#6B58FA] py-2 px-5 text-white">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
