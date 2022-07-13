import {
  setProductFromApi,
  updateProducts,
  resetIsInShoppingCartProdutsProperty,
} from "./productsAction";
import {
  addProductToCart,
  updateProductsCart,
  deleteProductsFromCart,
  clearAllProductsFromCart,
} from "./productsCartAction";
import {
  addProductToWishlist,
  deleteProductFromWishlist,
} from "./productsWishListAction";
import { changeLayout } from "./productsViewAction";
import { setUser, clearUser } from "./userDataAction";
import { setShowSidebar } from "./showSidebarAction";
import { setResetBodyOverflow } from "./bodyOverflowAction";
import { activateDiscount, deactivateDiscount } from "./discountAction";
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
  clearAllProductsFromCart,
  setShowSidebar,
  activateDiscount,
  deactivateDiscount,
  resetIsInShoppingCartProdutsProperty,
  setResetBodyOverflow,
};
