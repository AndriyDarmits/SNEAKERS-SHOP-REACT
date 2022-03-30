import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageNavigation from "../components/pageNavigation/PageNavigation";
import { LayoutWrapper } from "../reusable-styles/reusableStyle";

export const Layout2 = () => {
  return (
    <LayoutWrapper>
      <Header />
      <PageNavigation />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};
