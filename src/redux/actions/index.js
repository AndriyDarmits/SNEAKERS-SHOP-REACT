import { setProductFromApi, updateProducts } from "./productsAction";
import {
  addProductToCart,
  updateProductsCart,
  deleteProductsFromCart,
} from "./productsCartAction";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
} from "./productsWishListAction";

import { changeLayout } from "./productsViewAction";
export default {
  setProductFromApi,
  addProductToCart,
  updateProducts,
  addProductToWishlist,
  updateProductsCart,
  deleteProductsFromCart,
  deleteProductFromWishlist,
  changeLayout,
};
