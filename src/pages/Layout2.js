import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";
import PageNavigation from "../components/pageNavigation/PageNavigation";
import { LayoutWrapper } from "../reusable-styles/reusableStyle";

export const Layout2 = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <PageNavigation />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};
