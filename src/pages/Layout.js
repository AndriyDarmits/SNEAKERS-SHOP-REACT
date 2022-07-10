import React from "react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { LayoutWrapper } from "../reusable-styles/reusableStyle";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};
