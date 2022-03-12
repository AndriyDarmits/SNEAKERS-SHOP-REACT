import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageNavigation from "../components/pageNavigation/PageNavigation";

export const Layout2 = () => {
  return (
    <div>
      <Header />
      <PageNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};
