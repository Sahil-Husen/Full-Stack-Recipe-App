// Layout.jsx
import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet /> {/* This is where your routed content will appear */}
      <Footer />
    </>
  );
};

export default Layout;
