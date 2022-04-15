import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";
import { ProductReducer } from "./productsReducer";
import { WishlistReducer } from "./wishlistReducer";
import { ProductViewReducer } from "./productsViewRducer";
import { UserDataReducer } from "./userDataReducer";

export const reducer = combineReducers({
  products: ProductReducer,
  productsCart: CartReducer,
  wishlist: WishlistReducer,
  productsView: ProductViewReducer,
  userData: UserDataReducer,
});
