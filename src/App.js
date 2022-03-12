import "./App.scss";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/home/Homepage";
import ShopPage from "./pages/productPage/ShopPage";
import LookBookPage from "./pages/LookBookPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AccountPage";
import ProductDetails from "./pages/productPage/ProductDetails";
import CartPage from "./pages/cart/CartPage";
import { GlobalStyles } from "./GlobalStyles";
import { ProductDescription } from "./components/productDetails/ProductDescription";
import { ProductReviews } from "./components/productDetails/ProductReviews";
import { Context } from "./Context";
import Notfoundpage from "./pages/notfound/Notfoundpage";
import BlogPage from "./pages/blog/BlogPage";

function App() {
  // туво буде спливаюче вікно
  useEffect(() => {}, []);
  //! context
  const [context, setContext] = useState(0);
  return (
    <Context.Provider value={[context, setContext]}>
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
    </Context.Provider>
  );
}

export default App;
