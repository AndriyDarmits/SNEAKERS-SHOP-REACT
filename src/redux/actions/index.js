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
import { setUser, clearUser } from "./userDataAction";
import { setShowSidebar } from "./showSidebarAction";
export default {
  setProductFromApi,
  addProductToCart,
  updateProducts,
  addProductToWishlist,
  updateProductsCart,
  deleteProductsFromCart,
  deleteProductFromWishlist,
  changeLayout,
  setUser,
  clearUser,
  setShowSidebar,
};
