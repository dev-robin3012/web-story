import Link from "next/link";
import React from "react";

const Button = ({ label, to = "", children, type, onClick, variant }) => (
  <button
    className={`py-1.5 px-5 ${
      variant === "cancel" ? "bg-gray-500" : "bg-gradient-to-r from-[#516395] to-[#614385]"
    }  text-white text-sm rounded-md`}
    type={type}
    onClick={onClick}
  >
    {to ? <Link href={to}>{label || children}</Link> : label || children}
  </button>
);

export default Button;
