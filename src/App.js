import "./App.scss";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/home/Homepage";
import LookBookPage from "./pages/LookBookPage";
import SearchPage from "./pages/SearchPage";
import AccountPage from "./pages/AccountPage";
import ProductDetails from "./pages/productPage/ProductDetails";
import { ContactUsPage } from "./pages/contactUs/ContactUsPage";
import CartPage from "./pages/cart/CartPage";
import { GlobalStyles } from "./GlobalStyles";
import { ProductDescription } from "./components/productDetails/ProductDescription";
import { ProductReviews } from "./components/productDetails/ProductReviews";
import { Context } from "./Context";
import Notfoundpage from "./pages/notfound/Notfoundpage";
import BlogPage from "./pages/blog/BlogPage";
import { Layout2 } from "./pages/Layout2";
import { fetchData } from "./helper";
import { useDispatch } from "react-redux";
import actions from "./redux/actions/index";
import { WishlistPage } from "./pages/wishlistPage/WishlistPage";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("https://mocki.io/v1/7d2ddf44-4043-4d06-adf6-7789bfecefae").then(
      (data) => {
        const additionalPropertyAdded = data.map((el) => {
          //initial rate, avaliable in wishlist, product reviews
          el.rate = 0;
          el.isInWishList = false;
          el.isInShoppingCart = false;
          el.reviews = [
            /*   {
              rate: null,
              reviewText: "",
              name: "",
              email: "",
            }, */
          ];
          return el;
        });
        // dispatch data to redux store
        dispatch(actions.setProductFromApi(additionalPropertyAdded));
      }
    );
  }, []);
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
            <Route path="products/:id" element={<ProductDetails />}>
              <Route index element={<ProductDescription />} />
              <Route path="reviews" element={<ProductReviews />} />
            </Route>
            <Route path="search" element={<SearchPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/" element={<Layout2 />}>
            <Route path="products" element={<ShopPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="lookbook" element={<LookBookPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="contactUs" element={<ContactUsPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
