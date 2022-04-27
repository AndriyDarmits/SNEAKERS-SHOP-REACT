import "./App.scss";
import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Homepage from "./pages/home/Homepage";
import LookBookPage from "./pages/lookbook/LookBookPage";
import SearchPage from "./pages/searchPage/SearchPage";
import AccountPage from "./pages/accountPage/AccountPage";
import ProductDetails from "./pages/productPage/ProductDetails";
import { ContactUsPage } from "./pages/contactUs/ContactUsPage";
import CartPage from "./pages/cart/CartPage";
import { ProductDescription } from "./components/productDetails/productDescription/ProductDescription";
import { ProductReviews } from "./components/productDetails/productReviews/ProductReviews";
import Notfoundpage from "./pages/notfound/Notfoundpage";
import BlogPage from "./pages/blog/BlogPage";
import { Layout2 } from "./pages/Layout2";
import { useDispatch } from "react-redux";
import { WishlistPage } from "./pages/wishlistPage/WishlistPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { LoginPage } from "./pages/login/LoginPage";
import { BlogPageDetails } from "./pages/blogPageDetails/BlogPageDetails";
import { setDataFromApiThunk } from "./redux/thunk";
import { ReqireAuth } from "./hoc/ReqireAuth";
import { RequireFilledCart } from "./hoc/RequireFilledCart";
const ShopPage = lazy(() => import("./pages/shopPage/ShopPage"));
function App() {
  const dispatch = useDispatch();
  // dispatch data from API
  useEffect(() => {
    dispatch(setDataFromApiThunk());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="products/:id" element={<ProductDetails />}>
            <Route index element={<ProductDescription />} />
            <Route path="reviews" element={<ProductReviews />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="blog/:id" element={<BlogPageDetails />} />
        </Route>
        <Route element={<Layout2 />}>
          <Route
            path="products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShopPage />
              </Suspense>
            }
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="lookbook" element={<LookBookPage />} />
          {/* private route */}
          <Route
            path="account"
            element={
              <ReqireAuth>
                <AccountPage />
              </ReqireAuth>
            }
          />
          <Route path="contactUs" element={<ContactUsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route
            path="checkout"
            element={
              <RequireFilledCart>
                <CheckoutPage />
              </RequireFilledCart>
            }
          />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
