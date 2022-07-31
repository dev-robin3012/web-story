import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b shadow sticky top-0 bg-white z-50">
      <div className="container mx-auto py-2 laptop:px-5 mobile:px-3 flex items-center justify-between">
        <Image src="/logo.png" alt="logo" height={50} width={200} />
        <button className="bg-[#6B58FA] py-2 px-5 text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
