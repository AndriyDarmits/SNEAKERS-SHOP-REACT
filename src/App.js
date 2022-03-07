import "./App.scss";
import React, { useEffect } from "react";
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
import ProductDetails from "./pages/productPage/ProductDetails";
import { GlobalStyles } from "./GlobalStyles";
import { ProductDescription } from "./components/productDetails/ProductDescription";
import { ProductReviews } from "./components/productDetails/ProductReviews";

function App() {
  // туво буде спливаюче вікно
  useEffect(() => {
    console.log("[tkjj");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="products" element={<ShopPage />} />
          <Route path="products/:id" element={<ProductDetails />}>
            <Route index element={<ProductDescription />} />
            <Route path="reviews" element={<ProductReviews />} />
          </Route>
          <Route path="blog" element={<BlogPage />} />
          <Route path="lookbook" element={<LookBookPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
