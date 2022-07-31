import Link from "next/link";
import React from "react";

const Button = ({ label, to, children }) => (
  <button className="py-1.5 px-5 bg-gradient-to-r from-[#516395] to-[#614385]  text-white text-sm rounded-md">
    <Link href={to}>{label || children}</Link>
  </button>
);

export default Button;
