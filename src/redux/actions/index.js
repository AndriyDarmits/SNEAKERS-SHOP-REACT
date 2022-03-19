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

export default {
  setProductFromApi,
  addProductToCart,
  updateProducts,
  addProductToWishlist,
  updateProductsCart,
  deleteProductsFromCart,
  deleteProductFromWishlist,
};
