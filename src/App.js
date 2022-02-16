import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/productPage/ShopPage";
import BlogPage from "./pages/BlogPage";
import LookBookPage from "./pages/LookBookPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import Notfoundpage from "./pages/Notfoundpage";
import ProductItem from "./pages/productPage/ProductItem";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="pruducts" element={<ShopPage />} />
          <Route path="products/:itemId" element={<ProductItem />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="lookbook" element={<LookBookPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
