import React from "react";
import Topnav from "./Navigation/TopNav";
import Mainnav from "./Navigation/MainNav";
import Topline from "./Navigation/TopLine";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    // This layout use for all pages to render Navbar
    <>
      <Topline></Topline>
      <Topnav></Topnav>
      <Mainnav></Mainnav>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};