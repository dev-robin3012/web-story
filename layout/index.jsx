import React, { createContext, useState } from "react";
import AuthModal from "../components/AuthModal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const ModalContext = createContext();

const Layout = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      <Navbar />
      <AuthModal />
      <main className="bg-gradient-to-r from-[#614385] via-[#9168c2] to-[#41B4FB]">{children}</main>
      <Footer />
    </ModalContext.Provider>
  );
};

export default Layout;
