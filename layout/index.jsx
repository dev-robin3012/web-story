import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-r from-[#614385] via-[#9168c2] to-[#41B4FB]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
