import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import WhatsAppButton from "../misc/WhatsAppButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Layout;
