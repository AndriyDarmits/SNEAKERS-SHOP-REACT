import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import { ProductReducer } from "./productsReducer";
import { WishlistReducer } from "./wishlistReducer";

export const reducer = combineReducers({
  products: ProductReducer,
  productsCart: CartReducer,
  wishlist: WishlistReducer,
});
