import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-[#614385] to-[#516395] ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
